# Sum Widget

The Sum Widget is a tile in the top row that adds up the values of one or more fields across the records that match your filters, such as hours worked today, total sales, or the remaining budget of a project. It can also calculate with a formula, and its result can be saved into a field every night. Clicking the tile can open a tab or a web address.

## When to Use
Use the Sum Widget to highlight a total: hours registered by the logged-in user today, the total value of a customer's orders, or a percentage calculated from two totals.

## How It Works
- Everything can be set in the form on the [widget settings page](./widget-settings.md). The relevant sections are **Which records** (module, related modules, filters), **Number** (fields to add up, decimals, format and formula) and **Tile** (look and click action).
- The widget takes the records of `moduleid` that match `query` (only records the user may read) and adds up the fields in `columns`. With several fields, all of them are added into one number.
- **Always set `moduleid`.** Without a module, records of all modules that match the filters are included, and without both a module and filters the tile shows `-1`. The tile also shows `-1` when no fields are chosen.
- With `formel`, you decide how the fields are combined, for example a difference or a percentage. The formula can be applied once to the totals, or to each record before the results are added up (`formelType: "individual"`).
- The number is loaded when the tile comes into view, and is updated after records are changed on the page.
- **Save the result every night in field** (a setting next to Size on the widget settings page, for widgets on a module): every night, the result is calculated for each active record of the module, as if the widget was shown on that record's page, and saved in the chosen field of that record. The value is saved as it is shown on the tile. This makes the total available for lists, filters and automations.

## Usage Example
Hours registered by the logged-in user today, shown as hours and minutes. Clicking the tile opens the time registration tab.

```json
{
  "moduleid": 105,
  "query": [
    ["cf949.string", "=", "[user]"],
    ["cf953.string", "=", "[datenow]"]
  ],
  "columns": [
    { "keyName": "timesheet_hours" }
  ],
  "format": "hmformat",
  "label": "Today",
  "icon": "clock",
  "iconBackgroundColor": "orange",
  "variant": "soft",
  "mobileSize": 6,
  "tapActions": {
    "tap": {
      "action": "tab",
      "value": "dashboardtab_mont-rtimer"
    }
  }
}
```

*This example shows a total of one field, filtered to the logged-in user and today, with a soft (coloured) tile and a click action.*

## Calculation Example: formula on the totals
The contribution margin of a project in percent, calculated from the totals of two fields (`cf1245` is the sales value, `cf1244` the cost) of the related records. Both fields must be in `columns`.

```json
{
  "moduleid": 123,
  "relations": {
    "module77": {
      "parent": 77,
      "child": 123,
      "relationid": 133
    }
  },
  "query": [
    ["module77Item.id", "=", "[itemid]"]
  ],
  "columns": [
    { "keyName": "lines_salesvalue" },
    { "keyName": "lines_cost" }
  ],
  "formel": "(cf1245-cf1244)/cf1245*100",
  "decimals": 2,
  "label": "Margin",
  "postfix": "%",
  "icon": "percent",
  "iconBackgroundColor": "#2c2c80",
  "variant": "soft"
}
```

*The formula is applied once: (total sales − total cost) / total sales × 100.*

## Calculation Example: formula per record
The total price of all lines, where each line's price is quantity × unit price (`cf12` × `cf13`). Each record's result is rounded up to a whole number before the results are added up.

```json
{
  "moduleid": 123,
  "relations": {
    "module77": { "parent": 77, "child": 123, "relationid": 133 }
  },
  "query": [
    ["module77Item.id", "=", "[itemid]"]
  ],
  "columns": [
    { "keyName": "lines_quantity" },
    { "keyName": "lines_unitprice" }
  ],
  "formel": "cf12*cf13",
  "formelType": "individual",
  "ceilPerIndividual": true,
  "label": "Total price",
  "prefix": "kr.",
  "icon": "coins"
}
```

*Without `formelType: "individual"`, the formula would multiply the total quantity by the total unit price, which is not the same.*

## Options & Parameters

### Which records
- **moduleid** (integer, always set it): The module whose records are added up.
- **query** (array, optional): Which records are included, see [JSON Query](../../JSON/json-query.md). [Placeholders](../../misc/replaceables.md) like `[itemid]`, `[user]` and `[datenow]` can be used.
- **relations** (object, optional): Needed when `query` filters on related records, see [JSON Relations](../../JSON/json-relations.md).

### Number
- **columns** (array, required): The fields to add up, each as `{ "keyName": "field_keyname" }`. See [JSON Columns](../../JSON/json-columns.md). Only fields are used; other column kinds are ignored. With several fields, their totals are added into one number, unless `formel` decides otherwise.
- **decimals** (integer, default `0`): Number of decimals shown.
- **format** (string, default `"number"`): How the result is shown.
  - `"number"`: a normal number in the user's number format, e.g. `5,5`.
  - `"hmformat"`: the result is read as hours and shown as hours and minutes, e.g. `5.5` becomes `5h 30m`. `decimals` is not used.
  - `format` has no effect when `formel` is set.
- **formel** (string, optional): A formula using the fields as `cf<field id>` (the field's id, not its keyname), numbers, `+ - * /` and parentheses, e.g. `"(cf1245-cf1244)/cf1245*100"`. Every field in the formula must also be in `columns`. If the formula cannot be calculated, the tile shows `0`.
- **formelType** (string, optional): When the formula is applied.
  - Not set (default): once, with the totals of the fields. `cf12*cf13` gives total of cf12 × total of cf13.
  - `"individual"`: to each record, and the results are added up. `cf12*cf13` gives the sum of cf12 × cf13 of each record. An empty value counts as 0, and records where the formula cannot be calculated are skipped.
- **ceilPerIndividual** (boolean, default `false`): Only with `formelType: "individual"`. Rounds each record's result up to a whole number before adding up.

### Saving the result
- **Save the result every night in field**: chosen on the widget settings page, not in the JSON. See How It Works.

### Tile
- **label** / **labels**: The text under the number. See [Common Widget Properties](./common-properties.md).
- **icon**, **iconBackgroundColor**, **mobileSize**, **compactMode**, **variant** (`"soft"` for a coloured tile), **prefix**, **postfix** and **tapActions** (open a `url` or go to a `tab` on click) are the shared tile settings, described in [Common Widget Properties: Top Tiles](./common-properties.md#top-tiles). Icons are Font Awesome names.

### Old settings without effect
- **pluralLabel** and **displayType** are not used by the platform and can be removed.
- **iconColor** has no effect on tiles; the icon is always white.

## Related Links
- [Widget Settings](./widget-settings.md)
- [Common Widget Properties](./common-properties.md)
- [JSON Query](../../JSON/json-query.md)
- [JSON Relations](../../JSON/json-relations.md)
- [JSON Columns](../../JSON/json-columns.md)
- [Placeholders (Replaceables)](../../misc/replaceables.md)
- [Count Widget](./count.md)
- [Average Widget](./average.md)
