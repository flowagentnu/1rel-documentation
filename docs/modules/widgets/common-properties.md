# Common Widget Properties

These properties are available for all widgets and let you customize their appearance and behavior.

## When to Use
Use these properties whenever you want to adjust the look, feel, or actions of any widget in FlowAgent.

## How It Works
- Add these properties to your widget configuration JSON.
- Adjust icons, colors, height, and add buttons as needed.

## Options & Parameters
- **icon** (string): Widget icon. Use any Google Fonts icon name.
- **iconColor** (string): Icon color (e.g., `#634DA3`).
- **iconBackgroundColor** (string): Icon background color (hex code).
- **actionalButtons** (array): Add Actional Buttons for quick actions.
- **formButtons** (array): Add Form Buttons for form widgets.
- **height** (integer, 1–500): Fixed widget height in pixels.
- **minHeight** (integer, 1–500): Minimum widget height in pixels.
- **maxHeight** (integer, 1–500): Maximum widget height in pixels.

## Usage Example

```json
{
  "icon": "table_chart",
  "iconColor": "#634DA3",
  "iconBackgroundColor": "#fff",
  "height": 300,
  "minHeight": 200,
  "maxHeight": 400
}
```