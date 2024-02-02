# JSON Actions

## Overview

Actions in 1Relation enable dynamic and automated interactions within your system. They allow for the execution of predefined tasks based on user interactions or specific conditions, making forms and systems more interactive and intelligent.

## Purpose of Actions

Actions serve various purposes, including data management through CRUD operations, form navigation, and providing custom responses. They act as a digital workforce in your system, ready to perform tasks on command.

## Anatomy of an Action

An action in 1Relation is a structured object that defines when it should be triggered (`if`) and what it should do (`then`). It's a crucial part of making your forms and systems interactive.

### Structure of an Action

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| `name`   | string | Yes      | Identifies the action for easier management and understanding. |
| `if`     | array  | No       | Specifies the conditions under which the action is triggered. |
| `then`   | object | Yes      | Outlines the tasks to be executed when the conditions are met. |

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
| `showForm` | object | No       | Open a specific form, passing along necessary data. |
| `showRelevantForms` | object | No | Display forms relevant to the current context or data. |

Let's create a new section titled "CRUD Operations" in the "JSON Actions" document. This section will include an introduction, a properties table for each CRUD operation (insert, update, delete, relate), and a comprehensive example showcasing all four operations.

## CRUD Operations in Actions

CRUD operations form the core of data management in 1Relation, allowing you to create, read, update, and delete data items. Understanding and effectively utilizing these operations is crucial for maintaining a dynamic and responsive system.

### Overview of CRUD Operations

CRUD operations ensure that your system can respond to user inputs and scenarios by manipulating data as needed.

| Operation | Type   | Required | Description |
|-----------|--------|----------|-------------|
| `insert`  | object | No       | Adds new data items to the system. |
| `update`  | object | No       | Modifies existing data items. |
| `delete`  | array  | No       | Removes data items from the system. |
| `relate`  | array  | No       | Defines or updates relationships between data items. |

### Example of CRUD Operations

In this example, we showcase how to perform insert, update, delete, and relate operations within a single action.

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
          ]
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

### Insert Properties

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

### Update Properties

Update operations modify existing data items.

#### Properties of Update

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| `moduleitemtype_id` | number | Yes | Identifies the module item type for the item being updated. |
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

## Custom Fields in Actions

Custom fields allow for dynamic data assignment in actions, enhancing flexibility and adaptability.

### Ways to Assign Values to Custom Fields

| Method                   | Type   | Required | Description |
|--------------------------|--------|----------|-------------|
| Fixed Value              | string | Yes      | Assigns a fixed value directly to the custom field. |
| Form Field Value         | string | Yes      | Utilizes a value entered by the user in a form field. |
| Form Field with Strip    | string | Yes      | Strips a specified pattern (e.g., "strip_option") from the form field value. |
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

### Form Field with Strip

Strip a specific pattern from a form field value, commonly used for processing dropdowns, radios, or checkboxes.

```json
"customfield": {
  "cf102": "post[visitFrequency]|strip_option"
}
```

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

### Relate Properties

Relate operations define or update the relationships between data items.

#### Properties of Relate

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| `child` | string | Yes | Indicates the child item in the relationship. |
| `parent` | string | Yes | Specifies the parent item in the relationship. |
| `relationid`

 | number | No | Provides the ID of the relation type. |
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

### Delete Properties

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

## Form Interactions

Actions can enhance user interaction with forms, guiding them through the system's functionalities.

### Show Form

The `showForm` operation opens a specific form for user interaction.

#### Properties of Show Form

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| `formId` | number | Yes | Specifies the ID of the form to be opened. |
| `itemKey` | string | Yes | Identifies the key of the item to be passed to the form. |

#### Example of Show Form

```json
"showForm": {
  "formId": 23,
  "itemKey": "opgave"
}
```

### Show Relevant Forms

The `showRelevantForms` operation displays forms that are contextually relevant to the current data or user interaction.

#### Properties of Show Relevant Forms

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| `itemKey` | string | Yes | Determines the key of the item based on which relevant forms are displayed. |

#### Example of Show Relevant Forms

```json
"showRelevantForms": {
  "itemKey": "opgave"
}
```