# Items

The `items` component within an Actional Button's JSON configuration serves as the foundation for specifying which data items the button can interact with. This is crucial for defining the context in which the button operates, including the data it will read, update, or use to determine visibility and actions.

## Structure of `items`

In the context of Actional Buttons, the `items` object is a collection of key-value pairs. Each key denotes an item type, serving as a unique identifier, while the value is an array defining the conditions under which the button interacts with these items.

| Property | Type   | Required | Options                          | Description |
|----------|--------|----------|----------------------------------|-------------|
| Key      | string | Yes      | N/A                              | Serves as the identifier for the item in the button's configuration, dictating how the button interacts with the item. |
| Value    | array  | Yes      | `itemid`, `parentitemid`, `relationxx`, as described in the JSON Query documentation | An array of conditions or parameters specifying how to interact with the item, such as fetching data for conditions, or identifying which item to update or read. |

### JSON Example

Below is a sample illustrating the `items` component within an Actional Button's configuration, demonstrating different item interactions:

```json
{
  "items": {
    "Project": [
      ["id", "=", "[itemid]"]
    ],
    "customer": [
      ["id", "=", "[parentitemid]"]
    ],
    "task": [
      ["id", "=", "[relation79]"]
    ]
  }
}
```

In this example:

The Project item uses the current item's ID ([itemid]).
The customer item refers to the ID of a parent item ([parentitemid]).
The task item is associated with a related item, identified through a relation ([relation79]).
Each array under an item key (like Project, customer, task) specifies how to retrieve or interact with that item, primarily for the purpose of performing actions through form triggers.