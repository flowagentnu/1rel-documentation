# Tabs

Tabs let you organize information and actions within a module, making it easier for users to navigate and interact with data.

## When to Use
Use tabs when you want to split module content into logical sections (e.g., Details, History, Files) or add custom buttons and forms to specific areas.

## How It Works
- Define tabs in module settings or via JSON configuration.
- Tabs can contain widgets, forms, or actional/form buttons.
- You can control tab visibility and order.

## Usage Example
Add actional and form buttons to a tab:

```json
{
  "actionalButtons": [
    {
      "keyName": "",
      "displayIconOnly": false
    }
  ],
  "formButtons": [
    {
      "keyName": "",
      "displayIconOnly": false
    }
  ]
}
```

## Options/Parameters
- **actionalButtons**: Array of actional button configs
- **formButtons**: Array of form button configs

## Related Links
- [How to use Actional Buttons](/docs/sites/actionalbuttons/how-to-use.md)
- [How to Use Form Buttons](/docs/modules/forms/how-to-use-form-buttons.md)