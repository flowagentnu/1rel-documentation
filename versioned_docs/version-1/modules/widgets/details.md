# Details Widget

The Details Widget shows selected fields of a record in a clear, compact layout. By default it shows the record the page is about, but it can also show a related record, for example the customer of a project. Fields can be made editable, so users can change them directly from the widget.

## When to Use
Use the Details Widget when you want to show a summary of a record's fields, such as the key facts at the top of a record page, the contact details of the related customer, or a short set of editable fields.

## How It Works
- Everything can be set in the form on the [widget settings page](./widget-settings.md). The relevant sections are **Which records** (module, related modules, filters) and **Fields** (the fields, their options and the width of each field).
- Without `query`, the widget shows **the record the page shows**. In that case `moduleid` must be the module of the page (or be left out), otherwise nothing is shown.
- To show another record, for example a related record, set `moduleid` to that record's module and use `query` to find it. If several records match, each one is shown as its own block, ordered by when they were created.
- On a dashboard there is no record of the page, so the widget only shows something when `moduleid` and `query` are set.
- The record shown is not filtered by the user's read permissions, so the widget can show a related record users cannot open themselves (for example the price group of a project). Only show fields that the users of the page may see.
- If any field is `editable`, a pen button appears in the widget header. It opens an editor with the widget's fields, where the editable ones can be changed.

## Usage Examples

### Key fields of the record the page shows
Shows four fields of the current record. The status is shown as a badge, the description wraps instead of being cut off, and the phone number can be edited.

```json
{
  "columns": [
    { "keyName": "customer_name" },
    { "keyName": "customer_status", "backgroundColor": "#6060ff", "textColor": "#fff" },
    { "keyName": "customer_phone", "editable": true },
    { "keyName": "customer_description", "textWrap": true }
  ]
}
```

### A parent record through a relation
On a record of module 2, show the parent record from module 1 related through relation 123. The customer name links to the customer.

```json
{
  "moduleid": 1,
  "query": [
    ["id", "=", "[relation123]"]
  ],
  "columns": [
    { "keyName": "customer_name", "clickable": true, "backgroundColor": "#f0f0f0", "textColor": "#000000" },
    { "keyName": "customer_email" }
  ],
  "colSize": 6
}
```

## Options & Parameters

### Which records
- **moduleid** (integer): The module of the record shown. Default: the module of the widget. Set it when you show a record of another module, and always on dashboards.
- **query** (array, optional): Which record to show, see [JSON Query](../../JSON/json-query.md). Default: the record the page shows. Use [placeholders](../../misc/replaceables.md) such as `[relation123]` or a relation filter with `[itemid]` to show a related record.
- **relations** (object, optional): Related modules whose fields are shown, see [JSON Relations](../../JSON/json-relations.md).

### Fields
- **columns** (array): The fields shown, in order. Without fields the widget is empty. Each field is described in [JSON Columns](../../JSON/json-columns.md). Fields from another module than `moduleid` are shown with that module's icon. Options with a special meaning in details:
  - **label** (string): The label above the value. Default: the field name.
  - **editable** (boolean, default `false`): The field can be changed in the editor opened by the pen button. If no field is editable, there is no pen button.
  - **clickable** (boolean, default `false`): The value links to the record the field belongs to.
  - **textWrap** (boolean, default `false`): Long values wrap onto several lines. Otherwise they are cut off with "…".
  - **backgroundColor** (colour): Shows the value as a badge with this background.
  - **textColor** (colour): Colour of the value or badge text.
- **colSize** (integer, 1–12): Width of each field, where 12 is the full width of the widget and 6 is half. Default: automatic, based on the widget size and the number of fields.
- **clickable** (old setting, at the top level): A list of field ids that became links only after the widget was refreshed. Use `clickable` on each field instead.

Sorting, column width and colour rules (`sort`, `width`, `colorConditions`, `icon`) are table options and have no effect in details.

### Buttons and appearance
Actional buttons, form buttons, title, icon, colours and heights are shared by all widgets, see [Common Widget Properties](./common-properties.md).

## Tips
- Use `colSize` to control the layout: 12 shows one field per line, 6 shows two, 4 shows three.
- Combine `query` with a relation placeholder to show the customer, project or parent record next to the record's own fields.
- Make only the fields users often change editable, so the editor stays short.

## Related Links
- [Widget Settings](./widget-settings.md)
- [Common Widget Properties](./common-properties.md)
- [JSON Query](../../JSON/json-query.md)
- [JSON Relations](../../JSON/json-relations.md)
- [JSON Columns](../../JSON/json-columns.md)
- [Placeholders (Replaceables)](../../misc/replaceables.md)
