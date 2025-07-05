# Files Widget

The Files Widget lets you manage and display files—such as pictures and documents—directly in your dashboard. It supports uploads from both computers and mobile devices.

## When to Use
Use the Files Widget to allow users to upload, view, and organize files related to items, projects, or modules.

## How It Works
- Add the widget to your dashboard and configure its properties.
- Use tags to control which files are shown and how uploads are categorized.
- Choose between list or grid views for displaying files.
- Enable the download button to let users download selected files as an archive.
- Configure reporting options to generate and export custom reports for selected files.
- Configure video capture settings for the quick capture feature.

## Usage Example

```json
{
  "filesWidget": {
    "createWithTags": [
      "item[itemid]",
      "Inspections"
    ],
    "getWithTags": [
      "item[itemid]",
      "item[relation77]"
    ],
    "showDownloadAllButton": true,
    "report": {
      "showButton": true,
      "color": "#6060FF",
      "additionals": {
        "Sagsnavn": "[item.cf641]",
        "Ansvarlig": "[relation80.cf660]",
        "Note": "[item.cf684]"
      },
      "title": "[item.cf641]"
    },
    "exportFileName": "Kvalitetsrapport for [item.cf641]",
    "videoConfig": {
      "width": {
        "ideal": 1024,
        "max": 1600,
        "min": 640
      },
      "height": {
        "ideal": 768,
        "max": 1200,
        "min": 480
      },
      "aspectRatio": 1.3333333333
    }
  }
}
```

*In this example:*
- **createWithTags**: When uploading a file, it will be tagged with the current item (e.g., `item1234`) and "Inspections".
- **getWithTags**: The widget displays files tagged with the current item and files from related items (e.g., `item[relation77]` becomes `item7878`).
- **showDownloadAllButton**: Shows a download button when files are selected, allowing users to download them as an archive.
- **report**: Adds a report button to the widget. The button color, title, and additional fields can be customized. When clicked, a report is generated using the specified fields.
- **exportFileName**: Sets the default file name for exported reports, supporting variables like `[item.cf641]`.
- **videoConfig**: Configures the quick capture video feature, setting ideal, max, and min width/height and aspect ratio for captured videos.

## Options & Parameters
- **getWithTags** (array): Tags for displaying files in the widget.
- **createWithTags** (array): Tags automatically added when a file is uploaded.
- **allowFilterOnTags** (array): Additional tags that can be used to filter files (these tags are not used with getWithTagsRule).
- **getWithTagsRule** (string): Rule for displaying files. Options: `all`, `any`, or `exact`.
- **forcedView** (string): Set a specific view that overrules the user's preferred view. Options: `list` or `grid`.
- **showDownloadAllButton** (boolean): Show a download button when files are selected. Selected files can be downloaded as an archive.
- **report** (object):
  - **showButton** (boolean): Show a report button in the widget.
  - **color** (string): Color of the report button (hex code).
  - **additionals** (object): Additional fields to include in the report, with keys as labels and values as variables.
  - **title** (string): Title for the report, supports variables.
- **exportFileName** (string): Default file name for exported reports, supports variables like `[item.cf641]`.
- **videoConfig** (object):
  - **width** (object): Set ideal, max, and min width for video capture.
  - **height** (object): Set ideal, max, and min height for video capture.
  - **aspectRatio** (number): Set the aspect ratio for video capture (e.g., 1.333 for 4:3).

## Related Links
- [Common Widget Properties](/docs/modules/widgets/common-properties.md)