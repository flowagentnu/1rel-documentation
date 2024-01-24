# Form configuration

Discover the essentials of form configuration in 1Relation. This guide provides concise, step-by-step instructions for setting up and customizing forms, empowering you to effectively tailor them to your specific system needs.

# Form components

Forms in 1Relation are structured to facilitate efficient data collection and processing. Key components of a form include:

- **Items**: These are pre-defined data elements or records that the form can interact with. Items are often used to pre-fill fields, set default values, or as part of form actions.

- **Pages**: Forms can consist of one or multiple pages. Each page contains a set of questions (fields) and answers (user input), along with configurations for form actions like submission or cancellation.

- **Endflow**: This section defines the navigation flow after the form is completed. It typically includes redirection instructions to guide the user to the next logical step or back to a specific location within the system.

### Empty JSON Structure for Form Configuration

Below is an empty JSON structure that outlines the basic format for form construction in 1Relation:

```json
{
  "items": {
    // Define items used in the form context here
  },
  "pages": {
    // Configure pages with questions, answers, and actions here
  },
  "endflow": {
    // Set up redirection or other end-of-form actions here
  }
}

```

## "Items"
---
## Introduction

In 1Relation, the concept of "items" within forms plays a pivotal role in enhancing the dynamic functionality of form-based user interactions. This document delves into how "items" are utilized in forms, outlining their use cases and demonstrating their integration with JSON queries.

## Use Cases

>- **Prefilling Form Fields**
>
> Items can dynamically prefill fields in a form based on the data stored in them. This is particularly useful in scenarios such as prefilling field values presented to the user.
>
>- **Executing Actions Using Item Data**
>
> Actions submitted through the form use item information to manage and execute actions.

## Integration with JSON Queries

Items in forms are retrieved or identified through JSON queries. These queries can specify which items to fetch based on various criteria, ensuring that the correct data populates the form.

For detailed guidance on constructing JSON queries in 1Relation, refer to our [JSON Query documentation](/docs/JSON/json-query).

### JSON Query Example

The following JSON example demonstrates querying a specific item, utilizing `itemid`, `relationxx` and `parentid`:

```json
{
"items": {
    "Project": [
      [
        "id",
        "=",
        "[itemid]"
      ]
    ],
    "customer": [
      [
        "id",
        "=",
        "[parentitemid]"
      ]
    ],
    "task": [
      [
        "id",
        "=",
        "[relation79]"
      ]
    ]
  }
}
```

---
# "Pages"

## Introduction

Pages in 1Relation forms serve as a fundamental component to structure and organize the form's content. They enable a logical flow of questions and possible answers for the user to input.

## Use Cases

>- **Editing Items**
>
> Pages in forms facilitate the management of information by presenting users with fields. This is crucial for tasks like creating or editing for example a customer, where fields in a form are paired with custom fields from items, allowing for efficient data entry and modification.
>
>- **Survey and Feedback Forms**
>
> In surveys or feedback forms, pages can be used to group related questions. This approach helps in organizing the form logically and makes it easier for respondents to understand and answer accurately. By segmenting questions into different pages, users can navigate through the survey without feeling overwhelmed.

## Pages Components

Pages in 1Relation forms are designed to organize content and guide user interaction. Each page comprises several key components:

- **name (string)**:
  - Required: Yes
  - Description: Provides a unique identifier for each page. This name is displayed to the user and helps in navigating the form.
  - Example: `"name": "Contact Information"`

- **fields (array)**:
  - Required: Yes
  - Description: Specifies the set of fields present on a page. Each field is defined with its own properties and configurations. Fields can be used for gathering data (like text inputs or checkboxes) or providing information (such as titles or instructions).
  - Example: 
    ```json
    "fields": [
      {
        "key": {
          "id": "first_name",
          "name": "First Name",
          "required": true
        }
      },
      // Additional fields here
    ]
    ```

- **submit (object)**:
  - Required: No
  - Description: Configures the actions to be performed when the user submits the page. This can include data processing, navigation to another page, or triggering other workflows.
  - Example: 
    ```json
    "submit": {
      "text": "Next",
      "action": "submitForm",
      // Additional submit configurations here
    }
    ```

- **cancel (object)**:
  - Required: No
  - Description: Defines the actions to be taken when the user cancels the page. This could involve returning to a previous page, clearing the form, or other custom behaviors.
  - Example: 
    ```json
    "cancel": {
      "text": "Go Back",
      "action": "cancelForm",
      // Additional cancel configurations here
    }
    ```

These components together structure each page within the form, facilitating an intuitive and efficient user experience. By customizing these components, form designers can create diverse and dynamic forms that cater to various user interactions and data collection needs.


### Empty JSON Structure for Page Configuration

Below is an empty JSON structure that serves as a template for configuring individual pages within a form in 1Relation. This structure outlines the fundamental elements of a page, including fields for user input and settings for submit and cancel actions.

```json
{
  "pages": {
    "1": {
      "name": "Page Name",
      "fields": [
        // Define fields for user input here
      ],
      "submit": {
        // Configure actions for the submit button here
      },
      "cancel": {
        // Configure actions for the cancel button here
      }
    },
    // Additional pages can be configured similarly
  }
}
```

---
# "Fields"

## Introduction

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
        "id": "",
        "name": "",
        "required": false,
        "defaultValue": "",
        "cftype_id": ""
      },
      "options": {
        "id": "",
        "value": ""
        // Additional options as needed
      },
      "html": {
        "tag": "",
        "content": ""
        // Additional HTML content as needed
      }
      // Additional key properties and configurations as required
    }
    // Additional fields as needed
  ]
}
```
### "key"

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

#### Empty JSON Structure for key Configuration

The following JSON structure provides a template for configuring the `key` component of fields in a 1Relation form. This structure outlines the essential properties of the `key` component, setting the foundation for field functionality and user interaction:

```json
{
  "fields": [
    {
      "key": {
        "id": "",
        "name": "",
        "required": false,
        "defaultValue": "",
        "cftype_id": ""
        // Additional key properties as required
      }
      // Additional components (options, html) as needed
    }
    // Additional fields with key configurations as needed
  ]
}
```
### "options"

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
      "options": [
        {
          "id": "",
          "value": ""
          // Additional properties for each option as required
        }
        // Additional options as needed
      ]
      // Other field components (key, html) as needed
    }
    // Additional fields with options configurations as needed
  ]
}
```
### "html"

The `html` component in a field is used to incorporate custom HTML content, allowing for enhanced presentation and layout customization within the form. This component is instrumental in adding rich text, links, or other HTML elements to a field.

- **tag (string)**:
  - Required: Yes
  - Description: Defines the HTML tag to be used for the field content, enabling custom styling and layout within the form.
  - Available options: `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `b`, `p`, `i`, `u`, `strong`
  - Example: `"tag": "p"`

- **content (string)**:
  - Required: Yes
  - Description: Specifies the actual HTML content to be displayed within the field. This can include formatted text, images, links, or other HTML elements, providing a rich and interactive user experience.
  - Example: `"content": "This is a paragraph with <strong>bold</strong> text."`

#### Empty JSON Structure for html Configuration

Below is an empty JSON structure template that outlines how to configure the `html` component of fields in a 1Relation form. This template shows how custom HTML content can be embedded within a field:

```json
{
  "fields": [
    {
      "html": {
        "tag": "",
        "content": ""
        // Additional HTML properties as required
      }
      // Other field components (key, options) as needed
    }
    // Additional fields with html configurations as needed
  ]
}
```

---
