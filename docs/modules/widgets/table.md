# Table Widget

The Table Widget shows records from a module as a table. Users can search, filter, sort, choose columns, open saved views, export to Excel and print. Columns can link to records, be edited, and show coloured badges. Actional buttons can be added to the header or to every row.

## When to Use
Use the Table Widget when you want to present lists of records, let users find and sort them, or give quick access to actions on each record. Examples: the tasks of a case, today's routes of the logged-in user, or all open orders on a dashboard.

## How It Works
- Everything can be set in the form on the [widget settings page](/docs/modules/widgets/widget-settings). The relevant sections are **Which records** (module, related modules, filters), **Columns**, **Table** (rows per page, toolbar and behaviour, saved views, totals per value) and **Buttons**.
- The widget lists the records of `moduleid` that match `query`. The user's read permissions are always applied on top of your filters.
- `columns` decides which columns are shown and in which order. Fields from a related module need that module in `relations`. The form adds the relation for you when you pick a field from a related module.
- The `powerSearch` object turns toolbar buttons and table behaviour on or off. All toolbar buttons are on by default.
- **Saved views:** if `powerSearch.lists` has entries, the **first** view in the list opens when the table loads. Its columns, filters, sort order and relations **replace** the widget's own `columns`, `query` and `relations`. The widget's own filters are not added on top, so placeholders like `[itemid]` in the widget's `query` do not apply while a view is active. Without `lists`, the widget's own `columns`, `query` and `relations` are used. The other `powerSearch` settings are only toolbar and behaviour toggles and never replace anything.
- Actional buttons with placement `"row"` are shown on every row. Buttons with `allowMultipleItems` run on the rows the user has ticked (needs `powerSearch.allowRowSelect`).

## Usage Examples

### Tasks of the record the page shows
A table on a case page that lists the tasks related to the case. The status is shown as a coloured badge depending on its value, the due date is sorted ascending, and the hours can be edited.

```json
{
  "moduleid": 113,
  "relations": {
    "module112": { "parent": 112, "child": 113, "relationid": 118 }
  },
  "query": [
    ["module112Item.id", "=", "[itemid]"]
  ],
  "columns": [
    { "keyName": "tasks_title", "clickable": true },
    { "keyName": "tasks_duedate", "sort": { "order": "ASC", "priority": 1 }, "width": 20 },
    {
      "keyName": "tasks_status",
      "colorConditions": [
        { "operator": "=", "value": "Done", "backgroundColor": "green", "textColor": "#fff" },
        { "operator": "=", "value": "Late", "backgroundColor": "#d9534f", "textColor": "#fff" }
      ]
    },
    { "keyName": "tasks_hours", "editable": true }
  ],
  "pageLength": 25
}
```

### Routes of the logged-in user, without export buttons
Filters on a list field (excluding two options) and on a user field containing the logged-in user. Excel and print are hidden, and on mobile the columns from the fourth onward are shown as compact chips.

```json
{
  "moduleid": 89,
  "query": [
    ["cf742.string", "NOT IN", ["option_976", "option_896"]],
    ["cf726.string", "find_in_set", "[user]"]
  ],
  "columns": [
    { "keyName": "ruterfield_title", "clickable": true },
    { "keyName": "ruterfield_dato", "sort": { "order": "ASC", "priority": 1 } },
    { "keyName": "ruterfield_medarbejder-2" },
    { "keyName": "ruterfield_status" },
    { "keyName": "ruterfield_starttid" },
    { "keyName": "ruterfield_sluttid" }
  ],
  "powerSearch": {
    "showDownloadExcel": false,
    "showDownloadPrint": false,
    "allowMobileChips": true,
    "useChipsAfter": 3
  }
}
```

### Table that opens a saved view
The first view (`aktive_ruter`) opens when the table loads, and the user can switch to the second view in the views dropdown. The view decides the columns and filters, but the widget still needs at least one column of its own.

```json
{
  "moduleid": 41,
  "columns": [
    { "keyName": "ruterfield_title" }
  ],
  "powerSearch": {
    "showViews": true,
    "showColumnsButton": false,
    "lists": [
      { "keyName": "aktive_ruter" },
      { "keyName": "afsluttede_ruter" }
    ]
  }
}
```

