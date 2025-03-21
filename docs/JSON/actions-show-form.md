# Show form
Actional Button can be configured to display a form based on specific conditions.
To show a form, you must use the command "showForm", that have following properties:

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| `formId` | number | Yes      | The ID of the form to be displayed. |
| `itemKey`| string | No       | The key of the item to be used in the form as the main item. |
| `items`  | array  | No       | In some situations, you need to pass an item you need, but cannot get outside the Actional Button context. In this array you can pass any items you need |

## Examples

### Example 1: Show Form Action
The following example demonstrates how to use the `showForm` action to display a form with specified details.

```json
{
  "actions": [
    {
      "name": "Open Feedback Form",
      "then": {
        "showForm": {
          "formId": 456,
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