# Maps Widget

The Maps Widget shows records from your modules as markers on a map (OpenStreetMap). Each marker opens a popup with a link to its record. It can also mark a centre point, such as the record of the page, draw a driving route and show users' GPS positions.

## When to Use
Use the Maps Widget to see where things are: customers, jobs, tasks or assets. Typical uses are a map of a case's tasks on the case page, or a dashboard map of all open jobs.

## How It Works
- **Records** come from the module in `moduleid`, filtered by `query`. Use `relations` to filter on, or show fields of, related modules. In the [form editor on the widget settings page](./widget-settings.md) this is the **Which records** section.
- **Markers:** every record with a numeric latitude and longitude in `latField` and `lngField` becomes a marker. Records with an empty or non-numeric value are left out. Latitude and longitude must already be stored on the records as numbers; the map does not look up addresses. In the form editor the marker settings are in the **Markers** section.
- **Fields used:** all fields used by the map (latitude, longitude, popup fields and the fields of colour and icon rules) must be listed in `columns`. The form editor adds them automatically when you pick them.
- **Popup:** `popupTitleField` is shown as a link to the record that owns the field, and `popupContentField` as text below it. `popupTitleField` is required: without it no markers are shown.
- **Colours and icons** of markers can depend on a field value, with `markerColorCondition` and `markerIconCondition`.
- **Centre point:** `lat` and `lng` set the centre of the map and add a marker there, typically the position of the record of the page (for example `"[cf1154]"`). `currentItemCondition` styles that centre marker, and the marker of the page's own record if it is among the markers. The **Map** section of the form editor has the centre, zoom, route, height and current-record settings.
- **Zoom:** with markers and no centre, the map always zooms to fit all markers. With a centre, it uses `zoom`, or fits the markers and the centre when `zoom` is `"fit"`. With no markers and no centre, the map shows Copenhagen.
- **Route:** `showRoute` draws a driving route from the centre through all markers, in the order of the results, and shows the total distance.
- **Users:** `showUsersOnMap` adds a person marker for every user with a GPS position, with the user's name and the time of the last position.
- On phones the user's own location is also shown.
- The map loads when it becomes visible. It needs a `height`, otherwise it is not shown.

## Usage Example

A map on a case page showing the case's tasks. The case's own position is the centre.

```json
{
  "moduleid": 77,
  "query": [
    ["module75Item.id", "=", "[itemid]"],
    ["cf649.string", "IN", ["option_863", "option_862", "option_846"]],
    ["cf1066.string", "!=", ""],
    ["cf1067.string", "!=", ""]
  ],
  "relations": {
    "module75": { "parent": 75, "child": 77, "relationid": 79 }
  },
  "columns": [
    { "keyName": "tasksfield_lat" },
    { "keyName": "tasksfield_lng" },
    { "keyName": "tasksfield_name" },
    { "keyName": "tasksfield_address" },
    { "keyName": "tasksfield_status" }
  ],
  "latField": "cf1066",
  "lngField": "cf1067",
  "popupTitleField": "cf636",
  "popupContentField": "cf640",
  "lat": "[cf1154]",
  "lng": "[cf1155]",
  "zoom": "fit",
  "height": 400,
  "currentItemCondition": {
    "markerColor": "red",
    "markerIcon": "house"
  },
  "markerColorCondition": {
    "field": "cf649",
    "default": "#6060ff",
    "condition": {
      "option_863": "#6060ff",
      "option_862": "green"
    }
  },
  "markerIconCondition": {
    "field": "module77MitName",
    "default": "star",
    "condition": {
      "Entreprise": "helmet-safety",
      "Tilsyn": "signs-post"
    }
  },
  "showRoute": true,
  "showUsersOnMap": true
}
```

*In this example:*
- Tasks (module 77) related to the case of the page (module 75, relation 79) with one of three statuses and a position become markers.
- The task's name (`cf636`) is the popup title and links to the task; its address (`cf640`) is the popup text.
- The centre is the case's own position, shown as a red house, and the map zooms to fit the case and all tasks.
- Markers are coloured by the task status (`cf649`, option values) and get an icon by the task's item type name.
- A driving route is drawn from the case through the tasks, and users with a GPS position are shown.

