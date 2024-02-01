# Pages

The `pages` component is a crucial part of the form's JSON structure, as it organizes the form into individual pages, each with its own set of fields, actions, and navigation options.

## Structure of `pages`

Each page within the `pages` object is identified by a sequential key (usually a number) and contains various properties to define the page's content and interactive behavior.

### Page Properties

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| `name`   | string | Yes      | The title or name of the page. |
| `fields` | array  | Yes      | An array of complex field objects defining the input fields and display elements on the page. |
| `submit` | object | No       | An object defining the submit action of the page, including button text, triggers for form processing, and navigation steps. |
| `cancel` | object | No       | An object defining the cancel action of the page, including button text and optional triggers or navigation steps. |

Pages are numbered incrementally, starting with 1. Each page's `fields` array can contain a variety of field configurations, and the `submit` and `cancel` properties define the form's behavior upon user interaction.

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

In this example, each page is uniquely identified (e.g., "1", "2", "3") and includes a name, an array of fields, and submit and cancel actions. The `fields` array on each page contains individual field configurations, including input fields, display elements, and their properties. The `submit` and `cancel` objects define the actions to be taken when these buttons are clicked, including any triggers, form processing logic, or navigation steps.