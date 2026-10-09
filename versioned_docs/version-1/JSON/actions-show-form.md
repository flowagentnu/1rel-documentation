# Show Form Action

A guide to displaying forms via automation in FlowAgent.

## When to Use
Use this page when you want to show a form based on a user action or condition.

## How It Works
- Use the `showForm` action with a form ID and optional item key/items.
- Can be triggered from buttons, automations, or other actions.

## Usage Example
**Show a feedback form:**
```json
{
  "actions": [
    {
      "then": {
        "showForm": {
          "formId": "formkeyname",
          "itemKey": "feedback",
          "items": ["customer", "project"]
        }
      }
    }
  ]
}
```

## Tips
- Use the correct form ID and item keys for your use case.