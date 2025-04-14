# Timeline Widget

The Timeline Widget in FlowAgent allows users to visualize and track calendar events in a chronological list view. This feature helps users quickly understand when certain meetings or events have occurred, such as meetings with a specific customer. The widget provides a clean and easy-to-follow timeline, ideal for getting an overview of customer interactions and appointments.

Navigate to **Module > Module settings > Widgets** to find and set up the Timeline Widget. Alternatively, you can access Timeline Widgets through the **Tab Widgets** option from a dashboard.

To configure the Timeline Widget through the FlowAgent UI, follow these steps:

- **Name**: Enter a name for the widget to identify it on the dashboard.
- **Label**: Enter a label for the widget.
- **Type**: Select 'Timeline' from the dropdown to choose the widget type.
- **Sort**: Specify the position of the widget on the dashboard.
- **Size**: Set the size of the widget (between 1 and 12).
- **Tabs**: Select the tabs where this widget should be displayed.

You can further configure the Timeline Widget using JSON to customize its settings. Each property allows for specific customizations to ensure the timeline fits the user needs.

## JSON Configuration Properties

#### Full Example

```json
{
  "icon": "event",
  "iconColor": "white",
  "iconBackgroundColor": "orange",
  "height": 325,
  "calendarTimeline": {
    "showRelatedOnly": true
  }
}
```

*Explanation:* This full example provides a complete JSON configuration for the Timeline Widget, demonstrating how to set up properties to customize its appearance and behavior.

### 3.1 Calendar Timeline Configuration

The `calendarTimeline` property allows you to customize the behavior of the Timeline Widget, including filtering options.

| Property           | Type    | Required | Description                                                            |
| ------------------ | ------- | -------- | ---------------------------------------------------------------------- |
| `calendarTimeline` | object  | Yes      | Object containing settings for the calendar timeline display.          |
| `showRelatedOnly`  | boolean | No       | Indicates if only related events should be displayed (default: false). |

#### Example

```json
{
  "calendarTimeline": {
    "showRelatedOnly": true
  }
}
```

*Explanation:* This example shows how to configure the calendar timeline to only show events related to the current context, such as customer-specific meetings. This ensures users see only the most relevant information. This ensures users see only the most relevant information.

### 3.2 Widget Display Configuration

Configure how to visually represent the Timeline Widget.

| Property             | Type   | Required | Description                                               |
| -------------------- | ------ | -------- | --------------------------------------------------------- |
| `icon`               | string | Yes      | Specifies the icon to use in the widget.                  |
| `iconColor`          | string | No       | The color of the icon in the widget.                      |
| `iconBackgroundColor`| string | No       | The color of the background behind the icon in the widget.|
| `height`             | integer | Yes      | Defines the height of the widget in pixels.               |

#### Example

```json
{
  "icon": "event",
  "iconColor": "white",
  "iconBackgroundColor": "orange",
  "height": 325
}
```

*Explanation:* This example shows how to set the icon, its related colors, and height to ensure the widget is visually appealing, easy to understand, and appropriately sized.



