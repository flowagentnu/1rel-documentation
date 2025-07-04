# Items Component

A guide to the `items` component for Actional Buttons in FlowAgent.

## When to Use
Use this page when you want to define or use items in your Actional Button configuration.

## How It Works
- The `items` object defines which data items the button interacts with (for conditions, actions, or populating forms).
- Each key in the `items` object is a variable name for use in conditions or actions.
- Values are arrays of conditions, using the [JSON Query Documentation](../../JSON/json-query.md).

## Usage Example
```json
{
  "items": {
    "project": [ ["id", "=", "[itemid]"] ],
    "customer": [ ["id", "=", "[relation80]"] ],
    "subtasks[]": [ ["id", "IN", "[relation90]"] ],
    "equipment[]": [
      ["module58Item.id", "=", "[itemid]"],
      ["module_id", "=", 60],
      ["moduleitemtype_id", "=", 158],
      ["cf123", "=", "option_1000"]
    ]
  }
}
```

## Tips
- Use variable names that make sense for your use case.
- Reference the [JSON Query Documentation](../../JSON/json-query.md) for condition syntax.

## Related Links
- [Main Components](components.md)

---

For more on item queries, see the JSON Query documentation.

