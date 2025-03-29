# Files Widget

The Files Widget is designed to enhance the management and display of files such as pictures and documents. It supports file uploads from computers and mobile devices, making it a versatile tool for users.

## Files Widget Properties

In widget configuration, the `filesWidget` property is an object that contains the following properties:

| Property                | Type    | Description                                                   |
|-------------------------|---------|---------------------------------------------------------------|
| `getWithTags`           | array   | Tags for displaying files in the widget.                      |
| `createWithTags`        | array   | Tags automatically added when a file is uploaded.             |
| `allowFilterOnTags`     | array   | Additional tags that can be used to filter files (theese tags will not be used with the getWithTagsRule). |
| `getWithTagsRule`       | string  | Rule for displaying files in the widget. Options are `all`, `any` and `exact` |
| `forcedView`            | string  | Set a specific view that overrules the users preferred view. Options are `list` or `grid` |

## Examples

```json
{
  "height": 300,
  "icon": "assignment",
  "iconColor": "white",
  "iconBackgroundColor": "orange",
  "filesWidget": {
    "createWithTags": [
      "item[itemid]",
      "Inspections"
    ],
     "getWithTags": [
      "item[itemid]",
      "item[relation77]"
    ]
  }
}
```

This JSON example is a `file widget` on a project with the id: `1234`.
`"createWithTags"`:  When uploading a file, it will be tagged with `item[itemid]`(which is converted to `item1234`) and `insepection`. 
`"getWithTags"`: When viewing, the configuration shows Files Tagged With:
- `item[itemid]`: This instruction makes the widget display only the files that are tagged with the specific item you're looking at. (`item1234`).
- `item[relation77]`: This inststruction makes the widget display the files from items related to the current item. In this case `item[relation77]` which is translated to `item7878` 