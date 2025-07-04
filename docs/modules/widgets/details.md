# Details Widget

The Details Widget displays custom fields from any module, providing detailed information about specific items in a clear, customizable layout.

## When to Use
Use the Details Widget when you want to show a summary or detailed view of an item’s fields—such as on dashboards, sidebars, or item pages.

## How It Works
- Configure the widget with the module ID and a query to select the item(s) to display.
- Optionally, use relations to pull in related data from other modules.
- Adjust `colSize` to control the number of columns (1-12) for field display.

## Main Properties
- **moduleid** (integer, required): The ID of the module to display data from. Defaults to the current module.
- **query** (array, required): A [JSON Query](/docs/JSON/json-query.md) to filter which item(s) to show. Default: `[ ["id", "=", "[itemid]"] ]`
- **relations** (object, optional): [JSON Relations](/docs/JSON/json-relations.md) for pulling in related data.
- **colSize** (integer, optional): Number of columns for displaying fields (range: 1-12). If not set, it is auto-calculated based on the number of fields.

## Usage Example
Show details about a parent relation (e.g., from module 2, show parent from module 1 using relation id 123):

```json
{
  "moduleid": 1,
  "query": [
    ["id", "=", "[relation123]"]
  ]
}
```

## Tips
- Use `colSize` to control layout: 1 for a single column, up to 12 for a wide, multi-column display.
- Combine with relations to show data from linked modules.

## Related Links
- [Common Widget Properties](/docs/modules/widgets/common-properties.md)
- [JSON Query](/docs/JSON/json-query.md)
- [JSON Relations](/docs/JSON/json-relations.md)