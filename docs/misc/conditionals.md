# Conditionals

A guide to using conditions for logic and automation in FlowAgent.

## Purpose
Conditions are used to evaluate logic throughout the Flow platform. They support a wide range of comparison types and are commonly used in rules, logic flows, widgets, and automations.

This helper allows you to define **conditions** using simple syntax and run logic only when those conditions are true.

---

## Where Conditionals Are Used
Conditionals are widely used across the Flow platform to control visibility and behavior dynamically:

- **Forms**
  - **Visibility**: Show or hide a form based on specific conditions (e.g., user role, item status).
  - **Triggers**: Execute logic (e.g., autofill, CRUD operations) when certain conditions are met.
- **Action Buttons**
  - **Visibility**: Show or hide buttons depending on user context, field values, or item state.

These conditionals are defined using the same JSON format and evaluated by the `ConditionalHelper`.

---

## JSON Structure
A typical conditional block looks like this:

```json
{
  "if": [
    [
      "field_name",
      "is",
      "empty"
    ]
  ],
  "then": {
    "doSomething": true
  },
  "breakAfter": false
}
```
- `if`: An array of condition arrays. Each condition is structured as `[leftOperand, condition, rightOperand]`.
- `then`: The action(s) to perform if the condition(s) are true.
- `breakAfter`: (Optional) Whether to stop processing further rules if this one is matched.

---

## Supported Conditions
You can use the following condition keywords:

- `is` or `=`: Equals (e.g., `["status", "is", "done"]`)
- `!=` or `<>`: Not equal (e.g., `["type", "!=", "archived"]`)
- `>`: Greater than (e.g., `["age", ">", 18]`)
- `>=`: Greater or equal (e.g., `["score", ">=", 10]`)
- `<`: Less than (e.g., `["quantity", "<", 5]`)
- `<=`: Less or equal (e.g., `["price", "<=", 100]`)
- `contains`: String contains (e.g., `["description", "contains", "urgent"]`)
- `notcontains`: String does not contain (e.g., `["title", "notcontains", "test"]`)
- `startswith`: String starts with (e.g., `["filename", "startswith", "img_"]`)
- `endswith`: String ends with (e.g., `["filename", "endswith", ".jpg"]`)
- `in`: Value is in list (e.g., `["color", "in", "red,green,blue"]`)
- `notin`: Value is not in list (e.g., `["status", "notin", "cancelled,draft"]`)
- `empty`: Value is empty or null (e.g., `["comment", "is", "empty"]`)
- `notempty`: Value is not empty (e.g., `["name", "is", "notempty"]`)

---

## JSON Usage Examples

### Example: Check if a list is empty, then clear a field on each item
```json
{
  "if": [
    [
      "optaelling_liste",
      "is",
      "empty"
    ]
  ],
  "then": {
    "loop": "produkter",
    "crud": {
      "update": {
        "[loopvalue]": {
          "customfield": {
            "cf1434": ""
          }
        }
      }
    }
  },
  "breakAfter": false
}
```

### Example: Only show button if user is in group “admin”
```json
{
  "if": [
    [
      "[usergroups]",
      "contains",
      "admin"
    ]
  ],
  "then": {
    "visible": true
  }
}
```

### Example: Make a form visible only when the status is not "closed"
```json
{
  "if": [
    [
      "[item.cf1001]",
      "!=",
      "closed"
    ]
  ],
  "then": {
    "visible": true
  }
}
```

---

## Notes
- Most values can be dynamic, using [Replaceables](/docs/misc/replaceables.md) like `[user]`, `[item.cf1234]`, etc.
- String comparisons are case-insensitive by default.
- Arrays and comma-separated values are supported for `in` and `contains`.
- For more info on how JSON queries work, see [JSON Queries](/docs/JSON/json-query.md).