# Form Fields

A guide to configuring the `fields` array for each form page, based on the schema.

## When to Use
Use this page to define and configure the fields (inputs, HTML, options) that appear on each form page.

## How It Works
- Each page's `fields` property is an array of field objects.
- Each field object can contain:
  - `key`: Defines a user input field (see below).
  - `html`: Defines a custom HTML display element.
  - `options`: Array of option objects for select-type fields.
- Only one of `key`, `html`, or `options` should be used per field object.

## Field Object Properties (per schema)
- `key` (object, optional): Field definition. See [field_key.md](field_key.md).
- `html` (object, optional): Custom HTML content. See [field_html.md](field_html.md).
- `options` (array, optional): Array of option objects for select, radio, or checkbox fields. See [field_options.md](field_options.md).

## Usage Example
```json
{
  "fields": [
    { "key": { "id": "customer_name", "label": "Customer Name", "fieldtype": "text" } },
    { "key": { "id": "order_amount", "label": "Order Amount", "fieldtype": "number" } },
    { "html": { "tag": "h3", "label": "Section Title" } },
    { "key": { "id": "status", "label": "Status", "fieldtype": "dropdown" }, "options": [
      { "id": "1", "value": "Active" },
      { "id": "2", "value": "Inactive" }
    ] }
  ]
}
```
*This example shows a mix of input fields, a custom HTML element, and a dropdown with options.*
