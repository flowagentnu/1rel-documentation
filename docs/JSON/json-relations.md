# JSON Relations

A guide to using relations for accessing data from other modules in FlowAgent.

## When to Use
Use this page when you want to show or filter on data from related modules in widgets (Table, Details, Count, Sum, Average, Chart, Maps, Gantt), in lookups of calculated columns, or in lists.

## How It Works
- Relations are defined in the `relations` object. Each entry links the records you list (the module in `moduleid`) to records of another module through a module relation.
- **Name each entry `module<id>`, where `<id>` is the id of the module you want to fetch from**, e.g. `module43`. Field values of module 43 (columns and filters) are only read from the related record when the entry has exactly this name.
- After that, you can:
  - add fields of the related module as [columns](json-columns.md),
  - filter on them in the [query](json-query.md), using `cf<id>` or the field key name,
  - filter on the related record itself with `module<id>Item.id` (or `.moduleitemtype_id`),
  - chain the relation on to a further module.
- A relation alone does **not** filter the list. Records without a related record are still shown (with empty related fields). Add a condition to the `query` to filter.
- If a record has several related records through the same relation, it can be shown once per related record.

### Options & Parameters

| Key | Required | Description |
|---|---|---|
| `parent` | yes | Id of the **parent** module of the module relation. |
| `child` | yes | Id of the **child** module of the module relation. |
| `relationid` | recommended | Id of the module relation. If left out, the relation between `parent` and `child` is looked up; set it when there is more than one relation between the two modules. An empty value (`""`) matches nothing. |
| `relationtype` | no | Which side the related record is on: `parent`, `child` or `self`. Default: `parent` when the entry is named `module<parent>`, otherwise `child`. So with the naming rule above you rarely need it. |
| `parent_id` | no | Fixes the parent side of the link: a record id (e.g. `"[itemid]"`) or the id of another relation's record (e.g. `"module77Item.id"`), to chain relations. |
| `child_id` | no | Fixes the child side of the link, in the same way. |

**`relationtype` in detail:**
- `parent` – the related record is the **parent**; the records you list are its children.
- `child` – the related record is a **child**; the records you list are its parents.
- `self` – for a relation within one module: links like `child`, but field values are still read from the listed record. Use it only to filter with `module<id>Item.id`.

When you add a field from another module in the form editor, the matching relation entry is added for you.

## Examples

### Example 1: Simple relation example
```json
{
  "moduleid": 41,
  "relations": {
    "module43": {
      "parent": 43,
      "child": 41,
      "relationid": 22
    }
  }
}
```
In this relation configuration, the parent module is module 43 and the child module is module 41. The relationid is set to 22, the specific relation to use if several relations exist between these two modules. The widget lists records of module 41 and can show fields of their parent record in module 43.

### Example 2: Get relation's relation
```json
{
  "relations": {
    "module77": {
      "parent": 77,
      "child": 123,
      "relationid": 133
    },
    "module75": {
      "parent": 75,
      "child": 77,
      "relationid": 79,
      "child_id": "module77Item.id"
    }
  }
}
```
This example shows how to chain relations. The widget lists records of module 123. `module77` gets their parent in module 77, and `module75` gets the parent (module 75) **of that module 77 record**, because `child_id` points to `module77Item.id`. List a chained relation after the relation it depends on.

### Example 3: Get Relations relation
Suppose you have the following modules and relations:

| Module Id | Name     |
|-----------|----------|
| 33        | Lokation |
| 34        | Udstyr   |
| 35        | Booking  |

When an Udstyr is Booked, a relation is created between Udstyr->Booking and between Lokation->Booking

| Relation Id | Parent Module | Child Module |
|-------------|---------------|--------------|
| 21          | 34 Udstyr     | 35 Booking   |
| 22          | 33 Lokation   | 35 Booking   |

To show a table displaying all Booked udstyr with their booking details and the name of the lokation (the widget lists Udstyr, `"moduleid": 34`):

- From Udstyr, get the booking (a child, so this is a `child` relation):
```json
{
  "module35": {
    "parent": 34,
    "child": 35,
    "relationid": 21
  }
}
```
- From Booking, get Lokation (using `child_id` to make it depend on the booking):
```json
{
  "module33": {
    "parent": 33,
    "child": 35,
    "relationid": 22,
    "child_id": "module35.child_id"
  }
}
```
`module35.child_id` is the booking found by the first relation (`module35Item.id` works the same). Now you can show fields of Udstyr, Booking and Lokation in the same table.

### Example 4: Filter on a parent relation
Suppose you want to get all product use lines on all tasks related to the project the user is currently viewing.

| Module Id | Name         |
|-----------|--------------|
| 168       | Project      |
| 169       | Task         |
| 171       | Product Use  |
| 172       | Product      |

Relations:

| Relation Id | Parent Module | Child Module     |
|-------------|---------------|------------------|
| 195         | 168 Project   | 169 Task         |
| 197         | 169 Task      | 171 Product Use  |
| 199         | 172 Product   | 171 Product Use  |

JSON configuration:
```json
{
  "moduleid": 171,
  "relations": {
    "module169": {
      "parent": 169,
      "child": 171,
      "relationid": 197
    },
    "module168": {
      "parent": 168,
      "child": 169,
      "relationid": 195,
      "child_id": "module169Item.id"
    },
    "module172": {
      "parent": 172,
      "child": 171,
      "relationid": 199
    }
  },
  "query": [
    [
      "module168Item.id",
      "=",
      "[itemid]"
    ]
  ]
}
```
**Explanation:**
1. This is a table widget on the Project (so `[itemid]` is the project id).
2. Fetch data from Product Use (moduleid 171).
3. Get the task related to the product use (`module169`).
4. Get the project related to the task (`module168`).
5. Filter on the project id (`query`).
6. Get the product related to the product use (`module172`).
7. The query will now return all product use lines on all tasks related to the project the user is currently viewing.

## Filter to records related to the page record

To show only records that are linked to the record the page shows (for example all tasks of the project you are viewing):

1. Set `moduleid` to the module you want to list.
2. Add a relation entry named after the **page record's** module.
3. Filter on that related record with `["module<id>Item.id", "=", "[itemid]"]`.

```json
{
  "moduleid": 169,
  "relations": {
    "module168": {
      "parent": 168,
      "child": 169,
      "relationid": 195
    }
  },
  "query": [
    ["module168Item.id", "=", "[itemid]"]
  ]
}
```
This Table widget on a Project lists the Tasks (module 169) whose parent project (module 168) is the project on the page. It works the same way when the listed records are the parents: name the entry after the page record's module and filter on `module<id>Item.id`.

On a dashboard there is no page record, so `[itemid]` is empty and this filter finds nothing.

## Tips
- Use the correct module and relation IDs for your setup. Ids are not translated when a solution is copied to another site, so check them after copying.
- Always name entries `module<id of the module you fetch from>`.
- Chain relations for advanced data access, with `parent_id`/`child_id` pointing to the earlier relation (`module<id>Item.id`).
- Keep the number of relations and related fields reasonable: each relation adds work to every load of the widget.

## Related Links
- [JSON Queries](json-query.md)
- [JSON Columns](json-columns.md)
- [Replaceables](../misc/replaceables.md)
- [Relations](../modules/relations.md)