### Rows grouped by customer, with buttons
Rows are grouped under a heading per customer (`cf1501` is the customer field), and the heading also shows the city (`cf1502`). Users can tick rows and run the `send_reminder` button on all of them from the header. The `open_map` button is shown as an icon on every row.

```json
{
  "moduleid": 120,
  "columns": [
    { "keyName": "orders_title", "clickable": true },
    { "keyName": "orders_customer" },
    { "keyName": "orders_city" },
    { "keyName": "orders_amount", "format": "financial" }
  ],
  "powerSearch": {
    "allowRowSelect": true,
    "rowGroupBy": "cf1501",
    "rowGroupAdditionalColumns": ["cf1502"],
    "stickyHeader": 500
  },
  "actionalButtons": [
    { "keyName": "send_reminder", "visibility": { "visual": { "allowMultipleItems": true } } },
    { "keyName": "open_map", "visibility": { "visual": { "placement": "row", "displayIconOnly": true } } }
  ]
}
```

### Number of orders and total amount per status
With `group`, rows with the same status are combined into one row. Here `cf1499` is the title field (counted) and `cf1503` the amount field (added up).

```json
{
  "moduleid": 120,
  "columns": [
    { "keyName": "orders_status" },
    { "keyName": "orders_title", "label": "Orders" },
    { "keyName": "orders_amount", "label": "Total" }
  ],
  "group": {
    "cf1499": "count",
    "cf1503": "sum"
  }
}
```

## Options & Parameters

### Which records
- **moduleid** (integer): The module whose records are listed. Default: the module of the page. **Required on dashboards**, where there is no module of the page.
- **query** (array, optional): Filters, see [JSON Query](/docs/JSON/json-query). Default: no filters (all records the user may read). [Placeholders](/docs/misc/replaceables) like `[itemid]` and `[user]` can be used.
- **relations** (object, optional): Related modules whose fields are shown or filtered on, see [JSON Relations](/docs/JSON/json-relations).

### Columns
- **columns** (array, required): The columns, in order. A table without columns shows an error. Each column is described in [JSON Columns](/docs/JSON/json-columns). Options with a special meaning in tables:
  - **label** (string): Heading text. Default: the field name.
  - **icon** (string): Font Awesome icon name shown before the heading.
  - **clickable** (boolean): Links the cell to the record the field belongs to (for a field of a related module, the related record). Default: `true` for the module's title field, otherwise `false`.
  - **editable** (boolean, default `false`): If any column is editable, an edit (pen) column is added. It opens an editor with the table's columns, where the `editable` ones can be changed.
  - **sort** (object): Default sort, e.g. `{ "order": "ASC", "priority": 1 }`. `order` is `"ASC"` or `"DESC"` and must be set. Lower `priority` sorts first. Default: the first column, ascending. When a user sorts the table, their choice is remembered for an hour.
  - **width** (number, 1–100): Column width in percent of the table. Other values stop the table from loading.
  - **format** (string): Display format. In tables it also picks the filter in the column heading (date picker, list of options, user picker) and right-aligns numbers.
  - **backgroundColor** / **textColor** (colour): Shows the value as a badge with these colours. If only one is set, the other defaults to `#6060FF` (background) or `#fff` (text).
  - **colorConditions** (array): Colours the value as a badge depending on the value. Each rule is `{ "operator", "value", "backgroundColor", "textColor" }`. Operators: `=`, `!=`, `>`, `<`, `>=`, `<=`. The value is compared with the text shown in the cell, and the first matching rule wins. Not used when `backgroundColor` or `textColor` is set on the column.

### Table
- **pageLength** (integer, default `10`): Rows per page.
- **group** (object, optional): Totals per value. Keys are field ids in the form `"cf<id>"`, values are `"count"` or `"sum"` (lowercase), e.g. `{ "cf1499": "count", "cf1503": "sum" }`. Rows with the same values in the other columns are combined into one row. The fields must also be in `columns`. In a grouped table, rows have no links, no row buttons and no edit or checkbox column. The paging text shows 0 rows, and Excel export and print show the rows without grouping.
- **powerSearch** (object, optional): Toolbar and behaviour. Every option is optional:

