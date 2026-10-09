# Iframe Widget

The Iframe Widget shows another web page inside a widget, for example a map, a report from another system or an online form.

## When to Use
Use the Iframe Widget to embed an external page in Flow, so users do not have to leave the record or the dashboard. With placeholders, the page can depend on the record, for example a map of the record's address.

## How It Works
- The widget shows the page at **src** in the full width of the widget, **height** pixels high.
- The page is loaded when the widget scrolls into view.
- [Placeholders](../../misc/replaceables.md) work in **src**, for example `[cf12]`, `[itemid]`, `[relation12]` and `[userid]`. Values are inserted as they are: they are not converted for use in a web address, and quotes and special characters such as é are removed.
- Not every website can be embedded. Many sites refuse to be shown inside another page; the widget then stays empty or shows an error from the website.

In the form editor on the [widget settings page](./widget-settings.md), these settings are in the **Web page** section.

## Usage Examples

### A fixed page
```json
{
  "src": "https://example.com/status",
  "height": 600
}
```
*Shows the page `https://example.com/status`, 600 pixels high.*

### A page that depends on the record
```json
{
  "src": "https://maps.example.com/?q=[cf12]",
  "height": 400
}
```
*Shows a map searched for the address in field 12 of the record.*

## Options & Parameters
- **src** (text, required): The web address of the page to show. Placeholders work.
- **height** (number, default `400`): The height of the page in pixels. This also sets the height of the widget, so the separate height setting from the common properties is not offered in the form editor.

:::note Old settings
`widgetFrame` is not used by the platform. The form editor shows it with a warning, and it can be removed.
:::

## Related Links
- [Widget Settings](./widget-settings.md)
- [Common Widget Properties](./common-properties.md)
- [Replaceables](../../misc/replaceables.md)
- [Installed Widgets](./installed-widgets.md)
