# Items

The `items` component in the form's JSON structure is crucial for two primary functionalities:

1. **Populating Form Fields**: It facilitates pre-filling form fields with predefined information by fetching data from specified items based on certain conditions.
2. **Performing Actions through Triggers**: It allows for the manipulation of these items through CRUD (Create, Read, Update, Delete) functions as part of the form's operational flow.

## `items` Properties

The `items` object consists of arrays, where the key defined for each array is the variable name of that item. Each array contains a set of conditions or parameters for interacting with the item. These conditions are specified in the [JSON Query Documentation](/docs/JSON/json-query).

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| Key      | string | Yes      | The variable name of the item defined, that can be used later to update or creating a condition on given item |
| Value    | array  | Yes      | [JSON Query Documentation](/docs/JSON/json-query) |

### JSON Example

The following example illustrates the `items` component with different types of item identifiers:

```json
{
  "items": {
    "project": [
      ["id", "=", "[itemid]"] // Interacts with the project having the current item's ID
    ],
    "task": [
      ["id", "=", "[relation79]"] // Interacts with the task having a specific relationship ID
    ]
  }
}
```

In this example:

- The `project` item is fetched using the current item's ID, referred to as `[itemid]`.
- The `task` item is associated with a related item, identified through a relationship indicated as `[relationXX]`, where `XX` should be replaced with the actual relation ID relevant to your configuration.

Each array under an item key (like `project`, `customer`, `task`) is structured as a query filter. It specifies the criteria for fetching or interacting with that item, primarily for the purpose of populating form fields or performing actions through triggers.

### Item Commands
In above example, the `project`, `customer`, and `task` are defined by different commands. To understand the commands, see table below:

| Command | Description |
|---------|-------------|
| `[itemid]` | The ID of the current item |
| `[relationXX]` | The ID of the related item, where `XX` should be replaced with the actual relation ID relevant to your configuration |