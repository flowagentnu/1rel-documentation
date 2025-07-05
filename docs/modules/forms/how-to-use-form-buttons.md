# How to Use Form Buttons

A guide to displaying and configuring Form Buttons in different contexts.

## When to Use
Read this page when you want to show Form Buttons in tables, forms, dashboards, or other UI elements.

## How It Works
- Forms are easily accessed with Form Buttons, that you configure in the same format as Actional Buttons.
- The JSON structure is the same in all contexts, but available items/conditions may differ.
- Use the `keyName` to reference a button's configuration.

## Usage Example
**Show a button in a table row:**
```json
{
  "formButtons": [
    {
      "keyName": "ab_medlem---opret-lead"
    }
  ]
}
```

**Customize button appearance and placement:**
```json
{
  "formButtons": [
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