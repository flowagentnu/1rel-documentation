# Chart Widget

The Chart Widget shows data as a bar, line, pie, doughnut, polar area or radar chart. It can count records per value of a field (for example cases per status), show the totals of fields, or show fixed numbers, including values of the record the page shows.

## When to Use
Use the Chart Widget to show breakdowns and comparisons, such as the status of a customer's cases, sales compared to costs, or the number of tasks per employee.

## How It Works
- Everything can be set in the form on the [widget settings page](/docs/modules/widgets/widget-settings). The relevant sections are **Which records** (module, related modules, filters) and **Chart** (chart type, data, labels, colours, grouping and fields used). The chart's height is set under **Appearance**.
- `chart.data` decides where the numbers come from:
  - `"query"`: the numbers are calculated from the records of `moduleid` that match `query` (only records the user may read), using `group`.
  - A list of numbers, e.g. `[120, 80]`: the numbers are shown as they are, with `chart.labels` as their labels. On a record page you can use [placeholders](/docs/misc/replaceables) like `"[cf1270]"` to show values of the page's record.
- **Count per value:** with `group` set to `{ "cf<id>": "count" }`, the chart gets one bar or slice per value of that field, showing how many records have that value. The field must also be in `columns`. This is the most common use.
- **Totals of fields:** with `group` set to `"sum"` for one or more fields, each field gives one bar or slice with the field's total. The label of each bar is its total. There is no total per value (such as sales per month) at the moment.
- **Always set `moduleid` and at least one field in `columns`**, also for fixed numbers. Without them the chart is empty.
- Set a `height` (for example 250) so the chart has a fixed, predictable size.
- The chart is drawn when the page loads. Reload the page to see changes made to records.

## Usage Examples

**Pie chart: cases per status for the customer the page shows**

```json
{
  "moduleid": 168,
  "relations": {
    "module167": { "parent": 167, "child": 168, "relationid": 194 }
  },
  "query": [
    ["module167Item.id", "=", "[itemid]"]
  ],
  "columns": [
    { "keyName": "casesfield_status" }
  ],
  "group": { "cf1609": "count" },
  "chart": {
    "type": "pie",
    "label": "Status",
    "data": "query",
    "backgroundColor": ["#34495E", "green", "orange"]
  },
  "height": 200
}
```

*`cf1609` is the id of the status field `casesfield_status`. Each status gets a slice showing the number of cases with that status.*

**Bar chart: open tasks per employee on a dashboard**

```json
{
  "moduleid": 113,
  "query": [
    ["cf960.string", "!=", "option_312"]
  ],
  "columns": [
    { "keyName": "tasks_employee" }
  ],
  "group": { "cf961": "count" },
  "chart": {
    "type": "bar",
    "label": "Open tasks",
    "data": "query",
    "backgroundColor": "#6060ff"
  },
  "height": 250
}
```

**Pie chart: sales value and cost of the project the page shows (fixed numbers from fields)**

```json
{
  "moduleid": 75,
  "columns": [
    { "keyName": "projects_salesvalue" }
  ],
  "chart": {
    "type": "pie",
    "label": "Economy",
    "labels": ["Sales value", "Cost"],
    "data": ["[cf1270]", "[cf1271]"],
    "backgroundColor": ["green", "orange"]
  },
  "height": 250
}
```

*`[cf1270]` and `[cf1271]` are replaced with the values of those fields on the record the page shows. The chart still needs a module and one field in `columns`, even though the numbers are fixed.*

**Bar chart: totals of two fields of the project's lines**

```json
{
  "moduleid": 77,
  "relations": {
    "module75": { "parent": 75, "child": 77, "relationid": 79 }
  },
  "query": [
    ["module75Item.id", "=", "[itemid]"]
  ],
  "columns": [
    { "keyName": "lines_salesvalue" },
    { "keyName": "lines_cost" }
  ],
  "group": { "cf1280": "sum", "cf1281": "sum" },
  "chart": {
    "type": "bar",
    "label": "Economy",
    "data": "query",
    "backgroundColor": ["green", "orange"]
  },
  "height": 250
}
```

*Each field gives one bar with its total, labelled with the total.*

## Options & Parameters

### Which records
- **moduleid** (integer, always set it): The module whose records are used.
- **query** (array, optional): Which records are used, see [JSON Query](/docs/JSON/json-query). [Placeholders](/docs/misc/replaceables) like `[itemid]` and `[user]` can be used.
- **relations** (object, optional): Related modules whose fields are used or filtered on, see [JSON Relations](/docs/JSON/json-relations).

### Chart
- **chart** (object, required): The chart settings.
  - **type** (string, default `"bar"`): `"bar"`, `"line"`, `"pie"`, `"doughnut"`, `"polarArea"` or `"radar"`. Other chart types are not supported.
  - **label** (string, default `"Data"`): The name of the data, shown in the legend and tooltips.
  - **data** (required): `"query"` to calculate the numbers from the records with `group`, or a list of numbers such as `[120, 80]` or `["[cf1270]", "[cf1271]"]`.
  - **labels** (list of texts): With fixed numbers, one label per number, in the same order. With `"query"`, leave it out: the labels come from the values of the grouped field (or are the totals with `"sum"`).
  - **backgroundColor** (colour, or list of colours): One colour for all bars, or one colour per bar or slice, e.g. `["green", "orange"]`. Default: the standard chart colour.
- **group** (object): How the records are aggregated when `chart.data` is `"query"`. Keys are field ids in the form `"cf<id>"` (not keynames), values are `"count"` or `"sum"` (lowercase).
  - `"count"`: one bar or slice per value of the field, with the number of records with that value.
  - `"sum"`: one bar or slice with the total of the field.
- **columns** (array, required): The fields used, each as `{ "keyName": "field_keyname" }`. Must contain the fields in `group`. Fields that are not in `group` are not shown. With fixed numbers, any one field is enough. See [JSON Columns](/docs/JSON/json-columns).

### Appearance
- **height** (integer, recommended): Height of the chart area in pixels.
- Title, icon, colours, header, background, margin and buttons are shared by all widgets, see [Common Widget Properties](/docs/modules/widgets/common-properties).

## Related Links
- [Widget Settings](/docs/modules/widgets/widget-settings)
- [Common Widget Properties](/docs/modules/widgets/common-properties)
- [JSON Query](/docs/JSON/json-query)
- [JSON Relations](/docs/JSON/json-relations)
- [JSON Columns](/docs/JSON/json-columns)
- [Placeholders (Replaceables)](/docs/misc/replaceables)
