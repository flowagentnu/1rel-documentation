# File Actions

A guide to managing file tags and deletions in FlowAgent automations.

## When to Use
Use this page when you want to add/remove tags or delete files via automation or actions.

## How It Works
- Use `addtags` or `removetags` to manage file tags.
- Use `delete` to remove files.
- Specify the field and tags/files to affect.

## Usage Example
**Add tags to a file:**
```json
{
  "addtags": {
    "myfilesfield": ["form"]
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

## Tips
- Use field keys that match your file fields.
- Combine with other actions for complex workflows.