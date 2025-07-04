# JSON Relations

A guide to using relations for accessing data from other modules in FlowAgent.

## When to Use
Use this page when you want to display or use data from related modules in widgets, forms, or automations.

## How It Works
- Define relations in the `relations` object using module IDs.
- Access parent/child data or chain relations for advanced use cases.
- Name each relation object after the module ID you want to fetch from.

## Examples

### Example 1: Simple relation example
```json
{
  "relations": {
    "module43": {
      "parent": 43,
      "child": 41,
      "relationid": 22
    }
  }
}
```
In this relation configuration, the parent module is identified as module 43, and the child module as module 41. The relationid is set to 22, indicating the specific relation used if multiple relations exist between these two modules.

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
This example shows how to chain relations. The second relation (`module75`) depends on the result of the first (`module77`).

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

To show a table displaying all Booked udstyr with their booking details and the name of the lokation:

- From Udstyr, get the booking:
```json
{
  "module35": {
    "parent": 34,
    "child": 35,
    "relationid": 21
  }
}
```
- From Booking, get Lokation (using `child_id` to specify dependency on the booking):
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
Now you can access both direct and related relations.

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

## Tips
- Use the correct module and relation IDs for your setup.
- Chain relations for advanced data access.

## Related Links
- [JSON Queries](json-query.md)

---

For more on advanced relations, see the JSON Query documentation.