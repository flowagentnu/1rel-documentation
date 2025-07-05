# Table Widget

The Table Widget in FlowAgent lets you display data from any module in a structured, customizable table. It supports advanced filtering, relations, inline editing, and actional buttons.

## When to Use
Use the Table Widget when you want to present lists of items, allow users to filter, sort, and interact with data, or provide quick access to related actions.

## How It Works
- Configure the widget with the module ID and columns to display.
- Add queries to filter data, and relations to pull in related data.
- Customize appearance and behavior with options like icons, page length, and column width.
- Add actional buttons for row or bulk actions.
- Enable powerSearch for advanced filtering, saved views, and custom filters.
- **Note:** You can use either direct configuration (with columns, query, and relations) or powerSearch, but not both at the same time. If `powerSearch` is enabled, the root-level `columns`, `query`, and `relations` options are ignored.

## Main Properties
- **moduleid** (integer, required): The ID of the module to display data from.
- **columns** (array, required unless using powerSearch): List of columns to show. Each column can have options described in [JSON Columns](/docs/JSON/json-columns.md).
- **pageLength** (integer, optional): Number of rows visible in the table (1-100, default 10).
- **relations** (object, optional): Define parent/child relations to pull in related data.
- **query** (array, optional): [JSON Query](/docs/JSON/json-query.md) for filtering data.
- **powerSearch** (object, optional): Enable advanced search, filters, and saved views. When enabled, columns, query, and relations at the root level are not used. Options include:
  - **showViews** (boolean): Show saved views dropdown.
  - **showSearch** (boolean): Show the search bar.
  - **showFiltersButton** (boolean): Show the filters button.
  - **showColumnsButton** (boolean): Show the columns button.
  - **showDownloadExcel** (boolean): Allow downloading results as Excel.
  - **showDownloadPrint** (boolean): Allow printing results.
  - **allowRowSelect** (boolean): Allow selecting rows.
  - **allowOrdering** (boolean): Allow sorting columns.
  - **allowMobileCards** (boolean): Show results as cards on mobile.
  - **allowMobileChips** (boolean): Show results as chips on mobile.
  - **useChipsAfter** (integer): Use chips layout after this number of columns.
  - **lists** (array): List of available saved views, each as a keyName (string).

## Usage Example: With powerSearch
Show a table with powerSearch enabled and advanced options:

```json
{
  "moduleid": 41,
  "powerSearch": {
    "showViews": true,
    "showSearch": true,
    "showFiltersButton": false,
    "showColumnsButton": false,
    "showDownloadExcel": false,
    "showDownloadPrint": false,
    "allowRowSelect": false,
    "allowOrdering": true,
    "allowMobileCards": true,
    "allowMobileChips": true,
    "useChipsAfter": 6,
    "lists": [
      "aktive_ruter",
      "afsluttede_ruter"
    ]
  }
}
```
*When powerSearch is enabled, configure all columns, filters, and relations inside the powerSearch object. Root-level columns, query, and relations are ignored. The lists property is now an array of keyNames (strings) for saved views.*

## Usage Example: Without powerSearch
Show a table using direct columns and query configuration:

```json
{
  "moduleid": 89,
  "query": [
    [
      "cf742.string",
      "NOT IN",
      [
        "option_976",
        "option_896"
      ]
    ],
    [
      "cf726.string",
      "find_in_set",
      "[user]"
    ]
  ],
  "columns": [
    { "keyName": "ruterfield_title", "clickable": false, "editable": false },
    { "keyName": "ruterfield_dato", "clickable": false, "editable": false, "sort": { "order": "ASC", "priority": 1 } },
    { "keyName": "ruterfield_medarbejder-2", "clickable": false, "editable": false },
    { "keyName": "ruterfield_status", "clickable": false, "editable": false },
    { "keyName": "ruterfield_starttid", "clickable": false, "editable": false },
    { "keyName": "ruterfield_sluttid", "clickable": false, "editable": false }
  ]
}
```
*Use this approach when you want to define columns and filters directly, without using powerSearch.*

## Tips
- Use the `width` property to control how much space each column takes (1-100, as a percent of table width).
- Set `editable: true` to allow inline editing of a column.
- Set `clickable: true` to make a column interactive (e.g., open details or trigger actions).
- Use the `sort` property to define default sorting and priority for columns.
- Add relations to show data from linked modules.
- Use queries to filter data and actional buttons for quick actions.
- Enable powerSearch for advanced filtering, saved views, and custom filters. When enabled, root-level columns, query, and relations are not used.

## Related Links
- [Common Widget Properties](/docs/modules/widgets/common-properties.md)
- [JSON Query](/docs/JSON/json-query.md)
- [JSON Relations](/docs/JSON/json-relations.md)
- [PowerSearch Documentation](/docs/modules/powersearch.md)