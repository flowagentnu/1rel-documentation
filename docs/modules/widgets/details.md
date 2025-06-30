# Details Widget

The Details Widget displays custom fields from any module in the system, providing detailed information about specific items.

## JSON Configuration

[Common Widget Properties](/docs/modules/widgets/common-properties)

| Property    | Type    | Required | Default Value                     | Description                                                    |
|-------------|---------|----------|-----------------------------------|----------------------------------------------------------------|
| `moduleid`  | integer | Yes      | Current Module                    | The ID of the module to display data from.                     |
| `query`     | array   | Yes      | `[["id", "=", "[itemid]"]]`       | [JSON Query](/docs/JSON/json-query) for filtering items.       |
| `relations` | object  | No       | N/A                               | [JSON Relations](/docs/JSON/json-relations) for related data.  |
| `colSize`   | integer | No       | auto-calculated                   | Overrides the column size for displaying fields. If not set, it is calculated based on the number of columns in the widget. |

## Examples

### Example 1: Show details about a parent relation.
In this example, we are on module 2, and we want to show details about the parent relation on module 1.
We need to use the relation id between module 1 and module 2 which is 123.

```json
{
    "moduleid": 1,
    "query": [
        [
            "id",
            "=",
            "[relation123]"
        ]
    ]
}
```