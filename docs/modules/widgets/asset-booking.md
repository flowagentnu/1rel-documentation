# Asset Booking Widget

The Asset Booking Widget is a scan field for tracking equipment. The user scans (or types) the code of an asset, such as a tool or a machine, and presses Enter. Depending on the widget's setting, the asset is **booked** onto the project the page shows, or **returned** to stock. The widget keeps booking records, the asset's status and the project's status up to date.

## When to Use
Use the Asset Booking Widget when assets are lent out to projects and you want to know where each asset is: for example a project page where the site manager scans the tools that go out, and a warehouse page where returned tools are scanned in.

## How It Works
The solution needs three modules:
- **Assets**, with a unique code field, a status list field (in use / in stock) and a field holding the id of the asset's current booking.
- **Bookings**, with a status list field (open / closed), start date and time fields and end date and time fields. Bookings are related to the asset (asset as parent) and to the project (project as parent).
- **Projects**, with a status list field (new / active / completed / inactive) and a number field counting the project's open bookings. Warehouses can be projects with their own item type.

**Booking** (`"operation": "booking"`):
1. The asset is found by its code. If it has an open booking, that booking is closed first (see returning).
2. If the project's status is the inactive status, the scan is refused ("Project is inactive").
3. A new booking is created with the open status and today's date and time as start, and related to the asset and the project.
4. The asset's status is set to "in use" and its current booking is stored. If the project has the warehouse item type, the asset is set to "in stock" instead.
5. The project's booking count goes up by 1, and the project's status is set to active.

**Returning** (`"operation": "returning"`):
1. The asset's open booking is closed: its status is set to closed and today's date and time are written as end.
2. The project of that booking counts 1 booking less. When its count reaches 0, the project's status is set to completed.
3. The asset's status is set to "in stock" and its current booking is cleared.

The result ("Added …", "Returned …" or an error) is shown under the scan field. After a scan, the other widgets of the module in `moduleid` are refreshed.

Good to know:
- **Every setting is required**, except `operation` and `moduleid`, also when the widget only returns assets. A missing setting gives the error "Missing configuration: *name of the setting*".
- The settings are always read from the saved widget, so users cannot change them in the browser.
- To book, the user must be able to read the project.
- Only **one** Asset Booking Widget works per page. Put a booking widget and a returning widget on different pages, for example the project page and the warehouse page.
- In the [form editor on the widget settings page](./widget-settings.md) all settings are in the **Asset booking** section, grouped as **Asset**, **Bookings** and **Projects**, with pickers for fields, options, relations and item types.

## Usage Example

```json
{
  "operation": "booking",
  "projectid": "[itemid]",
  "moduleid": 210,

  "fieldAssetCode": 2101,
  "fieldAssetStatus": 2102,
  "optionAssetStatusActive": "option_3101",
  "optionAssetStatusInactive": "option_3102",
  "fieldAssetActiveBookingId": 2103,
  "relationAssetBooking": 301,

  "moduleBookingId": 211,
  "mouduleBookingTypeId": 412,
  "fieldBookingStatus": 2111,
  "optionBookingStatusActive": "option_3111",
  "optionBookingStatusInactive": "option_3112",
  "fieldBookingStartDate": 2112,
  "fieldBookingStartTime": 2113,
  "fieldBookingEndDate": 2114,
  "fieldBookingEndTime": 2115,
  "relationProjectBooking": 302,

  "fieldProjectStatus": 2121,
  "optionProjectStatusNew": "option_3121",
  "optionProjectStatusActive": "option_3122",
  "optionProjectStatusCompleted": "option_3123",
  "optionProjectStatusInactive": "option_3124",
  "fieldProjectActiveBookingCount": 2122,
  "moduleProjectTypeIdWarehouse": 415
}
```

*This widget sits on the project page. Scanning an asset books it onto the project of the page; the widgets of module 210 are refreshed afterwards. For a returning widget, use the same settings with `"operation": "returning"`.*

## Options & Parameters

Value formats:
- **Fields** are written as the numeric **field id** (for example `2101`), not as `cf2101` or a keyname.
- **Options** of list fields are written as **`option_<id>`** (for example `"option_3101"`).
- **Relations**, **modules** and **item types** are written as their numeric id.

### General
- **operation** (string, default: `"booking"`): `"booking"` books the scanned asset onto the project; `"returning"` returns it to stock.
- **projectid** (number or string, required for booking): the project record to book onto. Normally `"[itemid]"`, the record of the page (see [Replaceables](../../misc/replaceables.md)).
- **moduleid** (number, optional): module whose widgets on the page are refreshed after a scan.

### Asset
- **fieldAssetCode** (field id, required): the asset's unique code; the scanned code must match it exactly.
- **fieldAssetStatus** (field id, required): the asset's status list field. The asset must already have a value in this field, otherwise its status is not updated.
- **optionAssetStatusActive** (option, required): status meaning "in use".
- **optionAssetStatusInactive** (option, required): status meaning "in stock".
- **fieldAssetActiveBookingId** (field id, required): text or number field holding the record id of the asset's current booking (`0` when it is returned).
- **relationAssetBooking** (relation id, required): the relation between the asset module (parent) and the booking module (child).

### Bookings
- **moduleBookingId** (module id, required): the module new bookings are created in.
- **mouduleBookingTypeId** (item type id, required): the item type of new bookings. Note the spelling: the setting is named **mouduleBookingTypeId** and must be written exactly like that.
- **fieldBookingStatus** (field id, required): the booking's status list field.
- **optionBookingStatusActive** (option, required): status of an open booking. Only bookings with this status are closed.
- **optionBookingStatusInactive** (option, required): status of a closed booking.
- **fieldBookingStartDate** (field id, required): date field set to the date of booking.
- **fieldBookingStartTime** (field id, required): time or text field set to the time of booking (HH:MM).
- **fieldBookingEndDate** (field id, required): date field set to the date the booking is closed.
- **fieldBookingEndTime** (field id, required): time or text field set to the time the booking is closed.
- **relationProjectBooking** (relation id, required): the relation between the project module (parent) and the booking module (child).

### Projects
- **fieldProjectStatus** (field id, required): the project's status list field. Booking is refused when it holds the inactive status.
- **optionProjectStatusNew** (option, required): status of a new project, which can be booked onto.
- **optionProjectStatusActive** (option, required): set when the project has open bookings.
- **optionProjectStatusCompleted** (option, required): set when the project's last booking is closed.
- **optionProjectStatusInactive** (option, required): status that blocks booking onto the project.
- **fieldProjectActiveBookingCount** (field id, required): number field counting the project's open bookings.
- **moduleProjectTypeIdWarehouse** (item type id, required): item type of projects that are warehouses. Booking onto a warehouse puts the asset in stock instead of in use.

The general settings `query`, `columns` and `relations` are not used. Title, icon and size work as described in [Common Widget Properties](./common-properties.md).

## Related Links
- [Widget Settings](./widget-settings.md)
- [Replaceables](../../misc/replaceables.md)
- [Common Widget Properties](./common-properties.md)
