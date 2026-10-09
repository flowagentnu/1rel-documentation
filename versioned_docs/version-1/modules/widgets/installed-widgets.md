# Installed Widgets

Installed widgets are widget types that come from plugins installed on your site through the **Marketplace**, for example a product use or registration screen built for a specific solution. They are added and set up like the built-in widgets, but their content comes from the plugin.

## When to Use
Use an installed widget when a plugin offers functionality that the built-in widget types do not have. Which installed widgets are available depends on the plugins installed on your site.

## How It Works
- When you create a widget, installed widgets are listed after the built-in widget types.
- The widget is shown as an embedded page (an iframe) inside the widget. The page is loaded when the widget scrolls into view.
- The plugin receives the **whole configuration** of the widget, together with the record of the page (none on the dashboard) and the current user. [Placeholders](../../misc/replaceables.md) such as `[itemid]` or `[relation12]` are filled in before the configuration is sent, so they can be used in the plugin's own settings.
- Plugins usually keep their own settings together under one key, named after the plugin, for example `productUse`. Which settings a plugin has is described by the plugin's supplier.
- Settings for the plugin as a whole (for all its widgets) are set on the plugin in the Marketplace, not on the widget.

### Settings in the form editor
On the [widget settings page](./widget-settings.md), an installed widget has:

- The common sections **Title**, **Appearance** and **Buttons**, as for other widgets (see [Common Widget Properties](./common-properties.md)). **Height** in *Appearance* sets the height of the embedded page.
- The **Installed widget** section, with the options for the embedded page: **Scrolling** and **Allow full screen**.
- **Other settings**, where the plugin's own settings are listed and can be changed, removed or added as JSON. You can also edit them in JSON mode. These settings are always kept when you save, even though the form has no fields for them.

## Usage Example
```json
{
  "icon": "cart-shopping",
  "iconColor": "#fff",
  "iconBackgroundColor": "#6060ff",
  "height": 700,
  "allowScrolling": "auto",
  "allowFullscreen": true,
  "productUse": {
    "projectId": "[itemid]"
  }
}
```
*Shows the installed widget 700 pixels high, with scroll bars only when needed and the option to go full screen. The `productUse` settings are read by the plugin itself; here the plugin is given the id of the record of the page.*

## Options & Parameters
These settings are handled by Flow. All other settings are passed to the plugin.

- **height** (number, default `600`): The height of the embedded page in pixels.
- **allowScrolling** (text, default `yes`): Whether the embedded page can scroll. `yes`, `no` or `auto` (scroll bars only when needed).
- **allowFullscreen** (boolean, default `false`): Allow the embedded page to switch to full screen.
- The common properties such as title, icon, colours, **showWidgetHeader** and **hasMargin** work as for other widgets. See [Common Widget Properties](./common-properties.md).
- **The plugin's own settings** (usually one object, for example `productUse`): See the documentation of the plugin. Edit them under **Other settings** or in JSON mode.

## Related Links
- [Widget Settings](./widget-settings.md)
- [Common Widget Properties](./common-properties.md)
- [Iframe Widget](./iframe.md)
- [Replaceables](../../misc/replaceables.md)
