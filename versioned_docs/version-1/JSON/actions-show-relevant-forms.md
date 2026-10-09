# Show Relevant Forms Action

A guide to displaying relevant forms via automation in FlowAgent.

## When to Use
Use this page when you want to show a form that is dynamically determined by item context.

## How It Works
- Use the `showRelevantForms` action with an item key and optional items array.
- The relevant form is determined by the item’s configuration.

## Usage Example
**Show a relevant form for a customer:**
```json
{
  "actions": [
    {
      "then": {
        "showRelevantForms": {
          "itemKey": "customer",
          "items": ["project"]
        }
      }
    }
  ]
}
```

## Tips
- Use the correct item key for your context.