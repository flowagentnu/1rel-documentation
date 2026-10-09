# JSON Queries

A guide to the filter language used to select records in FlowAgent.

## When to Use
Use this page when you write a `query` (filter) in JSON, for example:
- the `query` of a widget (Table, Details, Count, Sum, Average, Chart, Maps, Gantt, ...),
- the lookups (`items`) of a calculated column,
- filters of lists (power searches) and of lookups in actions.

## How It Works
- A query is a list of **conditions**. Each condition is a small list: `[key, operator, value]` or `[key, operator, value, "AND" | "OR"]`.
- Conditions are read from top to bottom. The optional fourth element (`"AND"` or `"OR"`) joins the condition to the **next** one. Without it, `AND` is used.
- The connector must be written in **upper case**. `"or"` in lower case is treated as `AND`.
- `AND` binds tighter than `OR`, as in normal logic: `a OR b AND c` means `a OR (b AND c)`. Use groups to change this.
- Groups are made with separate `["("]` and `[")"]` markers (not with nested lists). To join a group to the next condition with `OR`, write `[")", "OR"]`. The connector *before* a group is the fourth element of the condition before `["("]`.
- Every `(` must have a matching `)`. If they do not match, the query finds no records.
- In widgets, the query is always combined with the module filter (see [moduleid](#moduleid-always-set-it)) and with the user's read permissions, so users only see records they are allowed to see.

```
query      = [ condition, condition, ... ]
condition  = [ key, operator, value ]
           | [ key, operator, value, "AND" | "OR" ]   ← joins to the NEXT element
group      = ["("]  ...conditions...  [")"]  or  [")", "OR"]
```

## Usage Example
**Records of type 10 whose field 151 is "abc":**
```json
{
  "moduleid": 41,
  "query": [
    ["cf151", "=", "abc"],
    ["moduleitemtype_id", "=", 10]
  ]
}
```

**Open or waiting tasks, assigned to me or to one of my groups, changed in the last 30 days:**
```json
{
  "moduleid": 12,
  "query": [
    ["tasksfield_status", "IN", ["option_12", "option_13"]],
    ["("],
      ["cf45", "=", "[user]", "OR"],
      ["cf46", "FIND_IN_GROUP", "[usergroups]"],
    [")"],
    ["cf50", ">=", "[datenow-30]"]
  ]
}
```
This reads as: status is 12 or 13 **AND** (cf45 is me **OR** cf46 is one of my groups) **AND** cf50 is within the last 30 days.

**Records where the field is empty:**
```json
"query": [
  ["("],
    ["cf20", "IS", "null", "OR"],
    ["cf20", "=", ""],
  [")"]
]
```

## Keys (first element)

| Key | Meaning |
|---|---|
| `cf<id>`, e.g. `cf151` | The value of the field with that id. `cf151.string` and the plain number `151` mean the same. |
| Field key name, e.g. `projectsfield_status` | The value of the field with that key name. Only works for key names that contain `field_` (as the key names Flow creates do). For other key names, use `cf<id>`. |
| `id` | The record's id. |
| `module_id` | The module the record belongs to. |
| `moduleitemtype_id` | The record's item type (id). |
| `rowOrder` | The manual sort order of the record. |
| `module<N>Item.id` (also `.moduleitemtype_id`, `.module_id`) | The related record joined by the relation named `module<N>` in [`relations`](json-relations.md), e.g. `module168Item.id`. Without that relation the condition finds nothing. |
| `module<N>.parent_id`, `module<N>.child_id` | The parent / child record id of the relation link named `module<N>`. |
| `module<N>Mit.name`, `module<N>Mit.id` | The item type (name or id) of records of module N. Only available when at least one field of module N is used as a column or in a filter. |

A field that does not exist (or is archived) makes its condition match nothing.

Fields of a related module (for example `cf300` where field 300 belongs to module 77) are read from the related record when the widget has a relation named `module77`. See [JSON Relations](json-relations.md).

## Operators (second element)

Operators are not case-sensitive.

| Operator | Meaning | Value |
|---|---|---|
| `=` | Equal to | text or number |
| `!=`, `<>` | Not equal to. Records without a value are not included. | text or number |
| `>`, `>=`, `<`, `<=` | Greater / less than. Numbers are compared as numbers; dates (`YYYY-MM-DD`) and text as text. | text, number or date |
| `LIKE` | Matches a text pattern. Add the wildcards yourself: `%` = any text, `_` = one character. | e.g. `"%john%"` |
| `NOT LIKE` | Does not match the pattern. | e.g. `"%@test.com"` |
| `IN` | The value is one of a list. | a list `["option_1", "option_2"]` or a comma-separated text `"option_1,option_2"` |
| `NOT IN` | The value is none of the list. | as `IN` |
| `IS` | Use with `"null"` to find records **without** a value. | `"null"` |
| `IS NOT` | Use with `"null"` to find records **with** a value. | `"null"` |
| `REGEXP`, `NOT REGEXP` | Matches (or does not match) a regular expression. | e.g. `"^[0-9]{4}$"` |
| `FIND_IN_SET` | The field holds a comma-separated list (multi-select, several users) that **contains** the value. | one value, e.g. `"[user]"` or `"option_5"` |
| `FIND_IN_GROUP` | The field's value is **one of** the values in a comma-separated list. | a list as text, e.g. `"[usergroups]"` |

`FIND_IN_SET` and `FIND_IN_GROUP` work in opposite directions: `FIND_IN_SET` looks for one value inside a list stored in the field; `FIND_IN_GROUP` checks if the single value stored in the field is in the list you give.

:::caution
Do not use the operators `IS NULL`, `IS NOT NULL` or `BETWEEN`. They do not work in queries. Use `["cf20", "IS", "null"]` / `["cf20", "IS NOT", "null"]` instead, and two conditions with `>=` and `<=` instead of `BETWEEN`.
:::

## Values (third element)

- A value is a text, a number, or (for `IN` / `NOT IN`) a list.
- Values are compared with the value **as it is stored**, not as it is shown:

| Field type | Stored as | Example |
|---|---|---|
| Select, radio, multi-select | `option_<option id>` (multi-select: comma-separated) | `"option_12"` |
| User | `user_<user id>` | `"user_48"` or `"[user]"` |
| User group | `group_<group id>` | `"group_3"` |
| Date | `YYYY-MM-DD` | `"2026-01-31"` or `"[datenow]"` |
| Number | the number | `100` |

- [Replaceables](/docs/misc/replaceables.md) can be used in values, e.g. `"[itemid]"`, `"[user]"`, `"[usergroups]"`, `"[datenow-7]"`, `"[relation12]"`. Write them inside quotes.
- `"null"` stands for "no value" (use it with `IS` / `IS NOT`).

## moduleid: always set it

In widgets, set `moduleid` to the id of the module whose records you want:

```json
{
  "moduleid": 171,
  "query": [["cf300", "=", "option_2"]]
}
```

- `moduleid` automatically adds a condition "module is 171" in front of your query, so you do not have to write `["module_id", "=", 171]` yourself.
- It also decides which module's read permissions are applied.
- Without `moduleid`, a query on a field could in principle find records of **any** module. Always set it, also when the query seems specific enough.
- The module condition is joined to your query with `AND`, but `AND` binds tighter than `OR`. So if your query uses `OR` outside a group, wrap those conditions in `["("]` ... `[")"]`. Otherwise the part after `OR` is not limited to the module:

  ```json
  "query": [
    ["("],
      ["cf45", "=", "[user]", "OR"],
      ["cf46", "=", "[user]"],
    [")"]
  ]
  ```
- `"moduleid": "[moduleid]"` uses the module of the record the page shows.
- Some widgets need a query to show anything (Count, Sum, Average, Chart). `moduleid` alone is enough: it then shows all records of that module.
- A Details widget without `query` shows the record of the page.

To show only records that are related to the record on the page, see [JSON Relations](json-relations.md#filter-to-records-related-to-the-page-record).

## Tips
- Use key names (`projectsfield_status`) when you can: they are easier to read than `cf` ids and stay the same when a solution is copied to another site. Ids (`moduleid`, relation ids, `cf<id>`) are not translated when a solution is copied.
- Text comparisons are not case-sensitive.
- Check the connector: only `"AND"` and `"OR"` in upper case are used.
- Use groups whenever you mix `AND` and `OR`.

## Related Links
- [JSON Relations](json-relations.md)
- [JSON Columns](json-columns.md)
- [JSON Actions](json-actions.md)
- [Replaceables](/docs/misc/replaceables.md)
- [Common Widget Properties](/docs/modules/widgets/common-properties.md)
