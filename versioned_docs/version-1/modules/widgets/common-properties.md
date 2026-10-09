# Common Widget Properties

These settings are shared by all widgets (or by a whole group of widgets, such as all top tiles). They control the title, the look of the widget card and the buttons shown in the widget header.

## When to Use
Use this page when you want to change how a widget looks or which buttons it shows, whatever the widget type. Settings that only exist for one widget type are described on that widget's own page.

## How It Works
- A widget has a few **general settings** (name, label, type, tabs, sort, size) that are always edited as normal fields at the top of the widget settings page.
- Everything else is the widget's **configuration**. You can edit it in the form editor, or switch to **JSON** and edit the same settings as a JSON object. Both views change the same configuration. See [Widget Settings](./widget-settings.md).
- Settings you leave out use their default.
- [Replaceables](../../misc/replaceables.md) such as `[itemid]` or `[relation12.title]` can be used in any text setting, as long as they are written inside quotes in JSON.

## General Settings (not part of the JSON)

| Setting | Description |
|---|---|
| **Name** | Internal name of the widget, shown in the widget list in settings. Required. |
| **Label** | Title shown to users, unless a title (`label` / `labels`) is set in the configuration. |
| **Type** | The widget type (Table, Details, Count, ...) or a widget installed from an app. The type decides whether the widget is shown in the main area or as a tile in the top row. |
| **Tab(s)** | The tab or tabs the widget is shown on. A widget can be shown on several tabs at the same time. |
| **Sort** | Order of the widgets. Lower numbers are shown first. |
| **Size** | Width of the widget on desktop, from 1 to 12 (12 = full width, 6 = half width). Widgets are placed next to each other until a row is full. |
| **Save the result every night in field** | Only for **Sum** and **Average** widgets on a module. Every night the widget's result is calculated for every record of the module and saved in the chosen field of that record, so you can sort, filter and report on it. |

## Title

| Key | Type | Default | Description |
|---|---|---|---|
| `label` | string | The **Label** field, else the name | Title shown in the widget header (main area) or under the number (top tiles). |
| `labels` | object | none | Title per language. Overrides `label` for users with that language. The keys are **lower-case** language codes: `da_dk`, `en_us`, `pl_pl`, `ro_ro`. |

```json
{
  "label": "Open tasks",
  "labels": {
    "da_dk": "Åbne opgaver",
    "en_us": "Open tasks"
  }
}
```

## Main-Area Widgets

These settings apply to all widgets shown in the main area (Table, Details, Chart, Smart Text, Files, Calendar, Maps, Note, Comments, installed widgets and so on).

| Key | Type | Default | Description |
|---|---|---|---|
| `icon` | string | none (new widgets get `list`) | Icon shown before the title. A [Font Awesome](../../misc/icons.md) icon name without `fa-`, for example `list`, `user` or `chart-pie`. Without an icon only the title is shown. |
| `iconColor` | colour | white | Colour of the icon itself, e.g. `#ffffff`. |
| `iconBackgroundColor` | colour | the theme's primary colour (new widgets get `#6060ff`) | Colour of the rounded square behind the icon. |
| `showWidgetHeader` | boolean | `true` | `false` hides the whole header: icon, title, the settings and refresh buttons, the header buttons on desktop and the edit (pen) button of Details widgets. |
| `hasBackground` | boolean | `true` | `false` makes the widget card transparent, without shadow and border. |
| `hasMargin` | boolean | `true` | `false` removes the inner padding of the card, so the content reaches the edges. |
| `height` | number (pixels) | automatic | Fixed height of the content. When the header is shown, content that does not fit can be scrolled. Installed widgets are 600 pixels high when no height is set. |
| `minHeight` | number (pixels) | none | Minimum height of the content. |
| `maxHeight` | number (pixels) | none | Maximum height of the content. |
| `style` | object | none | Extra CSS for the widget body, written as `{ "property": "value" }`, e.g. `{ "padding": "0", "background-color": "#f5f5f5" }`. |

Heights are plain numbers of pixels (without `px`) and have no fixed upper limit. With `hasMargin: false` and a `height`, the content box is 48 pixels taller to make up for the removed padding.

### Widget types that decide this themselves
Some widget types always use their own header, padding and background. For these types your values for those keys are ignored:

| Widget type | Always uses |
|---|---|
| Business Process | no header, no padding |
| Smart Text | no header, no padding, no background |
| Note | header shown, no padding |
| Event Timeline, Agenda | header shown, no padding, no background |

## Header Buttons

Main-area widgets can show [actional buttons](./actionalbutton.md) and form buttons in their header. On mobile they are shown in a bar at the top of the widget.

| Key | Type | Description |
|---|---|---|
| `actionalButtons` | array | Actional buttons to show. Each entry is an object with the button's `keyName`. |
| `formButtons` | array | Forms to show as buttons. Each entry is an object with the form's `keyName`. |

