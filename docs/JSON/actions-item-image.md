# Item Image Actions

A guide to managing item images in FlowAgent automations.

## When to Use
Use this page when you want to upsert or delete a profile image for an item.

## How It Works
- Use `upsert` to add or update an image.
- Use `delete` to remove an image.
- Reference the field that holds the image.

## Usage Example
**Upsert an image:**
```json
{
  "upsert": {
    "image": "[item.cf1234]"
  }
}
```

**Delete an image:**
```json
{
  "delete": true
}
```

## Tips
- Use the correct field key for your image field.