| Option | Type | Default | Meaning |
|---|---|---|---|
| `showSearch` | boolean | `true` | Search button and search box. The search covers the columns whose field is searchable. Separate words with `;` to find records matching any of them. |
| `showFiltersButton` | boolean | `true` | Filter icon in each column heading. |
| `showColumnsButton` | boolean | `true` | **Columns** button where users choose which columns they see. The choice is remembered in the user's browser, not in the widget. |
| `showViews` | boolean | `true` | Dropdown with the saved views in `lists`. Administrators also get buttons to save, rename and create views. |
| `lists` | array | `[]` | Saved views offered in the dropdown, each as `{ "keyName": "view_keyname" }` (or `{ "id": 12, "name": "Active" }`). Views that cannot be found are left out. **The first view opens when the table loads and replaces the widget's columns, filters and relations.** See [Powersearch](/docs/modules/powersearch). |
| `showDownloadExcel` | boolean | `true` | Excel download (desktop only). The file uses the current filters, columns and sort order. |
| `showDownloadPrint` | boolean | `true` | Print button (desktop only). |
| `showOrderBy` | boolean | `true` | Sort chips above the table (mobile only). |
| `allowOrdering` | boolean | `true` | Users can sort by clicking a column heading. Always off when `sortById` is on. |
| `sortById` | boolean | `false` | Manual order: rows can be dragged into order with a grip in the first column, and the order is saved for everyone. Users need permission to update records. Sorting by heading is turned off. |
| `allowRowSelect` | boolean | `false` | Adds a checkbox to each row. Needed for buttons with `allowMultipleItems`. |
| `allowMobileCards` | boolean | `true` | On small screens, each row is shown as a card. The first column is the card title, the others are shown as label and value. |
| `allowMobileChips` | boolean | `false` | On mobile cards, columns from `useChipsAfter` onward are shown as compact chips. |
| `useChipsAfter` | integer | `4` | Column number (counted from 0) where chips start. Only with `allowMobileChips`. |
| `stickyHeader` | boolean or number | `false` | Keeps the heading row visible while scrolling inside the table. `true` gives a scroll area of 400 px; a number sets the height in px. |
| `rowGroupBy` | string | none | Groups rows under a collapsible heading per value of this column, e.g. `"cf1501"`. The table is always sorted by this column first. Grouping works on the rows of the current page. |
| `rowGroupAdditionalColumns` | array | `[]` | Column ids whose values are also shown in the group heading, e.g. `["cf1502"]`. |
| `rowGroupDefaultCollapsed` | boolean | `false` | Groups start collapsed. |
| `rowGroupCollapsible` | boolean | `true` | Users can collapse and expand groups. |

Use real `true` and `false`, not the text `"false"`.

### Buttons
- **actionalButtons** (array, optional): Actional buttons, each as an object with `keyName`, e.g. `{ "keyName": "send_reminder" }`. Plain strings are ignored. You can change the button's look for this widget under `visibility.visual`, for example:
  - **placement**: `"widget"` (default) shows the button in the widget header. `"row"` shows it on every row of the table.
  - **allowMultipleItems** (boolean): The header button is enabled when rows are ticked and runs on all ticked rows. Needs `powerSearch.allowRowSelect`.
  - **displayIconOnly** (boolean): Shows only the icon.
- **formButtons** (array, optional): Form buttons, each as `{ "keyName": "..." }`.

### Appearance
Title, icon, colours, header, background, margin and heights are shared by all widgets, see [Common Widget Properties](/docs/modules/widgets/common-properties).

## Tips
- Start with columns and filters in the widget. Add saved views only when users need to switch between layouts, and remember that the first view replaces the widget's own columns and filters.
- The **Columns** button only changes what the current user sees in their own browser.
- Use `[itemid]` with a relation in `query` to list records related to the record the page shows.

## Related Links
- [Widget Settings](/docs/modules/widgets/widget-settings)
- [Common Widget Properties](/docs/modules/widgets/common-properties)
- [JSON Query](/docs/JSON/json-query)
- [JSON Columns](/docs/JSON/json-columns)
- [JSON Relations](/docs/JSON/json-relations)
- [Placeholders (Replaceables)](/docs/misc/replaceables)
- [Powersearch](/docs/modules/powersearch)
- [Actional Button](/docs/modules/widgets/actionalbutton)
