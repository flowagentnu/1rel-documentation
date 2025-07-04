# Actions Component

A guide to the `actions` component for Actional Buttons in FlowAgent.

## When to Use
Use this page when you want to automate tasks or trigger workflows with Actional Buttons.

## How It Works
- The `actions` array defines what happens when the button is pressed.
- Each action can be a CRUD operation, show a form, send a toast, call a webhook, etc.
- Actions use standard [JSON Actions](../../JSON/json-actions.md) syntax.

## Available Actions
You can use the following actions in your `actions` array:

- **`crud`**: Perform CRUD operations like insert, update, relate, and delete. See [CRUD Operations](/docs/JSON/actions-crud).
- **`showForm`**: Show a form to the user. See [Show Form Action](/docs/JSON/actions-show-form).
- **`showRelevantForms`**: Show relevant forms to the user. See [Show Relevant Forms Action](/docs/JSON/actions-show-relevant-forms).
- **`sendToast`**: Send a toast message to the user. See [Send Toast Action](/docs/JSON/actions-send-toast).
- **`webhook`**: Call an external webhook. See [Webhook Action](/docs/JSON/actions-webhook).
- **`openLocation`**: Open a location in a new window. See [Open Location Action](/docs/JSON/actions-open-location).
- **`sendEmail`**: Send an email to a user. See [Send Email Action](/docs/JSON/actions-send-email).

## Usage Example
**Perform a CRUD operation:**
```json
{
  "actions": [
    { "crud": { "type": "create", "module": "customer" } }
  ]
}
```

## Tips
- Use the [JSON Actions documentation](../../JSON/json-actions.md) for advanced logic and action types.
- Combine multiple actions for complex workflows.

## Related Links
- [Main Components](components.md)
- [JSON Actions](../../JSON/json-actions.md)

---

For more on available actions, see the JSON Actions documentation.