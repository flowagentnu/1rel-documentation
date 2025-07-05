# Submit and Cancel Buttons

A guide to configuring the `submit` and `cancel` buttons for form pages, based on the schema.

## When to Use
Use the `submit` and `cancel` properties to define the actions, labels, and triggers for the form's primary navigation buttons.

## How It Works
- Both `submit` and `cancel` are objects with the same structure and options.
- They define the button label, translations, and the actions to perform when clicked.
- Actions are defined as triggers, which can include conditions and a variety of tasks (CRUD, navigation, etc.).

## Options & Properties (per schema)
- `label` (string, required): The button text.
- `labels` (object, optional): Translated versions of the label. Keys are language codes.
- `triggers` (array, optional): Array of trigger objects, each with:
  - `label` (string, optional): Trigger label.
  - `labels` (object, optional): Translated trigger labels.
  - `breakAfter` (boolean, optional): If false, continue to next trigger even if this one succeeds.
  - `loop` (string, optional): Loop expression for repeated actions.
  - `if` (array, optional): Conditions for running the action.
  - `then` (object, required): Actions to perform (CRUD, files, note, navigation, etc.).

## Usage Example
```json
{
  "submit": {
    "label": "Save",
    "triggers": [
      {
        "if": [["field_id", "=", "value"]],
        "then": {
          "crud": { "insert": { /* ... */ } },
          "redirect": "dashboard"
        }
      }
    ]
  },
  "cancel": {
    "label": "Cancel"
  }
}
```
*This example shows a submit button with a trigger and a simple cancel button. Both support the same structure and options.*

## Related Links
- [Form Pages Introduction](../introduction.md)
- [Languages documentation](/docs/misc/languages)
