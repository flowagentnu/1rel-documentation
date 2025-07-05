# Count Widget

The Count Widget displays a total count of items from a module, letting you quickly show key metrics or totals on your dashboard. Tapping the widget can open a subpage with more details.

## When to Use
Use the Count Widget to highlight totals, KPIs, or any count of items from a module—such as open tasks, active users, or completed jobs.

## How It Works
- Configure the widget with the module ID and optional relations.
- Use queries to filter which items are counted.
- Optionally use the `formel` property to calculate a value based on custom fields (e.g., percentages, differences).
- Customize appearance with labels, icons, colors, and layout.
- Add tap actions to open tabs or subpages.
- Adjust size for mobile devices and select a visual variant.

## Usage Example

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
    ["module112Item.id", "=", "[itemid]"]
  ],
  "label": "Active",
  "pluralLabel": "Active",
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

*This example shows a count of related items, filtered by query, with custom display and tap action.*

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
- **moduleid** (integer, required): The module to count items from.
- **relations** (object, optional): Define relationships to other modules. See [JSON Relations Documentation](/docs/JSON/json-relations).
- **query** (array, optional): Filter which items are counted. See [JSON Query Documentation](/docs/JSON/json-query).
- **label** (string, required): Text label under the number.
- **pluralLabel** (string, optional): Label for values greater than 1.
- **formel** (string, optional): Formula for calculating a value using custom fields (e.g., `"(cf1245-cf1244)/cf1245*100"`).
- **decimals** (integer, optional): Number of decimals to show for calculated values.
- **tapActions** (object, optional): Actions when tapping the widget. Example:
  - **tap** (object):
    - **action** (string): Action type (currently only "tab").
    - **value** (string): Tab to open (last part of the tab's URL).
- **variant** (string): Visual style of the widget.  
  - `outlined` (default)  
  - `soft`
- **mobileSize** (integer, optional): Size (1–12) for mobile devices.

## Related Links
- [JSON Query Documentation](/docs/JSON/json-query)
- [JSON Relations Documentation](/docs/JSON/json-relations)
- [Common Widget Properties](/docs/modules/widgets/common-properties.md)