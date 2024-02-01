# JSON Actions

## Overview

Actions are the driving force behind the dynamic capabilities of 1Relation. They are sets of rules and tasks that are executed when certain conditions are met, making your forms and systems smarter and more interactive.

## What Actions Can Do

Think of actions as your digital workforce, ready to perform a variety of tasks on command:

1. **Data Management (CRUD)**: Automatically create, read, update, or delete data based on user interactions or other conditions.
2. **Form Navigation**: Guide users by opening specific forms or displaying relevant forms based on the data they've entered or actions they've performed.
3. **Custom Responses**: Tailor the system's response to specific user inputs or scenarios, ensuring a personalized and efficient user experience.

## Anatomy of an Action

An action object is structured to clearly define when and how it should be triggered:

### Structure of an Action

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| `name`   | string | Yes      | A label to identify the action, making it easier to manage and understand. |
| `if`     | array  | No       | Conditions that determine when the action should be triggered. |
| `then`   | object | Yes      | Defines what should happen when the action is triggered. |

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

In this example, if the condition is met (customerName equals John), the system will perform the defined CRUD operation, inserting a new customer with the specified details.

## Defining Conditions (`if`)

Setting conditions is like setting the rules of the game. They determine when an action should kick into gear.

| Property | Options | Description |
|----------|---------|-------------|
| Key      | Various | The field or attribute to be evaluated (e.g., a user group or custom field). |
| Operator | `=` `!=` `>` `<` etc. | Defines how the key's value should be compared to the condition's value. |
| Value    | Various | The value to compare against the key's value. |

### Examples of Conditions

```json
[
  ["contact.cf469", "!=", "option_753"],
  ["contact.moduleitemtype_id", "=", 104]
]
```

## Defining Actions (`then`)

When conditions are met, the `then` part defines what happens next. It's where the action truly happens.

| Property | Description |
|----------|-------------|
| `crud`   | Perform CRUD operations, manipulating data as needed. |
| `showForm` | Open a specific form, passing along necessary data. |
| `showRelevantForms` | Display forms relevant to the current context or data. |

### CRUD Operations

CRUD operations are the backbone of data management within 1Relation.

| Operation | Description |
|-----------|-------------|
| `insert` / `update` | Add new data or modify existing data. Specify the module, item type, and custom fields as needed. |
| `relate` | Create a relationship between items, linking data in meaningful ways. |
| `delete` | Remove data that's no longer needed, keeping your system clean and up-to-date. |

### Form Interaction

Actions can also enhance user interaction with forms:

| Interaction | Description |
|-------------|-------------|
| `showForm` | Open a form directly, making it easy for users to input or review data. |
| `showRelevantForms` | Present users with forms that are relevant to their current task or data, streamlining their workflow. |

---

By understanding and utilizing actions within 1Relation, you can automate processes, streamline user interactions, and ensure that your system responds intelligently to user inputs and scenarios.