# Image Widget

The Image Widget shows one image: by default the image of the record, or any image address you choose, for example the image of a related record or an image address stored in a field.

## When to Use
Use the Image Widget to show a picture on a record page, such as a product photo, a profile picture or a site plan. On the dashboard it can show a fixed image such as a logo or a banner.

## How It Works
- Without **src**, the widget shows the image of the record of the page. If the record has no image, or the user may not see it, a placeholder image is shown.
- With **src**, the widget shows the image at that address. Placeholders work, so the address can depend on the record:
  - `/item/[relation12]/image` shows the image of the record related through relation 12.
  - `[cf45]` uses an image address stored in field 45.
- On the dashboard there is no record, so **src** is required there.
- The image is shown in the full width of the widget and is loaded when it scrolls into view. Use the height settings from the [common properties](/docs/modules/widgets/common-properties) to limit how tall the widget is.

In the form editor on the [widget settings page](/docs/modules/widgets/widget-settings), these settings are in the **Image** section. The **[ ]** button in the address field lists the placeholders, including the fields and relations of the module.

## Usage Examples

### The record's own image
```json
{}
```
*Shows the image of the record of the page.*

### The image of a related record
```json
{
  "src": "/item/[relation12]/image",
  "alt": "Customer logo"
}
```
*On an order page, shows the image of the customer related through relation 12.*

### An image address from a field
```json
{
  "src": "[cf45]",
  "alt": "Site plan"
}
```
*Shows the image whose address is stored in field 45 of the record.*

## Options & Parameters
- **src** (text, default: the image of the record of the page): The address of the image. Can be a full web address (`https://…`) or an address in Flow such as `/item/1234/image`. [Placeholders](/docs/misc/replaceables) work. Required on the dashboard.
- **alt** (text, default: empty, or the record title when **src** is not set): A description of the image for screen readers and for when the image cannot be loaded.

## Related Links
- [Widget Settings](/docs/modules/widgets/widget-settings)
- [Common Widget Properties](/docs/modules/widgets/common-properties)
- [Replaceables](/docs/misc/replaceables)
