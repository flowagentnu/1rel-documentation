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

## Main Properties
- **moduleid** (integer, required): The ID of the module to display data from.
- **columns** (array, required): List of columns to show. Each column can have:
  - **keyName** (string): The field or custom field to display.
  - **width** (integer, optional): Value from 1-100, representing the percentage of table width this column should try to take up.
  - **editable** (boolean, optional): If true, allows inline editing of this column.
  - **clickable** (boolean, optional): If true, makes the cell clickable (e.g., to open details or trigger an action).
  - **sort** (object, optional): Sorting options for the column. Example: `{ "order": "DESC", "priority": 1 }`.
- **pageLength** (integer, optional): Number of rows visible in the table (1-100, default 10).
- **relations** (object, optional): Define parent/child relations to pull in related data.
- **query** (array, optional): [JSON Query](/docs/JSON/json-query.md) for filtering data.
- **powerSearch** (object, optional): Enable advanced search, filters, and saved views. Example below.

## Usage Example
Show a table of customers with custom columns, inline editing, clickable cells, sorting, and powerSearch enabled:

```json
{
  "moduleid": 41,
  "columns": [
    { "keyName": "customer_name", "width": 30, "editable": true, "clickable": true, "sort": { "order": "ASC", "priority": 1 } },
    { "keyName": "customer_email", "width": 30 },
    { "keyName": "customer_status", "width": 10, "editable": true, "clickable": true, "sort": { "order": "DESC", "priority": 2 } },
    { "keyName": "customer_created", "width": 30 }
  ],
  "icon": "assignment",
  "iconColor": "white",
  "iconBackgroundColor": "#634DA3",
  "pageLength": 20,
  "powerSearch": {
    "enabled": true,
    "defaultView": "Active Customers",
    "filters": [
      { "field": "customer_status", "operator": "=", "value": "active" }
    ]
  }
}
```

## Tips
- Use the `width` property to control how much space each column takes (1-100, as a percent of table width).
- Set `editable: true` to allow inline editing of a column.
- Set `clickable: true` to make a column interactive (e.g., open details or trigger actions).
- Use the `sort` property to define default sorting and priority for columns.
- Add relations to show data from linked modules.
- Use queries to filter data and actional buttons for quick actions.
- Enable powerSearch for advanced filtering, saved views, and custom filters.

## Related Links
- [Common Widget Properties](/docs/modules/widgets/common-properties.md)
- [JSON Query](/docs/JSON/json-query.md)
- [JSON Relations](/docs/JSON/json-relations.md)
- [Actional Buttons Introduction](/docs/sites/actionalbuttons/introduction.md)