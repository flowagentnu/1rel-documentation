# Actions

Actions in Actional Buttons within 1Relation are pivotal for dynamic user interaction, mirroring the concept of triggers in forms. They enable Actional Buttons to perform a wide range of tasks, from navigation and data manipulation to more complex operations, ensuring a responsive and interactive user experience.

## Structure of `actions`

Actions consist of several components, each with specific roles in managing the button's behavior and response to user interactions.

### Action Components

| Property        | Type    | Required | Options                                     | Description |
|-----------------|---------|----------|---------------------------------------------|-------------|
| `Actions`       | object  | Yes      | insert, update, relate, delete, unlink, showForm | Specifies the operations to be executed when the action is triggered. |
| `If`            | array   | No       | Conditions as described in the JSON Query documentation | A set of conditions that must be met for the action to execute. |
| `Then`          | object  | Yes      | N/A                                         | Outlines the actions to take place if the conditions are met. |
| `dynamicdata`   | object  | No       |                                             | Retrieves data dynamically based on specified conditions and uses it in other actions. |
| `BreakAfter`    | boolean | No       | true, false                                 | Specifies whether to stop executing further actions after this one. |
| `Uri`           | string  | No       | URL paths                                   | Redirects the user to a specific page if no other actions are defined. |
| `createInModule`| object  | No       |                                             | Creates new items in a specified module, utilizing dynamically retrieved data or Actional Button inputs. |

#### Action with Conditional Logic
```json
{
  "actions": [
    {
      "if": [
        ["field_id", "=", "specific_value"]
      ],
      "then": {
        "update": {
          // Update details...
        }
      }
    }
  ]
}
```
This example demonstrates an action that updates certain details based on a conditional check (`if`). The action is executed only if the condition is met, showcasing the ability to perform context-sensitive operations.

#### Action with Multiple Operations and "If"
```json
{
  "actions": [
    {
      "if": [["field_id", "=", "specific_value"]],
      "then": {
        "insert": {
          // Insert details...
        },
        "update": {
          // Update details...
        },
        "breakAfter": false
      }
    },
    {
      "then": {
        "relate": {
          // Relate details...
        }
      }
    }
  ]
}
```
This example shows an action sequence with a conditional check (`if`) and multiple operations (`insert` and `update`). The `breakAfter`: false ensures that subsequent actions are also executed, in this case, the `relate` action.

#### Action with Uri for Redirection
```json
{
  "actions": [
    {
      "then": {
        "uri": "/item/[itemid]"
      }
    }
  ]
}
```
This action uses the `uri` property to redirect the user to a specific URI, demonstrating how actions can also control navigation within the application.

#### Action with dynamicdata and createInModule
```json
{
  "actions": [
    {
      "then": {
        "dynamicdata": {
          "module_id": 68,
          "where": [
            ["cf548.string", "NOT LIKE", "#%"]
          ],
          "createInModule": {
            "moduleitemtype_id": 128,
            "module_id": 70,
            "customfield": {
              "cf570": "0",
              "cf615": "dynamicdata[cf548]",
              "cf616": "dynamicdata[cf549]"
            }
          },
          "relations": [
            {
              "child": "dynamicitem",
              "parent": "opgave"
            }
          ]
        }
      }
    }
    // Additional actions...
  ]
}
```
This example illustrates the use of the dynamicdata feature to fetch data based on specific criteria. The retrieved data is then used in a `createInModule` action to create a new item in a specified module.
Another relation is also assigned to the items created with `createInModule` functionality. When refering to these items, the `dynamicitem` is used. This showcases advanced data handling capabilities within triggers.

Each of these examples demonstrates different configurations of actions within Actional Buttons, showcasing the versatility and power of the system in responding to user interactions and automating complex tasks.