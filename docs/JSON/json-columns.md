# JSON Columns

A guide to all supported options for columns in Table, Details and Powersearch configurations.

## When to Use
Use this page when you configure the `columns` of a widget or list: which values to show, how to format them, and how users can interact with them.

## How It Works
- Columns are objects in the `columns` array of the configuration. They are shown in the order of the array.
- Each column has a **type** (default: a field) and a number of options.
- **Table** and **Details** widgets (and lists/power searches) use all options below. **Count, Sum, Average, Chart and Maps** widgets only use field columns, to know which field values to load; their display options are ignored.
- Fields from another module can be used when the widget has a relation to that module. See [JSON Relations](json-relations.md). When you add such a field in the form editor, the relation is added for you.

## Column Types

| `type` | Required keys | Shows |
|---|---|---|
| `customfield` (default, can be left out) | `keyName` = field key name | The field's value. |
| `moduleitemtype` | `keyName` = **module** key name | The item type of the record in that module (in tables with its icon and colour). At least one field of the same module must also be a column. |
| `relation` | `keyName` = **relation** key name | The parent record(s) of each row through that relation. |
| `static` | `id`, `label`, `value` | A calculated value. See [Calculated (static) columns](#calculated-static-columns). |
| `datediff` | `fromKeyName`, `toKeyName` (date fields) | The number of days between the two dates (always positive). |
| `timediff` | `fromKeyName`, `toKeyName` (time fields) | "From" minus "to" in minutes. Set `"format": "hhmm"` to show hours and minutes. |
| `clockdiff` | `fromKeyName`, `toKeyName` (clock time fields) | "From" minus "to" as a clock time (`hh:mm`). Set `"format": "number"` for minutes. |
| `deadline` | `cfKeyName` (date field) | Days from today until the date. Negative (overdue) values are shown in red, others in green. |

:::caution
For `datediff`, `timediff`, `clockdiff` and `deadline` columns, the source fields must **also** be added as normal columns. Otherwise the column stays empty.
:::

## Options & Parameters

| Option | Type | Used in | Description |
|---|---|---|---|
| `keyName` | string | all | Field key name (or module / relation key name, see above). |
| `type` | string | all | Column type, see above. Default `customfield`. |
| `label` | string | table, details | Column heading / label. Default: the field's label (relation: the relation's name; diff columns: "From - To"; deadline: "Deadline"). Required for static columns. |
| `format` | string | table, details | How the value is shown. Default: the field's own format. See [Formats](#formats). |
| `clickable` | boolean | table, details | Shows the value as a link to the record it belongs to (for a field of a related module: the related record). In tables the module's title field is clickable by default. |
| `editable` | boolean | table, details | **Details:** adds an edit (pen) button to the widget header that opens the editable fields in a pop-up; fields without `editable` are read-only there. **Table:** adds an edit button to each row. |
| `backgroundColor` | colour | table, details | Shows the value as a coloured badge with this background colour. |
| `textColor` | colour | table, details | Text colour of the badge. |
| `colorConditions` | array | table | Colours the value depending on the value. See below. Ignored when `backgroundColor` or `textColor` is set. |
| `textWrap` | boolean | details | `true` wraps long values over several lines instead of cutting them off. |
| `width` | number 1–100 | table | The share of the table width (in percent) the column should take. Must be between 1 and 100, otherwise the table does not load. |
| `sort` | object | table | Default sort order: `{ "order": "ASC" \| "DESC", "priority": 1 }`. With several sorted columns, priority 1 is sorted first. Without any `sort`, the table is sorted by the first column. |
| `icon` | string | table | [Font Awesome](/docs/misc/icons.md) icon shown in the column heading. |

### Formats
`string`, `number`, `float`, `financial`, `percentage`, `date`, `datetime`, `time`, `decimaltime`, `weeknumber`, `email`, `phone`, `list`, `usergroup`, `location`, `country`. `timediff` and `clockdiff` columns also accept `hhmm`. Other values are shown as plain text.

### Colour conditions (tables)
Each condition has an `operator` (`=`, `!=`, `>`, `<`, `>=`, `<=`), a `value`, and a `backgroundColor` and/or `textColor`. The first condition that matches the value **as it is shown in the table** colours the value as a badge.

```json
{
  "keyName": "tasksfield_status",
  "colorConditions": [
    { "operator": "=", "value": "Done", "backgroundColor": "#2e7d32", "textColor": "#fff" },
    { "operator": "=", "value": "Blocked", "backgroundColor": "#c62828", "textColor": "#fff" }
  ]
}
```

