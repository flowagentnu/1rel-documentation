# JSON Relations

Relations are used to get access to fields from other modules. This is useful when you want to display data from another module in a widget. Relations are defined in the `relations` object.

## JSON Configuration

| Property     | Type    | Required | Options    | Description |
|--------------|---------|----------|------------|-------------|
| `parent`     | integer | Yes      | N/A        | The ID of the parent module in the relation. |
| `child`      | integer | Yes      | N/A        | The ID of the child module in the relation. |
| `relationid` | integer | Yes       | N/A        | The ID of the specific relation, if multiple relations exist between the two modules. |
| `relationtype` | string | No       | child/parent        | The type of relation, typically defined automatically. |
| `parent_id`  | integer | No       | N/A        | Forcefully set the parent item of the relation. Normally you should never use this. |
| `child_id`   | integer | No       | N/A        | Forcefully set the child item of the relation. Normally you should never use this. |

## Naming of each relation object

The naming of a relation object is crucial as it determines how the relation is accessed. The name should correspond to the module ID from which you want to fetch information. For example, if you are working with Module 1 and need to fetch data from Module 2, you should name the relation object `module2`.

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

### Example 3: Get Relations relation
In this scenario we have the following modules and relations.

| Module Id | Name     |
|-----------|----------|
| 33        | Lokation |
| 34        | Udstyr   |
| 35        | Booking  |

When an Udstyr is Booked, a relation is created between Udstyr->Booking and between Lokation->Booking

| Relation Id | Parent Module | Child Module |
|-------------|---------------|--------------|
| 21          | 34 Udstyr     | 35 Booking   |
| 22          | 33 Sag        | 35 Booking   |

We would like to show a table, displaying all Booked udstyr with their booking details and the name of the lokation.

To do this, we need to:

From Udstyr, get the booking

```json
{
  "module35": {
    "parent": 34,
    "child": 35,
    "relationid": 21
  }
}
```

From Booking, we need to get Lokation (as there are no relation between Udstyr and Lokation)
What is speciel here, is that we are able to define what item this relation should depend on eg. by using “child_id”. Here we specify that it should use module35 child id (item).

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

Now we are able to get the both direct relations and related relations.

### Example 4: Filter on a parent relation.
In this case we want to get all product use lines on all tasks related to the project user is currently vieweing.

| Module Id | Name     |
|-----------|----------|
| 168       | Project  |
| 169       | Task     |
| 171       | Product Use  |
| 172       | Product  |

Our relations looks like the followingen:

| Relation Id | Parent Module | Child Module |
|-------------|---------------|--------------|
| 195         | 168 Project   | 169 Task     |
| 197         | 169 Task      | 171 Product Use |
| 199         | 172 Product | 171 Product Use  |

Our json looks like this:

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
  ],
}
```

To explain this:
1. This is a table widget on the Project (meaning our [itemid] is the project id).
2. Fetch data from Product Use (moduleid 171)
3. Get the task related to the product use (in order to know which project it belongs to). ```"module169": {```
4. Get the project related to the task ```"module168": {```
5. Filter on the project id ```"query": [ ["module168Item.id", "=", "[itemid]"] ]```
6. Get the product related to the product use ```"module172": {```
7. The query will now return all product use lines on all tasks related to the project user is currently viewing.