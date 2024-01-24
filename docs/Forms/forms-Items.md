In 1Relation, the concept of "items" within forms plays a pivotal role in enhancing the dynamic functionality of form-based user interactions. This document delves into how "items" are utilized in forms, outlining their use cases and demonstrating their integration with JSON queries.

## Use Cases

>- **Prefilling Form Fields**
>
> Items can dynamically prefill fields in a form based on the data stored in them. This is particularly useful in scenarios such as prefilling field values presented to the user.
>
>- **Executing Actions Using Item Data**
>
> Actions submitted through the form use item information to manage and execute actions.

## Items Components in Forms

Items in 1Relation forms are integral for customizing the form's functionality and enhancing user interaction. Each item within a form consists of several key components:

### Item name (string)
- **Required**: Yes
- **Description**: Assigns a logical identifier to each item, facilitating easier reference and manipulation within the form.
- **Available options**: All query functionality as mentioned in JSON query document. 
- **Example**: `"Project": [...]`

### Query Filters (array)
- **Required**: Yes
- **Description**: Specifies the filters used to retrieve specific items. This includes criteria like item IDs or relational data, allowing the form to dynamically fetch and display relevant item information.
- **Example**:
  ```json
  "Project": [
    ["id", "=", "[itemid]"]
  ]

## Integration with JSON Queries

Items in forms are retrieved or identified through JSON queries. These queries can specify which items to fetch based on various criteria, ensuring that the correct data populates the form.

For detailed guidance on constructing JSON queries in 1Relation, refer to our [JSON Query documentation](/docs/JSON/json-query).

### JSON Query Example

The following JSON example demonstrates querying a specific item, utilizing `itemid`, `relationxx` and `parentid`:

```json
{
"items": {
    "Project": [
      [
        "id",
        "=",
        "[itemid]"
      ]
    ],
    "customer": [
      [
        "id",
        "=",
        "[parentitemid]"
      ]
    ],
    "task": [
      [
        "id",
        "=",
        "[relation79]"
      ]
    ]
  }
}
```