Each entry can also change the button for this widget only: any setting you add next to `keyName` replaces the button's own setting, so you can for example give it another text, icon or colour here without changing the button elsewhere. The most used settings are:

| Key | Description |
|---|---|
| `visibility.visual.placement` | `widget` (default) shows the button in the widget header. `row` shows it on each row of a **Table** widget, where it runs on that row's record. Buttons with any other placement are not shown in widgets. |
| `visibility.visual.label` / `labels` | Button text / text per language (lower-case language codes, as above). |
| `visibility.visual.icon` | Font Awesome icon name. |
| `visibility.visual.displayIconOnly` | `true` shows only the icon. |
| `visibility.visual.variant` | `filled` or `outlined`. |
| `visibility.visual.bgColor` / `textColor` | Button colour and text colour (theme colour names such as `primary`, `success`, `danger`). |
| `visibility.visual.allowMultipleItems` | `true` lets the button run on all selected rows of a Table widget. The table must have row checkboxes turned on (`powerSearch.allowRowSelect`); the button is disabled until rows are selected. |
| `visibility.popconfirm` | Ask "Are you sure?" before running. |
| `visibility.condition` | Only show the button when the [condition](../../misc/conditionals.md) is true for the record shown on the page. |

Entries without `keyName` (for example a plain string with the key name) are ignored.

```json
{
  "actionalButtons": [
    { "keyName": "create_task" },
    {
      "keyName": "close_task",
      "visibility": {
        "visual": { "placement": "row", "label": "Close", "icon": "check", "displayIconOnly": true }
      }
    }
  ],
  "formButtons": [
    { "keyName": "new_contact_form" }
  ]
}
```

## Top Tiles

These settings apply to the tiles in the top row: **Count**, **Sum**, **Average** and **Number**. `mobileSize` also applies to **Actional Button** tiles.

| Key | Type | Default | Description |
|---|---|---|---|
| `mobileSize` | number 1–12 | `12` | Width of the tile on mobile. Use `6` to show two tiles side by side. The desktop width is the **Size** setting. |
| `compactMode` | boolean | `false` | Shows a smaller tile. |
| `variant` | `"soft"` | normal tile | `soft` colours the whole tile with `iconBackgroundColor` and shows the icon on a light square. (`2` does the same.) |
| `icon` | string | none | Font Awesome icon name. Set one: the tile always keeps room for the icon. |
| `iconBackgroundColor` | colour | primary colour | Colour of the icon square, or of the whole tile with `variant: "soft"`. |
| `prefix` | string | none | Text before the number, e.g. `kr.` |
| `postfix` | string | none | Text after the number, e.g. `hours` |
| `tapActions` | object | none | What happens when the tile is clicked. See below. |
| `style` | object | none | Extra CSS for the tile body. |

`iconColor` has no effect on tiles.

### Tap actions
`tapActions.tap` makes the tile clickable:

| Key | Description |
|---|---|
| `tapActions.tap.action` | `url` opens `value` in a new browser tab. `tab` switches to the tab given in `value` on the current page. |
| `tapActions.tap.value` | The URL, or the key name of the tab. Can contain replaceables such as `[itemid]` or `[relation12]`. |

```json
{
  "icon": "list-check",
  "iconBackgroundColor": "#2e7d32",
  "variant": "soft",
  "mobileSize": 6,
  "postfix": "open",
  "tapActions": {
    "tap": { "action": "tab", "value": "tasks" }
  }
}
```

## Installed Widgets

Widgets installed from an app are shown in a frame. Besides the main-area settings above, they support:

| Key | Type | Default | Description |
|---|---|---|---|
| `allowScrolling` | `"yes"`, `"no"` or `"auto"` | `"yes"` | Whether the frame can scroll. |
| `allowFullscreen` | boolean | `false` | Allow the widget to go full screen. |

The whole configuration (with replaceables filled in) is passed on to the installed widget, so an app can have settings of its own. See the app's documentation.

## Usage Example

```json
{
  "label": "Contacts",
  "icon": "address-book",
  "iconColor": "#ffffff",
  "iconBackgroundColor": "#634DA3",
  "height": 300,
  "minHeight": 200,
  "maxHeight": 600,
  "hasMargin": false,
  "actionalButtons": [
    { "keyName": "create_contact" }
  ]
}
```

## Tips
- Write placeholders inside quotes in JSON, e.g. `"value": "/item/[itemid]"`.
- Who can see a widget is decided by the tabs it is on (and their group access). Widgets have no visibility setting of their own.
- If a header or padding setting seems to have no effect, check the list of widget types that decide this themselves.

## Related Links
- [Widget Settings](./widget-settings.md)
- [Icons](../../misc/icons.md)
- [JSON Queries](../../JSON/json-query.md)
- [JSON Columns](../../JSON/json-columns.md)
- [JSON Relations](../../JSON/json-relations.md)
- [Replaceables](../../misc/replaceables.md)
- [Actional Button Widget](./actionalbutton.md)
