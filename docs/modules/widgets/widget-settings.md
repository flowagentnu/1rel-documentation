# Widget Settings

Every widget is set up on the widget settings page: **Module settings → Widgets** for widgets on a module's records, or **Dashboard settings → Widgets** for dashboard widgets. Everything a widget can do can be set up in a form, and you can switch to JSON at any time. The form and the JSON are always the same configuration.

## When to Use
Use this page to understand how to create a widget, how the form is organised, and when it is handy to switch to JSON.

## How It Works

### 1. Choose the widget type
When you create a widget, you first pick its type from a list of cards. Each card has a short description, and you can search them. Installed widgets (from the marketplace) are listed after the built-in ones. See the [overview of widget types](./overview.md).

### 2. General settings
These settings are stored on the widget itself, not in its configuration:

- **Name**: the internal name of the widget.
- **Label**: the title shown on the widget (unless a title is set in the configuration).
- **Type**: the widget type. You can change it later; settings the new type does not use are kept under **Other settings**.
- **Tab**: one or more tabs the widget is shown on.
- **Sort**: the order of the widget on the tab.
- **Size**: the width, from 1/12 to 12/12 (full width).
- **Save the result every night in field** (Sum and Average widgets on modules only): every night, the result of the widget is calculated for each record of the module and saved in the chosen field.

### 3. Configuration: form or JSON
Below the general settings, the **Form / JSON** switch decides how you edit the configuration.

**Form** shows the configuration in sections. Each section starts collapsed and shows a short summary in grey under its title, so you can see what is set without opening it, for example *Timesheet · 2 filters · 1 related module* or *5 columns*. Open a section to change its settings.

Common sections:

| Section | What you set there |
|---|---|
| Title | The title shown on the widget, and a title per language. |
| Appearance | Icon, colours, header, background, margin, heights and extra CSS (widgets in the main area). |
| Tile | Mobile width, icon, colour, look, text before and after the number, and what happens on click (tiles in the top row). |
| Which records | The module, related modules and filters that decide which records the widget uses. |
| Buttons | Actional buttons and form buttons in the widget header (or on each table row). |
| *Type sections* | The settings of the widget type, e.g. Columns and Table, Chart, Markers and Map, Files. |
| Other settings | Settings the form has no field for (see below). |

**JSON** shows the whole configuration as JSON. Changes made in one mode are shown in the other. If the JSON is not valid, you cannot switch back to the form until it is fixed, and the widget cannot be saved.

Turn on **Show JSON keys** to see the JSON name of each form field next to its label. This makes it easy to compare the form with JSON examples in this documentation.

### Picking fields, modules and options
- Lists of fields, modules, relations, tabs, buttons and views are picked from your site's data. Long lists can be searched: click the list and start typing.
- Field pickers write the reference in the format the widget needs (for example `cf1234` for maps, the field keyname for gantt and columns). You do not need to know the format.
- Where an option of a list field is needed (e.g. a status), the options of that field are offered.
- Many pickers also let you type a value, for example a [placeholder](../../misc/replaceables.md) such as `[itemid]`.

### Placeholders
Fields that accept placeholders have a small **[ ]** button inside the field. It opens a list of all placeholders with an explanation, including the fields and relations of the current module (e.g. `[cf204]` Price, `[relation29]` Tasks). Click a placeholder to insert it where the cursor is, or copy it with the copy button.

### Filters
In **Which records → Filters** each row is one condition: a field, an operator and a value. Rows are combined with **AND** or **OR**, and **Add group (…)** adds parentheses for combinations such as *(A or B) and C*. For list fields you can pick the option instead of typing its value. See [JSON Query](../../JSON/json-query.md) for all operators.

### Lists: columns, buttons, steps
Lists show one row per entry. Drag the handle (or use the arrow) to reorder, use the copy icon to duplicate and the bin to remove. Click an entry to edit its settings. When you add a field from a related module, the relation it needs is added under **Which records** automatically.

### Other settings
Settings without a field in the form are never lost. They are listed under **Other settings**, where you can change, remove or add them as JSON. This is used for:

- the own settings of installed widgets,
- settings left over from another widget type or from older versions; these are marked *Not used by this widget type* and can safely be removed.

## Good to Know
- Settings the platform uses by default are not written to the configuration. For example, turning *Show header* off writes `"showWidgetHeader": false`, and turning it on again removes the setting.
- Some widget types decide parts of their look themselves (for example a Smart Text has no header). The form only shows the settings that have an effect for the chosen type.
- Required settings are marked with a red star and a *Required* note until they are filled in.

## Related Links
- [Overview of widget types](./overview.md)
- [Common Widget Properties](./common-properties.md)
- [JSON Query](../../JSON/json-query.md)
- [JSON Columns](../../JSON/json-columns.md)
- [JSON Relations](../../JSON/json-relations.md)
- [Replaceables](../../misc/replaceables.md)
