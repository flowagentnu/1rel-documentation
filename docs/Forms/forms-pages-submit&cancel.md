# Submit and Cancel

The `submit` and `cancel` components within a form page define the actions to be executed when the form is either submitted or cancelled. They also include configurations for button text and any triggers associated with these actions.

## Structure of `submit` and `cancel`

These components consist of properties that define their behavior and appearance on the form.

### Submit and Cancel Properties

| Property   | Type   | Required | Description |
|------------|--------|----------|-------------|
| `text`     | string | Yes      | The text displayed on the submit or cancel button. |
| `triggers` | array  | No       | An array of action triggers that are executed when the button is clicked. |

#### JSON Example

Below is an example illustrating the `submit` and `cancel` components within a form page:

```json
{
  "pages": {
    "1": {
      "name": "Page Name",
      // Fields configuration...
      "submit": {
        "text": "Submit",
        "triggers": [
          {
            // Trigger configurations...
          }
          // Additional triggers...
        ]
      },
      "cancel": {
        "text": "Cancel",
        "triggers": [
          {
            // Optional trigger configurations for cancel action...
          }
        ]
      }
    }
    // Additional pages...
  }
}
```

In this example, the submit component has a text label "Submit" and may include triggers that define actions to be executed upon form submission, such as moving to another page, updating data, or triggering custom workflows. Similarly, the cancel component includes a "Cancel" button, which can optionally have triggers for actions to be performed when the user cancels the form.