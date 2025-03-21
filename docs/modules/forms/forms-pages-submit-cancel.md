# Submit and Cancel

The `submit` and `cancel` components within a form page are crucial for defining the actions and navigation steps that occur when the form is either submitted or cancelled. They include configurations for button text, action triggers, default actions, and redirection upon action completion.

## Structure of `submit` and `cancel`

These components consist of properties that define their behavior, appearance, and the actions that are executed upon user interaction.

## Submit and Cancel Properties

| Property   | Type   | Required | Description |
|------------|--------|----------|-------------|
| `label`     | string | Yes      | The label displayed on the submit or cancel button. |
| `labels`    | object | No       | Translated versions of the label. See the page about [languages](/docs/misc/languages). |
| `triggers` | array  | No       | An array of action triggers that are executed when the button is clicked. Triggers can include conditions, actions, and endflow configurations. |
| `default`  | array  | No       | Default actions that are executed when the button is clicked, in addition to any specified triggers. |
| `uri`      | string | No       | A specific URL to redirect the user upon action completion. This property is applicable for both submit and cancel actions. |

:::info
Note that `uri` is optional, but if provided, it will skip the ´triggers´ and redirect the user to the specified URL.
:::

## Examples

### Example 1: Submit and Cancel Configuration

Below is an example illustrating the `submit` and `cancel` components within a form page:

```json
{
  "label": "Form Name",
  "pages": {
    "1": {
      "label": "Page Name",
      // Fields configuration...
      "submit": {
        "label": "Submit",
        "triggers": [
          {
            // Complex trigger configurations...
          }
          // Additional triggers...
        ],
        "default": [
          {
            // Default actions...
          }
        ],
        "uri": "/redirect-on-submit"
      },
      "cancel": {
        "label": "Cancel",
        "triggers": [
          {
            // Optional trigger configurations for cancel action...
          }
        ],
        "uri": "/redirect-on-cancel"
      }
    }
    // Additional pages...
  }
}
```

In this example, both the `submit` and `cancel` components include button text, triggers for defining complex actions and conditions to be executed upon user interaction, default actions, and a `uri` for redirection after the action is completed. The structure and properties of `submit` and `cancel` are identical, ensuring consistency and flexibility in form configuration.