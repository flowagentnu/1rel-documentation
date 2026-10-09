# Comments Widget

The Comments Widget lets users discuss a record and mention each other directly on it.

## When to Use
Use the Comments Widget to enable discussion, feedback or collaboration on a specific record, for example questions about a case or updates on a task.

## How It Works
- The widget shows a comment thread, split into pages of **pageLength** comments. Users can write new comments.
- Users can mention each other in comments.
- The thread is identified by its **title** (the thread name) and the record it belongs to. Comments widgets with the same title on the same record show the same thread. Use different titles to have several threads on one record.
- Without **itemid**, the thread belongs to the record of the page. With **itemid** you can show the thread of another record, for example `[relation12]`.
- The widget needs a record. On the dashboard, set **itemid** to a record.

In the form editor on the [widget settings page](/docs/modules/widgets/widget-settings), these settings are in the **Comments** section.

## Usage Examples

### Comments on each record
```json
{
  "title": "comments",
  "pageLength": 10
}
```
*Shows the `comments` thread of the record of the page, 10 comments per page.*

### Comments of the related case
```json
{
  "title": "comments",
  "itemid": "[relation12]"
}
```
*On a task page, shows the `comments` thread of the case related through relation 12, 5 comments per page.*

## Options & Parameters
- **title** (text, required): The thread name. Widgets with the same name on the same record share the comments. Use only letters, numbers, `-` and `_`. Without a title, no comments are loaded.
- **itemid** (number or text with a placeholder, default the record of the page): The record whose comments are shown. See [Replaceables](/docs/misc/replaceables).
- **pageLength** (number from 1 to 100, default `5`): Number of comments per page. Values outside 1–100 stop the comments from loading.

## Related Links
- [Widget Settings](/docs/modules/widgets/widget-settings)
- [Common Widget Properties](/docs/modules/widgets/common-properties)
- [Note Widget](/docs/modules/widgets/note)
