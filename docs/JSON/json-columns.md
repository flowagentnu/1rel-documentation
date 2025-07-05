# JSON Columns

A guide to all supported options for columns in Table, Powersearch, and Details widgets.

## When to Use
Use this page when configuring columns in widgets to control display, interactivity, and formatting.

## How It Works
Columns are defined as objects in the `columns` array of your widget configuration. Each column can have various options to control how it appears and behaves.

## Supported Options
- **keyName** (string, required): The field or custom field to display in this column.
- **width** (integer, optional): Value from 1-100, representing the percentage of table width this column should try to take up.
- **editable** (boolean, optional): If true, allows inline editing of this column.
- **clickable** (boolean, optional): If true, makes the cell clickable (e.g., to open details or trigger an action).
- **sort** (object, optional): Sorting options for the column. Example: `{ "order": "DESC", "priority": 1 }`.
  - **order** (string): `ASC` or `DESC`.
  - **priority** (integer): Sort priority if multiple columns are sorted.
- **backgroundColor** (string, optional): Background color for the column (hex code or color name).
- **textColor** (string, optional): Text color for the column (hex code or color name).

## Usage Example
```json
{
  "columns": [
    {
      "keyName": "saleslinesfield_order",
      "width": 30,
      "editable": true,
      "clickable": true,
      "sort": { "order": "ASC", "priority": 1 },
      "backgroundColor": "#f0f0f0",
      "textColor": "#000000"
    }
  ]
}
```
*This example shows a column with custom width, editing, clickable, sorting, and custom background/text colors.*

## Tips
- Use `width` to control layout and space for each column.
- Use `backgroundColor` and `textColor` for visual emphasis or to highlight important columns.
- Combine `editable` and `clickable` for interactive tables.

## Related Links
- [Table Widget](/docs/modules/widgets/table.md)
- [Details Widget](/docs/modules/widgets/details.md)
- [Powersearch Documentation](/docs/modules/powersearch.md)