## Calculated (static) columns

A `static` column shows a value that you build from text, placeholders and functions.

| Key | Required | Description |
|---|---|---|
| `id` | yes | A short, unique name for the column, e.g. `"margin"`. |
| `label` | yes | Column heading. |
| `value` | yes | The template, see below. |
| `format` | no | Format of the result. Default `string`. |
| `items` | no | Lookups of other records, see below. |
| `relations` | no | [Relations](json-relations.md) used by the lookups' filters. |

**In `value` you can use:**
- `[row.<field key name>]` – the value of a field in the row, e.g. `[row.salesfield_price]`. The field must also be a column of the widget.
- [Replaceables](/docs/misc/replaceables.md) for the row's record, such as `[relation12.<field key name>]`, `[relation12.id]`, `[relation12.type]`, and general ones such as `[user.name]` or `[datenow]`.
- Values of looked-up records (see `items`): `[<name>.title]`, `[<name>.id]`, `[<name>.type]`, `[<name>.<field key name>]`.
- A function, when the value starts with `=`:

| Function | Description | Example |
|---|---|---|
| `IF(condition, then, else)` | `then` when the condition is true, else `else`. Conditions compare two values with `==`, `!=`, `>` or `<`. | `=IF([row.tasksfield_hours] > 8, "Overtime", "Normal")` |
| `IFERROR(value, fallback)` | `fallback` when `value` gives an error or is empty. | `=IFERROR(MATH([row.a]/[row.b]), 0)` |
| `MATH(expression)` | Calculates digits with `+ - * / ( )`. A comma is read as a decimal point. | `=MATH([row.salesfield_price]*[row.salesfield_qty])` |
| `ROUND(value, decimals)` | Rounds the value. | `=ROUND(MATH([row.a]/3), 2)` |
| `"text"` | Plain text. | `=IF(..., "Yes", "No")` |

Text in functions must use double quotes. In JSON, write them as `\"`, e.g. `"value": "=IF([row.tasksfield_hours] > 8, \"Overtime\", \"Normal\")"`.

Errors are shown as `#I/S` (syntax error), `#I/T` (wrong type) or `#I/A` (wrong number of arguments).

**Lookups (`items`):** an object of named filters. Each filter ([JSON Query](json-query.md) format) is run for every row and the first matching record is available under that name. In the filter, replaceables refer to the row's record, e.g. `"[relation12.id]"`.

:::tip
Use **field key names** in calculated columns (`[row.salesfield_price]`, `[customer.customersfield_email]`). On a record page, placeholders written with field ids, such as `[row.cf12]`, `[customer.cf12]` or `[cf12]`, and `[itemid]` are filled with values of the record the **page** shows, not of the row.
:::

```json
{
  "type": "static",
  "id": "contact",
  "label": "Customer e-mail",
  "items": {
    "customer": [["id", "=", "[relation12.id]"]]
  },
  "value": "[customer.customersfield_email]"
}
```

## Usage Example
```json
{
  "moduleid": 41,
  "columns": [
    {
      "keyName": "saleslinesfield_order",
      "width": 30,
      "clickable": true,
      "sort": { "order": "ASC", "priority": 1 }
    },
    {
      "keyName": "saleslinesfield_status",
      "backgroundColor": "#f0f0f0",
      "textColor": "#000000"
    },
    { "keyName": "saleslinesfield_price", "editable": true, "format": "financial" },
    { "keyName": "saleslinesfield_qty", "editable": true },
    {
      "type": "static",
      "id": "total",
      "label": "Total",
      "format": "financial",
      "value": "=MATH([row.saleslinesfield_price]*[row.saleslinesfield_qty])"
    },
    { "keyName": "saleslinesfield_delivery" },
    { "type": "deadline", "cfKeyName": "saleslinesfield_delivery", "label": "Days left" }
  ]
}
```
*A table with a sorted, clickable order column, a badge, two editable fields, a calculated total and the days until delivery (the delivery date is also a column, so the deadline column can use it).*

## Tips
- Use `width` to control the layout of a table; leave it out to let the table decide.
- Use `backgroundColor`/`textColor` for a fixed badge and `colorConditions` for colours that depend on the value.
- Combine `editable` and `clickable` for interactive tables.

## Related Links
- [Table Widget](/docs/modules/widgets/table.md)
- [Details Widget](/docs/modules/widgets/details.md)
- [Powersearch Documentation](/docs/modules/powersearch.md)
- [JSON Queries](json-query.md)
- [JSON Relations](json-relations.md)
- [Replaceables](/docs/misc/replaceables.md)
