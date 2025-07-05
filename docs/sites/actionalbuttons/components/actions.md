# Actions Component

A guide to the `actions` component for Actional Buttons in FlowAgent.

## When to Use
Use this page when you want to automate tasks or trigger workflows with Actional Buttons.

## How It Works
- The `actions` array defines what happens when the button is pressed.
- Each action can be a CRUD operation, show a form, send a toast, call a webhook, etc.
- Actions use standard [JSON Actions](/docs/JSON/json-actions.md) syntax.
- Actions can include conditions to control when or how an action is executed.

## Available Actions
You can use the following actions in your `actions` array:

- **`crud`**: Perform CRUD operations like insert, update, relate, and delete. See [CRUD Operations](/docs/JSON/actions-crud).
- **`showForm`**: Show a form to the user. See [Show Form Action](/docs/JSON/actions-show-form).
- **`showRelevantForms`**: Show relevant forms to the user. See [Show Relevant Forms Action](/docs/JSON/actions-show-relevant-forms).
- **`sendToast`**: Send a toast message to the user. See [Send Toast Action](/docs/JSON/actions-send-toast).
- **`webhook`**: Call an external webhook. See [Webhook Action](/docs/JSON/actions-webhook).
- **`openLocation`**: Open a location in a new window. See [Open Location Action](/docs/JSON/actions-open-location).
- **`sendEmail`**: Send an email to a user. See [Send Email Action](/docs/JSON/actions-send-email).

## Conditional Actions
Actions can be made conditional, so they only run when certain criteria are met. To add conditions to an action, use these properties:
- **if**: An array of conditions to check (see [Conditionals documentation](/docs/misc/conditionals.md)).
- **conditionType** and **conditionVar**: For advanced logic, such as checking result counts or query results. See the [Conditionals documentation](/docs/misc/conditionals.md#advanced-using-conditiontype-and-conditionvar) for all options.
- **then**: The action(s) to perform if the condition is met.
- **name**: (optional) A label for the condition/action.

For a full list of supported operators, advanced usage, and more real-world examples, refer to the [main Conditionals documentation](/docs/misc/conditionals.md). This is the single source of truth for all conditional logic in FlowAgent.

## Usage Example
**Perform a CRUD operation:**
```json
{
  "actions": [
    { "crud": { "type": "create", "module": "customer" } }
  ]
}
```

**Conditional Action Example:**
```json
{
  "actions": [
    {
      "if": [
        ["module_id", "=", "102"],
        ["cf924.string", "=", "[user]"],
        ["cf923.string", "=", "[datenow]"]
      ],
      "conditionType": "has_results",
      "name": "Already registered today",
      "then": {
        "toast": {
          "type": "danger",
          "title": "You have already ordered food",
          "text": "You cannot order food again"
        }
      }
    }
  ]
}
```

## Tips
- Use the [JSON Actions documentation](/docs/JSON/json-actions.md) for advanced logic and action types.
- Combine multiple actions and conditions for complex workflows.
- Use the `if` property to check for specific data before running an action.
- For all details on writing conditions, see the [Conditionals documentation](/docs/misc/conditionals.md).

## Related Links
- [Main Components](components.md)
- [JSON Actions](/docs/JSON/json-actions.md)
- [Conditionals](/docs/misc/conditionals.md)

---

For more on available actions, see the JSON Actions documentation.