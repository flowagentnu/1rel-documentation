# Visibility Component

A guide to the `visibility` component for Actional Buttons in FlowAgent.

## When to Use
Use this page when you want to control when and how an Actional Button is shown.

## How It Works
- The `visibility` object controls both the appearance and the logic for when a button is visible.
- Top-level properties:
  - `visual`: (required) Defines label, color, icon, placement, etc.
  - `condition`: (optional) Array of conditions for display logic.
  - `popconfirm`: (optional) Confirmation dialog before action.
  - `actionalButtons`: (optional) Show other buttons in a modal after click.
- See the table below for all properties.

## Usage Example
```json
{
  "visibility": {
    "visual": {
      "label": "Edit",
      "icon": "fa-edit",
      "bgColor": "primary",
      "displayIconOnly": false,
      "placement": "row"
    },
    "condition": [ ["status", "=", "active"] ]
  }
}
```

## Tips
- Use `condition` to show/hide buttons based on item or user context.
- Use `popconfirm` for actions that need confirmation.
- Reference the [Icons documentation](../../../icons.md) for icon names.

## Related Links
- [Main Components](components.md)
- [Icons](../../../icons.md)
- [Languages](../../../misc/languages.md)

---

For more on conditions and visual options, see the subpages above.