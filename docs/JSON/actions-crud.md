# CRUD operations

CRUD operations form the core of data management in FlowAgent, allowing you to create, read, update, and delete data items. Understanding and effectively utilizing these operations is crucial for maintaining a dynamic and responsive system.

## Overview of CRUD Operations

CRUD operations, along with dynamic data handling, ensure that your system can respond to user inputs and scenarios by manipulating data as needed.

| Operation      | Type   | Required | Description |
|----------------|--------|----------|-------------|
| `insert`       | object | No       | Adds new data items to the system. |
| `update`       | object | No       | Modifies existing data items. |
| `delete`       | array  | No       | Removes data items from the system. |
| `relate`       | array  | No       | Defines or updates relationships between data items. |
| `dynamicdata`  | object | No       | Handles operations involving data that needs to be processed dynamically before further action. |

## Multiple items in CRUD actions

In some scenarios, it is necessary to perform actions on multiple items at once. FlowAgent supports batch operations, allowing you to update, delete, or relate multiple items in a single action. This feature is especially useful when you need to modify multiple records simultaneously to maintain consistency across your system.

## Custom Fields in CRUD Operations

Custom fields allow for dynamic data assignment in actions, enhancing flexibility and adaptability.

| Method                   | Type   | Required | Description |
|--------------------------|--------|----------|-------------|
| Fixed Value              | string | Yes      | Assigns a fixed value directly to the custom field. |
| Form Field Value         | string | Yes      | Utilizes a value entered by the user in a form field. |
| Form Field with Strip Option | string | Yes      | Strips prefixed option_ from option values. |
| Dropdown Option          | string | Yes      | Assigns a value from a dropdown custom field using "option_xxx". |
| Referenced Custom Field  | string | Yes      | Assigns a value by referencing another item's custom field. |

## Examples

### Example 1: Insert Operation

The following example demonstrates how to use the `insert` operation to add a new item to the system.

```json
{
  "actions": [
    {
      "name": "Insert New Item",
      "then": {
        "crud": {
          "insert": {
            "newItem": {
              "moduleid": 50,
              "moduleitemtype_id": "111",
              "customfield": {
                "cf100": "[post.value1]",
                "cf101": "[post.value2]"
              }
            }
          }
        }
      }
    }
  ]
}
```

### Example 2: Update Operation

The following example shows how to use the `update` operation to modify an existing item.

```json
{
  "actions": [
    {
      "name": "Update Existing Item",
      "then": {
        "crud": {
          "update": {
            "existingItem": {
              "moduleitemtype_id": "112",
              "customfield": {
                "cf102": "[post.value3]",
                "cf103": "[post.value4]"
              }
            }
          }
        }
      }
    }
  ]
}
```

### Example 3: Delete Operation

The following example demonstrates how to use the `delete` operation to remove an item from the system.

```json
{
  "actions": [
    {
      "name": "Delete Item",
      "then": {
        "crud": {
          "delete": [
            "itemToDelete"
          ]
        }
      }
    }
  ]
}
```

### Example 4: Relate Operation

The following example demonstrates how to use the `relate` operation to define or update relationships between data items.

```json
{
  "actions": [
    {
      "name": "Relate Items",
      "then": {
        "crud": {
          "relate": [
            {
              "child": "childItemKey",
              "parent": "parentItemKey",
              "relationid": 123,
              "unlink": false
            }
          ]
        }
      }
    }
  ]
}
```

### Example 5: Dynamic Data Operation

The following example demonstrates how to use the `dynamicdata` operation to handle data that needs to be processed dynamically before further action.

```json
{
  "actions": [
    {
      "name": "Handle Dynamic Data",
      "then": {
        "crud": {
          "dynamicdata": {
            "module_id": 60,
            "where": [
              [
                "moduleitemtype_id",
                "=",
                132
              ],
              [
                "cf610.string",
                "=",
                "option_818"
              ]
            ],
            "createInModule": {
              "moduleitemtype_id": 103,
              "module_id": 60,
              "customfield": {
                "cf460": "dynamicdata[cf460]",
                "cf645": "dynamicdata[cf645]",
                "cf463": "dynamicdata[cf463]",
                "cf461": "[selfitem.cf323]"
              },
              "relations": [
                {
                  "parent": "salgstur",
                  "child": "dynamicitem"
                }
              ]
            }
          }
        }
      }
    }
  ]
}
```

### Example 6: Multiple Items in CRUD Actions
The following example demonstrates how to perform update and delete actions on multiple items within the same action sequence.

```json
{
  "items": {
    "projects": [
      [
        "id",
        "=",
        "[itemid]"
      ]
    ],
    "tasks[]": [
      [
        "id",
        "IN",
        "[relation80]"
      ]
    ]
  },
  "visibility": {
    "visual": {
      "text": "Update and delete",
      "textColor": "white",
      "bgColor": "danger",
      "icon": "warning",
      "displayIconOnly": false
    }
  },
  "actions": [
    {
      "name": "Update and delete multiple items",
      "then": {
        "crud": {
          "update": {
            "projects[]": {
              "customfield": {
                "cf649": "option_863"
              }
            }
          },
          "delete": [
            "tasks[]"
          ]
         }
       }
     }
  ]
}
```

In the above example, the action performs updates on multiple projects and deletes multiple tasks:

- **Items**: The `items` section defines the target items for the actions. In this case, it targets `projects` with a specific ID and `tasks` related to `relation80`.
- **Update**: The `update` operation modifies a custom field (`cf649`) for all projects matching the specified condition.
- **Delete**: The `delete` operation removes all tasks matching the specified condition.
- **Visibility**: The `visibility` section provides a visual indicator for the action, which helps in identifying the nature of the action in the user interface.

This approach allows for efficient management of multiple items, reducing the need for repetitive actions and ensuring consistency across your system.