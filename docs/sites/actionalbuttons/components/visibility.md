# Visibility Component

A guide to the `visibility` component for Actional Buttons in FlowAgent.

## When to Use
Use this page when you want to control when and how an Actional Button is shown.

## How It Works
- The `visibility` object controls both the appearance and the logic for when a button is visible.
- Top-level properties:
  - `visual` (object, required): Controls appearance. Options:
    - `label` (string, required): Main label for the button.
    - `labels` (object, optional): Localized labels, keyed by language code (e.g., `en_us`).
    - `description` (string, optional): Description for the button.
    - `descriptions` (object, optional): Localized descriptions.
    - `variant` (string, optional): Visual style. `filled` (default) or `outlined`.
    - `textColor` (string, optional): Text color. One of: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`.
    - `bgColor` (string, optional): Background color. One of: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`, `white`, `transparent`.
    - `icon` (string, optional): Icon name (e.g., `check_circle`).
    - `displayIconOnly` (boolean, optional): Show only the icon, no label.
    - `placement` (string, optional): Placement of the button (e.g., `row`).
  - `condition` (array, optional): Array of conditions for display logic. Each condition is `[key, operator, value]`.
  - `popconfirm` (object, optional): Confirmation dialog before action. Options:
    - `text` (string, required): Confirmation message.
    - `label`, `labels`, `no`, `nos`, `ok`, `oks`, `show` (see schema for details).
  - `actionalButtons` (array, optional): Group multiple buttons into one. When set, clicking the main button opens a modal with the grouped buttons. The main button will not have its own actions or outcome—these come from the child button that is clicked.

## Usage Example
```json
{
  "visibility": {
    "visual": {
      "label": "Edit",
      "icon": "fa-edit",
      "bgColor": "primary",
      "displayIconOnly": false,
      "placement": "row",
      "variant": "outlined"
    },
    "condition": [ ["status", "=", "active"] ]
  }
}
```
*This example shows an outlined button variant. The default is `filled` if not specified.*

## Button Grouping Example
Group multiple buttons into one. Clicking the group button opens a modal with the selected child buttons:

```json
{
  "visibility": {
    "visual": {
      "label": "Button Group",
      "textColor": "white",
      "bgColor": "success",
      "icon": "add_circle",
      "displayIconOnly": false
    },
    "actionalButtons": [
      { "keyName": "ab_opret-lead" },
      { "keyName": "ab_opret-lead" },
      { "keyName": "ab_opret-lead" },
      { "keyName": "ab_opret-lead" }
    ]
  }
}
```
- The main button will not have its own actions or outcome. Actions and outcomes are defined on each child button referenced by `keyName`.

## Options & Parameters
- **visual.label** (string, required): Main label for the button.
- **visual.labels** (object, optional): Localized labels (e.g., `{ "en_us": "Edit" }`).
- **visual.description** (string, optional): Description for the button.
- **visual.descriptions** (object, optional): Localized descriptions.
- **visual.variant** (string, optional): `filled` (default) or `outlined`.
- **visual.textColor** (string, optional): Text color (`primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`).
- **visual.bgColor** (string, optional): Background color (`primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`, `white`, `transparent`).
- **visual.icon** (string, optional): Icon name (e.g., `check_circle`).
- **visual.displayIconOnly** (boolean, optional): Show only the icon.
- **visual.placement** (string, optional): Placement of the button.
- **condition** (array, optional): Array of `[key, operator, value]` for display logic.
- **popconfirm** (object, optional): Confirmation dialog. See schema for all options.
- **actionalButtons** (array, optional): Array of button objects to group under one button.

## Tips
- Use `labels` and `descriptions` for multi-language support.
- Use `variant` to change the button style between `filled` (default) and `outlined`.
- Use `condition` to show/hide buttons based on item or user context.
- Use `popconfirm` for actions that need confirmation.
- Use `actionalButtons` to group related actions under a single button.
- Reference the [Icons documentation](/docs/misc/icons) for icon names.
