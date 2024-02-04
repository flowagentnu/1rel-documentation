# Fields

Within each page of the form, the `fields` component is essential, defining the individual input fields where users can enter or select data. Each field has specific properties and configurations.

## Structure of `fields`

| Property       | Type    | Required | Description |
|----------------|---------|----------|-------------|
| `key`          | object  | No      | Unique identifier for the field. |
| `options`      | object  | No      | Display name of the field. |
| `html`         | object | No       | Specifies if the field is mandatory for form submission. |

## Key Component

Each field within a page is defined by an object wrapped in a `key`, with specific properties controlling its behavior and appearance.

### Structure of `key`

| Property       | Type    | Required | Description |
|----------------|---------|----------|-------------|
| `id`           | string  | Yes      | Unique identifier for the field. |
| `name`         | string  | Yes      | Display name of the field. |
| `required`     | boolean | No       | Specifies if the field is mandatory for form submission. |
| `cftype_id`    | integer | Yes      | Custom field type identifier. |
| `defaultValue` | various | No       | Default value of the field. Can reference a custom field, a post value, an option, or be a fixed string. |

#### JSON Example

Below is an example illustrating the `fields` component within a page, including different types of fields:

```json
{
  "pages": {
    "1": {
      "name": "Page Name",
      "fields": [
        {
          "key": {
            "id": "simpleField",
            "name": "Simple Field",
            "required": true,
            "cftype_id": 123,
            "defaultValue": "Simple is good",
          }
        },
        {
          "key": {
            "id": "dropdownField",
            "name": "Dropdown Field",
            "required": false,
            "cftype_id": 124,
            "defaultValue": "option_2"
          },
          "options": [
            {"id": "option_1", "value": "High"},
            {"id": "option_2", "value": "Low"}
          ]
        },
        {
          "key": {
            "id": "fieldWithCustomFieldDefault",
            "name": "Field with Custom Field Default",
            "required": false,
            "cftype_id": 125,
            "defaultValue": "[customer.cf123]"
          }
        }
        // Additional fields...
      ],
      "submit": {
        "text": "Submit Button Text",
        // Submit action configuration...
      },
      "cancel": {
        "text": "Cancel Button Text",
        // Cancel action configuration...
      }
    }
    // Additional pages...
  }
}
```

In this example, various types of fields are illustrated, including a simple field, a dropdown field with options, and a field with a default value fetched from a custom field.

## Options Component

The `options` component within certain types of fields (like dropdowns, radio buttons, and checkboxes) provides a list of selectable choices to the user.

### Structure of `options`

`options` is an array where each element represents a selectable choice within the field. Each option has specific properties defining its value and behavior.

#### Options Properties

| Property | Type    | Required | Description |
|----------|---------|----------|-------------|
| `id`     | string  | Yes      | Unique identifier for the option, used for referencing and selection logic. |
| `value`  | string  | Yes      | Display text of the option that the user will see and select. |

#### JSON Example

Below is an example illustrating the `options` component within a field:

```json
{
  "fields": [
    {
      "key": {
        "id": "dropdownField",
        "name": "Dropdown Field",
        "required": false,
        "cftype_id": 124,
        "defaultValue": "option_2"
      },
      "options": [
        { "id": "option_1", "value": "High" },
        { "id": "option_2", "value": "Low" },
        // Additional options...
      ]
    }
    // Additional fields...
  ]
}
```

In this example, the `dropdownField` has multiple options, each defined with an `id` and `value`. The `defaultValue` for the field can reference one of these options, pre-selecting it for the user.

## HTML Component

The `html` component within a field allows for the integration of custom HTML content, enabling enhanced presentation and layout customization within the form.

### Structure of `html`

The `html` object within a field allows the inclusion of custom HTML elements with specific tags and content.

#### HTML Properties

| Property  | Type   | Required | Description |
|-----------|--------|----------|-------------|
| `tag`     | string | Yes      | Defines the HTML tag to be used for the field content, enabling custom styling and layout within the form. |
| `content` | string | Yes      | Specifies the actual HTML content to be displayed within the field, including formatted text, images, links, or other HTML elements. |

#### JSON Example

Below is an example illustrating the `html` component within fields:

```json
{
  "fields": [
    {
      "html": {
        "tag": "h1",
        "content": "Customer Details",
      }
    },
    {
      "html": {
        "tag": "p",
        "content": "Remember to close the task",
      }
    }
  ]
}
```

In this example, fields demonstrate the use of the `html` component: one uses an `h1` tag for a heading, and another uses a `p` tag for a paragraph with custom content. This flexibility allows for diverse and rich content presentation within the form.