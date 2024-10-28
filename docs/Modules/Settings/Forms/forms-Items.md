# Items

The `items` component in the form's JSON structure is essential for:

1. **Populating Form Fields**: Pre-filling form fields with data fetched based on specified conditions.
2. **Performing Actions through Triggers**: Manipulating items through CRUD (Create, Read, Update, Delete) functions as part of the form's operational flow.

## Structure of `items`

| Property | Type   | Required | Description                                                                                                                            |
| -------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| Key      | string | Yes      | The variable name of the item, used later in fields or triggers.                                                                       |
| Value    | array  | Yes      | Array of conditions for fetching or interacting with the item, specified as per the [JSON Query Documentation](/docs/JSON/json-query). |

### JSON Example

Below is an example illustrating the `items` component with different item identifiers:

```json
{
  "items": {
    "project": [
      ["id", "=", "[itemid]"]
    ],
    "customer": [
      ["id", "=", "[relation80]"]
    ],
    "subtasks[]": [
      ["id", "IN", "[relation90]"]
    ],
    "equipment[]": [
      ["module58Item.id", "=", "[itemid]"],
      ["module_id", "=", 60],
      ["moduleitemtype_id", "=", "158"],
      ["cf123", "=", "option_1000"]
    ]
  }
}
```

In this example:

- The `project` item is fetched using the current item's ID, referred to as `[itemid]`.
- The `customer` item fetches a single customer related to the current item by `relation80`.
- The `subtasks[]` item fetches all subtasks related by `relation90`.
- The `equipment[]` item fetches only items related to module 58 (`project`), further filtered by module ID 60, `moduleitemtype_id`, and a custom field condition.

### Item Commands

The commands used to define items are detailed below:

| Command        | Description                                                                                                                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[itemid]`     | The ID of the current item.                                                                                                                                                                    |
| `[relationXX]` | The ID of related items, where `XX` is the relation ID. This is a quick query option for simple relations. For more specific queries, use the regular query options instead of `[relationXX]`. |

## Example Usage in Forms

### Populating Form Fields

```json
{
  "items": {
    "project": [
      ["id", "=", "[itemid]"]
    ],
    "customer": [
      ["id", "=", "[relation80]"]
    ],
    "subtasks[]": [
      ["id", "IN", "[relation90]"]
    ],
    "equipment[]": [
      ["module58Item.id", "=", "[itemid]"],
      ["module_id", "=", 60],
      ["moduleitemtype_id", "=", "158"]
    ]
  },
  "pages": {
    "1": {
      "name": "Info",
      "fields": [
        {
          "key": {
            "id": "project_name",
            "name": "Project Name",
            "required": true,
            "cftype_id": 307,
            "defaultValue": "[project.cf1234]"
          }
        },
        {
          "key": {
            "id": "customer_contact",
            "name": "Customer Contact",
            "required": true,
            "cftype_id": 305,
            "defaultValue": "[customer.cf5678]"
          }
        },
        {
          "key": {
            "id": "equipment_details",
            "name": "Equipment Details",
            "required": false,
            "cftype_id": 310,
            "defaultValue": "[equipment.cf7890]"
          }
        }
      ]
    }
  }
}
```
*In this form, the `project_name`, `customer_contact`, and `equipment_details` fields are prefilled using data from the `project`, `customer`, and `equipment` items respectively.*

### Performing CRUD Actions

```json
{
  "submit": {
    "text": "Save",
    "triggers": [
      {
        "then": {
          "crud": {
            "update": {
              "project": {
                "customfield": {
                  "cf1234": "post[project_name]"
                }
              },
              "subtasks[]": {
                "customfield": {
                  "cf5678": "post[customer_contact]"
                }
              }
            }
          },
          "endflow": true
        }
      }
    ]
  }
}
```
*On submission, this trigger updates the `project` and multiple `subtasks[]` items with data entered in the form fields.*

