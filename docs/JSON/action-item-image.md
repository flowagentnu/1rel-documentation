# Item Image

Ability to upsert or delete a "profile" image for an item.

## Upsert

| Property                 | Type    | Default Value  | Options        | Description                                                                 |
|--------------------------|---------|----------------|----------------|-----------------------------------------------------------------------------|
| `image`                  | string  | (empty)        | N/A            | The reference to the field that holds the image.                           |

## Delete

You have the ability to set the `delete` property to `true` to delete the image.

## Examples 

### Example 1: Upsert an Image

```json
{
  "upsert": {
    "image": "[item.cf1234]"
  }
}
```

### Example 2: Delete an Image

```json
{
  "delete": true
}
```
