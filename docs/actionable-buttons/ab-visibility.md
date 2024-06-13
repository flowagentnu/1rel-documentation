# Visibility

## Introduction

The `visibility` component plays a pivotal role in ensuring that Actional Buttons in 1Relation appear at the right time, to the right users, and in the right context. It is primarily structured around two key properties: `visual` for defining the button's appearance, and `condition` for setting the logical rules for its display.

## Top-Level Properties of `visibility`

The `visibility` object is composed of the following top-level properties, each contributing to the button's display logic and appearance:

| Property    | Type   | Required | Description |
|-------------|--------|----------|-------------|
| `visual`    | object | Yes      | Contains properties that define the button's visual presentation. It includes settings for the button's text, color, icon, and display preferences. |
| `condition` | array  | No       | An array of conditions that dictate when the button is visible. It involves a set of logical expressions evaluated against specific item attributes or user contexts. |
| `popconfirm`| object | No       | An optional confirmation dialog that prompts the user to confirm an action before proceeding. This object includes properties to customize the confirmation message, as well as the labels for the confirm and cancel buttons. |

## Visual Configuration

The `visual` object within the `visibility` component defines the aesthetic aspects of the Actional Button.

### Properties of `visual`

| Property          | Type    | Required | Default Value | Description |
|-------------------|---------|----------|-------------|-------------|
| `text`            | string  | Yes       |  | The text displayed on the button. |
| `textColor`       | string  | No       | white | The color of the button text. |
| `bgColor`         | string  | No       | primary | The background color of the button. |
| `icon`            | string  | No       |  | The icon displayed on the button. See page about [Icons](/docs/icons). |
| `displayIconOnly` | boolean | No       | false | Indicates if only the icon is displayed, hiding the button text. |
| `allowMultipleItems` | boolean | No | false | Indicates if the button should be enabled when multiple items are selected. Otherwise it will be disabled. |
| `placement`       | string  | No       | widget | The placement of the button. Possible values are `widget` and `row`. |

### JSON Example for `visual`

```json
"visual": {
  "text": "Complete Task",
  "textColor": "white",
  "bgColor": "success",
  "icon": "check_circle",
  "displayIconOnly": false
}
```
## Condition Configuration

The `condition` array within the `visibility` component determines the logical rules for when the Actional Button should be displayed.

### Properties of `condition`

A set of conditions that control the visibility of the button. Each condition is an array of three values: the key, operator, and value to be evaluated. Conditions are documented separeately [JSON Query Documentation](/docs/JSON/json-query)

### JSON Example for `condition`

```json
"condition": [
  ["task.cf433", "!=", "option_844"],
  ["group", "IN", "Sales"]
]
```

## Pop Confirm Configuration

The `popconfirm` object within the `visibility` component introduces an additional layer of user interaction by prompting the user to confirm an action before it proceeds. This functionality is critical for actions that have significant effects or cannot be easily undone, ensuring that the user has explicitly consented to the action.

### Properties of `popconfirm`

| Property | Type    | Required | Description                                       |
|----------|---------|----------|---------------------------------------------------|
| `text`   | string  | Yes      | The message displayed in the confirmation dialog. |
| `no`     | string  | No       | The text for the cancellation button. Default is "Cancel". |
| `yes`    | string  | No       | The text for the confirmation button. Default is "Confirm". |
| `show`   | boolean | Yes      | Controls whether the confirmation prompt should be displayed when the button is pressed. |

### JSON Example for `popconfirm`

```json
{
  "visibility": {
    "visual": {
      "text": "Close task",
      "textColor": "white",
      "bgColor": "success",
      "icon": "add",
      "displayIconOnly": false
    },
    "popconfirm": {
      "text": "Confirm that the task is done",
      "no": "Cancel",
      "yes": "Confirm",
      "show": true
    }
  }
}
```

## Overall Visibility Configuration

Combining `visual` and `condition` settings, the `visibility` component as a whole controls when and how an Actional Button is displayed.

### JSON Example for `visibility`

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

In this configuration:

- The `visual` settings define the button's appearance, making it visually identifiable and aligned with the application's design.
- The `condition` settings ensure that the button appears only under specific circumstances, enhancing the user experience by presenting contextually relevant options.

By configuring the `visibility` component thoughtfully, you can create Actional Buttons that are both aesthetically pleasing and functionally precise, guiding users effectively through their interactions with your system.



Details the conditions or parameters for interacting with the item. Includes item IDs, parent item IDs, or other relationships as specified in the [JSON Query Documentation](/docs/JSON/json-query)..