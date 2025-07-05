# JSON Queries

A guide to using JSON queries for filtering and retrieving data in FlowAgent.

## When to Use
Use this page when you want to filter, search, or retrieve data using JSON in forms, widgets, action buttons, or automations.

## How It Works
- JSON queries are arrays of conditions: `[key, operator, value]`.
- Used in action buttons, forms, widgets, power searches, and apps.
- Combine multiple conditions for advanced filtering.

## Usage Example
**Query for items with a specific custom field and type:**
```json
{
  "query": [
    ["cf151.string", "=", "abc"],
    ["moduleitemtype_id", "=", 10]
  ]
}
```

## Supported Operators
You can use the following operators in your JSON queries:

- `=`: Equals (e.g., `["status", "=", "active"]`)
- `!=`: Not equal (e.g., `["type", "!=", "archived"]`)
- `>`: Greater than (e.g., `["age", ">", 18]`)
- `>=`: Greater than or equal (e.g., `["score", ">=", 10]`)
- `<`: Less than (e.g., `["quantity", "<", 5]`)
- `<=`: Less than or equal (e.g., `["price", "<=", 100]`)
- `LIKE`: SQL LIKE for partial string matches (e.g., `["name", "LIKE", "%john%"]`)
- `NOT LIKE`: SQL NOT LIKE (e.g., `["email", "NOT LIKE", "%@test.com"]`)
- `IN`: Value is in a list (comma-separated or array) (e.g., `["color", "IN", "red,green,blue"]`)
- `NOT IN`: Value is not in a list (e.g., `["status", "NOT IN", "cancelled,draft"]`)
- `FIND_IN_SET`: Value is found in a comma-separated set (e.g., `["tags", "FIND_IN_SET", "[user]"]`)
- `FIND_IN_GROUP`: Field value is found in a comma-separated string (e.g., `["user_id", "FIND_IN_GROUP", "1,2,3"]`)

**Grouping:**
- Use `(` and `)` as the key to group conditions (e.g., `["("]`, `["status", "=", "active"]`, `["type", "=", "admin"]`, `["), OR"]`)
- The fourth parameter in a condition can be `AND` or `OR` to control logic between conditions.

## Tips
- Replace keys and values with your actual field/module IDs.
- String comparisons are case-insensitive by default.
- Use arrays or comma-separated strings for `IN` and `NOT IN`.
- Use grouping for complex queries.

## Related Links
- [JSON Actions](json-actions.md)
- [JSON Relations](json-relations.md)
- [Replaceables](/docs/misc/replaceables.md)