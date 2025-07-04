# Common Properties

These properties are available for all widgets. Use them to customize appearance and behavior.

## JSON Configuration

- **icon** (string): Widget icon. Use any Google Fonts icon name.
- **iconColor** (string): Icon color (e.g., `#634DA3`).
- **iconBackgroundColor** (string): Icon background color (hex code).
- **actionalButtons** (array): Add Actional Buttons for quick actions.
- **formButtons** (array): Add Form Buttons for form widgets.
- **height** (integer, 1–500): Fixed widget height in pixels.
- **minHeight** (integer, 1–500): Minimum widget height in pixels.
- **maxHeight** (integer, 1–500): Maximum widget height in pixels.

**Example:**

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