# HTML

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
       "tag": "h1",
       "content": "Customer details"
      }
      },
    {
      "html": {
      "tag": "p",
      "content": "Remember to close the task"
      }
      // Other field components (key, options) as needed
    }
    // Additional fields with html configurations as needed
  ]
}
```