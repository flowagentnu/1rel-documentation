# Field Options

A guide to the `options` property for form fields, based on the schema.

## When to Use
Use the `options` property to define selectable choices for fields such as dropdowns, radios, or checkboxes within a form page's `fields` array.

## How It Works
- The `options` property is an array of option objects, each representing a selectable value.
- Used in combination with a field whose `fieldtype` supports options (e.g., dropdown, radio, checkbox).
- Each option object typically includes an `id` and a `value`.

## Options & Properties (per schema)
- `options` (array): List of option objects for the field.
  - Each option object (see schema for details) usually includes:
    - `id` (string or number): Unique identifier for the option.
    - `value` (string): Display text for the option.
    - Additional properties may be supported depending on implementation (e.g., `disabled`, `icon`).

## Usage Example
```json
{
  "key": {
    "id": "status",
    "label": "Status",
    "fieldtype": "dropdown"
  },
  "options": [
    { "id": "1", "value": "Active" },
    { "id": "2", "value": "Inactive" },
    { "id": "3", "value": "Pending" }
  ]
}
```