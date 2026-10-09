# Replaceables

Replaceables are placeholders in a text that are replaced with a value when the text is used. They let you write one template (a mail, a filter, a widget setting) that works for any user, record or date.

## Syntax
The syntax for a replaceable is `[variableName]`, always with square brackets, for example `[itemid]`, `[user.name]` or `[relation12.title]`.

Which replaceables are available depends on where you use them. Most of them work everywhere (mail templates, actions, automations, forms). Widgets have their own rules, see [In Widgets](#in-widgets).

## Commands

### User Related
| Command | Description | Return Example |
|---------|-------------|--------------|
| `[user]` | A reference to the current user, in the format stored in user fields. | user_1 |
| `[userid]` | The current user, in the format stored in user fields. **In widget settings it is the plain number** (see [In Widgets](#in-widgets)). | user_1 |
| `[usergroups]` | The groups the current user belongs to on this site, as a comma-separated list. Use it with `IN` or `FIND_IN_GROUP` in queries. | group_1,group_2 |
| `[user.name]` | The name of the current user. | John Doe |
| `[user.email]` | The email of the current user. | johndoe@flowagent.nu |
| `[user.workphonenumber]` | The work phone number of the current user. | 12345678 |
| `[user.personalphonenumber]` | The personal phone number of the current user. | 12345678 |
| `[user.gps]` | The GPS location of the current user. | 12.345678,12.345678 |

### Item Related
| Command | Description | Return Example |
|---------|-------------|--------------|
| `[itemid]` | The id of the current record (the record the action, form or page is about). | 1 |
| `[parentitemid]` | The id of the parent record, where there is one (for example a form opened from another record). | 2 |
| `[item.title]` | The title of the current record. | Item 1 |
| `[item.type]` | The item type name of the current record. | Task |
| `[item.<field key name>]` or `[item.cf<field id>]` | The value of a field of the current record, as it is shown (option names, user names). | Done |
| `[item.cfr<field id>]` | The value of a field of the current record as it is stored (e.g. `option_5`). | option_5 |

### Date and Time Related
| Command | Description | Return Example |
|---------|-------------|--------------|
| `[datenow]` | The current date. | 2021-01-01 |
| `[timenow]` | The current time. | 12:00 |
| `[datetimenow]` | The current date and time. | 2021-01-01 12:00 |
| `[datetomorrow]` | The date of tomorrow. | 2021-01-02 |
| `[dateyesterday]` | The date of yesterday. | 2020-12-31 |
| `[dateweek]` | The date of Monday in the current week. | 2020-12-28 |
| `[datemonth]` | The date of the first day of the current month. | 2021-01-01 |

**Date offsets:** add `+N` or `-N` (days) inside the brackets of any of these, e.g. `[datenow-7]` (one week ago), `[datenow+30]`, `[dateweek+7]` (Monday next week), `[datemonth-1]` (last day of the previous month). Dates are returned as `YYYY-MM-DD`, the format dates are stored in, so they can be compared directly in queries.

### POST Values
Post commands start with `[post.` and end with `]`. They read the values a user has just filled in a form; the part after the dot is the id of the form field.

| Command | Description | Return Example |
|---------|-------------|--------------|
| `[post.key]` | The value of the form field. | value |
| `[postoption.key]` | For a select field: the chosen option(s) without the `option_` prefix. | 12 |
| `[postlabel.key]` | For a select field: the label(s) of the chosen option(s). | Done |

### Relation Values
Relation commands start with `[relation`, the **module relation id**, a `.`, what you want, and end with `]`. They read from the record related to the current record through that relation (parent or child, the first one found).

| Command | Description | Return Example |
|---------|-------------|--------------|
| `[relation1.id]` | The ID of the related item. | 1 |
| `[relation1.title]` | The title of the related item. | Item 1 |
| `[relation1.type]` | The name of the type of the related item. | type1 |
| `[relation1.cf1234]` | The value of field 1234 in the related item, as it is shown. | value |
| `[relation1.cfr1234]` | The value of field 1234 in the related item, as it is stored. | option_5 |
| `[relation1.<field key name>]` | The value of a field in the related item, by key name. | value |

### Item Values
Item commands start with `[item`, the **record id**, a `.`, what you want, and end with `]`. They read from that specific record.

| Command | Description | Return Example |
|---------|-------------|--------------|
| `[item1.id]` | The ID of the item. | 1 |
| `[item1.title]` | The title of the item. | Item 1 |
| `[item1.type]` | The name of the type of the item. | type1 |
| `[item1.<field key name>]` | The value of the field in the item, as it is shown. | value |
| `[item1.<field key name>.raw]` | The value of the field in the item, as it is stored. | option_5 |

Use field **key names** here; field ids (`cf1234`) do not work with `[item<id>.…]`.

### Conditions
Show text only when a condition is true:

```
[if post.12 = 'option_3']Please handle this today.[else]Please handle this within a week.[/if]
```

- The `[else]` part is optional. Conditions can be nested.
- Comparisons: `=`, `!=`, `<>`, `>`, `>=`, `<`, `<=`, `like`, `not like`, `in`, `not in`, `is empty`, `is not empty`.
- Combine with ` and ` / ` or ` (`and` is evaluated before `or`; parentheses are not supported).
- `anynotempty(a, b, ...)` is true when at least one value is filled; `allnotempty(a, b, ...)` when all are.
- Values can be text in quotes (`'Done'` or `"Done"`), numbers, `true`/`false`, or form values `post.<id>` / `postlabel.<id>`.
- User and date placeholders (such as `[user.name]` or `[datenow]`) are filled in before the condition is checked, so you can use them in a condition. Relation, item and power search values are filled in afterwards: use them in the text, not in the condition. In widgets, the placeholders listed under [In all widget settings](#in-all-widget-settings) (such as `[cfN]`) can also be used in conditions.
- Wrap placeholders that can be empty in quotes, e.g. `[if '[cf12]' is empty]`, so an empty value still gives a valid condition.

### Power Search
Power Search commands start with `[powersearch.` and end with `]`, with the key name of a list (power search) in between.

| Command | Description |
|---------|-------------|
| `[powersearch.keyname]` | A table with the results of the list. |
| `[powersearch.keyname.count]` | The number of records in the list. |
| `[powersearch.keyname.sum:fieldkeyname]` | The sum of a field over the list. |
| `[powersearch.keyname.avg:fieldkeyname]` | The average of a field. |
| `[powersearch.keyname.min:fieldkeyname]` / `.max:` | The smallest / largest value of a field. |

Sums, averages and minimum/maximum are formatted like `1.234,56`. If the list is not found, the text `POWERSEARCH_NOT_FOUND` is shown.

### Price Group Command
:::note
This command is not public available yet.
:::

### Strip Option
This is not a replaceable, but an ability to strip the `option_` part of a returned value.

Example: Where `[item1.keyname.raw]` returns `option_1234`, you can use `[item1.keyname.raw]|strip_option` to return `1234`.

Everything after the `|` is removed from the text, so put `|strip_option` at the very end and use it only once.

## In Widgets

Replaceables can be used in widget settings too. A widget is filled in two steps, so it matters where you use them.

### In all widget settings
These are replaced in **every** setting of every widget type (titles, filters, columns, URLs, tap actions, relations, ...):

| Command | In widgets becomes |
|---|---|
| `[itemid]` | The id of the record the page shows. |
| `[moduleid]` | The module id of the record the page shows. |
| `[user]` | The current user as stored in user fields, e.g. `user_48`. |
| `[userid]` | The current user's id as a **plain number**, e.g. `48`. Use `[user]` to compare with user fields. |
| `[relationN]` | The id of the record related to the page record through module relation N, or `0` when there is none. |
| `[relationN.title]` | The title of that related record (empty when there is none). |
| `[cfN]` | The value of field N of the page record. Select and user fields give the shown text (option name, user name); dates and numbers give the stored value. |
| `[relationN.cfM]` | The value of field M of the record related through relation N. |
| `[itemname]` | The title of the page record. |

### Only in filter values, calculated columns and Smart Text
These are only replaced in the **values** of a `query` (and in lookups of [calculated columns](/docs/JSON/json-columns.md#calculated-static-columns)), in the `value` of calculated columns and in the text of a Smart Text widget:

- user details: `[usergroups]`, `[user.name]`, `[user.email]`, ...
- dates: `[datenow]`, `[datenow-7]`, `[dateweek]`, `[datemonth]`, `[timenow]`, ... (with offsets)
- conditions: `[if …]…[else]…[/if]`
- relation and record values by key name: `[relationN.<field key name>]`, `[relationN.id]`, `[relationN.type]`, `[itemNNN.<field key name>]`, `[itemNNN.title]`
- list results: `[powersearch.keyname]`, `[powersearch.keyname.count]`, `[powersearch.keyname.sum:fieldkeyname]`, ...
- calculated columns also support `[row.<field key name>]`.

They are **not** replaced in other settings such as labels, icons, iframe/image sources, tap actions or prefixes.

### Rules
- **Write placeholders inside quotes** in the JSON: `["module168Item.id", "=", "[itemid]"]`, not `["module168Item.id", "=", [itemid]]`. A placeholder outside quotes makes the JSON invalid when it is empty, and the whole configuration is then ignored.
- **On dashboards there is no page record**, so `[itemid]` and `[moduleid]` are empty and `[relationN]`, `[cfN]` and `[itemname]` give no value. Filters that use them find nothing on a dashboard.
- Values inserted by `[cfN]` and `[itemname]` have quotes removed, so they cannot break the JSON.
- Inside JSON, write text in `[if …]` conditions with single quotes (`'Done'`), or escape double quotes as `\"`.
- In calculated columns, use key names (`[row.salesfield_price]`) to read values of the **row**. `[itemid]`, `[cfN]` and `[x.cfN]` are filled with the page record before the rows are processed.

### Example
A Table widget on a Project page that lists the open tasks of the project's customer that are assigned to the current user, due within a week:

```json
{
  "label": "Tasks for [relation12.title]",
  "moduleid": 169,
  "relations": {
    "module50": { "parent": 50, "child": 169 }
  },
  "query": [
    ["module50Item.id", "=", "[relation12]"],
    ["tasksfield_responsible", "=", "[user]"],
    ["tasksfield_deadline", "<=", "[datenow+7]"]
  ]
}
```

## Tips
- Use replaceables to personalize messages and automate workflows.
- Always use square brackets for variable names.
- Use field key names where you can; they are easier to read and survive copying a solution to another site.

## Related Links
- [Custom Mail Templates](custom-mail-templates.md)
- [Automations](../sites/automations.md)
- [JSON Queries](/docs/JSON/json-query.md)
- [JSON Columns](/docs/JSON/json-columns.md)
- [Common Widget Properties](/docs/modules/widgets/common-properties.md)

---

For more on dynamic content, see the Automations and Mail Templates documentation.
