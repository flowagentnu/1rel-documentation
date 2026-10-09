# Icons Reference

A quick reference for using icons in FlowAgent modules, tabs, item types, widgets and buttons.

## When to Use
Use this page when you want to add or customize icons in your modules or dashboards.

## How It Works
- FlowAgent uses [Font Awesome](https://fontawesome.com/search?o=r&s=regular) icons, shown in the *regular* style.
- Write the icon name **without** the `fa-` prefix, e.g. `user`, `calendar`, `chart-pie`.
- Icons can be set on tabs, item types, widgets, columns, actional buttons and map markers.
- In the widget settings form, icon fields show a preview of the icon and a **Browse icons** link.

## Usage Example
**Setting the icon of a widget (JSON):**
```json
{
  "icon": "user",
  "iconColor": "#ffffff",
  "iconBackgroundColor": "#6060ff"
}
```

## Tips
- Use icons to make navigation easier and interfaces more intuitive.
- If an icon shows as an empty square, the name is not a Font Awesome name. Names from other icon sets (e.g. Material names like `home_work` or `pin_drop`) do not work.
- Search the [Font Awesome icon list](https://fontawesome.com/search?o=r&s=regular) for available names.
