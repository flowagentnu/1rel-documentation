# Custom Fields

Custom fields let you define and store specific information for each item in a module, such as a customer, task, or equipment.

## When to Use
Use custom fields when you need to capture unique data points for items in your modules—like names, statuses, prices, or any custom attribute.

## How It Works
- Each module can have its own set of custom fields.
- Field types include text, dropdown, date, checkbox, files, and more.
- Custom fields are used in forms, lists, and workflows throughout FlowAgent.

## Usage Example
Suppose you want to add a "Status" dropdown and a "Due Date" field to a Task module:

```json
{
  "customfields": [
    {
      "type": "dropdown",
      "label": "Status",
      "options": ["Open", "In Progress", "Done"]
    },
    {
      "type": "date",
      "label": "Due Date"
    }
  ]
}
```

## Available Field Types
- text
- address_lookup
- checkbox
- clock
- date
- datetime
- dropdown
- email
- finance
- float
- group
- hour_time_select
- time_select
- image_element
- number
- organisation
- organisation_user
- phone
- query
- radio
- textarea
- user
- usergroup
- percentage
- files

## Creating and Editing Custom Fields
1. Go to the module you want to customize.
2. Open module settings and select "Custom Fields."
3. Add, edit, or remove fields as needed.
4. Save your changes.