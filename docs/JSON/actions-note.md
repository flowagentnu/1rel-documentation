# Upsert Note

Ability to upsert a note.

| Property                 | Type    | Default Value  | Options        | Description                                                                 |
|--------------------------|---------|----------------|----------------|-----------------------------------------------------------------------------|
| `title`                  | string  | (empty)        | N/A            | The title of the note. |
| `text`                | string  | (empty)        | N/A            | The content of the note. |
| `itemKey`               | string  | (empty)        | N/A            | The key of the item to relate the note to. |


## Examples

### Example 1: Upsert a note
```json
{
    "upsert": {
        "title": "This is my note title",
        "text": "This is my note text",
        "itemKey": "[item]"
    }
}
```