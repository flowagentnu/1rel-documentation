# Items

The `items` component in the form's JSON structure serves two primary purposes:
1. **Populating Form Fields**: It allows for the presentation of fields in the form with predefined information extracted from the custom fields related to these items.
2. **Performing Actions through Triggers**: It enables the manipulation of these items through CRUD (Create, Read, Update, Delete) functions as part of form processing.

## Structure of `items`

The `items` object is a collection of key-value pairs where each key represents an item type, and the value is an array defining how to fetch or interact with these items.

| Property | Type   | Required | Options                          | Description |
|----------|--------|----------|----------------------------------|-------------|
| Key      | string | Yes      | N/A                              | The name of the item, serving as an identifier in the form. |
| Value    | array  | Yes      | `itemid`, `parentitemid`, `relationxx`, other as desicribed in the `JSON Query document`| An array of conditions or parameters used to specify how to fetch or manipulate the item. |

### JSON Example

Below is an example illustrating the `items` component with different item types:

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
Each array under an item key (like Project, customer, task) specifies how to retrieve or interact with that item, primarily for the purpose of populating form fields or performing actions through form triggers.