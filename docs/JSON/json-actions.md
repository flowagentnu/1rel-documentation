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
| `breakAfter` | boolean | No | A flag to control the flow of subsequent actions. If set to `false`, the flow continues to the next action, if the current one is executed sucessfully. |

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
It uses a structured query format as described in the [JSON Query Documentation](/docs/JSON/json-query)..

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

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| `crud`   | object | No       | Perform CRUD operations, manipulating data as needed. |

Let's create a new section titled "CRUD Operations" in the "JSON Actions" document. This section will include an introduction, a properties table for each CRUD operation (insert, update, delete, relate), and a comprehensive example showcasing all four operations.

## CRUD Operations in Actions

CRUD operations form the core of data management in FlowAgent, allowing you to create, read, update, and delete data items. Understanding and effectively utilizing these operations is crucial for maintaining a dynamic and responsive system.

To integrate the "dynamicdata" operation into the existing documentation seamlessly, I'll add it to the "Overview of CRUD Operations" section, ensuring it fits naturally with the existing content. Here's the revised section with the inclusion of "dynamicdata":

### Overview of CRUD Operations

CRUD operations, along with dynamic data handling, ensure that your system can respond to user inputs and scenarios by manipulating data as needed.

| Operation      | Type   | Required | Description |
|----------------|--------|----------|-------------|
| `insert`       | object | No       | Adds new data items to the system. |
| `update`       | object | No       | Modifies existing data items. |
| `delete`       | array  | No       | Removes data items from the system. |
| `relate`       | array  | No       | Defines or updates relationships between data items. |
| `dynamicdata`  | object | No       | Handles operations involving data that needs to be processed dynamically before further action. |

### Example of CRUD Operations

In this example, we showcase how to perform insert, update, delete, relate, and dynamic data operations within a single action.

