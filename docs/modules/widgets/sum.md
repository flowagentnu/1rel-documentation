# Sum Widget

The Sum Widget displays a total or sum of values from a module, letting you quickly show key metrics or totals on your dashboard. Tapping the widget can open a subpage with more details.

## When to Use
Use the Sum Widget to highlight totals, KPIs, or any aggregated value from a module—such as hours worked, total sales, or open tasks.

## How It Works
- Configure the widget with the module ID and the field(s) to sum.
- Optionally filter data using a query or show related data with relations.
- You can use the `formel` property to calculate a value based on custom fields (e.g., percentages, differences).
- Customize appearance with labels, icons, colors, and layout.
- Add tap actions to open tabs or subpages.
- Adjust size for mobile devices.
- The Sum Widget can be placed in both top and main widget areas, depending on your dashboard layout.

## Usage Example
A complete JSON configuration for a Sum Widget:

```json
{
  "moduleid": 105,
  "query": [
    ["cf949.string", "=", "[user]"],
    ["cf953.string", "=", "[datenow]"]
  ],
  "label": "Hour",
  "pluralLabel": "Hours",
  "displayType": "vertical",
  "icon": "nest_clock_farsight_analog",
  "iconColor": "white",
  "iconBackgroundColor": "orange",
  "tapActions": {
    "tap": {
      "action": "tab",
      "value": "dashboardtab_mont-rtimer"
    }
  },
  "variant": 2,
  "mobileSize": 3
}
```

*This example shows all main options: data source, filtering, display, tap actions, variant, and mobile size.*

## Calculation Example
You can use the `formel` property to calculate a value based on custom fields. For example, to show a percentage:

```json
{
  "moduleid": 123,
  "label": "kr.",
  "pluralLabel": "kr.",
  "icon": "file-plus-minus",
  "iconColor": "white",
  "iconBackgroundColor": "#2c2c80",
  "mobileSize": 3,
  "variant": 2,
  "relations": {
    "module77": {
      "parent": 77,
      "child": 123,
      "relationid": 133
    }
  },
  "decimals": 2,
  "query": [
    ["module77Item.id", "=", "[itemid]"]
  ],
  "formel": "(cf1245-cf1244)/cf1245*100"
}
```

*This example calculates a percentage using two custom fields and displays the result with two decimals.*

## Options & Parameters

- **moduleid** (integer, required): The module to sum data from.
- **relations** (object, optional): Define relationships to other modules. See [JSON Relations Documentation](/docs/JSON/json-relations).
- **query** (array, optional): Filter data to sum. See [JSON Query Documentation](/docs/JSON/json-query).
- **label** (string, required): Text label under the number.
- **pluralLabel** (string, optional): Label for values greater than 1.
- **formel** (string, optional): Formula for calculating a value using custom fields (e.g., `"(cf1245-cf1244)/cf1245*100"`).
- **decimals** (integer, optional): Number of decimals to show for calculated values.
- **displayType** (string, required): "horizontal" or "vertical" layout.
- **icon** (string, required): Widget icon (Google Fonts icon name).
- **iconColor** (string, optional): Icon color (hex code).
- **iconBackgroundColor** (string, optional): Icon background color (hex code).
- **tapActions** (object, optional): Actions when tapping the widget. Example:
  - **tap** (object):
    - **action** (string): Action type (currently only "tab").
    - **value** (string): Tab to open (last part of the tab's URL).
- **variant** (integer, optional): Visual style (1 = default, 2 = soft).
- **mobileSize** (integer, optional): Size (1–12) for mobile devices.

## Related Links
- [JSON Query Documentation](/docs/JSON/json-query)
- [JSON Relations Documentation](/docs/JSON/json-relations)
- [Common Widget Properties](/docs/modules/widgets/common-properties.md)

