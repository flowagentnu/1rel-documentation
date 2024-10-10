# Table widget

The table widget in 1Relation allows you to display data in a structured and organized manner.

## Configuring Table Widgets through UI

Follow these steps to configure your table widget:

- **Name**: Specify the name of the widget.
- **Sort**: Determine the order of this widget on the dashboard.
- **Size**: Set the size of the widget (between 1 and 12).
- **Tabs**: Select in which tab(s) this widget should be shown.
- **Create items in module**: Adds a create button to the table. When used, it creates a new item for the selected module.
- **Columns**: Specify which columns should be shown in the table and their order.

## Query/JSON

To set up a table widget, we need to configure the widget with JSON.

## 1. Widget Module Data

The table widget will show data from a specific module. The JSON file starts with the ID of the module we want to present data from.

#### Example 1: Widget Module Data

```json
{
  "moduleid": 41 // Unique identifier for the module whose data will be represented in the widget.
}
```

## Widget Configuration

Customize the appearance of your widget with these main properties:

| Property              | Type    | Required | Options                   | Description                                                |
| --------------------- | ------- | -------- | ------------------------- | ---------------------------------------------------------- |
| `icon`                | string  | No       | N/A                       | Icon for the widget. Visit Google Fonts Icons for options. |
| `iconColor`           | string  | No       | Hex color code            | Color of the icon. Use a hex color code.                   |
| `iconBackgroundColor` | string  | No       | Hex color code            | Background color of the icon. Use a hex color code.        |
| `pageLength`          | integer | No       | Any integer between 1-100 | The number of rows visible in the table. Default is 10.    |

#### Example 2: Widget Configuration

```json
{
  "icon": "assignment",
  "iconColor": "white",
  "iconBackgroundColor": "#634DA3",
  "pageLength": 20
}
```

In this widget configuration, the chosen icon for the widget is 'assignment'. The color of the icon is set to white, and the background color of the icon is #634DA3. Additionally, this configuration is set to display 20 rows in the table widget.

## Relations

Define the relationships between different modules within your widget:

| Property       | Type    | Required | Options | Description                                                                           |
| -------------- | ------- | -------- | ------- | ------------------------------------------------------------------------------------- |
| `parent`       | integer | Yes      | N/A     | The ID of the parent module in the relation.                                          |
| `child`        | integer | Yes      | N/A     | The ID of the child module in the relation.                                           |
| `relationid`   | integer | No       | N/A     | The ID of the specific relation, if multiple relations exist between the two modules. |
| `relationtype` | string  | No       | N/A     | The type of relation between the two modules.                                         |
| `parent_id`    | integer | No       | N/A     | The ID of the parent item in the relation.                                            |
| `child_id`     | integer | No       | N/A     | The ID of the child item in the relation.                                             |

#### Example 3: Widget with Relations

```json
{
  "relations": {
    "module43": {
      "parent": 43,
      "child": 41,
      "relationid": 22
    }
  }
}
```

In this relation configuration, the parent module is identified as module 43, and the child module as module 41. The relationid is set to 22, indicating the specific relation used if multiple relations exist between these two modules.

##### Parent and Child Item IDs

On some occasions, you may need to specify the parent or child item IDs in the relation. This is useful when you want to display data from the child module based on the parent item selected in the widget.

```json
{
  "relations": {
    "module64": {
      "parent": 64,
      "child": 63,
      "relationid": 65
    },
    "module60": {
      "parent": 64,
      "child": 60,
      "relationid": 66,
      "parent_id": "module64.parent_id"
    }
  }
}
```

In this example, we want to display data from module 60 based on the parent item selected in module 64. The parent item ID is specified as `module64.parent_id`.

##### Relation Types

Relation type is typically calculated by the system and is used to determine the type of relation between the parent and child modules. This is useful when you have multiple relations between two modules and need to specify a particular relation for the widget or when the relation type is not automatically calculated correctly by the system.

```json
{
  "relations": {
    "module107": {
      "parent": 107,
      "child": 108,
      "relationid": 104,
      "relationtype": "child"
    }
  }
}
```

In this example, we want to show data from module 107 and its child data from module 108. The relation type is specified as 'child' to ensure that the correct relation is used between the two modules.

## Queries

Configure filters for the data displayed in the widget using queries:

| Property | Type  | Required | Options | Description                                                                                                                                                                                                        |
| -------- | ----- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `query`  | array | Yes      | N/A     | An array of conditions for filtering the data displayed in the widget. Each condition is an array where the first element is the property, the second element is the operator, and the third element is the value. |

For detailed information on JSON query formatting and options, refer to the documentation [here](/docs/JSON/json-query).

#### Example 4: Widget with Queries

```json
{
  "query": [
    ["cf151.string", "=", "option_220"]
  ]
}
```

In this query configuration, the widget is set to display data filtered based on the condition where the value of the custom field 'cf151.string' equals 'option_220'. This setup ensures that only specific, relevant data is shown in the widget, based on the defined criteria.

## Table Configuration

Configure additional features for the widget:

#### Example 5: Table Configuration

```json
{
  "clickable": "cf237",
  "orderby": [["cf12.string", "DESC"]],
  "allowInlineEdit": true,
  "allowInlineEditFields": ["cf1", "cf2", "cf3"],
  "allowCreateButton": true,
  "group": {"cf237": "count"}
}
```

## Table UI Options

Manage the behavior and layout of the table with these options:

