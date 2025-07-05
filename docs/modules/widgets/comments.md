# Comments Widget

The Comments Widget allows users to communicate and tag each other directly on an item.

## When to Use
Use the Comments Widget to enable discussion, feedback, or collaboration on a specific item.

## How It Works
- Displays a comment thread for the given item.
- Users can mention/tag each other in comments.
- Supports pagination for long threads.

## Usage Example
```json
{
  "itemId": 1234,
  "pageLength": 10
}
```
*Shows comments for item 1234, 10 per page. If `itemId` is not set, the current item (if any) is used. Default `pageLength` is 5.*

## Options & Parameters
- **itemId** (integer, optional): The item to show comments for. If not set, uses the current item (if any).
- **pageLength** (integer, optional): Number of comments per page (default: 5).

## Related Links
- [Common Widget Properties](/docs/modules/widgets/common-properties.md)
