# Chart Widget

![alt text](app.chart.header.png)

The Chart Widget is used to display a graphical representation of various values within the system. For example, it can effectively visualize the sales value and cost value of a project, providing an easy-to-understand overview of financial metrics.

---

## How to Access the Chart Widget

Navigate to **Module > Module settings > Widgets** to find and set up the Chart Widget. Alternatively, you can access Chart Widgets through the **Tab Widgets** option from a dashboard.

---

## Configuring the Chart Widget through the UI

To configure the Chart Widget through the FlowAgent UI, follow these steps:

- **Name**: Enter a name for the widget to identify it on the dashboard.
- **Label**: Enter a label for the widget.
- **Type**: Select 'Chart' from the dropdown to choose the widget type.
- **Sort**: Specify the position of the widget on the dashboard.
- **Size**: Set the size of the widget (between 1 and 12).
- **Tabs**: Select the tabs where this widget should be displayed.
- **Columns**: This setting is not relevant for the Chart Widget.
- **Query**: Provide a JSON query to filter the data that will be visualized.

Note: The "Create items in module" option is not relevant for this functionality.

You can configure the Chart Widget using JSON to further customize its settings. Each property allows for specific customizations to ensure the chart behaves and displays data in a manner that best suits user needs.

![alt text](apps-chart-setup.png)

---

## JSON Configuration (If Applicable)

### Full JSON Example

```json
{
  "chart": {
    "type": "pie",
    "label": "Economy",
    "labels": [
      "Salesvalue",
      "Cost"
    ],
    "data": [
      "[cf1270]",
      "[cf1271]"
    ],
    "backgroundColor": [
      "green",
      "orange"
    ]
  },
  "height": 250,
  "showWidgetHeader": false
}
```

**Explanation:**

The JSON configuration above represents a pie chart titled "Economy" with two data points: "Salesvalue" and "Cost." Each data point is represented by a unique identifier and color. The property `height` defines the height of the chart, and `showWidgetHeader` determines whether the widget header is displayed.

---

### JSON Structure Breakdown

#### Chart Properties

The main properties of the chart configuration are described below:

##### Properties:

| Property         | Type    | Required | Description                                                   |
| ---------------- | ------- | -------- | ------------------------------------------------------------- |
| chart            | object  | Yes      | Defines the chart settings, including type, labels, and data. |
| height           | number  | No       | Specifies the height of the chart in pixels.                  |
| showWidgetHeader | boolean | No       | Indicates if the widget header should be shown.               |

**Example:**

```json
{
  "chart": {},
  "height": 500,
  "showWidgetHeader": true
}
```

**Explanation:**

This example includes the three main properties: `chart`, which defines the chart settings; `height`, which specifies the height of the chart in pixels; and `showWidgetHeader`, which determines if the widget header should be shown.

**Chart Object Properties:**

| Property        | Type   | Required | Description                                                                                                    |
| --------------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------- |
| type            | string | Yes      | The type of chart to display (e.g., "pie").                                                                    |
| label           | string | Yes      | The title of the chart displayed to users.                                                                     |
| labels          | array  | Yes      | The labels for each segment of the chart.                                                                      |
| data            | array  | Yes      | The data values corresponding to each label. can either be a fixed value or [cfxxx] to reference a customfield |
| backgroundColor | array  | Yes      | The colors used for each segment of the chart.                                                                 |

**Example:**

```json
{
  "chart": {
    "type": "bar",
    "label": "Economy",
    "labels": [
      "Salesvalue",
      "Cost"
    ],
    "data": [
      "[cf1270]",
      "[cf1271]"
    ],
    "backgroundColor": [
      "green",
      "orange"
    ]
  },
  "height": 500,
  "showWidgetHeader": true
}
```

**Explanation:**

This example configures a bar chart titled "Economy" with two data points: "Salesvalue" and "Cost." Each data point comes from a different custom field, represented by `[cf1270]` for "Salesvalue" and `[cf1271]` for "Cost." The `backgroundColor` property is used to set the colors for each data point, with "green" for "Salesvalue" and "orange" for "Cost." The `height` property defines the height of the chart in pixels, set to 500 in this example. The `showWidgetHeader` property is set to `true`, which means the widget header will be displayed.

---