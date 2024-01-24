# Pages

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


### JSON Structure for Page Configuration

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