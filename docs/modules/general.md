# General

The general settings tab is the first page loaded when you navigate to the settings menu. Here, you will find several subsections that allow you to configure the basic aspects of your site.

## Accessing General settings

Navigate to General module settings:

1. Open the **Site Settings** by clicking on the three-dot menu in the top right corner.
2. Navigate to the **"Modules"** tab from the settings menu.
3. Choose the module you wish to configure.
4. Click on the **Edit icon** to access the module settings.

## Module info

Information about the module.

| Property                 | Type    | Default Value  | Options        | Description                                                                 |
|--------------------------|---------|----------------|----------------|-----------------------------------------------------------------------------|
| `name`                   | string  | N/A            | N/A            | Module name used to identify the module.                           |
| `description`            | string  | N/A            | N/A            | Description of the module.        |

## Appearance

Configure the appearance of the module.

| Property                 | Type    | Default Value  | Options        | Description                                                                 |
|--------------------------|---------|----------------|----------------|-----------------------------------------------------------------------------|
| `color`                  | string  | N/A            | N/A            | Color used to identify the module.                           |
| `icon`                   | image   | N/A            | N/A            | Icon that will be used to represent the module.        |
| `Parent relationship`    | Module Relation    | N/A            | N/A            | The relation to be considered the parent of this module (if any).        |
| `Title column`          | Customfield  | N/A            | N/A            | The column to be used as the title of the module.        |
| `Subtitle columns`          | Customfields  | N/A            | N/A            | The columns to be used as the subtitles of the module.        |

## Permissions

Configure the permissions of the module.

| Property                 | Type    | Default Value  | Options        | Description                                                                 |
|--------------------------|---------|----------------|----------------|-----------------------------------------------------------------------------|
| `Allow create button`   | bool    | false          | `true` or `false` | Show or hide the create button. |
| `Allow edit button`     | bool    | false          | `true` or `false` | Show or hide the edit button. |
| `Allow search`          | bool    | false          | `true` or `false` | Are items in this module allowed to be shown in search results. |
| `Hide in menu`          | bool    | false          | `true` or `false` | Hide the module in the menu. |	
| `Audit history`         | bool    | false          | `true` or `false` | Should changes to items in this module be logged. |
| `Audit history retention in days` | int | 30          | 30-360 days            | How many days should the audit history be kept. |

## JSON Configuration

| Property                 | Type    | Default Value  | Options        | Description                                                                 |
|--------------------------|---------|----------------|----------------|-----------------------------------------------------------------------------|
| `actionalButtons`     | array  | null           | N/A            | Show actional buttons on the module. See [how to show actional buttons](/docs/sites/actionalbuttons/how-to-use). |
| `featureFlags`        | array  | null           | N/A            | Enable or disable features for the module. See list below of possible features |
| `permissionFields`    | array  | null           | N/A            | Define which fields are required for the user to have access to the module. |

### Feature Flags

Feature flags are used to enable or disable features that are not yet fully implemented or tested. The following feature flags are available:

- `subtitlesFactBox` - Show subtitles in the fact box.

### Permission Fields
Permission fields are used to define which fields are required for the user to have access to the module. If the user does not have access to the required fields, the module will not be visible to the user.
:::note
Not documented yet
:::