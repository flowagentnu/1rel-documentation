# Keys

The key `component` in a form field is fundamental to its identification and functionality. It includes essential attributes like the field's unique identifier, display name, data type, and whether the field is mandatory. This component is crucial for defining the field's role and behavior in the form.

- **id (string)**:
  - Required: Yes
  - Description: Assigns a unique identifier to the field, crucial for form logic and data handling.
  - Example: `"id": "customer_age"`

- **name (string)**:
  - Required: Yes
  - Description: Sets the display name of the field as seen by the user, essential for interaction and identification.
  - Example: `"name": "Customer Age"`

- **required (boolean)**:
  - Required: No
  - Default: `false`
  - Description: Indicates if the field is mandatory. Set to `true` to ensure the field is filled out.
  - Example: `"required": true`

- **defaultValue (string, number, or reference)**:
  - Required: No
  - Description: Defines a pre-filled value for the field, which can be a static value or a dynamic reference to a form item.
  - Examples: 
    - Static Value: `"defaultValue": "Blue"`
    - Dynamic Reference: `"defaultValue": "[customer.cf570]"`

- **cftype_id (number)**:
  - Required: Yes
  - Description: Identifies the field type (e.g., 'text', 'dropdown', 'checkbox'), affecting user interaction.
  - Example: `"cftype_id": "159"`

#### JSON example for key Configuration

The following JSON structure provides a template for configuring the `key` component of fields in a 1Relation form. This structure outlines the essential properties of the `key` component, setting the foundation for field functionality and user interaction:

```json
{
  "fields": [
    {
      "key": {
        "id": "customer_name",
        "name": "Write customer name",
        "required": true,
        "cftype_id": "162",
        "defaultValue": ""
        // Additional key properties as required
      }
      // Additional components (options, html) as needed
    }
    // Additional fields with key configurations as needed
  ]
}
```