```json
{
  "actions": [
    {
      "name": "Manage Data",
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
          },
          "update": {
            "existingItem": {
              "moduleitemtype_id": "112",
              "customfield": {
                "cf102": "post[value3]",
                "cf103": "post[value4]"
              }
            }
          },
          "delete": [
            "itemToDelete"
          ],
          "relate": [
            {
              "child": "childItemKey",
              "parent": "parentItemKey",
              "relationid": 123,
              "unlink": false
            }
          ],
          "dynamicdata": {
            "module_id": 60,
            "where": [
              [
                "moduleitemtype_id",
                "=",
                "132"
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

In this comprehensive example:

- **Insert**: A new item is added to the system with specific custom field values.
- **Update**: An existing item's custom fields are updated with new values.
- **Delete**: A specific item is removed from the system.
- **Relate**: A relationship is defined or updated between two items, potentially linking them together without unlinking.
- **Dynamic Data**: Data is dynamically retrieved and processed, then used in subsequent operations, showcasing the versatility and adaptability of the system to handle complex, data-driven scenarios.

### Insert Property

Insert operations add new data items to the system.

#### Properties of Insert

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| `moduleid` | number | Yes | Specifies the module where the new item will be added. |
| `moduleitemtype_id` | number | Yes | Defines the module item type for the new item. |
| `customfield` | object | Yes | Sets the custom fields and their values for the new item. |

#### Example of Insert Operation

```json
"insert": {
  "customer": {
    "moduleid": 50,
    "moduleitemtype_id": "111",
    "customfield": {
      "cf100": "John Doe",
      "cf101": "1234567890"
    }
  }
}
```

### Update Property

Update operations modify existing data items.

#### Properties of Update

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| `moduleitemtype_id` | number | No | Identifies the module item type for the item being updated. |
| `customfield` | object | Yes | Determines the custom fields and their new values for the item. |

#### Example of Update Operation

```json
"update": {
  "customer": {
    "moduleitemtype_id": "111",
    "customfield": {
      "cf100": "Jane Doe",
      "cf101": "0987654321"
    }
  }
}
```

### Relate Property

Relate operations define or update the relationships between data items.

#### Properties of Relate

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| `child` | string | Yes | Indicates the child item in the relationship. |
| `parent` | string | Yes | Specifies the parent item in the relationship. |
| `relationid` | number | No | Provides the ID of the relation type. |
| `unlink` | boolean | No | Determines if the specified relationship should be unlinked. |

#### Example of Relate Operation

```json
"relate": [
  {
    "child": "kunde",
    "parent": "kampagne",
    "relationid": 76,
    "unlink": true
  }
]
```

### Delete Property

Delete operations remove data items from the system.

#### Properties of Delete

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| `itemKey` | string | Yes | Defines the key of the item to be deleted. |

#### Example of Delete Operation

```json
"delete": [
  "salgstur"
]
```
## Dynamic Data Operations in Actions

Dynamic data operations allow for real-time data manipulation and interaction, ensuring that your system can adapt to changing data and user needs dynamically.

### Overview of Dynamic Data Operations

Dynamic data operations are designed to handle complex scenarios where data needs to be retrieved, processed, or transformed before being used in CRUD operations or other action sequences.

| Operation      | Type   | Required | Description |
|----------------|--------|----------|-------------|
| `dynamicdata`  | object | No       | Handles operations involving data that needs to be processed dynamically before further action. |

### Example of Dynamic Data Operation

This example illustrates a dynamic data operation where data is dynamically retrieved and processed, then used in a subsequent insert and relate operation.

```json
{
  "actions": [
    {
      "name": "opret salgstur",
      "then": {
        "crud": {
          "insert": {
            "salgstur": {
              "moduleid": 74,
              "moduleitemtype_id": 131,
              "customfield": {
                "cf606": "Salgstur",
                "cf609": "selfitem[cf323]"
              }
            }
          },
          "relate": [
            {
              "child": "salgstur",
              "parent": "selfitem"
            },
            {
              "child": "salgstur",
              "parent": "kampagne"
            },
            {
              "child": "selfitem",
              "parent": "kampagne"
            }
          ],
          "dynamicdata": {
            "module_id": 60,
            "where": [
              [
                "moduleitemtype_id",
                "=",
                "132"
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
              "relate": [
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

In this example, the `dynamicdata` operation is utilized to:

- Retrieve data based on specific conditions (`where` clause).
- Process and transform the retrieved data (`createInModule`), allowing for the creation of new items with dynamically assigned custom fields.
- Establish relations between newly created items and existing ones (`relations`).

### Properties of Dynamic Data Operation

| Property          | Type   | Required | Description |
|-------------------|--------|----------|-------------|
| `module_id`       | number | Yes      | Specifies the module from which the dynamic data is retrieved. |
| `where`           | array  | Yes      | Sets the conditions for retrieving dynamic data. |
| `createInModule`  | object | Yes      | Defines how the retrieved dynamic data is processed and how new items are created. |

#### `createInModule` Properties

| Property       | Type   | Required | Description |
|----------------|--------|----------|-------------|
| `moduleitemtype_id` | number | Yes | Specifies the module item type for the new item to be created. |
| `module_id`    | number | Yes      | Specifies the module where the new item will be created. |
| `customfield`  | object | Yes      | Sets the custom fields and their dynamic values for the new item. |
| `relate`    | array  | No       | Defines relationships between the newly created item and existing items. |

---

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

## Examples of Assigning Values to Custom Fields

### Fixed Value

Assign a static value directly to the custom field.

```json
"customfield": {
  "cf100": "Red"
}
```

### Form Field Value

Use a value entered by the user in a form field.

```json
"customfield": {
  "cf101": "post[color]"
}
```

### Form Field with Strip Option

Strip a specific pattern from a form field value, commonly used for processing dropdowns, radios, or checkboxes.

```json
"customfield": {
  "cf102": "post[visitFrequency]|strip_option"
}
```

:::info
The `strip_option` option is used to remove the `option_` prefix from the form field value, ensuring that the actual value is assigned to the custom field. This is useful when option ids are strings you need to input into a normal text field.
:::

### Dropdown Option

Use an option ID for assigning a value from a dropdown custom field.

```json
"customfield": {
  "cf103": "option_123"
}
```

### Referenced Custom Field

Assign a value by referencing a custom field from another item.

```json
"customfield": {
  "cf104": "customer.cf445"
}
```

## Controlling Action Flow with `breakAfter`

The `breakAfter` property is an essential part of the action framework in FlowAgent, allowing for granular control over the execution sequence of actions. It determines whether the system should continue processing subsequent actions after the current one.

### Overview of `breakAfter`

The `breakAfter` property is used within an action to specify whether subsequent actions should be processed or ignored after the current action is executed. This feature is particularly useful in scenarios where the execution of further actions depends on the outcome or completion of the current action.

### Usage of `breakAfter`

The `breakAfter` property is typically used in complex workflows where certain conditions or outcomes necessitate a halt in the sequence of actions. By setting `breakAfter` to `true`, you ensure that no further actions are processed after the current action, allowing for conditional branching or early termination of the action sequence, which is also the default behavior.

#### Example Usage of `breakAfter`

```json
{
  "actions": [
    {
      "name": "Update and Insert Data",
      "then": {
        "crud": {
          "update": {
            "existingData": {
              "moduleid": 30,
              "moduleitemtype_id": "222",
              "customfield": {
                "cf200": "updatedValue"
              }
            }
          },
          "insert": {
            "newData": {
              "moduleid": 40,
              "moduleitemtype_id": "333",
              "customfield": {
                "cf300": "newValue"
              }
            }
          }
        }
      },
      "breakAfter": false  // Continue processing subsequent actions
    },
    {
      "name": "Conditional Insert",
      "if": [
        ["item.condition", "=", "specificValue"]
      ],
      "then": {
        "crud": {
          "insert": {
            "conditionalData": {
              "moduleid": 50,
              "moduleitemtype_id": "444",
              "customfield": {
                "cf400": "conditionalValue"
              }
            }
          }
        }
      },
      "breakAfter": false  // Continue processing subsequent actions
    },
    {
      "name": "Conditional Relate",
      "if": [
        ["user.status", "=", "active"]
      ],
      "then": {
        "crud": {
          "relate": [
            {
              "child": "childItemKey",
              "parent": "parentItemKey",
              "relationid": 567,
              "unlink": false
            }
          ]
        }
      }
    }
  ]
}
```

In this sequence:

1. **Update and Insert Data**:
   - The first action performs both an update and an insert operation as part of the same `crud`.
   - Existing data is updated, and new data is inserted into the system.
   - `breakAfter` is set to `false`, allowing the action sequence to continue.

2. **Conditional Insert**:
   - The second action checks a condition (`item.condition = specificValue`).
   - If the condition is met, a new item is inserted with conditional data.
   - `breakAfter` is set to `false`, allowing the next action to be processed.

3. **Conditional Relate**:
   - The third action checks another condition (`user.status = active`).
   - If the user status is active, a `relate` operation is performed to define or update relationships between data items.
   - There are no further actions, so `breakAfter` doesn't need to be specified.

### Considerations for `breakAfter`

- **Default Behavior**: The default setting for `breakAfter` is `true`, which means that, unless explicitly set to `false`, the system will naturally halt the action sequence after executing an action.
- **Conditional Logic**: Use `breakAfter` in conjunction with conditional logic (`if`) to create dynamic, responsive action sequences that adapt based on user inputs or system states.
- **Action Design**: Plan your action sequences carefully, considering the implications of halting the sequence at different stages based on your system's workflow requirements.

By providing a dedicated control mechanism like `breakAfter`, FlowAgent empowers users to design intricate and adaptive workflows, ensuring that actions are executed in a controlled, logical manner that aligns with the specific needs of each process.