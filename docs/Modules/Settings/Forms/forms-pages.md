# Pages

The `pages` component is crucial in the form's JSON structure, organizing the form into individual pages, each with its own set of fields, actions, and navigation options.

![Form pages](formpages-overview.png)

## Structure of `pages`

Each page within the `pages` object is identified by a sequential key (usually a number) and contains various properties to define the page's content and interactive behavior.

### Page Properties

| Property | Type   | Required | Description |
|----------|--------|----------|-------------|
| `name`   | string | Yes      | The title or name of the page. |
| `fields` | array  | Yes      | An array of complex field objects defining the input fields and display elements on the page. |
| `submit` | object | No       | An object defining the submit action of the page, including button text, triggers for form processing, and navigation steps. |
| `cancel` | object | No       | An object defining the cancel action of the page, including button text and optional triggers or navigation steps. |

### JSON Example

Below is an example illustrating the `pages` component with various pages and their configurations:

```json
{
  "pages": {
    "1": {
      "name": "Project info",
      "fields": [
        {
          "key": {
            "id": "project_name",
            "name": "Project Name",
            "required": true,
            "cftype_id": 307,
            "defaultValue": "[project.cf1234]"
          }
        },
        {
          "key": {
            "id": "project_number",
            "name": "Project Number",
            "required": false,
            "cftype_id": 304,
            "defaultValue": "[project.cf1235]"
          }
        }
      ],
      "submit": {
        "text": "Next"
      },
      "cancel": {
        "text": "Cancel"
      }
    },
    "2": {
      "name": "Customer information",
      "fields": [
        {
          "key": {
            "id": "customer_name",
            "name": "Customer Name",
            "required": true,
            "cftype_id": 305,
            "defaultValue": "[customer.cf5678]"
          }
        },
        {
          "key": {
            "id": "customer_contact",
            "name": "Customer Contact",
            "required": false,
            "cftype_id": 306,
            "defaultValue": "[customer.cf5679]"
          }
        }
      ],
      "submit": {
        "text": "Next"
      },
      "cancel": {
        "text": "Back"
      }
    },
    "3": {
      "name": "Subtasks",
      "fields": [
        {
          "key": {
            "id": "subtask_name",
            "name": "Subtask Name",
            "required": true,
            "cftype_id": 308,
            "defaultValue": "[subtasks.cf6789]"
          }
        }
      ],
      "submit": {
        "text": "Finish",
      },
      "cancel": {
        "text": "Back"
      }
    }
  }
}
```

In this example:
- Each page is uniquely identified (e.g., "1", "2", "3") and includes a `name`, an array of `fields`, and `submit` and `cancel` actions.
- The `fields` array contains individual field configurations, including input fields and display elements.
- The `submit` and `cancel` objects define the actions to be taken when these buttons are clicked, including any triggers, form processing logic, or navigation steps.
