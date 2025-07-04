# CRUD Operations

A guide to using CRUD (Create, Read, Update, Delete) actions in FlowAgent.

## When to Use
Use this page when you want to automate data management: creating, updating, deleting, or relating items.

## How It Works
- CRUD actions are used in automations, forms, and buttons.
- Supports batch operations for multiple items.
- Custom fields can be set with fixed values, form values, or references.

## Available CRUD Operations
You can use the following operations in your `crud` action:

- **insert** (object): Adds new data items to the system.
- **update** (object): Modifies existing data items.
- **delete** (array): Removes data items from the system.
- **relate** (array): Defines or updates relationships between data items.
- **dynamicdata** (object): Handles operations involving data that needs to be processed dynamically before further action.

## Custom Fields in CRUD Operations
When assigning values to custom fields in CRUD actions, you can use:

- **Fixed Value**: Assign a fixed value directly to the custom field.
- **Form Field Value**: Use a value entered by the user in a form field (e.g., `[post.name]`).
- **Form Field with Strip Option**: Strip the `option_` prefix from dropdown values if needed.
- **Dropdown Option**: Assign a value from a dropdown custom field using `option_xxx`.
- **Referenced Custom Field**: Reference another item's custom field (e.g., `[selfitem.cf323]`).

## Batch Operations
You can perform actions on multiple items at once (batch operations) for update, delete, or relate. This is useful for modifying or cleaning up many records in a single action.

## Usage Examples

### Example 1: Insert Operation
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

## Tips
- Use batch operations to update or delete multiple items at once.
- Reference custom fields by their key (e.g., `cf100`).

## Related Links
- [JSON Actions](json-actions.md)

---

For more on advanced CRUD, see the JSON Actions documentation.