## Options & Parameters

### Which records
- **moduleid** (number, required): the module whose records become markers. Only records the user may read are shown.
- **query** (list, default: none): filters for the records, for example `["module75Item.id", "=", "[itemid]"]` for the records related to the record of the page. See [JSON Query](../../JSON/json-query.md).
- **relations** (object, default: none): joins related modules, so that their fields can be used in filters and on the map. See [JSON Relations](../../JSON/json-relations.md).
- **columns** (list, required in practice): every field the map uses: `latField`, `lngField`, `popupTitleField`, `popupContentField` and the `field` of the colour and icon rules. Write each as `{"keyName": "<field keyname>"}` or as `"cf<id>"`. A field missing here is empty on the map, and records then get no marker.

### Markers
Field settings in this section are written as **`"cf<id>"`**, for example `"cf1066"`.
- **latField** (string, required for markers): field holding the latitude.
- **lngField** (string, required for markers): field holding the longitude.
- **popupTitleField** (string, required for markers): field shown as the popup title, linked to the record that owns the field. Without it no markers are shown.
- **popupContentField** (string, default: none): field shown as text in the popup.
- **markerColorCondition** (object, default: none, which gives `#6060FF` markers):
  - **default** (string, default: `#6060FF`): colour used when no rule matches. Works on its own, without `field` and `condition`.
  - **field** (string): the field whose value chooses the colour, as `"cf<id>"`. The item type name of a module can be used as `"module<id>MitName"`.
  - **condition** (object): value → colour, for example `{"option_1402": "#D3D3D3", "user_5": "red"}`. The stored value is compared first: `option_<id>` for list fields, `user_<id>` for user fields, or the text itself. If the field has no stored value (as for the item type name), the shown text is used, for example `"Service"`.
- **markerIconCondition** (object, default: no icon):
  - **default** (string, default: none): icon used when no rule matches.
  - **field** (string): as for colours.
  - **condition** (object): value → icon.
- **showUsersOnMap** (boolean, default: `false`): show every user with a GPS position as a person marker.

Colours are CSS colours, such as `"#DC3545"`, `"green"` or `"red"`. Icons are [Font Awesome](../../misc/icons.md) icon names without `fa-`, such as `"house"`, `"map-pin"`, `"star"` or `"list-check"`. Names from other icon sets (such as `home_work` or `pin_drop`) are not shown.

### Map
- **height** (number, required): height of the map in pixels. Without it the map is not shown.
- **zoom** (number 1-19 or `"fit"`, default: `15`): zoom level used around the centre (`lat`/`lng`). `"fit"` zooms to fit all markers and the centre. Without a centre the map always fits the markers.
- **lat** / **lng** (number or string, default: none): centre of the map, also the start of the route, shown as a marker. Usually placeholders for the position fields of the record of the page, such as `"[cf1154]"` and `"[cf1155]"` (see [Replaceables](../../misc/replaceables.md)). Placeholders of a record only work on record pages; on a dashboard use numbers or leave them out.
- **showRoute** (boolean, default: `false`): draw a driving route from the centre through all markers, with the total distance. Needs at least two points.
- **currentItemCondition** (object, default: none): style of the centre marker, and of the marker of the record the page shows.
  - **markerColor** (string): colour. Default: `yellow` for the page's record among the markers, `#6060FF` for the centre marker.
  - **markerIcon** (string, default: none): icon.

### General settings
Title, icon and size work as described in [Common Widget Properties](./common-properties.md). Set `"showWidgetHeader": false` and `"hasMargin": false` for a map from edge to edge.

## Related Links
- [Widget Settings](./widget-settings.md)
- [JSON Query Documentation](../../JSON/json-query.md)
- [JSON Relations Documentation](../../JSON/json-relations.md)
- [Replaceables](../../misc/replaceables.md)
- [Icons](../../misc/icons.md)
- [Common Widget Properties](./common-properties.md)
