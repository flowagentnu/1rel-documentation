# Files

Ability to add tags, remove tags and delete files provided in a file field.

| Property                 | Type    | Default Value  | Options        | Description                                                                 |
|--------------------------|---------|----------------|----------------|-----------------------------------------------------------------------------|
| `addtags`                  | array  | (empty)        | N/A            | The tags to add to the file.                           |
| `removetags`                  | array  | (empty)        | N/A            | The tags to remove from the file.                           |
| `delete`                  | boolean  | false        | N/A            | The files to delete |

## Examples

### Example 1: Add tags to a file

```json
{
    "addtags": {
        "myfilesfield": [
            "form"
        ]
    }
}
```

### Example 2: Remove tags from a file

```json
{
    "removetags": {
        "myfilesfield": [
            "form"
        ]
    }
}
```

### Example 3: Delete a file

```json
{
    "delete": ["myfilesfield"]
}
```