# Note Widget

The Note Widget lets users write and save a rich-text note with a WYSIWYG editor (bold, lists, links and so on).

## When to Use
Use the Note Widget for free text that belongs to a record, such as a case description, instructions or internal remarks. On the dashboard it can hold one shared note for the whole site.

## How It Works
- The note is identified by its **title** (the note name) and the record it belongs to. The title is not shown to users. The widget header shows the widget's label as usual.
- Note widgets with the same title on the same record show and edit the **same** note, also when they are on different tabs or in different modules. Use different titles to have several notes on one record.
- Without **itemid**, the note belongs to the record of the page. On the dashboard, where there is no record, the note is shared by the whole site.
- With **itemid** you can show the note of another record, for example the description of the parent case on a task page. The user must be able to see that record.
- Users need the Notes permissions: without read permission they see a "no permission" message, and only users with update permission can edit the note.
- The note widget always has a header and no margin around the editor. The form editor therefore does not offer these settings.

In the form editor on the [widget settings page](/docs/modules/widgets/widget-settings), these settings are in the **Note** section.

## Usage Examples

### A note on each record
```json
{
  "title": "case_description"
}
```
*Every record gets its own note named `case_description`.*

### The note of the related case
```json
{
  "title": "case_description",
  "itemid": "[relation12]",
  "hideNoteWhenEmpty": true
}
```
*On a task page, shows the `case_description` note of the case related through relation 12. The widget is hidden when that note is empty.*

## Options & Parameters
- **title** (text, required): The note name. Widgets with the same name on the same record share one note. Use only letters, numbers, `-` and `_`, for example `case_description`.
- **itemid** (number or text with a placeholder, default the record of the page): The record whose note is shown, for example `[relation12]`. See [Replaceables](/docs/misc/replaceables).
- **hideNoteWhenEmpty** (boolean, default `false`): Hide the whole widget when the note is missing or empty.

:::note Old settings
`theme` is not used by the platform. The form editor shows it with a warning, and it can be removed.
:::

## Related Links
- [Widget Settings](/docs/modules/widgets/widget-settings)
- [Common Widget Properties](/docs/modules/widgets/common-properties)
- [Comments Widget](/docs/modules/widgets/comments)
