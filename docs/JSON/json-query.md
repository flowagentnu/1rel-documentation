# JSON Queries

## Introduction

JSON queries in 1Relation facilitate structured data retrieval and management, enhancing efficiency and accuracy. This documentation elaborates on the construction and utilization of JSON queries, detailing the keys, operators, and values integral to formulating queries within 1Relation.

JSON queries are used in the following functionalities:

- `Action buttons`
- `Forms`
- `Widgets`
- `Power searches`
- `Apps that make use of queries`

## Constructing a Query

1. Identify the key you want to query against.
2. Select the appropriate operator for comparison.
3. Specify the value for comparison.

### JSON Example

```json
{
  "query": [
    ["cf151.string", "=", "abc"],
    ["moduleitemtype_id", "=", 10]
  ]
}
```
*This query returns items where the value of custom field `cf151.string` is exactly "abc", and the module item type id is exactly `10`.*

## Core Concepts

Sure, here's the updated section with placeholders for the module IDs that the user should replace:

### Query Keys

Query keys are the attributes against which you want to filter or search data.

#### Query Key Properties

| Key                 | Description |
|---------------------|-------------|
| `cfxxx.string`      | Refers to a specific custom field. |
| `moduleitemtype_id` | Refers to items in a specific module item type. |
| `id`                | Refers to the item ID. |
| `module_id`         | Refers to items in a specific module. |
| `moduleXXMit.name`  | Refers to the name of a module item type within a specific module, where `XX` should be replaced with the actual module ID. |
| `moduleYYItem.id`   | Refers to items related by a specific relation ID, where `YY` should be replaced with the actual module ID. |

#### JSON Example

```json
{
  "query": [
    ["cf101.string", "=", "value"],
    ["moduleitemtype_id", "=", 10],
    ["id", "=", 123],
    ["module_id", "=", 6],
    ["moduleXXMit.name", "=", "Inspection project"],
    ["moduleYYItem.id", "IS", "NULL"]
  ]
}
```

*This example demonstrates how to use different query keys to filter data based on specific attributes such as custom field values, module item types, item IDs, and module IDs. Replace `XX` and `YY` with the actual module IDs relevant to your configuration.*

### Query Operators

Query operators determine the type of comparison between the query key and the query value.

#### Operator Properties

| Operator | Description |
|----------|-------------|
| `=`      | Value of custom field should be equal to specified value. |
| `!=`     | Value of custom field should not be equal to specified value. |
| `>`      | Value of custom field should be greater than the specified value. |
| `<`      | Value of custom field should be less than the specified value. |
| `>=`     | Value of custom field should be greater than or equal to the specified value. |
| `<=`     | Value of custom field should be less than or equal to the specified value. |
| `IN`     | Value of custom field should be in the specified list of values. |
| `NOT IN` | Value of custom field should not be in the specified list of values. |
| `LIKE`   | Value of custom field should partially match the specified value. |
| `NOT LIKE` | Value of custom field should not partially match the specified value. |
| `IS`     | Checks if a value is NULL. |

#### JSON Example

```json
{
  "query": [
    ["cf101.string", "=", "value"],
    ["cf101.string", "!=", "value"],
    ["cf101.string", ">", 1000],
    ["cf101.string", "<", 1000],
    ["cf101.string", ">=", 1000],
    ["cf101.string", "<=", 1000],
    ["cf101.string", "IN", ["option_220", "option_221"]],
    ["cf101.string", "NOT IN", ["option_220", "option_221"]],
    ["cf101.string", "LIKE", "value"],
    ["cf101.string", "NOT LIKE", "value"],
    ["cf101.string", "IS", "NULL"]
  ]
}
```

### Query Values

Query values are the data or conditions against which the query keys are compared.

#### Value Types

