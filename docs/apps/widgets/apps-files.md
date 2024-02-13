# Files Widget

The Files Widget in 1Relation is designed to enhance the management and display of files such as pictures and documents. It supports file uploads from computers and mobile devices, making it a versatile tool for users.

## Installation of widget

The Files widget is a separate app and needs to be installed before being available for use. Plase refer to the documentation for [installing apps](/docs/apps/apps-install-apps).

## Add files widget to a tab

The Files widget has to be installed on a tab in order to be used.
Follow the guide to learn how to setup the widget.

<iframe src="https://scribehow.com/embed/Files_widget_Setup__41cysBMVQUWgA6bM-MJOTQ" width="100%" height="640" allowfullscreen frameborder="0"></iframe>

### Through JSON

The Files widget needs to be configures with JSON. The settings allow for detailed control over the widget's appearance and functionality.

#### Widget Basic Configuration

| Property                | Type    | Description                                       |
|-------------------------|---------|---------------------------------------------------|
| `height`                | integer | The height of the widget in pixels (max 500).     |
| `icon`                  | string  | The icon used for the widget.                     |
| `iconColor`             | string  | The color of the icon.                            |
| `iconBackgroundColor`   | string  | The background color of the icon.                 |

#### Files Widget Configuration

| Property                | Type    | Description                                                   |
|-------------------------|---------|---------------------------------------------------------------|
| `filesWidget`           | object  | Configuration for interpreting file tags within the widget.   |

##### filesWidget Details

| Property                | Type    | Description                                                   |
|-------------------------|---------|---------------------------------------------------------------|
| `getWithTags`           | array   | Tags for displaying files in the widget.                      |
| `createWithTags`        | array   | Tags automatically added when a file is uploaded.             |
| `additionalCreateTags`  | array   | Tags presented to the user when uploading a file.             |

#### JSON Example

```json
{
  "height": 300,
  "icon": "assignment",
  "iconColor": "white",
  "iconBackgroundColor": "orange",
  "filesWidget": {
    "getWithTags": [
      "[itemid]"
    ],
    "createWithTags": [
      "[itemid]",
      "Inspections"
    ],
    "additionalCreateTags": [
      "Deviation",
      "Corrected"
    ]
  }
}
```

This JSON example configuration shows Files Tagged With ("[itemid]"): This instruction makes the widget display only the files that are tagged with the specific item you're looking at. 
Automatically Tag Uploaded Files: When you upload a new file, it automatically gets two tags: one is the ID of the item you're currently viewing, and the other is "Inspections". 
Options for Additional Tags on Upload ("Deviation", "Corrected"): This gives the user, the option of assigning futher tags when uploading files.In this case "Deviation" or "Corrected".

## Usage

### Uploading Files

Follow the guide for learning how to upload files from web or mobile 

<iframe src="https://scribehow.com/embed/Files_widget_Upload__ZxCJ16uRS3qx2LGJ2JPQ_A" width="100%" height="640" allowfullscreen frameborder="0"></iframe>

### View, rename and delete files

Follow the guide for learning how to view, rename and delete  files from web or mobile 

<iframe src="https://scribehow.com/embed/Files_widget_View_rename_and_delete__BGvs7xVzSRWaEzrNY0K2kg" width="100%" height="640" allowfullscreen frameborder="0"></iframe>