# Dynamic Values

## What are Dynamic Values?

Dynamic Values in 1Relation are configurable JSON structures that allow triggering a set of functions such as automations, opening forms, CRUD operations on items, and much more. These Dynamic Values are represented as buttons within the application and can be placed almost anywhere. They are highly flexible and can be adapted to suit specific business needs.

## What can Dynamic Values do?

Although Actional Buttons have no interface other than being a button, they can trigger other visuals like forms or different success messages as toasts.

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
      "format": "Y-m-d", // Any valid format is accepted: https://www.php.net/manual/en/datetime.formats.php
      "stepSize": 0,
      "stepSizeType": "day", // Any valid format is accepted: https://www.php.net/manual/en/datetime.formats.php
      "direction": "asc", // asc or desc
      "start": "today" // use a date or e.g., today/yesterday or other accepted format
    }
  ]
}
```

#### Relation Field
*(To Be Developed)*
```