# Pages

The `pages` component is a crucial part of the form's JSON structure, as it defines the individual pages of the form, each containing its own set of fields, actions, and navigation options.

## Structure of `pages`

Each page within the `pages` object is identified by a key (usually a number or identifier) and contains various properties to define the page's content and behavior.

### Page Properties

| Property | Type   | Required | Options | Description |
|----------|--------|----------|---------|-------------|
| `name`   | string | Yes      | N/A     | The title or name of the page. |
| `fields` | array  | Yes      | N/A     | An array of field objects defining the input fields on the page. |
| `submit` | object | No       | N/A     | Defines the submit action of the page, including text and triggers. |
| `cancel` | object | No       | N/A     | Defines the cancel action of the page, including text and optional triggers. |

#### JSON Example

Below is an example illustrating the `pages` component with various pages and their configurations:

```json
{
  "pages": {
    "1": {
      "name": "Tabt / Vundet salg",
      // Fields, submit and cancel actions for page 1
    },
    "2": {
      "name": "Overlevering til tilsynsafdeling",
      // Fields, submit and cancel actions for page 2
    },
    "3": {
      "name": "1 besøg",
      // Fields, submit and cancel actions for page 3
    },
    // Additional pages...
  }
}
```
In this example, each page is uniquely identified (e.g., "1", "2", "3") and includes a name, an array of fields, and submit and cancel actions. The fields array on each page contains individual field configurations, while submit and cancel define the actions to be taken when these buttons are clicked, including any triggers or navigation steps.