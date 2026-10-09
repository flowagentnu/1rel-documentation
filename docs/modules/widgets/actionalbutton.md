# ActionalButton Widget

The ActionalButton Widget shows one Actional Button as a large tile in the top row of a record page or the dashboard, so a key action is easy to find and tap.

## When to Use
Use the ActionalButton Widget when you want to highlight one action, such as creating an order, starting a time registration or sending a request, as a big button instead of a small button in a widget header.

## How It Works
- The widget points to an existing Actional Button by its **keyName**. The button itself is set up under the site's Actional Buttons.
- Clicking the tile always runs the button **as it is set up**, on the record of the page. The widget can only change how the tile looks; it cannot change what the button does.
- The tile is placed in the top row, like the Count and Sum tiles. Its width is the widget **Size** (on desktop) and **mobileSize** (on mobile, 1–12, default 12). The tile is 70 px high.
- By default the tile shows only the button's icon. To show the text as well, set `displayIconOnly` to `false`.
- On mobile the icon is shown large in the middle of the tile, with the text below it.
- Buttons that open a form dialog or work on several selected records are not suited for this widget.

In the form editor on the [widget settings page](/docs/modules/widgets/widget-settings), these settings are in the **Button** section. Pick the button from the list of your site's Actional Buttons; the look can be changed under *Change the look in this widget*.

## Usage Examples

### Icon and text
```json
{
  "actionalButton": {
    "keyName": "ab_start-time-registration",
    "visibility": {
      "visual": {
        "displayIconOnly": false
      }
    }
  },
  "mobileSize": 12
}
```
*Shows the button `ab_start-time-registration` as a full-width tile with its own icon and text.*

### Custom look with confirmation
```json
{
  "actionalButton": {
    "keyName": "ab_close-case",
    "visibility": {
      "visual": {
        "displayIconOnly": false,
        "label": "Close case",
        "icon": "circle-check",
        "bgColor": "success",
        "textColor": "white"
      },
      "popconfirm": {
        "show": true
      }
    }
  },
  "mobileSize": 6
}
```
*Shows a green half-width tile (on mobile) with the text "Close case" and a check icon. Users are asked to confirm before the button runs.*

## Options & Parameters
- **actionalButton** (object, required): The button to show, and optional changes to its look.
  - **keyName** (text, required): The keyName of the Actional Button, for example `ab_close-case`.
  - **visibility.visual.displayIconOnly** (boolean, default: icon only): Set to `false` to show the text next to (on mobile below) the icon.
  - **visibility.visual.label** (text, default: the button's own text): The text on the tile. Only shown when `displayIconOnly` is `false`.
  - **visibility.visual.icon** (text, default: the button's own icon): A [Font Awesome](/docs/misc/icons) icon name without `fa-`, for example `circle-check`.
  - **visibility.visual.bgColor** (text, default: the button's own colour, otherwise `primary`): The tile colour. One of `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`, `white`, `transparent`.
  - **visibility.visual.textColor** (text, default: the button's own text colour, otherwise `white`): The colour of the icon and text. One of `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`.
  - **visibility.popconfirm.show** (boolean, default: as set on the button): Ask the user "Are you sure?" before the button runs. The tile always uses the standard question and button texts.
  - **visibility.condition** (array, optional): Only show the tile when all conditions are true, e.g. `[["userGroup", "IN", "admins"]]`, where `admins` is the keyname of a user group. The tile has no record to check against, so only conditions on the user (`user`, `userGroup`) work here. See [Actional Button visibility](/docs/sites/actionalbuttons/components/visibility).
- **mobileSize** (number 1–12, default `12`): Width of the tile on mobile. 12 is the full width, 6 is half.

The widget's own title, icon and colours (from the [common properties](/docs/modules/widgets/common-properties)) are not shown on this tile.

## Related Links
- [Widget Settings](/docs/modules/widgets/widget-settings)
- [Actional Buttons Overview](/docs/sites/actionalbuttons/introduction)
- [How to Use Actional Button](/docs/sites/actionalbuttons/how-to-use)
- [Visibility Component](/docs/sites/actionalbuttons/components/visibility)
- [Count Widget](/docs/modules/widgets/count)
