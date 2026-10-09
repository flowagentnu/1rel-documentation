# Average Widget

The Average Widget is a tile in the top row that shows the average of one or more fields across the records that match your filters, such as the average order value or the average number of hours per task. It works like the [Sum Widget](./sum.md), but divides the total by the number of records. Clicking the tile can open a tab or a web address.

## When to Use
Use the Average Widget to highlight an average: the average value of a customer's orders, the average duration of cases this year, or the average rating of a supplier.

## How It Works
- Everything can be set in the form on the [widget settings page](./widget-settings.md). The relevant sections are **Which records** (module, related modules, filters), **Number** (fields to add up, decimals, format and formula) and **Tile** (look and click action).
- The widget takes the records of `moduleid` that match `query` (only records the user may read), adds up the fields in `columns`, and divides the total by **the number of matching records**. Records where the field is empty still count, so they pull the average down as if the value was 0. Add a filter such as "field is not empty" if they should not count.
- With several fields, their totals are added together before dividing.
- **Always set `moduleid`.** Without a module, records of all modules that match the filters are included, and without both a module and filters the tile shows `-1`. The tile also shows `-1` when no fields are chosen.
- With `formel`, the formula is applied to the totals and the result is divided by the number of records. With `formelType: "individual"`, the formula is applied to each record, the results are added up and then divided by the number of records.
- The number is calculated when the tile comes into view, and again when records are changed on the page.
- **Save the result every night in field** (a setting next to Size on the widget settings page, for widgets on a module): every night, the average is calculated for each active record of the module, as if the widget was shown on that record's page, and saved in the chosen field of that record. The value is saved as it is shown on the tile.

## Usage Example
The average value of the orders of the customer the page shows, with two decimals.

```json
{
  "moduleid": 120,
  "relations": {
    "module112": { "parent": 112, "child": 120, "relationid": 140 }
  },
  "query": [
    ["module112Item.id", "=", "[itemid]"]
  ],
  "columns": [
    { "keyName": "orders_amount" }
  ],
  "decimals": 2,
  "label": "Average order",
  "prefix": "kr.",
  "icon": "scale-balanced",
  "iconBackgroundColor": "#2c2c80",
  "variant": "soft",
  "mobileSize": 6
}
```

## Usage Example: average time per task
The average of the hours field of the logged-in user's tasks, shown as hours and minutes.

```json
{
  "moduleid": 113,
  "query": [
    ["cf960.string", "=", "[user]"]
  ],
  "columns": [
    { "keyName": "tasks_hours" }
  ],
  "format": "hmformat",
  "label": "Average per task",
  "icon": "stopwatch"
}
```

## Options & Parameters

### Which records
- **moduleid** (integer, always set it): The module whose records are used.
- **query** (array, optional): Which records are included, see [JSON Query](../../JSON/json-query.md). [Placeholders](../../misc/replaceables.md) like `[itemid]` and `[user]` can be used.
- **relations** (object, optional): Needed when `query` filters on related records, see [JSON Relations](../../JSON/json-relations.md).

### Number
- **columns** (array, required): The fields to average, each as `{ "keyName": "field_keyname" }`. See [JSON Columns](../../JSON/json-columns.md). Only fields are used. With several fields, their totals are added together before dividing by the number of records.
- **decimals** (integer, default `0`): Number of decimals shown.
- **format** (string, default `"number"`): `"number"` shows a normal number. `"hmformat"` reads the result as hours and shows hours and minutes, e.g. `1.5` becomes `1h 30m` (`decimals` is not used). `format` has no effect when `formel` is set.
- **formel** (string, optional): A formula using the fields as `cf<field id>` (the field's id, not its keyname), numbers, `+ - * /` and parentheses. Every field in the formula must also be in `columns`. If the formula cannot be calculated, the tile shows `0`.
- **formelType** (string, optional): Not set (default) applies the formula once to the totals, then divides by the number of records. `"individual"` applies it to each record, adds up the results and divides by the number of records.

`ceilPerIndividual` (rounding each record up) is only available on the [Sum Widget](./sum.md).

### Saving the result
- **Save the result every night in field**: chosen on the widget settings page, not in the JSON. See How It Works.

### Tile
- **label** / **labels**: The text under the number. See [Common Widget Properties](./common-properties.md).
- **icon**, **iconBackgroundColor**, **mobileSize**, **compactMode**, **variant** (`"soft"` for a coloured tile), **prefix**, **postfix** and **tapActions** (open a `url` or go to a `tab` on click) are the shared tile settings, described in [Common Widget Properties: Top Tiles](./common-properties.md#top-tiles). Icons are Font Awesome names.

## Related Links
- [Widget Settings](./widget-settings.md)
- [Common Widget Properties](./common-properties.md)
- [Sum Widget](./sum.md)
- [Count Widget](./count.md)
- [JSON Query](../../JSON/json-query.md)
- [JSON Relations](../../JSON/json-relations.md)
- [JSON Columns](../../JSON/json-columns.md)
- [Placeholders (Replaceables)](../../misc/replaceables.md)
