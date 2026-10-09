# Triggers for Submit and Cancel

A guide to configuring `triggers` for submit and cancel buttons in form pages, based on the schema.

## When to Use
Use `triggers` to define actions that should be performed when a user clicks the submit or cancel button on a form page.

## How It Works
- `triggers` is an array of trigger objects, each specifying conditions and actions.
- Each trigger can include:
  - `label` (string, optional): Trigger label.
  - `labels` (object, optional): Translated trigger labels.
  - `breakAfter` (boolean, optional): If false, continue to next trigger even if this one succeeds.
  - `loop` (string, optional): Loop expression for repeated actions.
  - `if` (array, optional): Conditions for running the action (see [JSON Query](../../../../../JSON/json-query.md)).
  - `then` (object, required): Actions to perform if the trigger is activated. Supported actions include:
    - [`crud`](../../../../../JSON/actions-crud.md): CRUD operations (insert, update, relate, delete)
    - [`files`](../../../../../JSON/actions-files.md): File actions
    - [`note`](../../../../../JSON/actions-note.md): Note actions
    - [`itemImage`](../../../../../JSON/actions-item-image.md): Image actions
    - [`createResourcePlanning`](../../../../../apps/resourceplanning/introduction.md): Resource planning actions
    - [`redirect`](../../endflow.md): Navigation (back, dashboard, item, uri, itemkey)
    - [`redirect_uri`](../../endflow.md): URI for navigation
    - [`closeModal`](../../endflow.md): Close the modal
    - [`sendEmail`](../../../../../JSON/actions-send-email.md): Send email
    - `loop`: Loop expression for repeated actions (see advanced triggers)

## Usage Example
```json
{
  "submit": {
    "label": "Save",
    "triggers": [
      {
        "if": [["field_id", "=", "value"]],
        "then": {
          "crud": { "insert": { /* ... */ } }
        },
        "breakAfter": false
      },
      {
        "then": {
          "closeModal": true
        }
      }
    ]
  }
}
```
*This example shows a submit button with two triggers: one for a conditional insert and redirect, and one for closing the modal. The second trigger runs regardless of the first due to `breakAfter: false`.*