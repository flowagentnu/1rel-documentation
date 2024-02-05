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

## Then Object
Actional Button has a `then` object that contains the tasks or operations to be performed when the action is triggered. This can include CRUD operations, opening forms, and more.

### `showForm`: Show form

Actional Button can be configured to display a form based on specific conditions.
To show a form, you must use the command "showForm", that have following properties:

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| `formId` | number | Yes      | The ID of the form to be displayed. |
| `itemKey`| string | No       | The key of the item to be used in the form as the main item. |
| `items`  | array  | No       | In some situations, you need to pass an item you need, but cannot get outside the Actional Button context. In this array you can pass any items you need |	

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
          "itemKey": "feedback",
          "items": [
            "customer",
            "project"
          ]
        }
      }
    }
  ]
}
```

### `showRelevantForms`: Show relevant forms

Sometimes we don´t know what form to be displayed, as this is setup as a "relvant form". This is a form that is relevant to the current item, and is setup in the form configuration. This is a way to show the relevant form.

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| `itemKey`| string | No       | The key of the item to be used in the form as the main item. |
| `items`  | array  | No       | In some situations, you need to pass an item you need, but cannot get outside the Actional Button context. In this array you can pass any items you need |	

```json
{
  "actions": [
    {
      "name": "Open Feedback Form",
      "if": [
        ["userRole", "=", "Customer"]
      ],
      "then": {
        "showRelevantForms": {
          "itemKey": "feedback",
          "items": [
            "customer",
            "project"
          ]
        }
      }
    }
  ]
}
```

### `crud`: CRUD Operations

```json
{
  "actions": [
    {
      "name": "Process Order",
      "then": {
        "crud": {
          "insert": {
            // Insert details...
          },
          "update": {
            // Update details...
          },
          "relate": {
            // Relate details...
          },
          "delete": {
            // Delete details...
          }
        }
      }
    }
  ]
}
```

For detailed syntax, types, advanced configurations, and examples of actions, please refer to the comprehensive [Actions Documentation](/docs/JSON/json-actions). Understanding the full capabilities of actions will empower you to create dynamic, efficient, and user-friendly interactions within your system.