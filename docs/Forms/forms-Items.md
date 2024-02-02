# Items

The `items` component in the form's JSON structure is crucial for two primary functionalities:

1. **Populating Form Fields**: It facilitates pre-filling form fields with predefined information by fetching data from specified items based on certain conditions.
2. **Performing Actions through Triggers**: It allows for the manipulation of these items through CRUD (Create, Read, Update, Delete) functions as part of the form's operational flow.

## `items` Properties

The `items` object is structured as a collection of key-value pairs. Each key represents a unique identifier for an item type within the form, and the associated value is an array. This array specifies the criteria for fetching or interacting with the item, utilizing query filters as defined in the [JSON Query Documentation](/docs/JSON/json-query)..

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| Key      | string | Yes      | Serves as the unique identifier of the item within the form. |
| Value    | array  | Yes      | An array of conditions or parameters, defining the criteria for fetching or manipulating the item. It uses a structured query format as described in the [JSON Query Documentation](/docs/JSON/json-query).. |

### JSON Example

The following example illustrates the `items` component with different types of item identifiers:

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
      ["id", "=", "[relationXX]"]
    ]
  }
}
```

In this example:

- The `Project` item is fetched using the current item's ID, referred to as `[itemid]`.
- The `customer` item is linked to the ID of a parent item, denoted by `[parentitemid]`.
- The `task` item is associated with a related item, identified through a relationship indicated as `[relationXX]`, where `XX` should be replaced with the actual relation ID relevant to your configuration.

Each array under an item key (like `Project`, `customer`, `task`) is structured as a query filter. It specifies the criteria for fetching or interacting with that item, primarily for the purpose of populating form fields or performing actions through form triggers.