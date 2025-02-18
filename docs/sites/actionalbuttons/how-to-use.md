# How to show Actional Buttons

Actional Button is set up globally on site settings, but can be used in different contexts, such as in a Power Search Table, as a Row Button, or in a Form, as a Form Button. The JSON structure for Actional Buttons is the same across all contexts, but the context in which the button is used may affect the available items and conditions.

The method for using Actional Buttons is by calling it with the followingen JSON:
```json
{
  "actionalButtons": [
    {
      "keyName": "ab_medlem---opret-lead"
    }
  ]
}
```

The `keyName` is the unique identifier for the Actional Button, and is used to fetch the configuration from the site settings.
You can in here also manipulate the configuration by adding or removing items, conditions, actions, and outcome.

```json
{
  "actionalButtons": [
    {
      "keyName": "ab_salgstur---planl-g---skift-status",
      "visibility": {
        "visual": {
          "displayIconOnly": true,
          "placement": "row",
          "icon": "edit",
          "bgColor": "primary",
        }
      }
    }
  ]
}
```

### Display on dashboard
Dashboards can have Actional Buttons in the navigation bar, by going to Site Settings > General, in the configuration:

```json
{
  "dashboard": {
    "actionalButtons": [
      {
        "keyName": "ab_medlem---opret-lead"
      }
    ]
  }
}
```


### Display on widget
Widgets can have Actional Buttons in their card header, by going to the Widget's settings, in the configuration:

```json
{
  "actionalButtons": [
    {
      "keyName": "ab_medlem---opret-lead"
    }
  ]
}
```

### Display in Power Search table row
Power Search Table can have Actional Buttons in the table rows, by going to Widget's settings, in the configuration:

```json
{
  "actionalButtons": [
    {
      "keyName": "ab_medlem---opret-lead",
      "visibility": {
        "visual": {
          "placement": "row"
        }
      }
    }
  ]
}
```