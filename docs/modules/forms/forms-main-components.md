# Main Components

## Introduction

This documentation provides a detailed guide on the JSON structure used for configuring forms in FlowAgent. It is designed to assist system designers in understanding and applying the various components and configurations necessary for form creation and management. The documentation is structured hierarchically, starting with top-level components and delving into more specific elements and their properties. Each component is explained with its properties, types, and required values, followed by JSON examples for practical understanding.

## Top-Level Properties

The JSON structure for forms is primarily divided into three top-level components: `items`, `pages`, and `endflow`. Each of these components plays a vital role in form configuration.

| Component | Type   | Required | Description |
|-----------|--------|----------|-------------|
| `label`   | string | Yes      | The title of the form. |
| `labels`  | object | No      | Translated versions of label. See page about [languages](/docs/mics/languages) |
| `items`   | object | No       | Defines the items that are associated with the form. This could include any data items that the form will interact with or manipulate. |
| `pages`   | object | Yes      | Contains the pages of the form. Each page can have its own set of fields, as well as submit and cancel actions. |
| `endflow` | object | No       | Specifies the behavior at the end of the form process, such as redirection or other post-submission actions. |

### JSON Example

The following is a simple JSON example illustrating how these top-level components might be structured in a form configuration:

```json
{
  "items": {
    "project": [
      ["id", "=", "[itemid]"]
    ]
  },
  "pages": {
    "1": {
      "label": "Page 1"
    },
    "2": {
      "label": "Page 2"
    }
  },
  "endflow": {
    "redirect": "item"
  }
}
```

In this example:
- The `items` object contains a single item, `project`, fetched using the current item's ID (`[itemid]`).
- The `pages` object contains two pages, each identified by a sequential key and a name.
- The `endflow` object specifies a redirect to the project item at the end of the form process.
