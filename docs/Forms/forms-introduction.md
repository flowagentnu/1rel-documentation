# Introduction to Forms

In 1Relation, forms serve as a dynamic interface between the system and its users, offering a structured and interactive way to capture information. They are integral to various functionalities within 1Relation, designed to present questions and fields that require user input. Whether it's for creating, editing, or managing data, forms play a crucial role in ensuring efficient and accurate data collection.

## Use Cases for Forms

Forms in 1Relation are versatile and cater to a wide range of applications, including but not limited to:

- **Creating Items**: Streamlining the process of adding new entries, such as registering a new customer.
- **Editing Items**: Offering a user-friendly interface to modify existing data, like updating customer details.
- **Relating Items**: Facilitating the creation of new relationships, for instance, linking a contact person to a customer.
- **Unlinking Items**: Simplifying the process of removing existing relationships, such as detaching a contact person from a customer.
- **Deleting Items**: Enabling the removal of data from the system, like deleting an outdated customer record.

## Configuration and Activation of Forms

### Creating and Managing Forms

To create, edit, or archive forms in 1Relation:

1. Navigate to the desired module and access the module settings.
2. Proceed to the forms section.
3. Assign a name to the form and configure group permissions.
4. Utilize JSON code to customize the form's layout, fields, and functionalities.

### Activation of Forms

Forms are typically activated in two ways:

- **Through Apps**: Certain applications within 1Relation are designed to trigger forms, initiating specific workflows or data entry processes.
- **Via Actionable Buttons**: Forms can be linked to actionable buttons, providing users with immediate access to the forms through a simple click, streamlining the process of data entry or modification.
---

# Forms Documentation

## Introduction
This documentation provides a detailed guide on the JSON structure used for configuring forms in 1Relation. It is designed to assist system designers in understanding and applying the various components and configurations necessary for form creation and management. The documentation is structured hierarchically, starting with top-level components and delving into more specific elements and their properties. Each component is explained with its properties, types, and required values, followed by JSON examples for practical understanding.

## Top-Level Components

The JSON structure for forms is primarily divided into three top-level components: `items`, `pages`, and `endflow`. Each of these components plays a vital role in form configuration.

| Component | Description |
|-----------|-------------|
| `items`   | Defines the items that are associated with the form. This could include any data items that the form will interact with or manipulate. |
| `pages`   | Contains the pages of the form. Each page can have its own set of fields, as well as submit and cancel actions. |
| `endflow` | Specifies the behavior at the end of the form process, such as redirection or other post-submission actions. |

### JSON Example

The following is a simple JSON example illustrating how these top-level components might be structured in a form configuration:

```json
{
  "items": {
    // Item definitions go here
  },
  "pages": {
    // Page definitions, including fields and actions, go here
  },
  "endflow": {
    // Endflow actions (like redirection) go here
  }
}
```
