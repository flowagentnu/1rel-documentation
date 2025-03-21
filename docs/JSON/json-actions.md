# JSON Actions

## Overview

Actions in FlowAgent enable dynamic and automated interactions within your system. They allow for the execution of predefined tasks based on user interactions or specific conditions, making forms and systems more interactive and intelligent.

## Purpose of Actions

Actions serve various purposes, including data management through CRUD operations, form navigation, and providing custom responses. They act as a digital workforce in your system, ready to perform tasks on command.

## Structure of an Action
An action in FlowAgent is a structured object that defines when it should be triggered (`if`) and what it should do (`then`). It's a crucial part of making your forms and systems interactive.


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
                "cf100": "[post.name]",
                "cf101": "[post.phonenumber]",
                "cf102": "[post.email]",
                "cf103": "[post.role]",
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

Available actions are defined in the documentation of Form and Actional Buttons. 
The list of all possible actions can be found in the sidebar under this section.

## Controlling Action Flow with `breakAfter`

The `breakAfter` property controls whether the system should continue with the next action after the current one. 

- **`true`**: Stops further actions after the current one.
- **`false`**: Continues with the next action if the current one is successful.

Use `breakAfter` to manage complex workflows where you need to stop or continue actions based on specific conditions.
