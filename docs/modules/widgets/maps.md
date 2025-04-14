# Maps widget

The Maps Widget in FlowAgent allows you to display and interact with the geographical location of items from the system on your dashboard. It provides a visual representation of data, making it easier to understand the spatial distribution of various entities.

Navigate to **Module > Module settings > Widgets** to find and set up the Maps Widget. Alternatively, you can access Maps Widgets through the **Tab Widgets** option from a dashboard.

To configure the Maps Widget through the FlowAgent UI, follow these steps:

- **Name**: Enter a name for the widget to identify it on the dashboard.
- **Label**: Enter a label for the widget.
- **Type**: Select 'Maps' from the dropdown to choose the widget type.
- **Sort**: Specify the position of the widget on the dashboard.
- **Size**: Set the size of the widget (between 1 and 12).
- **Tabs**: Select the tabs where this widget should be displayed.
- **Columns**: Add columns that should be included in the widget. Fields referenced in the JSON configuration must also be listed here to ensure the widget functions correctly.
- **Query**: Provide a JSON query to filter data displayed on the map.

> **Tip**: Any field that is referenced in the JSON configuration must also be added to the **Columns** list through the UI setup. This ensures that all necessary data is available for the widget to function correctly and display the intended information.

You can configure the Maps Widget using JSON to further customize its settings. Each property allows for specific customizations to ensure the map behaves and displays data in a manner that best suits user needs.

#### 3.1 Module ID Configuration

The `moduleid` property specifies which module provides the data that will be represented on the map.

| Property   | Type    | Required | Description                                                                 |
| ---------- | ------- | -------- | --------------------------------------------------------------------------- |
| `moduleid` | integer | Yes      | Unique identifier for the module whose data will be represented on the map. |

##### Example

```json
{
  "moduleid": 52
}
```

*Explanation:* This example demonstrates how to configure the respective JSON properties to achieve the desired functionality in the Maps Widget. Each property plays a specific role, such as defining the data source.

#### 3.2 Latitude and Longitude Configuration

The `lat` and `lng` properties are used in scenarios where only one item needs to be added to a map. This is typically the item that the map widget is being viewed on.

The `latField` and `lngField` properties are used in combination with a query to display multiple items on the map.

| Property   | Type   | Required | Description                                                                                           |
| ---------- | ------ | -------- | ----------------------------------------------------------------------------------------------------- |
| `lat`      | string | Yes      | Latitude value for the location, which can be dynamically set using placeholders (e.g., `[cf1154]`).  |
| `lng`      | string | Yes      | Longitude value for the location, which can be dynamically set using placeholders (e.g., `[cf1155]`). |
| `latField` | string | Yes      | Field used to determine the latitude of items on the map.                                             |
| `lngField` | string | Yes      | Field used to determine the longitude of items on the map.                                            |
| `zoom`     | integer | No      | Zoom level of the map. You can also use `fit`, to make sure all items are fitted within the zoom.     |

##### Example

```json
{
  "lat": "[cf1154]",
  "lng": "[cf1155]",
  "latField": "cf1066",
  "lngField": "cf1067"
}
```

*Explanation:* This example demonstrates the use of both direct coordinates (`lat` and `lng`) for a single item and field references (`latField` and `lngField`) for multiple items.

#### 3.3 Popup Configuration

The `popupTitleField` and `popupContentField` properties are used to configure the popups that appear when clicking on a marker.

| Property            | Type   | Required | Description                                                                              |
| ------------------- | ------ | -------- | ---------------------------------------------------------------------------------------- |
| `popupTitleField`   | string | No       | Field used to determine the title in the popup that appears when clicking on a marker.   |
| `popupContentField` | string | No       | Field used to determine the content in the popup that appears when clicking on a marker. |

##### Example

```json
{
  "popupTitleField": "cf636",
  "popupContentField": "cfmodule77MitName"
}
```

*Explanation:* This example shows how to set up the popup content when a marker is clicked, allowing users to display relevant information about each location.

#### 3.4 Widget Display Configuration

The `showWidgetHeader` and `height` properties allow you to customize the appearance of the map widget.

| Property           | Type    | Required | Description                                                                   |
| ------------------ | ------- | -------- | ----------------------------------------------------------------------------- |
| `showWidgetHeader` | boolean | No       | Determines whether the widget header should be displayed (`true` or `false`). |
| `height`           | integer | No       | Height of the map in pixels.                                                  |

##### Example

```json
{
  "showWidgetHeader": false,
  "height": 400
}
```

*Explanation:* This example demonstrates how to adjust the widget's appearance, such as hiding the widget header and setting the height in pixels.

#### 3.5 Data Filtering with Queries

The `query` property is used to filter the data that is displayed on the map. It is an array of conditions.

| Property | Type  | Required | Description                                                          |
| -------- | ----- | -------- | -------------------------------------------------------------------- |
| `query`  | array | No       | Array of conditions to filter the data that is displayed on the map. |

##### Example

```json
{
  "query": [
    [
      "module75Item.id",
      "=",
      "[itemid]"
    ],
    [
      "cf649.string",
      "IN",
      [
        "option_863",
        "option_862",
        "option_846"
      ]
    ],
    [
      "cf1066.string",
      "!=",
      ""
    ],
    [
      "cf1067.string",
      "!=",
      ""
    ]
  ]
}
```

*Explanation:* This example shows how to use queries to filter the data displayed on the map, ensuring only the relevant items are shown.

#### 3.6 Relations Configuration

The `relations` property defines relationships between different modules within the widget.

| Property    | Type   | Required | Description                                                        |
| ----------- | ------ | -------- | ------------------------------------------------------------------ |
| `relations` | object | No       | Defines relationships between different modules within the widget. |

##### Example

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

#### 3.7 Marker Icon Configuration

The `markerIconCondition` property allows dynamic changes to the marker icon based on specific field values.

| Property              | Type   | Required | Description                                                               |
| --------------------- | ------ | -------- | ------------------------------------------------------------------------- |
| `markerIconCondition` | object | No       | Allows dynamic changes to the marker icon based on specific field values. |
| `field`               | string | Yes      | The field whose value will be used to determine the marker icon.          |
| `default`             | string | Yes      | The default icon to use if no condition matches.                          |
| `condition`           | object | Yes      | A mapping of specific values of a field to icons.                         |

##### Example

```json
{
  "markerIconCondition": {
    "field": "module77MitName",
    "default": "star",
    "condition": {
      "Entreprise": "construction",
      "Tilsyn": "signpost"
    }
  }
}
```

*Explanation:* This example shows how to use the `markerIconCondition` to customize marker icons based on data values, which can enhance visualization by differentiating locations.

#### 3.8 Marker Color Configuration

The `markerColorCondition` property allows dynamic changes to the marker color based on specific field values.

| Property               | Type   | Required | Description                                                                |
| ---------------------- | ------ | -------- | -------------------------------------------------------------------------- |
| `markerColorCondition` | object | No       | Allows dynamic changes to the marker color based on specific field values. |
| `field`                | string | Yes      | The field whose value will be used to determine the marker color.          |
| `default`              | string | Yes      | The default color to use if no condition matches.                          |
| `condition`            | object | Yes      | A mapping of specific values of a "field" to colors                        |

##### Example

```json
{
  "markerColorCondition": {
    "field": "moduleitem_id",
    "default": "#6060ff",
    "condition": {
      "Entreprise": "#6060ff",
      "Tilsyn": "green"
    }
  }
}
```

*Explanation:* This example demonstrates how to dynamically change marker colors based on specific field values, allowing for better data visualization.