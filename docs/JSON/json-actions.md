# JSON Actions

## Overview

Actions in FlowAgent enable dynamic and automated interactions within your system. They allow for the execution of predefined tasks based on user interactions or specific conditions, making forms and systems more interactive and intelligent.

## Purpose of Actions

Actions serve various purposes, including data management through CRUD operations, form navigation, and providing custom responses. They act as a digital workforce in your system, ready to perform tasks on command.

## Anatomy of an Action

An action in FlowAgent is a structured object that defines when it should be triggered (`if`) and what it should do (`then`). It's a crucial part of making your forms and systems interactive.

### Structure of an Action

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| `name`   | string | Yes      | Identifies the action for easier management and understanding. |
| `if`     | array  | No       | Specifies the conditions under which the action is triggered. |
| `then`   | object | Yes      | Outlines the tasks to be executed when the conditions are met. |
| `breakAfter` | boolean | No | A flag to control the flow of subsequent actions. If set to `false`, the flow continues to the next action, if the current one is executed successfully. |

### Example Action

```json
{
  "actions": [
    {
      "name": "Add New Customer",
      "if": [
        ["customerName", "=", "John"]
      ],
      "then": {
        "crud": {
          "insert": {
            "customer": {
              "moduleid": 50,
              "moduleitemtype_id": "111",
              "customfield": {
                "cf100": "post[name]",
                "cf101": "post[phonenumber]",
                "cf102": "post[email]",
                "cf103": "post[role]",
                "cf104": "blue"
              }
            }
          }
        }
      }
    }
  ]
}
```

## Defining Conditions (`if`)

Setting conditions is like setting the rules of the game. They determine when an action should kick into gear.
It uses a structured query format as described in the [JSON Query Documentation](/docs/JSON/json-query).

| Property | Type   | Required | Options | Description |
|----------|--------|----------|---------|-------------|
| Key      | string | Yes      | Various | The field or attribute to be evaluated (e.g., a user group or custom field). |
| Operator | string | Yes      | `=`, `!=`, `>`, `<`, etc. | Defines how the key's value should be compared to the condition's value. |
| Value    | string | Yes      | Various | The value to compare against the key's value. |

### Examples of Conditions

```json
[
  ["contact.cf469", "!=", "option_753"],
  ["contact.moduleitemtype_id", "=", 104]
]
```

## Defining Actions (`then`)

When conditions are met, the `then` part defines what happens next. It's where the action truly happens.

| Property   | Type   | Required | Description |
|------------|--------|----------|-------------|
| `crud`     | object | No       | Perform CRUD operations, manipulating data as needed. |
| `sendEmail`| object | No       | Sends an email based on specified parameters. |

## CRUD Operations in Actions

CRUD operations form the core of data management in FlowAgent, allowing you to create, read, update, and delete data items. Understanding and effectively utilizing these operations is crucial for maintaining a dynamic and responsive system.

### Overview of CRUD Operations

CRUD operations, along with dynamic data handling, ensure that your system can respond to user inputs and scenarios by manipulating data as needed.

| Operation      | Type   | Required | Description |
|----------------|--------|----------|-------------|
| `insert`       | object | No       | Adds new data items to the system. |
| `update`       | object | No       | Modifies existing data items. |
| `delete`       | array  | No       | Removes data items from the system. |
| `relate`       | array  | No       | Defines or updates relationships between data items. |
| `dynamicdata`  | object | No       | Handles operations involving data that needs to be processed dynamically before further action. |

### Example of Insert Operation

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
                "cf100": "post[value1]",
                "cf101": "post[value2]"
              }
            }
          }
        }
      }
    }
  ]
}
```

### Example of Update Operation

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
                "cf102": "post[value3]",
                "cf103": "post[value4]"
              }
            }
          }
        }
      }
    }
  ]
}
```

### Example of Delete Operation

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

### Example of Relate Operation

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

### Example of Dynamic Data Operation

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
                "cf461": "selfitem[cf323]"
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

## Send Email Action

The `sendEmail` action allows you to send an email with specified details. This action can be used to trigger email notifications or other email-based interactions.

### Example of Send Email Operation

The following example demonstrates how to use the `sendEmail` action to send an email with specified details.

```json
{
  "actions": [
    {
      "name": "Send Email",
      "sendEmail": {
        "subjectLine": "This is my subject line",
        "previewText": "This is my preview text",
        "templateTitle": "This is my body title",
        "templateBody": "Hello world, this is my body!",
        "templateHasButton": true,
        "templateButtonText": "Hi, click me!",
        "templateButtonUrl": "https://flowagent.nu/",
        "toName": "Emil Andreæ",
        "toEmail": "emil@flowagent.nu",
        "fromName": "[user.name]",
        "fromEmail": "[user.email]"
      }
    }
  ]
}
```

### Example of Send Email Using a Document

In this example, instead of writing the entire email content within the action itself, a pre-defined document template is used. The document is referenced from the modules settings/documents section where HTML documents with replaceable fields can be created.

```json
{
  "actions": [
    {
      "name": "Email document",
      "sendEmail": {
        "documentKeyName": "mltiderdoc_dette-er-min-document-email",
        "toName": "[user.name]",
        "toEmail": "[user.email]"
      }
    }
  ]
}
```

## Multiple Actions on Items

In some scenarios, it is necessary to perform actions on multiple items at once. FlowAgent supports batch operations, allowing you to update, delete, or relate multiple items in a single action. This feature is especially useful when you need to modify multiple records simultaneously to maintain consistency across your system.

### Example of Multiple Actions

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

### Explanation of Multiple Actions

In the above example, the action performs updates on multiple projects and deletes multiple tasks:

- **Items**: The `items` section defines the target items for the actions. In this case, it targets `projects` with a specific ID and `tasks` related to `relation80`.
- **Update**: The `update` operation modifies a custom field (`cf649`) for all projects matching the specified condition.
- **Delete**: The `delete` operation removes all tasks matching the specified condition.
- **Visibility**: The `visibility` section provides a visual indicator for the action, which helps in identifying the nature of the action in the user interface.

This approach allows for efficient management of multiple items, reducing the need for repetitive actions and ensuring consistency across your system.

## Custom Fields in Actions

Custom fields allow for dynamic data assignment in actions, enhancing flexibility and adaptability.

### Ways to Assign Values to Custom Fields

| Method                   | Type   | Required | Description |
|--------------------------|--------|----------|-------------|
| Fixed Value              | string | Yes      | Assigns a fixed value directly to the custom field. |
| Form Field Value         | string | Yes      | Utilizes a value entered by the user in a form field. |
| Form Field with Strip Option | string | Yes      | Strips prefixed option_ from option values. |
| Dropdown Option          | string | Yes      | Assigns a value from a dropdown custom field using "option_xxx". |
| Referenced Custom Field  | string | Yes      | Assigns a value by referencing another item's custom field. |

## Controlling Action Flow with `breakAfter`

The `breakAfter` property is an essential part of the action framework in FlowAgent, allowing for granular control over the execution sequence of actions. It determines whether the system should continue processing subsequent actions after the current one.

### Overview of `breakAfter`

The `breakAfter` property is used within an action to specify whether subsequent actions should be processed or ignored after the current action is executed. This feature is particularly useful in scenarios where the execution of further actions depends on the outcome or completion of the current action.

### Usage of `breakAfter`

The `breakAfter` property is typically used in complex workflows where certain conditions or outcomes necessitate a halt in the sequence of actions. By setting `breakAfter` to `true`, you ensure that no further actions are processed after the current action, allowing for conditional branching or early termination of the action sequence, which is also the default behavior.

