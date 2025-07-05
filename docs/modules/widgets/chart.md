# Chart Widget

The Chart Widget provides a graphical representation of data, letting you visualize key metrics and trends directly on your dashboard. It is highly customizable for use cases like financial metrics, project status, or any aggregated data.

## When to Use
Use the Chart Widget to display trends, comparisons, or breakdowns of data—such as sales vs. costs, project statuses, or any metric that benefits from visual representation.

## How It Works
- Configure the widget with the module ID and chart settings.
- Use queries and groupings to filter and aggregate data.
- Choose chart type (pie, bar), set labels, and customize colors.
- Optionally define relations to pull in related data from other modules.

## Options & Parameters
- **moduleid** (integer, required): The module to fetch data from.
- **chart** (object, required): Chart settings.
  - **type** (string, required): Chart type, e.g., "pie" or "bar".
  - **label** (string, required): Title of the chart.
  - **labels** (string or array, required): Labels for each segment/bar. Can be a custom field or an array of strings.
  - **data** (string or array, required): Data values for each label. Can be a custom field, an array of numbers, or "query" to fetch dynamically.
  - **backgroundColor** (array, required): Colors for each segment/bar.
- **query** (array, required for dynamic data): Filter criteria for fetching data. See [JSON Query Documentation](/docs/JSON/json-query).
- **group** (object, optional): How to aggregate data (e.g., sum or count for each field).
- **relations** (object, optional): Define relationships to other modules. See [JSON Relations Documentation](/docs/JSON/json-relations).

## Usage Examples

**Pie Chart for Financial Metrics**

```json
{
  "chart": {
    "type": "pie",
    "label": "Economy",
    "labels": ["Salesvalue", "Cost"],
    "data": ["[cf1270]", "[cf1271]"],
    "backgroundColor": ["green", "orange"]
  }
}
```

**Bar Chart for Financial Metrics**

```json
{
  "chart": {
    "type": "bar",
    "label": "Economy",
    "labels": ["Salesvalue", "Cost"],
    "data": ["[cf1270]", "[cf1271]"],
    "backgroundColor": ["blue", "red"]
  }
}
```

**Query-Based Data Chart**

```json
{
  "moduleid": 40,
  "chart": {
    "type": "bar",
    "label": "Data",
    "labels": "cf223",
    "data": "query",
    "backgroundColor": ["green", "orange"]
  },
  "query": [["cf214", ">", 0]],
  "group": {"cf214": "sum"}
}
```

**Query-Based Chart with Multiple Summed Columns**

```json
{
  "chart": {
    "type": "pie",
    "label": "Economy",
    "data": "query",
    "backgroundColor": ["green", "orange"]
  },
  "relations": {
    "module77": {"parent": 75, "child": 77, "relationid": 79}
  },
  "query": [["cf1270", ">", 0]],
  "group": {"cf1270": "sum", "cf1271": "sum"}
}
```

*In these examples:*
- **chart**: Defines the chart's type, appearance, and data source.
- **data**: Set to "query" to fetch data dynamically.
- **relations**: Specifies relationships between modules for data retrieval.
- **query**: Filters the data to include only relevant values.
- **group**: Aggregates the filtered data, summing up values as needed.
- **backgroundColor**: Specifies colors for the chart segments/bars.

## Related Links
- [JSON Query Documentation](/docs/JSON/json-query)
- [JSON Relations Documentation](/docs/JSON/json-relations)
- [Common Widget Properties](/docs/modules/widgets/common-properties.md)

