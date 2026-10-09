# Number Widget

The Number Widget is a tile in the top row that adds up one or more fields of **the record the page shows**, such as the hours planned plus the hours used on a project. Unlike the [Sum Widget](/docs/modules/widgets/sum), it does not look at other records and has no filters.

## When to Use
Use the Number Widget on a record page when you want to show a value, or the total of a few values, of that record as a tile.

:::note Record pages only
The Number Widget reads the record the page shows, so it only works on record pages. On a dashboard it shows `-1`. To add up fields of other records, use a [Sum Widget](/docs/modules/widgets/sum).
:::

## How It Works
- Everything can be set in the form on the [widget settings page](/docs/modules/widgets/widget-settings). The relevant sections are **Number** (fields to add up and decimals) and **Tile** (look and click action).
- The values of the fields in `columns` are read from the record the page shows and added together. Empty fields count as 0.
- The number is loaded when the tile comes into view, and is updated after the record is changed on the page.
- There is no module, filter or relation setting. Only use the widget on record pages.

## Usage Example
Total hours (planned plus extra) of the project the page shows.

```json
{
  "columns": [
    { "keyName": "projects_hours_planned" },
    { "keyName": "projects_hours_extra" }
  ],
  "decimals": 1,
  "label": "Hours in total",
  "postfix": "h",
  "icon": "clock",
  "variant": "soft"
}
```

## Usage Example: the same result with a Sum Widget
Need a formula or the hours format? A Sum Widget on the project module, filtered to the record the page shows, adds up the same fields and supports `formel` and `format`.

```json
{
  "moduleid": 75,
  "query": [
    ["id", "=", "[itemid]"]
  ],
  "columns": [
    { "keyName": "projects_hours_planned" },
    { "keyName": "projects_hours_extra" }
  ],
  "decimals": 1,
  "label": "Hours in total",
  "postfix": "h",
  "icon": "clock",
  "variant": "soft"
}
```

## Options & Parameters

### Number
- **columns** (array, required): The fields of the page's record to add up, each as `{ "keyName": "field_keyname" }`.
- **decimals** (integer, default `0`): Number of decimals shown.

`moduleid`, `query`, `relations`, `format` and `formel` are not used by the Number Widget.

### Tile
- **label** / **labels**: The text under the number. See [Common Widget Properties](/docs/modules/widgets/common-properties).
- **icon**, **iconBackgroundColor**, **mobileSize**, **compactMode**, **variant** (`"soft"` for a coloured tile), **prefix**, **postfix** and **tapActions** (open a `url` or go to a `tab` on click) are the shared tile settings, described in [Common Widget Properties: Top Tiles](/docs/modules/widgets/common-properties#top-tiles). Icons are Font Awesome names.

## Related Links
- [Widget Settings](/docs/modules/widgets/widget-settings)
- [Common Widget Properties](/docs/modules/widgets/common-properties)
- [Sum Widget](/docs/modules/widgets/sum)
- [JSON Columns](/docs/JSON/json-columns)
