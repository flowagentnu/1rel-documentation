# Endflow and Redirection

The `endflow` component controls what happens when a form flow finishes—such as redirecting the user to a specific page, item, or closing a modal. You can set `endflow` globally for the entire form or within a specific trigger.

## When to Use
Use `endflow` to define what should happen after a form is completed, either for the whole form or for specific triggers (e.g., after a certain action).

## How It Works
- **Global Endflow:** Placed at the root of the form JSON, applies to the entire form.
- **Trigger-Specific Endflow:** Placed inside a trigger, overrides the global endflow for that trigger.
- If no `endflow` is set, the form will automatically choose an action (see Default Behavior).

## Default Behavior (If No Endflow Defined)
1. Redirect to the first predefined item in the Items Array (if available).
2. Redirect to a newly created item from the form's triggers.
3. Redirect to the starting item (the item on which the form was initiated).
4. Redirect to the dashboard (fallback).

## Global Endflow
Define at the root of your form JSON. Applies to the entire form unless overridden by a trigger.

**Options:**
- `redirect`: (string) The redirection target. See [Endflow Commands](#endflow-commands).
- `redirect_uri`: (string) Used with `redirect: "uri"` to specify a custom URI.
- `closeModal`: (boolean) If true, closes the modal after form completion. Ignores other endflow commands.

**Example:**
```json
{
  "endflow": {
    "redirect": "item"
  }
}
```
This redirects the user to the starting item after form completion.

## Trigger-Specific Endflow
Set inside a trigger to override the global endflow for that action.

**Options:**
- `endflow`: (boolean) Ends the form when the trigger is activated.
- `endflow_redirect`: (string) Redirection target for this trigger (see [Endflow Commands](#endflow-commands)).
- `closeModal`: (boolean) Closes the modal after this trigger. Ignores other endflow commands.
- `relevantForItems`: (JSON Query) [See JSON Query](/docs/JSON/json-query). Determines which items are relevant for the endflow. If not set, all items are considered relevant.

**Example:**
```json
{
  "submit": {
    "triggers": [
      {
        "then": {
          "endflow": true,
          "endflow_redirect": "itemkey.item1"
        }
      }
    ]
  },
  "endflow": {
    "redirect": "uri",
    "redirect_uri": "/item/12345"
  }
}
```
In this example, the trigger ends the form and redirects to `item1`. The global endflow would redirect to a specific URI if the trigger is not used.

## Endflow Commands
Use these values for `redirect` or `endflow_redirect` to control navigation:

- **`back`**: Return to the previous page (useful in multi-page forms).
- **`dashboard`**: Redirect to the dashboard (main menu).
- **`item`**: Redirect to the starting item (the item the form was started from).
- **`uri`**: Redirect to a custom URI (must set `redirect_uri`). Only available in global endflow.
- **`itemkey.[item]`**: Redirect to a specific item defined in the form's flow. Replace `[item]` with the unique item key.
- **`closeModal`**: Close the modal after form completion (can be used as a property or as a command).

## Usage Examples

### Redirect to Previous Page
```json
{
  "endflow": {
    "redirect": "back"
  }
}
```

### Redirect to Dashboard
```json
{
  "endflow": {
    "redirect": "dashboard"
  }
}
```

### Redirect to Starting Item
```json
{
  "endflow": {
    "redirect": "item"
  }
}
```

### Redirect to a Specific URI
```json
{
  "endflow": {
    "redirect": "uri",
    "redirect_uri": "/specific-path"
  }
}
```

### Redirect to a Specific Item by Key
```json
{
  "endflow": {
    "redirect": "itemkey.newItem"
  }
}
```

### Close Modal on Completion
```json
{
  "endflow": {
    "closeModal": true
  }
}
```