# Main Components

## Introduction
This document provides a comprehensive guide on the JSON structure used for configuring Actional Buttons in FlowAgent. It aims to support system designers in comprehending and implementing the diverse components and settings essential for the creation and management of Actional Buttons. The documentation is organized in a hierarchical manner, commencing with top-level components and progressing to more intricate elements, along with their properties. Each component is elucidated with its respective properties, types, and necessary values, complemented by practical JSON examples for a clearer understanding.

## Top-Level Properties

The JSON structure for Actional Buttons is mainly segmented into four top-level components: `items`, `visibility`, `actions`, and `outcome`. Each component is pivotal in the configuration of Actional Buttons.

| Component    | Type   | Required | Description |
|--------------|--------|----------|-------------|
| `items`      | object | No       | Defines the data items that the button can interact with or modify. This includes specifying any items for CRUD operations or other item-based conditions and actions. |
| `visibility` | object | Yes       | Determines when and under what conditions the button should be visible to the user. This includes settings for visual aspects of the button as well as logical conditions for its display. |
| `actions`    | array  | Yes      | Specifies the set of actions that will be triggered when the button is pressed. This encompasses not just the direct actions but also any conditional logic that decides what actions are taken. |
| `outcome`    | object | No       | Describes the expected outcome or feedback after the button is pressed. This can include visual feedback, messages, redirections, or other post-action behaviors. |

## How to Use
Actional Button is set up globally on site settings, but can be used in different contexts, such as in a Power Search Table, as a Row Button, or in a Form, as a Form Button. The JSON structure for Actional Buttons is the same across all contexts, but the context in which the button is used may affect the available items and conditions.

The method for using Actional Buttons is by calling it with the followingen JSON:
```json
{
  "actionalButtons": [
    {
      "keyName": "ab_medlem---opret-lead"
    }
  ]
}
```

The `keyName` is the unique identifier for the Actional Button, and is used to fetch the configuration from the site settings.
You can in here also manipulate the configuration by adding or removing items, conditions, actions, and outcome.

```json
{
  "actionalButtons": [
    {
      "keyName": "ab_salgstur---planl-g---skift-status",
      "visibility": {
        "visual": {
          "displayIconOnly": true,
          "placement": "row",
          "icon": "edit",
          "bgColor": "primary",
        }
      }
    }
  ]
}
```

### Display on Dashboard
Dashboards can have Actional Buttons in the navigation bar, by going to Site Settings > General, in the configuration:

```json
{
  "dashboard": {
    "actionalButtons": [
      {
        "keyName": "ab_medlem---opret-lead"
      }
    ]
  }
}
```


### Display on Widget
Widgets can have Actional Buttons in their card header, by going to the Widget's settings, in the configuration:

```json
{
  "actionalButtons": [
    {
      "keyName": "ab_medlem---opret-lead"
    }
  ]
}
```

### Display in Power Search Table Row
Power Search Table can have Actional Buttons in the table rows, by going to Widget's settings, in the configuration:

```json
{
  "actionalButtons": [
    {
      "keyName": "ab_medlem---opret-lead",
      "visibility": {
        "visual": {
          "placement": "row"
        }
      }
    }
  ]
}
```

### JSON Example

Below is a simplified JSON example showcasing how these top-level components may be organized within an Actional Button's configuration:

```json
{
  "items": {
    // Definitions of items to be used or affected by the button
  },
  "visibility": {
    // Conditions and visual properties defining when and how the button is displayed
  },
  "actions": {
    // Actions and conditional logic to be executed when the button is pressed
  },
  "outcome": {
    // Definitions of the outcome or feedback following the button's activation
  }
}
