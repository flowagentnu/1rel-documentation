# JSON Relations

Relations are used to get access to fields from other modules. This is useful when you want to display data from another module in a widget. Relations are defined in the `relations` object.

## JSON Configuration

| Property     | Type    | Required | Options    | Description |
|--------------|---------|----------|------------|-------------|
| `parent`     | integer | Yes      | N/A        | The ID of the parent module in the relation. |
| `child`      | integer | Yes      | N/A        | The ID of the child module in the relation. |
| `relationid` | integer | Yes       | N/A        | The ID of the specific relation, if multiple relations exist between the two modules. |
| `relationtype` | string | No       | child/parent        | The type of relation, typically defined automatically. |
| `parent_id`  | integer | No       | N/A        | Forcefully set the parent item of the relation. |
| `child_id`   | integer | No       | N/A        | Forcefully set the child item of the relation. |

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