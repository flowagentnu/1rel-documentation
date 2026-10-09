# Dynamic Values

Dynamic Values let you automatically generate values for custom fields based on a set of rules—such as static text, numbers, dates, or relations.

## When to Use
Use Dynamic Values when you need to auto-generate things like customer numbers, invoice numbers, or any value that follows a pattern or sequence.

## How It Works
- Define a set of rules (static, number, date, relation, etc.).
- The value is generated and updated automatically based on these rules.
- Can be used in custom fields to pre-fill or increment values.

## What Can Dynamic Values Do?
- Create customer numbers, invoice numbers, or any value that needs to be generated based on a set of rules.
- Combine multiple rules for unique, dynamic outputs.

## Dynamic Value Object Structure
A Dynamic Value object can include:
- `rules` (array): The rules that define how the value is generated.
- `meta` (array, optional): Metadata for the value.
- `lastOutput` (string, optional): The last generated value (for reference only).

## Rule Types & Examples
You can combine multiple rule types for advanced patterns.

### Static
Generates a fixed value.
```json
{
  "rules": [
    { "type": "static", "value": "Any freetext value" }
  ]
}
```

### Number
Generates a sequence of numbers.
```json
{
  "rules": [
    {
      "type": "number",
      "stepSize": 1,
      "direction": "asc", // asc or desc
      "start": 1,
      "zeroPad": 0
    }
  ]
}
```

### Date
Generates a date value, optionally incremented.
```json
{
  "rules": [
    {
      "type": "date",
      "format": "Y-m-d",
      "stepSize": 0,
      "stepSizeType": "day",
      "direction": "asc", // asc or desc
      "start": "today" // use a date or e.g., today/yesterday/tomorrow
    }
  ]
}
```
Format, stepSizeType, and start accept valid PHP date formats. For more information, see [PHP Date Formats](https://www.php.net/manual/en/datetime.format.php).

## Tips
- Combine static, number, and date rules for advanced patterns (e.g., `INV-2025-0001`).
- Use in custom fields to automate numbering and labeling.