| Property            | Type    | Required | Options     | Description                                                                  |
| ------------------- | ------- | -------- | ----------- | ---------------------------------------------------------------------------- |
| `showViews`         | boolean | No       | true, false | Toggle to display a dropdown with power searches created in module settings. |
| `showSearch`        | boolean | No       | true, false | Toggle to display a search field within the widget.                          |
| `showFiltersButton` | boolean | No       | true, false | Toggle to display a filter button, allowing adjustments to the table filter. |
| `showColumnsButton` | boolean | No       | true, false | Toggle to display a button for selecting visible table columns.              |
| `showDownloadExcel` | boolean | No       | true, false | Toggle to display a button for downloading table results as an Excel file.   |
| `showDownloadPrint` | boolean | No       | true, false | Toggle to display a button for printing table results.                       |
| `allowRowSelect`    | boolean | No       | true, false | Toggle to enable checkboxes for row selection.                               |
| `allowOrdering`     | boolean | No       | true, false | Toggle to allow ordering of table columns.                                   |
| `allowMobileCards`  | boolean | No       | true, false | Toggle to enable card view on mobile devices.                                |
| `allowMobileChips`  | boolean | No       | true, false | Toggle to display chips on mobile card view.                                 |
| `useChipsAfter`     | integer | No       | Any integer | The limit for when to start using chips instead of labels.                   |
| `lists`             | array   | No       | N/A         | Provides a dropdown with filtering options based on power searches.          |

#### Example 6: Table UI Options

```json
{
  "powerSearch": {
    "showViews": true,
    "showSearch": true,
    "showFiltersButton": true,
    "showColumnsButton": true,
    "showDownloadExcel": true,
    "showDownloadPrint": true,
    "allowRowSelect": true,
    "allowOrdering": true,
    "allowMobileCards": true,
    "allowMobileChips": true,
    "useChipsAfter": 4,
    "lists": [
      {
        "id": 101,
        "name": "Members"
      },
      {
        "id": 102,
        "name": "Leads"
      },
      {
        "id": 103,
        "name": "All Entries"
      }
    ]
  }
}
```

This configuration for the table UI options includes enabling power searches, search functionality, filter and column selection buttons, options for downloading the table data as Excel or printing it, and settings for row selection and ordering. The configuration also adjusts the mobile view, enabling card and chips views and setting a threshold for using chips after 4 items. Additionally, it includes a `lists` option that provides a dropdown with different filtering options based on power searches.

## Forms Options

OBS. This functionality has been made obsolete by the introduction of actional buttons.

Enhance your table widget with functionality for filling out forms directly from it:

| Property | Type  | Required | Options | Description                                                                           |
| -------- | ----- | -------- | ------- | ------------------------------------------------------------------------------------- |
| `forms`  | array | No       | N/A     | An array of IDs for the forms that users can complete directly from the table widget. |

#### Example 7: Forms Options

```json
{
  "forms": [12, 14]
}
```

In this configuration for forms options, users are provided with the ability to access and fill out forms identified by IDs 12 and 14 directly from the table widget. This feature enhances interactivity and efficiency by allowing form completion within the context of the table's data.

## Actionable Buttons

Enhance your table widget with actionable buttons that perform specific tasks. These buttons can be configured for various actions and placed in different areas of the widget. For a detailed guide on setting up actionable buttons, refer to [Actionable Buttons Introduction](/docs/actionable-buttons/ab-intro-to-ab).

| Property          | Type    | Required | Options     | Description                                                                                      |
| ----------------- | ------- | -------- | ----------- | ------------------------------------------------------------------------------------------------ |
| `keyName`         | string  | Yes      | N/A         | Unique identifier for the action button.                                                         |
| `visibility`      | object  | No       | N/A         | Configuration object for the button's visibility and placement.                                  |
| `visual`          | object  | No       | N/A         | Contains visual settings for the button, like icon display and placement.                        |
| `placement`       | string  | No       | "row"       | Determines where the button is placed. Default is top of the table; "row" places it on each row. |
| `displayIconOnly` | boolean | No       | true, false | If true, only the icon is displayed; otherwise, the button is shown with text.                   |

Buttons are displayed at the top right of the table widget by default. When the `placement` is set to "row", they appear within each row. When used with `allowRowSelect`,(under `powerSearch`) they can also manage actions across multiple selected rows.
There can be multiple `Actional Buttons` in each table widget. Even combinations of `top`, `row` and `multi` buttons.

#### Example: Actionable Buttons in Table Widget

```json
{
  "actionalButtons": [
    {
      "keyName": "ab_simple_example",
      "visibility": {
        "visual": {
          "displayIconOnly": true
        }
      }
    },
    {
      "keyName": "ab_example_key",
      "visibility": {
        "visual": {
          "displayIconOnly": true,
          "placement": "row"
        }
      }
    },
    {
      "keyName": "ab_member-new-supplier-agreement",
      "visibility": {
        "visual": {
          "displayIconOnly": true,
          "allowMultipleItems": true // Tell AB that it can handle multiple items.
        }
      }
    }
  ],
  "powerSearch": {
    "allowRowSelect": true // Enable Row Select on Power Search Table.
  }
}
```

In this JSON example, three actionable buttons are configured for the table widget. The first button, 'ab_simple_example', is displayed at the top right of the table with only its icon visible. The second button, 'ab_example_key', is similarly displayed with only its icon but is placed on each row. The third button, 'ab_member-new-supplier-agreement', also displays only the icon and is configured to handle multiple items, in coordination with the row selection feature of the power search.

---

As we go forward, I'll provide specific updates, such as new features, additional examples, or notes that need to be included. You can then edit the corresponding sections accordingly.
