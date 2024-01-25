# Fields

Within each page of the form, the `fields` component is essential, as it defines the individual input fields where users can enter or select data. Each field has specific properties and configurations.

## Structure of `fields`

Each field within a page is defined by an object with specific properties to control its behavior and appearance.

### Field Properties

| Property       | Type    | Required | Options                    | Description |
|----------------|---------|----------|----------------------------|-------------|
| `id`           | string  | Yes      | N/A                        | Unique identifier for the field. |
| `name`         | string  | Yes      | N/A                        | Display name of the field. |
| `required`     | boolean | No       | true, false                | Specifies if the field is mandatory for form submission. |
| `cftype_id`    | integer | Yes      | N/A                        | Custom field type identifier. |
| `defaultValue` | various | No       | "[customer.cf123]", "option_2", "string" | Default value of the field. Can reference a custom field, an option, or be a fixed string. |
| `options`      | array   | No       | Depends on field type      | Options for fields like dropdowns, radio buttons, etc. |

#### JSON Example

Below is an example illustrating the `fields` component within a page with various types of keys:

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
            "defaultValue": "Option 1"
          },
          "options": [
            {"id": "option1", "value": "High"},
            {"id": "option2", "value": "low"}
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
        },      
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
In this example, we illustrate different types of fields within a page. These include a simple key with no options, a key with options and a default static text value, a key with options and a default value fetched from a custom field of an item, and a key with options where the default value is set to one of the options.

## Options Component

The `options` component is used within certain types of fields (like dropdowns, radio buttons, and checkboxes) to provide a list of selectable choices to the user.

### Structure of `options`

`options` is an array where each element represents a selectable choice within the field. Each option has specific properties that define its value and behavior.

#### Options Properties

| Property | Type    | Required | Description |
|----------|---------|----------|-------------|
| `id`     | string  | Yes      | A unique identifier for the option, used for referencing and selection logic. |
| `value`  | string  | Yes      | The display text of the option that the user will see and select. |

#### JSON Example

Below is an example illustrating the `options` component within a field:

```json
{
  "pages": {
    "1": {
      "name": "Page Name",
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
            {"id": "option_1", "value": "high"},
            {"id": "option_2", "value": "low"},
            // Additional options...
          ]
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

In this example, the field dropdownField has multiple options, each defined with an id and value. The id serves as a unique identifier, while value is what the user sees in the dropdown menu. The defaultValue for the field can reference one of these options, pre-selecting it for the user.

## HTML Component

The `html` component within a field is used to integrate custom HTML content, enabling enhanced presentation and layout customization within the form. This component allows for adding rich text, links, or other HTML elements to a field for a richer user experience.

### Structure of `html`

The `html` object within a field allows the inclusion of custom HTML elements with specific tags and content.

#### HTML Properties

| Property  | Type   | Required | Options                                      | Description |
|-----------|--------|----------|----------------------------------------------|-------------|
| `tag`     | string | Yes      | h1, h2, h3, h4, h5, h6, b, p, i, u, strong   | Defines the HTML tag to be used for the field content. This enables custom styling and layout within the form. |
| `content` | string | Yes      | N/A                                          | Specifies the actual HTML content to be displayed within the field. This can include formatted text, images, links, or other HTML elements. |

#### JSON Example

Below is an example illustrating the `html` component within fields, showcasing how custom HTML content can be embedded:

```json
{
  "fields": [
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
    // Additional fields with html configurations as needed
  ]
}
```

In this example, two fields demonstrate the use of the html component: one uses an `h1` tag for a heading, and the other uses a `p` tag for a paragraph with custom content. This flexibility allows for diverse and rich content presentation within the form.