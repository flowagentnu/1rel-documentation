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

## Tips
- Replace keys and values with your actual field/module IDs.
- Use operators like `=`, `!=`, `IN`, `>`, `<`, etc.

## Related Links
- [JSON Actions](json-actions.md)
- [JSON Relations](json-relations.md)
- [Replaceables](/docs/misc/replaceables.md)