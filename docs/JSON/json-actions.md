# JSON Actions

A guide to using actions for automation and interactivity in FlowAgent.

## When to Use
Use this page when you want to automate tasks, trigger workflows, or add logic to forms, buttons, or widgets.

## How It Works
- Actions are objects with `if` (conditions) and `then` (tasks to execute).
- Used for CRUD, navigation, notifications, and more.
- Can be combined for complex logic flows.

## Usage Example
**Add a new customer if a condition is met:**
```json
{
  "actions": [
    {
      "name": "Add New Customer",
      "if": [ ["customerName", "=", "John"] ],
      "then": {
        "crud": {
          "insert": {
            "customer": {
              "moduleid": 50,
              "moduleitemtype_id": "111",
              "customfield": {
                "cf100": "[post.name]",
                "cf101": "[post.phonenumber]"
              }
            }
          }
        }
      }
    }
  ]
}
```

## Tips
- Use `breakAfter` to control action flow.
- Reference the JSON Actions documentation for all available action types.
