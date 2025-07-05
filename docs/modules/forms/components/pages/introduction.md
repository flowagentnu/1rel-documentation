# Introduction to Form Pages

A guide to using pages in FlowAgent forms for multi-step data entry and organization.

## When to Use
Use form pages to break up a form into logical steps or sections, improving usability and clarity.

## How It Works
- Each form contains a `pages` object, with each page identified by a number (e.g., "1", "2").
- Each page consists of the following properties:
  - `label` and `labels`: The page's name and translations. See [Languages documentation](/docs/misc/languages).
  - `fields`: Array of field definitions (inputs, HTML, or options). See [Fields](fields/introduction.md).
  - `submit` and `cancel`: Both are configured the same way, including label, triggers, and actions. See [Submit](submit/introduction.md) for details on both.
    - *Note: The structure and options for `submit` and `cancel` are identical, so only one documentation page is needed.*

## Usage Example
```json
{
  "pages": {
    "1": {
      "label": "Info",
      "fields": [
        { "key": { "id": "customer_name", "label": "Customer Name", "fieldtype": "text" } },
        { "key": { "id": "customer_email", "label": "Customer Email", "fieldtype": "email" } }
      ],
      "submit": { "label": "Save" },
      "cancel": { "label": "Cancel" }
    },
    "2": {
      "label": "Order",
      "fields": [
        { "key": { "id": "order_amount", "label": "Order Amount", "fieldtype": "number" } }
      ],
      "submit": { "label": "Next" },
      "cancel": { "label": "Back" }
    }
  }
}
```
*This example shows a two-page form, each with its own fields, submit, and cancel configuration.*