# General

This section of the documentation provides a detailed overview of the "General" settings within the Flow platform. These settings are foundational to how your site operates and presents itself.

## Accessing General settings

Navigate to General Site settings:

1. Open the **Site Settings** by clicking on the three-dot menu in the top right corner.
2. Navigate to the **"General"** tab from the settings menu (also the first page loaded).

Here, you will find several subsections that allow you to configure the basic aspects of your site.

## Site info

Information about the site.

| Property                 | Type    | Default Value  | Options        | Description                                                                 |
|--------------------------|---------|----------------|----------------|-----------------------------------------------------------------------------|
| `name`                   | string  | N/A            | N/A            | Site name used to identify the site/team/company.                           |
| `logo`                   | image   | N/A            | N/A            | Company or team logo that will be used on emails, login screens etc.        |

## Site Defaults

Default formats and metrics used when creating new users. Users can formats to their liking, but they will be created with site defaults.

| Property                 | Type    | Default Value  | Options        | Description                                                                 |
|--------------------------|---------|----------------|----------------|-----------------------------------------------------------------------------|
| `date format`            | list    | `Y-m-d`        | `Y-m-d` `d.m.Y` `d/m/Y` `d-m-Y` `m-d-Y` | Used to display dates.  |
| `time format`            | list    | `H:i`          | `H:i` `H:i:s` `h:i A` `h:i:s A` | Used to display clock.  |
| `number format`          | list    | 1,234.56       | `1,234.56` `1.234,56` `1 234.56` `1 234,56`  | Used to display numbers.  |
| `language`               | list    | English        | [Languages](/docs/misc/languages) | Sets the interface language.  |

Formats are explained by the PHP Documentation. For more information, please visit [PHP Date Formats](https://www.php.net/manual/en/datetime.formats.php)

## Storage

Storage will display how much storage your site are using. The storage display will update everytime a file is added, and reindex once in a while to verify calculation.

:::info
To upgrade storage, please contact FlowAgent.
:::

## JSON Configuration

| Property                 | Type    | Default Value  | Options        | Description                                                                 |
|--------------------------|---------|----------------|----------------|-----------------------------------------------------------------------------|
| `hideDocumentsButtons`   | bool    | false          | `true` or `false` | Hide default buttons for downloading documents (legacy). |
| `defaultOrganisation`    | keyname | (empty)        | N/A            | Set a default organisation that should always be applied to new organisation users. |
| `supportUrl`             | string  | (empty)        | N/A            | Shows a support link in the navbar for super users. |
| `login`                  | object  | null           | N/A            | Customize the login screen to your need. See [Custom login screen](/docs/misc/custom-login-screen). |
| `mail`                   | object  | null           | N/A            | Customize the mails sent by the system. See [Custom mail templates](/docs/misc/custom-mail-templates). |
| `dashboard`              | object  | null           | N/A            | Customize dashboard settings (see next row(s)). |
| `dashboard.actionalButtons` | object | null         | N/A            | Show actional buttons on the dashboard in the navbar. See [how to show actional buttons](sites/actionalbuttons/how-to-use). |
| `pricegroup`             | object  | null           | N/A            | Configure how pricegroup should work. See [Price Group documentation](/docs/apps/pricegroup/introduction). |
| `resourceplanning`       | object  | null           | N/A            | Configure how resource planning should work. See [Resource Planning documentation](docs/apps/pricegroup/introduction). |


## Examples

### Example 1: Example use of all properties with their default values.

```json
{
  "hideDocumentButtons": false,
  "supportUrl": "",
  "login": {
    
  },
  "mail": {
    
  },
  "dashboard": {
    "actionalButtons": [

    ]
  },
  "pricegroup": {
  },
  "resourceplanning": {

  }
}
```

### Example 2: Show a support link for super users in the navbar.

```json
{
  "supportUrl": "https://flowagent.nu/kontakt"
}
```

### Example 3: Hide document buttons.

```json
{
  "hideDocumentButtons": true
}
```