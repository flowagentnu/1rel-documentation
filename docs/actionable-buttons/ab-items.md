# Items

## Introduction

The `items` component is essential for defining the Items the Actional Button context in which the button operates. An item can be used for condtions or actions, such as populating form fields, performing CRUD operations, or other item-based interactions.

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
      ["id", "=", "[parentitemid]"] // Interacts with the customer having the parent item's ID
    ],
    "task": [
      ["id", "=", "[relation79]"] // Interacts with the task having a specific relationship ID
    ]
  }
}
```

In this example:

- The `project` item is fetched using the current item's ID, referred to as `[itemid]`.
- The `customer` item is linked to the ID of a parent item, denoted by `[parentitemid]`.
- The `task` item is associated with a related item, identified through a relationship indicated as `[relationXX]`, where `XX` should be replaced with the actual relation ID relevant to your configuration.

Each array under an item key (like `project`, `customer`, `task`) is structured as a query filter. It specifies the criteria for fetching or interacting with that item, primarily for the purpose of populating form fields or performing actions through triggers.

### Item Commands
In above example, the `project`, `customer`, and `task` are defined by different commands. To understand the commands, see table below:

| Command | Description |
|---------|-------------|
| `[itemid]` | The ID of the current item |
| `[parentitemid]` | Parent Item is currently only available when Actional Button is used in a Power Search Table, as an Row Button. The Parent Item is then given as the Item the widget is displayed on |
| `[relationXX]` | The ID of the related item, where `XX` should be replaced with the actual relation ID relevant to your configuration |