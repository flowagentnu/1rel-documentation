# Field Key

A guide to the `key` property for form fields, based on the schema.

## When to Use
Use the `key` property to define a user input field within a form page's `fields` array.

## How It Works
The `key` object specifies the configuration for a single input field. It supports various field types and options for display, validation, and behavior.

## Options & Properties (per schema)
- `id` (string, required): Unique identifier for the field.
- `label` (string, required): Display name of the field.
- `labels` (object, optional): Translated versions of the label. Keys are language codes.
- `required` (boolean, optional): Whether the field is mandatory.
- `fieldtype` (string, required): The type of field (e.g., text, number, dropdown, etc.).
- `defaultValue` (string, optional): Default value for the field.
- `getOptionsFrom` (string, optional): Fetch options from another field.
- `metadata` (object, optional): Advanced configuration for certain field types.

## Usage Example
```json
{
  "key": {
    "id": "customer_name",
    "label": "Customer Name",
    "fieldtype": "text",
    "required": true,
    "defaultValue": "",
    "labels": { "da": "Kundenavn" },
    "metadata": { "minLength": 2 }
  }
}
```

## Field Types

### Text Field
```json
{
  "key": {
    "id": "description",
    "label": "Description",
    "fieldtype": "text",
    "defaultValue": "Inspection of site"
  }
}
```

### Number / Float / Finance
```json
{
  "key": {
    "id": "amount",
    "label": "Amount",
    "fieldtype": "number",
    "defaultValue": 12345
  }
}
```

### Email / Phone
```json
{
  "key": {
    "id": "contact_email",
    "label": "Contact Email",
    "fieldtype": "email",
    "defaultValue": "user@example.com"
  }
}
```

### Option Fields (Dropdown, Radio, Checkbox)
- `fieldtype`: `dropdown`, `radio`, or `checkbox` (checkbox supports multiple selections)
- `options`: Array of option objects, each with `id` and `value`.

**Example:**
```json
{
  "key": {
    "id": "status",
    "label": "Status",
    "fieldtype": "dropdown",
    "defaultValue": "2"
  },
  "options": [
    { "id": "1", "value": "Option 1" },
    { "id": "2", "value": "Option 2" }
  ]
}
```

### Date and Time Fields
- `fieldtype`: `date` or `clock`
- `defaultValue`: e.g., `"2024-01-01"`, `"[datenow]"`, `"[timenow]"`, or a dynamic value

**Example:**
```json
{
  "key": {
    "id": "due_date",
    "label": "Due Date",
    "fieldtype": "date",
    "defaultValue": "[datenow]"
  }
}
```

### User & Group Fields
- Allow selection of users, groups, or both.
- Use `metadata` for restrictions (e.g., only users from a specific group).

**Example:**
```json
{
  "key": {
    "id": "inspector",
    "label": "Inspector",
    "fieldtype": "user",
    "metadata": {
      "allowUsersFromGroups": "group_inspectors"
    }
  }
}
```

### Address Lookup Fields
- Integrated with map services.
- Use `metadata` to show/hide address parts or prefill values.

**Example:**
```json
{
  "key": {
    "id": "address",
    "label": "Address",
    "fieldtype": "address",
    "metadata": {
      "showFieldLatitude": false,
      "showFieldLongitude": false,
      "showFieldCountry": false,
      "showFieldCity": false,
      "showFieldZip": false,
      "showFieldStreet": false,
      "showFieldFormattedAddress": false
    },
    "valueFieldCity": "[project.cf691]"
  }
}
```

### File Upload Fields
- Allow users to upload one or more files.
- Use `metadata` for widget association, item linking, and tag filtering.

**Example:**
```json
{
  "key": {
    "id": "attachments",
    "label": "Attachments",
    "fieldtype": "files",
    "metadata": {
      "widgetKeyName": "my_widget_key",
      "itemId": "12345",
      "filterOnTags": ["item1234", "Tilsynssag"]
    },
    "required": true
  }
}
```
- Only users with the `Files.Create` permission can upload files.
- Widget integration and tag filtering supported.
- UI includes upload/capture buttons and file list.