# Items

## Introduction

The `items` component in an Actional Button's JSON configuration is essential for defining the data context in which the button operates. It specifies the data items the button can interact with, enabling it to perform read, update, or other operations based on defined conditions.

## Structure of `items`

The `items` object consists of key-value pairs, where each key is the name or identifier of a data item, and the value is an array detailing how the button should interact with these items.

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| Key      | string | Yes      | The name or identifier of the item. Dictates how the button interacts with this item within its configuration. |
| Value    | array  | Yes      | Details the conditions or parameters for interacting with the item. Includes item IDs, parent item IDs, or other relationships as specified in the [JSON Query Documentation](/docs/JSON/json-query).. |

### JSON Example

```json
{
  "items": {
    "Project": [
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

- The `Project` item is fetched using the current item's ID, referred to as `[itemid]`.
- The `customer` item is linked to the ID of a parent item, denoted by `[parentitemid]`.
- The `task` item is associated with a related item, identified through a relationship indicated as `[relationXX]`, where `XX` should be replaced with the actual relation ID relevant to your configuration.

Each array under an item key (like `Project`, `customer`, `task`) is structured as a query filter. It specifies the criteria for fetching or interacting with that item, primarily for the purpose of populating form fields or performing actions through triggers.