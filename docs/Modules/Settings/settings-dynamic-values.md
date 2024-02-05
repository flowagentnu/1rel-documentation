# Dynamic Values

## What are Dynamic Values?

Dynamic Values are a set of rules that generate a value based on the rules defined. These rules can be static, number, date, or relation field. The generated value can be used on Custom Fields in order to generate a pre-defined value.

## What can Dynamic Values do?

Dynamic Values can be used to create customer numbers, invoice numbers, or any other value that needs to be generated based on a set of rules.

## Dynamic Value Object

| Property    | Type   | Description                                                          |
|-------------|--------|----------------------------------------------------------------------|
| `rules`     | Array  | An array of strings storing the value each rule generated last time  |
| `meta`      | Array  | -                                                                    |
| `lastOutput`| string | The last generated value is stored for reference; it has no functional meaning |

### Rules
There are multiple types of rules, each with its own set of parameters. A combination of rules allows for the creation of unique Dynamic Values.

#### Static
```json
{
  "rules": [
    {
      "type": "static",
      "value": "Any freetext value"
    }
  ]
}
```

#### Number
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

#### Date
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
Format, stepSizeType and start accepts valid PHP date formats. For more information, please visit [PHP Date Formats](https://www.php.net/manual/en/datetime.formats.php)
