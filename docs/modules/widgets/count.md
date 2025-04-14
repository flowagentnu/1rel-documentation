# Count Widget

The Count Widget in FlowAgent allows you to display aggregated numerical data on your dashboard, providing a quick summary of key metrics or counts of items within a particular module. By tapping on the widget, a subpage can be opened where details related to the count can be seen by the user.

Navigate to **Module > Module settings > Widgets** to find and set up the Count Widget. Alternatively, you can access Count Widgets through the **Tab Widgets** option from a dashboard.

To configure the Count Widget through the FlowAgent UI, follow these steps:

- **Name**: Enter a name for the widget to identify it on the dashboard.
- **Label**: Enter a label for the widget.
- **Type**: Select 'Count' from the dropdown to choose the widget type.
- **Sort**: Specify the position of the widget on the dashboard.
- **Size**: Set the size of the widget (between 1 and 12).
- **Tabs**: Select the tabs where this widget should be displayed.
- **Columns**: This setting is not relevant for the Count Widget.
- **Query**: Provide a JSON query to filter the data that will be counted.

You can configure the Count Widget using JSON to further customize its settings. Each property allows for specific customizations to ensure the count behaves and displays data in a manner that best suits user needs.

## JSON Configuration Properties

#### Full Example

```json
{
  "moduleid": 113,
  "relations": {
    "module112": {
      "parent": 112,
      "child": 113,
      "relationid": 118
    }
  },
  "query": [
    [
      "module112Item.id",
      "=",
      "[itemid]"
    ]
  ],
  "label": "Active",
  "pluralLabel": "Active",
  "displayType": "vertical",
  "icon": "view_timeline",
  "iconColor": "white",
  "iconBackgroundColor": "#68aa68",
  "tapActions": {
    "tap": {
      "action": "tab",
      "value": "customerstab_projects"
    }
  },
  "mobileSize": 3,
  "variant": 2
}
```

*Explanation:* This full example provides a complete JSON configuration for the Count Widget, demonstrating all the possible properties and how they interact to customize the widget's appearance and behavior.

### 3.1 Module ID Configuration

The `moduleid` property specifies which module provides the data that will be counted.

| Property   | Type    | Required | Description                                                                   |
| ---------- | ------- | -------- | ----------------------------------------------------------------------------- |
| `moduleid` | integer | Yes      | Unique identifier for the module whose data will be represented by the count. |

#### Example

```json
{
  "moduleid": 52
}
```

*Explanation:* This example demonstrates how to configure the respective JSON properties to achieve the desired functionality in the Count Widget. Each property plays a specific role, such as defining the data source.

### 3.2 Relations Configuration

The `relations` property defines relationships between different modules within the widget.

| Property    | Type   | Required | Description                                                        |
| ----------- | ------ | -------- | ------------------------------------------------------------------ |
| `relations` | object | No       | Defines relationships between different modules within the widget. [JSON Relations Documentation](/docs/JSON/json-relations) ||

#### Example

```json
{
  "relations": {
    "module75": {
      "parent": 75,
      "child": 77,
      "relationid": 79
    }
  }
}
```

*Explanation:* This example demonstrates how to set up relationships between modules, which is useful when multiple related datasets need to be displayed.

### 3.3 Query Configuration

The `query` property is used to filter the data that will be counted. It is an array of conditions, allowing you to define specific criteria for the count.

| Property | Type  | Required | Description                                                  |
| -------- | ----- | -------- | ------------------------------------------------------------ |
| `query`  | array | No       | Array of conditions to filter the data that will be counted. [JSON Query Documentation](/docs/JSON/json-query) | |

#### Example

```json
{
  "query": [
    [
      "module75Item.status",
      "=",
      "active"
    ],
    [
      "cf1066.string",
      "!=",
      ""
    ]
  ]
}
```

*Explanation:* This example shows how to use queries to filter the data counted, ensuring only relevant items are included in the total.

### 3.4 Widget Display Configuration

The `display` property allows customization of how the Count Widget is displayed on the dashboard.

| Property               | Type    | Required | Description                                                          |
| ---------------------- | ------- | -------- | -------------------------------------------------------------------- |
| `label`                | string  | Yes      | Defines the text under the number represented in the count widget.   |
| `pluralLabel`          | string  | No       | The same as `label` but used for values higher than 1.               |
| `displayType`          | string  | Yes      | Determines the representation of the widget, either "horizontal" or "vertical". |
| `icon`                 | string  | Yes      | The icon used in the widget.                                         |
| `iconColor`            | string  | No       | The color of the icon in the widget.                                 |
| `iconBackgroundColor`  | string  | No       | The color of the circular background around the icon in the widget.  |

#### Example

```json
{
  "label": "Active",
  "pluralLabel": "Active",
  "displayType": "vertical",
  "icon": "view_timeline",
  "iconColor": "white",
  "iconBackgroundColor": "#68aa68"
}
```

*Explanation:* This example shows how to configure the display settings of the Count Widget, including labels, icon, and layout options to customize its appearance.

### 3.5 Tap Actions Configuration

The `tapActions` property allows you to configure what happens when the user taps on the Count Widget.

| Property     | Type   | Required | Description                                                    |
| ------------ | ------ | -------- | -------------------------------------------------------------- |
| `tapActions` | object | No       | Defines the actions that occur when the widget is tapped.      |
| `tap`        | object | Yes      | Specifies the action to be performed when tapping the widget.  |
| `action`     | string | Yes      | The type of action to perform, currently only "tab" is supported. |
| `value`      | string | Yes      | The tab that will be opened when the widget is tapped. The value is the last part of the URL for that given tab. |

#### Example

```json
{
  "tapActions": {
    "tap": {
      "action": "tab",
      "value": "customerstab_projects"
    }
  }
}
```

*Explanation:* This example demonstrates how to configure a tap action that opens a specific tab when the Count Widget is tapped. The `value` property specifies the tab to open by using the last part of the tab's URL.

### 3.6 Variant Configuration

The `variant` property allows you to select between different visual styles for the Count Widget.

| Property   | Type    | Required | Description                                             |
| ---------- | ------- | -------- | ------------------------------------------------------- |
| `variant`  | integer | No       | Specifies the visual style of the widget. Available values are: 1 (default) and 2 (soft) |

#### Example

```json
{
  "variant": 2
}
```

*Explanation:* This example demonstrates how to configure the `variant` property to apply the "soft" visual style to the Count Widget. Variants allow for visual differentiation and customization depending on user preference.

### 3.7 Mobile Size Configuration

The `mobileSize` property allows you to set an alternative size for the widget when viewed on a mobile device.

| Property     | Type    | Required | Description                                                                |
| ------------ | ------- | -------- | -------------------------------------------------------------------------- |
| `mobileSize` | integer | No       | A number between 1 and 12 that gives an alternative size for the widget on mobile devices. |

#### Example

```json
{
  "mobileSize": 3
}
```

*Explanation:* This example shows how to configure the `mobileSize` property to specify an alternative size for the widget when viewed on mobile devices. This allows for better optimization and display of the widget depending on the screen size and orientation.