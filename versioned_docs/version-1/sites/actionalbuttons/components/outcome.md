# Outcome Component

A guide to the `outcome` component for Actional Buttons in FlowAgent.

## Introduction
The `outcome` component defines the feedback or response after an action is executed. It controls how the result is communicated to the user—such as showing a toast, redirecting, or opening a tab.

## How It Works
The `outcome` object is added to your action configuration. It supports several properties:

- **type** (string, required):
  - What kind of feedback to present. Options: `toast`, `redirect`, `none`, `tab`.
- **title** (string, optional):
  - The title of the toast (if using `type: toast`).
- **message** (string, optional):
  - The message or feedback to the user (for toast).
- **uri** (string, optional):
  - The URI to redirect to (for `type: redirect`).
- **tabKeyName** (string, optional):
  - The key name of the tab to open (for `type: tab`).
- **widgetsUpdate** (array, optional):
  - List of widget key names to update after the action. If not set, all widgets on the page are updated.
- **widgetsAllowSoftUpdate** (bool, optional):
  - Allow widgets to update if data changes. Default: `true`.
- **dismissActionToast** (bool, optional):
  - Hide toast from actions. Default: `false`.

### Outcome Types
- **toast**: Show a toast message to the user.
  - Needs `title` and `message`.
- **redirect**: Redirect the user to another page or URI.
  - Needs `uri`.
- **tab**: Open a specific tab in the system.
  - Needs `tabKeyName`.
- **none**: No feedback is shown.

### Widget Update
- Use `widgetsUpdate` to specify which widgets should update after the action.
- By default, all widgets on the page are updated.
- For table row buttons, the related row/widget is always updated by default.

## JSON Examples

**Show a toast after an action:**
```json
{
  "outcome": {
    "type": "toast",
    "title": "Action Completed",
    "message": "The task status has been successfully updated."
  }
}
```

**Redirect to an internal page:**
```json
{
  "outcome": {
    "type": "redirect",
    "uri": "/dashboard"
  }
}
```

**Redirect to an external URL:**
```json
{
  "outcome": {
    "type": "redirect",
    "uri": "www.google.com"
  }
}
```

**Open a specific tab:**
```json
{
  "outcome": {
    "type": "tab",
    "tabKeyName": "projekttab_sagsinfo"
  }
}
```

**Update specific widgets:**
```json
{
  "outcome": {
    "widgetsUpdate": [
      "opgaverwidg_info",
      "opgaverwidg_tidsregistreringer"
    ]
  }
}
```

By configuring the `outcome` component, you can ensure Actional buttons provide meaningful feedback and guide users efficiently through their tasks. The flexibility of `outcome` allows for a responsive and user-friendly experience.

