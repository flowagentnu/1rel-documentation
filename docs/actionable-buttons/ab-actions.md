# Actions

## Introduction

Actions within Actionable Buttons in 1Relation are dynamic sets of tasks triggered based on specific conditions. These actions automate processes, manipulate data, and guide user interaction within the application. This document offers an overview of actions in Actionable Buttons, detailing their structure and interaction with other components.

:::tip
For an in-depth guide on the syntax, types, and advanced configurations of actions, please refer to the comprehensive [Actions Documentation](/docs/JSON/json-actions).
:::

## Purpose of Actions in Actionable Buttons

Actions in Actionable Buttons are designed to:

1. **Automate Tasks**: Execute tasks like CRUD operations automatically, enhancing efficiency in data management.
2. **Enhance User Interaction**: Trigger forms and display notifications, ensuring a responsive and engaging user experience.
3. **Streamline Workflows**: Seamlessly integrate with system workflows, triggering necessary actions in response to user interactions with Actionable Buttons.

## Basic Structure of an Action

Actions are defined by conditions (`if`) and the tasks to be executed (`then`).

| Property | Type  | Required | Description |
|----------|-------|----------|-------------|
| `if`     | array | No       | A set of criteria that determine when the action should be triggered. These criteria can involve item states, user roles, or other contextual data. |
| `then`   | object| Yes      | Defines the tasks or operations to be performed when the action is triggered. This can include CRUD operations, opening forms, and more. |

## Examples of Actions in Actionable Buttons

### Basic Action Configuration

```json
{
  "actions": [
    {
      "name": "Mark Task as Complete",
      "if": [
        ["taskStatus", "!=", "Completed"]
      ],
      "then": {
        "crud": {
          "update": {
            "task": {
              "customfield": {
                "cf445": "Completed"
              }
            }
          }
        }
      }
    }
  ]
}
```

### Action with Conditional Display and Form Trigger

```json
{
  "actions": [
    {
      "name": "Open Feedback Form",
      "if": [
        ["userRole", "=", "Customer"]
      ],
      "then": {
        "showForm": {
          "formId": 456,
          "itemKey": "feedback"
        }
      }
    }
  ]
}
```

### Action with Multiple Operations

```json
{
  "actions": [
    {
      "name": "Process Order",
      "then": {
        "insert": {
          // Insert details...
        },
        "update": {
          // Update details...
        },
        "relate": {
          // Relate details...
        }
      }
    }
  ]
}
```

For detailed syntax, types, advanced configurations, and examples of actions, please refer to the comprehensive [Actions Documentation](/docs/JSON/json-actions). Understanding the full capabilities of actions will empower you to create dynamic, efficient, and user-friendly interactions within your system.