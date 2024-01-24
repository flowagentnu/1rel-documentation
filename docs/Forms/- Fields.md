Fields are essential components of forms in 1Relation, representing the interactive elements where users enter or interact with data. They are the building blocks of forms, enabling the collection of information, display of content, and execution of various form functionalities.

## Use Cases

>- **Data Collection and Entry**
>
> Fields in forms are primarily used for collecting user inputs. They can vary in type, such as text boxes for open-ended responses or dropdowns for selecting predefined options. This versatility makes fields suitable for various data entry scenarios, from simple information gathering to complex data collection processes.
>
>- **Dynamic Interaction and Response**
>
> Fields can be configured to interact dynamically with user inputs. For example, changing page based on previous responses or changing field options in real-time. This dynamic interaction enhances user engagement and ensures relevant data collection.

## Field Components

Fields in 1Relation forms consist of various key components, each contributing to the field's functionality and user interaction. Understanding these components is essential for creating effective forms:

- **key (object)**:
  - Required: Yes
  - Description: Defines the fundamental properties of a field, including its identifier, display name, type, and default settings. This component is vital for the field's operation and interaction within the form.
  - Example:
    ```json
    "key": {
      "id": "email_address",
      "name": "Email Address",
      "required": true,
      "defaultValue": "",
      "cftype_id": "162"
    }
    ```

- **options (array)**:
  - Required: Conditional (only for fields like dropdowns, radios, checkboxes)
  - Description: Specifies the selectable options for a field. This component is crucial for fields where the user must choose from multiple choices, ensuring clear presentation and user-friendly interaction.
  - Example:
    ```json
    "options": [
      {"id": "option1", "value": "High"},
      {"id": "option2", "value": "Low"}
      // Additional options here
    ]
    ```

- **html (object)**:
  - Required: No
  - Description: Allows the inclusion of custom HTML elements within a field, enhancing the field's presentation and functionality. This component is useful for adding rich content, styling, or layout customizations.
  - Example:
    ```json
    "html": {
      "tag": "div",
      "content": "<p>Additional instructions or information here</p>"
      // Additional HTML content here
    }
    ```

Each component plays a unique role in the creation and customization of fields in 1Relation forms. By leveraging these components, form designers can ensure their forms are not only functional but also tailored to specific data collection and user experience needs.

### Empty JSON Structure for Field Configuration

The following is an empty JSON structure template that outlines how to configure fields in a 1Relation form. This template includes placeholders for the `key`, `options`, and `html` components, representing the essential aspects of field configuration:

```json
{
  "fields": [
     {
      "key": {
        "id": "customer_name",
        "name": "Write Customer Name",
        "required": true,
        "defaultValue": "",
        "cftype_id": "162"
      }
    },
    {
      "key": {
        "id": "priority_field",
        "name": "Choose Priority",
        "required": true,
        "cftype_id": "dropdown" // Assuming 'dropdown' is a type identifier
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
    },
    {
      "html": {
        "tag": "h1",
        "content": "Customer Details"
      }
    },
    {
      "html": {
        "tag": "p",
        "content": "Remember to close the task"
      }
    }
  ]
}

```