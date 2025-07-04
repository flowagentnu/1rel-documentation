# Note Actions

A guide to adding or updating notes via automation in FlowAgent.

## When to Use
Use this page when you want to upsert or append notes to items automatically.

## How It Works
- Use `upsert` to insert or update a note.
- Use `append` to add a new note without overwriting existing ones.
- Specify title, text, and item key.

## Usage Example
**Upsert a note:**
```json
{
  "upsert": {
    "title": "This is my note title",
    "text": "This is my note text",
    "itemKey": "item"
  }
}
```

**Append a note:**
```json
{
  "append": {
    "title": "This is my note title",
    "text": "This is my note text",
    "itemKey": "item"
  }
}
```

## Tips
- Use `upsert` to avoid duplicate notes.
- Use `append` to always add a new note.