| Type          | Description |
|---------------|-------------|
| Fixed Values  | Text or numbers. |
| Options       | Refers to a custom field value, use option IDs for dropdown fields. |
| Replaceables  | Used to query based on information from a specific location such as `[itemid]`, `[relationxxx]`, `[datenow]`, `[userid]`. |

#### JSON Example

```json
{
  "query": [
    ["cf101.string", "=", "fixedValue"],
    ["cf101.string", "=", "[itemid]"],
    ["cf101.string", "=", "[relation80]"],
    ["cf101.string", "=", "[datenow]"],
    ["cf101.string", "=", "[userid]"]
  ]
}
```

## Replaceables

Replaceables are special placeholders that are replaced with actual values during query execution.

### Common Replaceables

| Replaceable     | Description |
|-----------------|-------------|
| `[itemid]`      | The ID of the current item. |
| `[relationxxx]` | The ID of the related item, where `xxx` should be replaced with the actual relation ID. |
| `[datenow]`     | Today's date. |
| `[datetomorrow]`| Tomorrow's date. |
| `[dateyesterday]`| Yesterday's date. |
| `[dateweek]`    | The first day of the current week (Monday). |
| `[datemonth]`   | The first day of the current month. |
| `[userid]`      | The ID of the current user. |
| `[user_23]`     | A specific user with ID `23`. |

#### JSON Example

```json
{
  "query": [
    ["cf101.string", "=", "[itemid]"],
    ["cf101.string", "=", "[relation80]"],
    ["cf101.string", "=", "[datenow]"],
    ["cf101.string", "=", "[datetomorrow]"],
    ["cf101.string", "=", "[dateyesterday]"],
    ["cf101.string", "=", "[dateweek]"],
    ["cf101.string", "=", "[datemonth]"],
    ["cf101.string", "=", "[userid]"],
    ["cf101.string", "=", "[user_23]"]
  ]
}
```

## Query Combinations

### String Fields

- Use the exact string value in queries.

#### JSON Example

```json
["cf151.string", "=", "abc"]
```
*This query specifies that the value of custom field `cf151.string` should be exactly "abc".*

### Number Fields

- Use the exact numeric value in queries.

#### JSON Example

```json
["cf152.string", ">", 9999]
```
*This query specifies that the value of custom field `cf152.string` should be greater than 9999.*

### Dropdown, Radio, and Checkbox Fields

- Always use the option ID in queries, not the display name.

#### JSON Example

```json
["cf153.string", "IN", ["option_220", "option_221", "option_222"]]
```
*This query specifies that the value of custom field `cf153.string` should be in the specified list of values.*

### Date Fields

- Use the date in the "YYYY-MM-DD" format.

#### JSON Example

```json
{
  "query": [
    ["cf154.string", ">=", "2023-01-01"],
    ["cf154.string", "=", "[datenow]"],
    ["cf154.string", "=", "[datetomorrow]"],
    ["cf154.string", "=", "[dateyesterday]"],
    ["cf154.string", "=", "[dateweek]"],
    ["cf154.string", "=", "[datemonth]"]
  ]
}
```
*This query specifies various date conditions for the custom field `cf154.string`.*

### User Fields

- Use the "user_[id]" for a specific user.

#### JSON Example

```json
{
  "query": [
    ["cf155.string", "=", "user_2"],
    ["cf155.string", "=", "[userid]"]
  ]
}
```
*This query specifies that the value of custom field `cf155.user` should be equal to user id "user_2" or the current user id.*

### Module Item Type

- Refers to items in a specific module item type.

#### JSON Example

```json
["moduleitemtype_id", "=", 10]
```
*This query specifies items in a specific module item type.*

### Item ID

- Specifies that the item id should not be equal to a certain value.

#### JSON Example

```json
["id", "!=", 100]
```
*This query specifies that the item id should not be equal to `100`.*

### Module ID

- Specifies that the items should belong to one of the specified modules.

#### JSON Example

```json
["module_id", "IN", [6, 7]]
```
*This query specifies that the items should belong to one of the specified modules.*