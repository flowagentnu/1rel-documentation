# Maps Widget

The Maps Widget displays items from your modules on a map, letting you visualize and interact with their locations directly from your dashboard.

## When to Use
Use the Maps Widget to show the spatial distribution of items, such as customers, jobs, or assets, and to provide quick access to location-based data.

## How It Works
- Configure the widget with the module ID and location fields.
- Use queries to filter which items appear on the map.
- Customize popups, marker icons, and colors based on data values.
- Define relations to show linked data from other modules.
- Use `currentItemCondition` to highlight or style the marker for the current item being viewed.
- Enable `showUsersOnMap` to display all users on the map (if User GPS Tracking is activated for each user).

## Usage Example

```json
{
  "moduleid": 52,
  "lat": "[cf1154]",
  "lng": "[cf1155]",
  "latField": "cf1066",
  "lngField": "cf1067",
  "popupTitleField": "cf636",
  "popupContentField": "cfmodule77MitName",
  "query": [
    ["module75Item.id", "=", "[itemid]"],
    ["cf649.string", "IN", ["option_863", "option_862", "option_846"]],
    ["cf1066.string", "!=", ""],
    ["cf1067.string", "!=", ""]
  ],
  "relations": {
    "module75": {
      "parent": 75,
      "child": 77,
      "relationid": 79
    }
  },
  "currentItemCondition": {
    "markerColor": "red",
    "markerIcon": "home"
  },
  "showUsersOnMap": true,
  "markerIconCondition": {
    "field": "module77MitName",
    "default": "star",
    "condition": {
      "Entreprise": "construction",
      "Tilsyn": "signpost"
    }
  },
  "markerColorCondition": {
    "field": "moduleitem_id",
    "default": "#6060ff",
    "condition": {
      "Entreprise": "#6060ff",
      "Tilsyn": "green"
    }
  }
}
```

*This example configures a map with custom marker icons, colors, popups, filtered data, highlights the current item, and shows all users on the map if GPS tracking is enabled for them.*

## Options & Parameters
- **moduleid** (integer, required): The module to display data from.
- **lat** (string, required for single item): Latitude value (can use placeholders like `[cf1154]`).
- **lng** (string, required for single item): Longitude value (can use placeholders like `[cf1155]`).
- **latField** (string, required for multiple items): Field used for latitude.
- **lngField** (string, required for multiple items): Field used for longitude.
- **zoom** (integer or "fit", optional): Map zoom level or use "fit" to fit all items.
- **popupTitleField** (string, optional): Field for popup title when clicking a marker.
- **popupContentField** (string, optional): Field for popup content.
- **query** (array, optional): Filter which items appear on the map. See [JSON Query Documentation](/docs/JSON/json-query).
- **relations** (object, optional): Show related data from other modules. See [JSON Relations Documentation](/docs/JSON/json-relations).
- **currentItemCondition** (object, optional):
  - **markerColor** (string, optional): Color to use for the marker representing the current item (e.g., `"red"`).
  - **markerIcon** (string, optional): Icon to use for the marker representing the current item (e.g., `"home"`).
  *Use this to visually highlight the marker for the item currently being viewed or focused.*
- **showUsersOnMap** (boolean, optional): Show all users on the map if User GPS Tracking is activated for each user.
- **markerIconCondition** (object, optional):
  - **field** (string): Field to determine marker icon.
  - **default** (string): Default icon if no condition matches.
  - **condition** (object): Map of field values to icon names.
- **markerColorCondition** (object, optional):
  - **field** (string): Field to determine marker color.
  - **default** (string): Default color if no condition matches.
  - **condition** (object): Map of field values to colors.

## Related Links
- [JSON Query Documentation](/docs/JSON/json-query)
- [JSON Relations Documentation](/docs/JSON/json-relations)
- [Common Widget Properties](/docs/modules/widgets/common-properties.md)