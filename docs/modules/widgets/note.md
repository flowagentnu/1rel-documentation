# Note Widget

The Note Widget allows users to write and save notes on an item using a WYSIWYG editor.

## When to Use
Use the Note Widget to add rich-text notes, instructions, or comments to a specific item. Useful for collaboration, documentation, or tracking information.

## How It Works
- Displays a WYSIWYG editor for writing notes.
- Notes are saved and associated with the given item and a required title.
- The `title` is used internally to identify and retrieve the note (not shown to users). This allows multiple notes per item.
- If `itemId` is not set, the current item (if any) is used.

## Usage Example
```json
{
  "itemId": 1234,
  "title": "internal_note"
}
```
*This example creates or displays a note for item 1234, identified by the title `internal_note`.*

## Options & Parameters
- **itemId** (integer, optional): The item to show the note for. If not set, uses the current item (if any).
- **title** (string, required): Internal identifier for the note. Required to ensure notes can be referenced and managed later. Not shown to users.

## Related Links
- [Common Widget Properties](/docs/modules/widgets/common-properties.md)
- [Comments Widget](/docs/modules/widgets/comments.md)
