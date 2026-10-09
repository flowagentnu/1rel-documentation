# Files Widget

The Files Widget lets users upload, view, tag and download files such as pictures and documents. Files can be uploaded from a computer (button or drag and drop) or captured with the camera on a mobile device (quick capture). The widget can also produce a PDF picture report.

## When to Use
Use the Files Widget to keep the files of a record together, for example the photos of an inspection or the documents of a case. You can also use it on the dashboard as a shared file folder.

## How It Works
- Files are grouped with **tags**. A tag is a plain text, such as `Before photos`. The widget shows the files that have the tags in **getWithTags**, and gives uploaded files the tags in **createWithTags**.
- To keep the files of each record apart, use the tag `item[itemid]`. On a record page it becomes `item` followed by the record id (for example `item1234`), so every record has its own files. In the same way, `item[relation77]` points to the record related through relation 77. Tags of this form are not shown as filter buttons.
- Uploaded files only show up in the widget when their tags match **getWithTags**. Make sure **createWithTags** contains the tags the widget looks for.
- **allowFilterOnTags** adds filter buttons above the files. When the user picks filter buttons, only files that have all the widget's tags and all the picked tags are shown.
- Users can switch between a list and a grid view. **forcedView** locks the view instead. 12 files are shown per page.
- Selected files can be downloaded as one zip file, and image files can be collected in a PDF picture report. Both are prepared in the background and sent to the user by email.
- What users may do depends on their Files permissions (read, create, update and delete), not on the widget settings.
- Placeholders such as `[itemid]`, `[itemname]`, `[relation77]` and `[cf641]` work in all tags and texts. See [Replaceables](/docs/misc/replaceables).

In the form editor on the [widget settings page](/docs/modules/widgets/widget-settings), these settings are in the **Files** section.

:::caution
When users change the tags of files with **Change tags**, the files get exactly the tags they pick, and their other tags are removed. If the record tag (for example `item1234`) is not picked again, the files no longer belong to the record and disappear from the widget.
:::

## Usage Examples

### Files of the current record

```json
{
  "filesWidget": {
    "getWithTags": ["item[itemid]"],
    "createWithTags": ["item[itemid]"]
  }
}
```

*Each record shows its own files, and files uploaded on a record belong to that record.*

### Inspection photos with filters, download and report

```json
{
  "filesWidget": {
    "getWithTags": ["item[itemid]", "Inspection"],
    "getWithTagsRule": "all",
    "allowFilterOnTags": ["Before photos", "After photos"],
    "createWithTags": ["item[itemid]", "Inspection", "Before photos", "After photos"],
    "showDownloadAllButton": true,
    "enableDeviations": true,
    "exportFileName": "Inspection [itemname] [export_date]",
    "report": {
      "showButton": true,
      "title": "Inspection report",
      "additionals": {
        "Case": "[itemname]",
        "Responsible": "[relation80.title]",
        "Address": "[cf684]"
      }
    }
  },
  "forcedView": "grid"
}
```

*In this example:*
- The widget shows files that have both the record tag and the tag `Inspection`.
- Users can narrow the list with the filter buttons **Before photos** and **After photos**.
- Uploaded files get the record tag and all other tags in **createWithTags**. In **Change tags** and in the file viewer, users can choose from the same tags.
- After an upload, users are asked to mark pictures as deviations. Deviations are highlighted in the picture report.
- Downloads and reports are named after the record and the chosen period, for example `Inspection Main Street 1 2026-01-01 - 2026-01-31.pdf`.
- The report shows the title and three extra lines with values from the record and a related record.
- The files are always shown as a grid.

### Files of a related record

```json
{
  "filesWidget": {
    "getWithTags": ["item[itemid]", "item[relation77]"],
    "getWithTagsRule": "any",
    "createWithTags": ["item[itemid]"]
  }
}
```

*Shows the files of the current record and of the record related through relation 77. New files are added to the current record.*

## Options & Parameters
All settings except **forcedView** are inside the `filesWidget` object. Without `filesWidget`, the widget shows no files and uploads are refused.

- **filesWidget.getWithTags** (array of texts, required): The tags that decide which files are shown. Without tags, no files are shown.
- **filesWidget.getWithTagsRule** (text, default `any`): How **getWithTags** is matched.
  - `any`: the file has at least one of the tags.
  - `all`: the file has every tag.
  - `exact`: the file has every tag and no other tags.

  When the user picks filter buttons, `all` is used.
- **filesWidget.allowFilterOnTags** (array of texts, default none): Extra tags shown as filter buttons next to the tags of **getWithTags**.
- **filesWidget.createWithTags** (array of texts, default none): The tags put on every uploaded file (upload button, drag and drop and quick capture). These are also the tags users can choose in **Change tags** and in the file viewer. Without them, uploaded files have no tags and do not show up in the widget.
- **filesWidget.showUploadButton** (boolean, default `true`): Show the upload and quick capture buttons and allow drag and drop. The user also needs permission to create files.
- **filesWidget.showDownloadAllButton** (boolean, default `false`): Show a **Download** button when files are selected. The selected files are sent by email as one zip file.
- **filesWidget.enableDeviations** (boolean, default `false`): After an upload (and in quick capture), ask the user to mark pictures as deviations, with a comment. Deviations are marked in the picture report.
- **filesWidget.exportFileName** (text, default the report title, or `files_` followed by the date and time): The name of the zip file and the PDF report, without extension. `[export_date]` becomes the chosen period. Placeholders work.
- **filesWidget.report** (object): The PDF picture report. The report contains only image files.
  - **showButton** (boolean, default `false`): Show the **Report** button.
  - **title** (text, default `Files`): The heading of the report. It is also used as the file name when **exportFileName** is not set.
  - **additionals** (object, default none): Extra lines under the title. Each key is a label and each value is the text, for example `"Address": "[cf684]"`. Placeholders work.
- **forcedView** (text, not inside `filesWidget`): `list` or `grid`. Always open the widget in this view. Without it, the widget opens in the view the user chose last (grid on small screens).

Height, minimum height and maximum height from the [common properties](/docs/modules/widgets/common-properties) also limit the file area, so long lists scroll inside the widget.

:::note Old settings
`report.color` and `videoConfig` are not used by the platform. The form editor shows them with a warning, and they can be removed.
:::

## Related Links
- [Widget Settings](/docs/modules/widgets/widget-settings)
- [Common Widget Properties](/docs/modules/widgets/common-properties)
- [Replaceables](/docs/misc/replaceables)
