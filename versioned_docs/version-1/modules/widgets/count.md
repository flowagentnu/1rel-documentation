# Count Widget

The Count Widget is a tile in the top row that shows how many records match your filters, such as open tasks, active projects of a customer, or jobs completed today. Clicking the tile can open a tab or a web address.

## When to Use
Use the Count Widget to highlight a number of records: a KPI on a dashboard, or the number of related records on a record page.

## How It Works
- Everything can be set in the form on the [widget settings page](./widget-settings.md). The relevant sections are **Which records** (module, related modules, filters), **Number** (decimals) and **Tile** (look and click action).
- The widget counts the records of `moduleid` that match `query`. Only records the user may read are counted.
- **Always set `moduleid`.** Without a module, records of all modules that match the filters are counted, and without both a module and filters the tile shows `-1`.
- To count records related to the record the page shows, add the relation in `relations` and filter on `[itemid]`.
- The number is loaded when the tile comes into view, and is updated after records are changed on the page.

## Usage Example
Counts the projects related to the customer the page shows. Clicking the tile opens the customer's projects tab.

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
  "label": "Active projects",
  "icon": "folder-open",
  "iconBackgroundColor": "#68aa68",
  "variant": "soft",
  "mobileSize": 6,
  "tapActions": {
    "tap": {
      "action": "tab",
      "value": "customerstab_projects"
    }
  }
}
```

*This example shows a count of related records, with a soft (coloured) tile, half width on mobile, and a click action that opens a tab.*

## Usage Example: My open tasks on a dashboard

```json
{
  "moduleid": 105,
  "query": [
    ["cf949.string", "=", "[user]"],
    ["cf950.string", "!=", "option_312"]
  ],
  "label": "My open tasks",
  "icon": "list-check",
  "postfix": "tasks"
}
```

## Options & Parameters

### Which records
- **moduleid** (integer, always set it): The module whose records are counted.
- **query** (array, optional): Which records are counted, see [JSON Query](../../JSON/json-query.md). [Placeholders](../../misc/replaceables.md) like `[itemid]` and `[user]` can be used.
- **relations** (object, optional): Needed when `query` filters on related records, see [JSON Relations](../../JSON/json-relations.md).

### Number
- **decimals** (integer, default `0`): Number of decimals shown.
- **columns** (array, optional): Only needed when a filter uses fields that must be joined. It does not change the count. Usually left out.

### Tile
- **label** / **labels**: The text under the number. See [Common Widget Properties](./common-properties.md).
- **icon**, **iconBackgroundColor**, **mobileSize**, **compactMode**, **variant** (`"soft"` for a coloured tile), **prefix**, **postfix** and **tapActions** (open a `url` or go to a `tab` on click) are the shared tile settings, described in [Common Widget Properties: Top Tiles](./common-properties.md#top-tiles). Icons are Font Awesome names.

### Old settings without effect
- **pluralLabel** and **displayType** are not used by the platform and can be removed.
- **iconColor** has no effect on tiles; the icon is always white.
- **formel** and **format** are not used by the Count Widget. To calculate with field values, use the [Sum Widget](./sum.md) or the [Average Widget](./average.md).

## Related Links
- [Widget Settings](./widget-settings.md)
- [Common Widget Properties](./common-properties.md)
- [JSON Query](../../JSON/json-query.md)
- [JSON Relations](../../JSON/json-relations.md)
- [Placeholders (Replaceables)](../../misc/replaceables.md)
- [Sum Widget](./sum.md)
- [Average Widget](./average.md)
