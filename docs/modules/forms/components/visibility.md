# Visibility

A guide to configuring the `visibility` component for form buttons, controlling when and how buttons appear based on logic and user context.

## When to Use
Use `visibility` to control the appearance and availability of form buttons, ensuring they are shown only to the right users, at the right time, and in the right context.

## How It Works
- The `visibility` object is used within button or action configurations.
- It combines visual settings, logical conditions, and optional confirmation dialogs.
- The main properties are `visual`, `condition`, and `popconfirm`.

## Options & Properties
- `visual` (object, required): Defines the button's appearance (label, color, icon, etc.).
- `condition` (array, optional): Array of conditions (JSON Query) that must be true for the button to be visible. See [JSON Query Documentation](/docs/JSON/json-query).
- `popconfirm` (object, optional): Adds a confirmation dialog before the action is executed.

### Visual Options
- `label` (string, required): Button text.
- `labels` (object, optional): Translated labels. See [Languages](/docs/misc/languages).
- `textColor` (string, optional, default: `white`): Button text color.
- `bgColor` (string, optional, default: `primary`): Button background color.
- `icon` (string, optional): Button icon. See [Icons](/docs/misc/icons).
- `displayIconOnly` (boolean, optional, default: `false`): Show only the icon, hide text.
- `allowMultipleItems` (boolean, optional, default: `false`): Enable button for multiple selected items.
- `placement` (string, optional, default: `widget`): Where the button appears (`widget` or `row`).

**Example:**
```json
"visual": {
  "label": "Complete Task",
  "textColor": "white",
  "bgColor": "success",
  "icon": "check_circle",
  "displayIconOnly": false
}
```

### Condition Options
- Array of conditions, each as `[key, operator, value]`.
- Controls when the button is visible.

**Example:**
```json
"condition": [
  ["task.cf433", "!=", "option_844"],
  ["group", "IN", "Sales"]
]
```

### Popconfirm Options
- `text` (string, required): Confirmation message.
- `no` (string, optional, default: "Cancel"): Cancel button text.
- `yes` (string, optional, default: "Confirm"): Confirm button text.
- `show` (boolean, required): Whether to show the confirmation dialog.

**Example:**
```json
"popconfirm": {
  "text": "Confirm that the task is done",
  "no": "Cancel",
  "yes": "Confirm",
  "show": true
}
```

## Usage Example: Full Visibility Configuration
```json
{
  "visibility": {
    "visual": {
      "label": "Complete Task",
      "textColor": "white",
      "bgColor": "success",
      "icon": "check_circle",
      "displayIconOnly": false
    },
    "condition": [
      ["task.cf433", "!=", "option_844"],
      ["group", "IN", "Sales"]
    ],
    "popconfirm": {
      "text": "Confirm that the task is done",
      "no": "Cancel",
      "yes": "Confirm",
      "show": true
    }
  }
}
```