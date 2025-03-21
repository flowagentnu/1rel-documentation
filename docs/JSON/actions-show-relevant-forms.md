# Show relevant forms

Sometimes we don´t know what form to be displayed, as this is setup as a "relvant form". This is a form that is relevant to the current item, and is setup in the form configuration. This is a way to show the relevant form.

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| `itemKey`| string | No       | The key of the item to be used in the form as the main item. |
| `items`  | array  | No       | In some situations, you need to pass an item you need, but cannot get outside the Actional Button context. In this array you can pass any items you need |	

## Examples

### Example 1: Show Relevant Forms Action

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