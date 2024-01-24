
# JSON Queries in 1Relation

## Introduction

JSON queries in 1Relation facilitate structured data retrieval and management, enhancing efficiency and accuracy. This documentation elaborates on the construction and utilization of JSON queries, detailing the keys, operators, and values integral to formulating queries within 1Relation.

JSON queries are used in the following functionality:

- `Actional buttons`
- `Forms`
- `Widgets`
- `Powersearches`
- `Apps that make use of queries`

## Core Concepts

### Query Keys

Query keys are the attributes against which you want to filter or search data.

#### JSON "key" Example

```json
["cf101.string", "=", "value"]
```

#### Comments
- `cfxxx.string`: Refers to a specific custom field.
- `moduleitemtype_id`: Refers to items in a specific module item type.
- `id`: Referring to item id.
- `module_id`: Refers to items in a specific module.

### Query Operators

Query operators determine the type of comparison between the query key and the query value.

#### JSON "operator" Example

```json
["cf101.string", ">", "1000"]
```

#### Comments
- `=`: Value of custom field should be equal to specified value.
- `!=`: Value of custom field should not be equal to specified value.
- `>` / `<`: Value of custom field should be greater/less than specified value.
- `>=` / `<=`: Value of custom field should be greater/less than or equal to specified value.
- `IN` / `NOT IN`: Value of custom field should be in/not be in the specified list of values.
- `LIKE` / `NOT LIKE`: Partial matching/excluding partial matches.

### Query Values

Query values are the data or conditions against which the query keys are compared.

#### JSON "value" Example

```json
["cf101.string", "=", "[datenow]"]
```

#### Comments
- Fixed Values: Text or numbers.
- Options: Refers to a custom field value, use option IDs for dropdown fields.
- Replaceables: Used to query based on information from a specific location such as `[itemid]`, `[relationxxx]`, `[datenow]`, `[userid]`.

## Query combinations

### String Fields

- Use the exact string value in queries.
- Example: `["cf151.string", "=", "abc"]` specifies that the value of custom field `cf151.string` should be exactly "abc".

### Number Fields

- Use the exact numeric value in queries.
- Example: `["cf152.string", ">", "9999"]` specifies that the value of custom field `cf152.string` should be greater than 9999.

### Dropdown, Radio and Checkbox Fields

- Always use the option ID in queries, not the display name.
- Example: `["cf153.string", "IN", "\"option_220\",\"option_221\",\"option_222\""]` specifies that the value of custom field `cf153.string` should be in the specified list of values.

### Date Fields

- Use the date in the "YYYY-MM-DD" format.
- Example: `["cf154.string", ">=", "2023-01-01"]` specifies that the date in custom field `cf154.string` should be on or after "2023-01-01".

### User Fields

- Use the "user_[id]" for a specific user.
- Example: `["cf155.string", "=", "user_2"]` specifies that the value of custom field `cf155.user` should be equal to user id "user_2". For querying the result based on the active user, use `["cf155.string", "=", "[user]"]`.

### Module Item Type

- `["moduleitemtype_id", "=", "10"]` refers to items in a specific module item type.

### Item ID

- `["id", "!=", "100"]` specifies that the item id should not be equal to "100".

### Module ID

- `["module_id", "IN", "\"module_5\",\"module_6\""]` specifies that the items should belong to one of the specified modules.

### Empty Query

- A query can be empty if all items from the module should be included, though this is not illustrated in this example.

## How-To construct a query

### Constructing a Query

1. Identify the key you want to query against.
2. Select the appropriate operator for comparison.
3. Specify the value for comparison.

#### JSON Example

```json
{
  "query": [
    ["cf151.string", "=", "abc"],
    ["moduleitemtype_id", "=", "10"]
  ]
}
```

#### Explanation
This query returns items where the value of custom field `cf151.string` is exactly "abc", and the module item type id is exactly "10".