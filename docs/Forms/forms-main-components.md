# Top-Level Properties

## Introduction
This documentation provides a detailed guide on the JSON structure used for configuring forms in 1Relation. It is designed to assist system designers in understanding and applying the various components and configurations necessary for form creation and management. The documentation is structured hierarchically, starting with top-level components and delving into more specific elements and their properties. Each component is explained with its properties, types, and required values, followed by JSON examples for practical understanding.

## Top-Level Properties

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
