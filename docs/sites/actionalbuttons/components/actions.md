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

## Basic Structure of an Action

Actions are defined by conditions (`if`) and the tasks to be executed (`then`).

| Property | Type  | Required | Description |
|----------|-------|----------|-------------|
| `if`     | array | No       | A set of criteria that determine when the action should be triggered. These criteria can involve item states, user roles, or other contextual data. |
| `then`   | object| Yes      | Defines the tasks or operations to be performed when the action is triggered. This can include CRUD operations, opening forms, and more. |

## Examples of Actions in Actional buttons

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

### `sendToast`: Send Toast message to user

In some cases we need to show a toast message to the user, telling them about what happened or what to do.

| Property                 | Type    | Default Value  | Options        | Description                                                                 |
|--------------------------|---------|----------------|----------------|-----------------------------------------------------------------------------|
| `type`                   | string  | success        | `danger`, `info` or `success` | What type of message to be displayed. Will affect the toast look. |
| `title`                  | string  | (empty)        | N/A            | Sets the title of the toast |
| `text`                   | string  | (empty)        | N/A            | Detailed description or message to be displayed to the user. Supports replaceables. |

:::note
Toast are only displayed if user stays on same page and not navigated away.
:::

### `webhook`: Call external webhook

In some cases we need to show a toast message to the user, telling them about what happened or what to do.

| Property                 | Type    | Default Value  | Options        | Description                                                                 |
|--------------------------|---------|----------------|----------------|-----------------------------------------------------------------------------|
| `url`                    | string  | (empty)        | N/A            | A url that supports webhooks from our servers. Has to be a valid HTTPS url. |

#### Webhook response

The webhook can respond with a message that will be displayed as a toast if webhook responds as JSON looking like followingen.
If no respond is given, they user will be notified that the webhook responded with no message.

```json
{
  "code": 200,
  "message": "Webhook triggered"
}
```

### `openLocation`: Navigate user to an lat/lng or address

This will open a new window with navigation turned on for the user. Good to fast and easy navigate user to a destination.

| Property                 | Type    | Default Value  | Options        | Description                                                                 |
|--------------------------|---------|----------------|----------------|-----------------------------------------------------------------------------|
| `location`               | string  | (empty)        | N/A            | Lat/lng or the address to navigate to.                                      |

### `sendEmail`: Send email

Ability to send an email to an specific email or user.

| Property                 | Type    | Default Value  | Options        | Description                                                                 |
|--------------------------|---------|----------------|----------------|-----------------------------------------------------------------------------|
| `toEmail`                | string  | (empty)        | N/A            | A static email receiver. |
| `toName`                 | string  | (empty)        | N/A            | A static name receiver. |
| `toUser`                 | string  | (empty)        | N/A            | A dynamic user to receive the email. |
| `fromName`               | string  | (empty)        | N/A            | A static email sender. |
| `fromEmail`              | string  | (empty)        | N/A            | A static name sender. |
| `fromUser`               | string  | (empty)        | N/A            | A dynamic user who is the sender of the email. |
| `replyToName`            | string  | From name.     | N/A            | The name of the one to receive any replies (static field). |
| `replyToEmail`           | string  | From email.    | N/A            | The email of the one to receive any replies (static field). |
| `subjectLine`            | string  | (empty)        | N/A            | Subject line just like in a regular email. |
| `previewText`            | string  | (empty)        | N/A            | A short recap of what the email is about. |
| `templateTitle`          | string  | (empty)        | N/A            | If using template, this is the title inside the email body. |
| `templateBody`           | string  | (empty)        | N/A            | If using template, this is the text inside the email body. |
| `templateHasButton`      | bool    | false          | `true` or `false` | If using template, this decides if a button should be shown. |
| `templateButtonText`     | string  | (empty)        | N/A            | If using templates that has a button, this is the text of the button. |
| `templateButtonUrl`      | string  | (empty)        | N/A            | If using templates that has a button, this is the url of the button. |
| `documentKeyName`        | string  | (empty)        | N/A            | If using documents (and not template), this is the keyname of the document. |