# Audit History Widget

The Audit History Widget shows the change history of a record: who changed what, and when.

## When to Use
Use the Audit History Widget on a record page when users need to see how a record has changed over time, for example to follow up on a status change or to see who updated a price.

## How It Works
- The widget shows the changes of the record of the page, newest first, 5 changes per page. Users can page back through older changes.
- It always shows all changes of the record. It is not possible to limit it to certain fields, users or types of change.
- The widget only works on a record page. On the dashboard there is no record, so it shows nothing.
- The widget has no settings of its own. Only the [common properties](./common-properties.md), such as title, icon and height, apply.

In the form editor on the [widget settings page](./widget-settings.md), the **History** section only contains this explanation.

## Usage Example
```json
{
  "icon": "clock-rotate-left",
  "iconColor": "#fff",
  "iconBackgroundColor": "#6060ff"
}
```
*Shows the history of the record with a clock icon in the widget header.*

## Options & Parameters
This widget has no settings of its own. See [Common Widget Properties](./common-properties.md) for the title, icon, colours and height.

## Related Links
- [Widget Settings](./widget-settings.md)
- [Common Widget Properties](./common-properties.md)
