# How to Use Actional Buttons

A guide to displaying and configuring Actional Buttons in different contexts.

## When to Use
Read this page when you want to show Actional Buttons in tables, forms, dashboards, or other UI elements.

## How It Works
- Actional Buttons are set up globally in Site Settings, but can be used in Power Search Tables, as Row Buttons, or as Form Buttons.
- The JSON structure is the same in all contexts, but available items/conditions may differ.
- Use the `keyName` to reference a button's configuration.

## Usage Example
**Show a button in a table row:**
```json
{
  "actionalButtons": [
    {
      "keyName": "ab_medlem---opret-lead"
    }
  ]
}
```

**Customize button appearance and placement:**
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
          "bgColor": "primary"
        }
      }
    }
  ]
}
```

## Tips
- Use the dashboard configuration in Site Settings > General to add Actional Buttons to the navigation bar.
- The `keyName` must match the button's unique identifier in Site Settings.

## Related Links
- [Introduction to Actional Buttons](introduction.md)
- [Main Components](components/components.md)

---

For more on advanced configuration, see the Main Components documentation.