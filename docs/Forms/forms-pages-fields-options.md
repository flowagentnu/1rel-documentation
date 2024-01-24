# Key options

The `options` component in a field is used to define selectable choices, particularly important for fields like dropdowns, radio buttons, and checkboxes. Each option within a field is specified through this component. `options` are used with the `key` component.

- **id (string)**:
  - Required: Yes
  - Description: Sets a unique identifier for each option within the field, crucial for data handling and selection logic.
  - Example: `"id": "option1"`

- **value (string)**:
  - Required: Yes
  - Description: Specifies the display name for each option, providing clarity and guidance for user choices.
  - Example: `"value": "Medium priority"`

#### Empty JSON Structure for options Configuration

Below is an empty JSON structure template illustrating how to configure the `options` component of fields in a 1Relation form. This template details the structure for defining selectable options within a field:

```json
{
  "fields": [
    {
      "key": {
        "id": "priority_field",
        "name": "Choose Priority",
        "required": true,
        "cftype_id": "162"
      },
      "options": [
        {
          "id": "low_priority",
          "value": "Low"
        },
        {
          "id": "medium_priority",
          "value": "Medium"
        },
        {
          "id": "high_priority",
          "value": "High"
        }
      ]
      // Additional configurations or HTML content as needed
    }
    // Additional fields as needed
  ]
}

```