# Items

## Introduction

The `items` component is essential for defining the Items the Actionable Button context in which the button operates. An item can be used for conditions or actions, such as populating form fields, performing CRUD operations, or other item-based interactions.

## Structure of `items`

The `items` object consists of arrays, where the key defined for each array is the variable name of that item. Each array contains a set of conditions or parameters for interacting with the item. These conditions are specified in the [JSON Query Documentation](/docs/JSON/json-query).

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| Key      | string | Yes      | The variable name of the item defined, that can be used later to update or creating a condition on given item |
| Value    | array  | Yes      | [JSON Query Documentation](/docs/JSON/json-query) |

### JSON Example

```json
{
  "items": {
    "project": [
      ["id", "=", "[itemid]"] // Interacts with the project having the current item's ID
    ],
    "customer": [
      ["id", "=", "[relation80]"] // Interacts with the customer having the relation ID 80
    ],
    "subtasks[]": [
      ["id", "IN", "[relation90]"] // Interacts with all subtasks related by relation ID 90
    ],
    "equipment[]": [
      ["module58Item.id", "=", "[itemid]"],
      ["module_id", "=", 60],
      ["moduleitemtype_id", "=", 158],
      ["cf123", "=", "option_1000"] // Applies additional filters for equipment
    ]
  }
}
```

In this example:

- The `project` item is fetched using the current item's ID, referred to as `[itemid]`.
- The `customer` item fetches a single customer related to the current item by `relation80`.
- The `subtasks[]` item fetches all subtasks related by `relation90`.
- The `equipment[]` item fetches only items related to module 58 (project), further filtered by `module_id` 60, `moduleitemtype_id` 158, and a custom field condition (`cf123` = `option_1000`).

Each array under an item key (like `project`, `customer`, `subtasks[]`, `equipment[]`) is structured as a query filter. It specifies the criteria for fetching or interacting with that item, primarily for the purpose of populating form fields or performing actions through triggers.

### Item Commands
In the above example, the `project`, `customer`, `subtasks[]`, and `equipment[]` are defined by different commands. To understand the commands, see the table below:

| Command | Description |
|---------|-------------|
| `[itemid]` | The ID of the current item |
| `[parentitemid]` | Parent Item is currently only available when Actionable Button is used in a Power Search Table, as a Row Button. The Parent Item is then given as the Item the widget is displayed on |
| `[relationXX]` | The ID of the related item, where `XX` should be replaced with the actual relation ID relevant to your configuration |

