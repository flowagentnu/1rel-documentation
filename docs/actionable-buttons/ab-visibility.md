# Visibility

The `visibility` component of an Actional Button's JSON configuration determines when and how the button is displayed in the UI. It ensures that buttons are presented to the right users under the right circumstances, enhancing the user experience and the system's overall efficiency.

## Structure of `visibility`

The `visibility` object is structured to control both the visual presentation of the Actional Button and the logical conditions under which the button is displayed.

| Property                  | Type    | Required | Options  | Description |
|---------------------------|---------|----------|----------|-------------|
| `visibility`              | object  | No       | N/A      | The parent object that contains visual and condition properties. |
| → `visual`                | object  | No       | N/A      | An object containing properties that define the button's visual presentation. |
| →→ `text`                 | string  | No       | N/A      | The display text of the button. |
| →→ `textColor`            | string  | No       | N/A      | The color of the button text. |
| →→ `bgColor`              | string  | No       | N/A      | The background color of the button. |
| →→ `icon`                 | string  | No       | N/A      | The icon displayed on the button, typically from a predefined set like Google Material Symbols. |
| →→ `displayIconOnly`      | boolean | No       | N/A      | A flag to indicate if only the icon should be displayed, hiding the text. |
| `condition`               | array   | No       | N/A     | An array of conditions that define when the button is visible. Each condition is a set of parameters that the system evaluates. |

### Conditional Configuration

Specifies the conditions that must be met for the button to be visible. This section refers to the separate JSON Query documentation for detailed information on forming conditions.

| Property    | Type  | Required | Options | Description |
|-------------|-------|----------|---------|-------------|
| `condition` | array | No       | N/A     | An array of conditions that define when the button is visible. Each condition is a set of parameters that the system evaluates. |

### JSON Example

Below is an example demonstrating the `visibility` component within an Actional Button's configuration:

```json
{
  "visibility": {
    "visual": {
      "text": "Complete Task",
      "textColor": "white",
      "bgColor": "success",
      "icon": "check_circle",
      "displayIconOnly": false
    },
    "condition": [
      ["task.cf433", "!=", "option_844"],
      ["group", "IN", "Sales"]
    ]
  }
}
```

In this example:

- The `visual` properties define the button's appearance as having the text "Complete Task," with white text color on a success (green) background, and a check_circle icon.
- The `condition` array specifies that the button is visible only if the task's status is not "completed"(option_844) and the user is part of the "Sales" permission group.

This configuration ensures that the Actional Button is not only visually consistent with the application's design but also contextually appropriate, appearing only in relevant situations based on the defined conditions.

# Visibility in Actional Buttons

The `visibility` component of an Actional Button's JSON configuration determines when and how the button is displayed in the UI. It ensures that buttons are presented to the right users under the right circumstances, enhancing the user experience and the system's overall efficiency.

## Structure of `visibility`

The `visibility` object is structured to control both the visual presentation of the Actional Button and the logical conditions under which the button is displayed.

| Property                  | Type    | Required | Options  | Description |
|---------------------------|---------|----------|----------|-------------|
| `visibility`              | object  | No       | N/A      | The parent object that contains visual and condition properties. |
| → `visual`                | object  | No       | N/A      | An object containing properties that define the button's visual presentation. |
| →→ `text`                 | string  | No       | N/A      | The display text of the button. |
| →→ `textColor`            | string  | No       | N/A      | The color of the button text. |
| →→ `bgColor`              | string  | No       | N/A      | The background color of the button. |
| →→ `icon`                 | string  | No       | N/A      | The icon displayed on the button, typically from a predefined set like Google Material Symbols. |
| →→ `displayIconOnly`      | boolean | No       | N/A      | A flag to indicate if only the icon should be displayed, hiding the text. |
| `condition`               | array   | No       | N/A     | An array of conditions that define when the button is visible. Each condition is a set of parameters that the system evaluates. |

### JSON Example

Below is an example illustrating the `visibility` component within an Actional Button's configuration:

```json
{
  "visibility": {
    "visual": {
      "text": "Complete Task",
      "textColor": "white",
      "bgColor": "green",
      "icon": "check_circle",
      "displayIconOnly": false
    },
    "condition": [
      ["task.status", "!=", "completed"],
      ["user.role", "=", "admin"]
    ]
  }
}
