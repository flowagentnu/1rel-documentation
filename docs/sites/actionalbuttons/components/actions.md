# Actions

## Introduction

Actions within Actional buttons in FlowAgent are dynamic sets of tasks triggered based on specific conditions. These actions automate processes, manipulate data, and guide user interaction within the application. This document offers an overview of actions in Actional buttons, detailing their structure and interaction with other components.

:::tip
For an in-depth guide on the syntax, types, and advanced configurations of actions, please refer to the comprehensive [Actions Documentation](/docs/JSON/json-actions).
:::

## Purpose of Actions in Actional buttons

Actions in Actional buttons are designed to:

1. **Automate Tasks**: Execute tasks like CRUD operations automatically, enhancing efficiency in data management.
2. **Enhance User Interaction**: Trigger forms and display notifications, ensuring a responsive and engaging user experience.
3. **Streamline Workflows**: Seamlessly integrate with system workflows, triggering necessary actions in response to user interactions with Actional buttons.

## JSON Configuration

Actions are consists of conditions (`if`) and the tasks to be executed (`then`).
[JSON Actions](/docs/JSON/json-actions) are a standard concept in the Flow Platform and are used also in Forms. Below we will show what actions can be performed for Actional Buttons.


| Property                 | Type    | Description                                                                 |
|--------------------------|---------|-----------------------------------------------------------------------------|
| `crud`                   | object  | Perform CRUD operations like insert, update, relate, and delete. See [CRUD Operations](/docs/JSON/actions-crud) |
| `showForm`               | object  | Show a form to the user. See [Show Form Action](/docs/JSON/actions-show-form) |
| `showRelevantForms`      | object  | Show relevant forms to the user. See [Show Relevant Forms Action](/docs/JSON/actions-show-relevant-forms) |
| `sendToast`              | object  | Send a toast message to the user. See [Send Toast Action](/docs/JSON/actions-send-toast) |
| `webhook`                | object  | Call an external webhook. See [Webhook Action](/docs/JSON/actions-webhook) |
| `openLocation`           | object  | Open a location in a new window. See [Open Location Action](/docs/JSON/actions-open-location) |
| `sendEmail`              | object  | Send an email to a user. See [Send Email Action](/docs/JSON/actions-send-email) |



## Examples

### Example 1: Perform CRUD Operations

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