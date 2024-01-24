# Submit & Cancel

In 1Relation, the 'Submit' and 'Cancel' components play pivotal roles in guiding the user journey through forms. They are not just simple buttons but integral elements that drive the workflow and user interaction within the form. This document aims to provide comprehensive insights into these components, their functionalities, and how they can be configured to handle diverse scenarios.

## 'Submit' and 'Cancel' Use Cases

The 'Submit' and 'Cancel' components in 1Relation forms play a crucial role in user interaction and form navigation. They enable users to not only navigate through form pages but also to execute important actions based on their inputs. Here are some key use cases for these components:

>- **Navigating through form pages**
>
> 'Submit' and 'Cancel' buttons can be used to navigate between different pages of a form, allowing for a segmented and organized data entry process. This is particularly useful in multi-page forms where information is collected in a step-by-step manner. For example Using the 'Submit' button to proceed to the next page after completing the current page's fields, or using the 'Cancel' button to return to a previous page.
>
>- **Exiting/Canceling Forms**
>
> These components provide users with the option to exit or cancel the form at any stage of the form completion process. This is important for user experience, giving them the flexibility to stop filling out the form if needed.
>
>- **Creating, Editing, and Deleting Items**
>
> One of the main functionalities of 'Submit' and 'Cancel' in forms is to create, edit, or delete items based on user interaction. This links the user's input with the system's data processing capabilities, enabling dynamic data management. For example submitting a form to create a new customer record, editing an existing project's details, or deleting an item based on specific conditions met in the form. For detailed actions and configurations, refer to the [actions documentation](/docs/actions-documentation).

## 'Submit' and 'Cancel' Components in Forms

`Submit` and `Cancel` are crucial components of forms in 1Relation, offering navigation and action execution capabilities. They enable moving back and forth between form pages, completing or exiting the form, and triggering specific actions.

### 'Submit and Cancel' Components
- **text (string)**:
  - **Required**: Yes
  - **Description**: Sets the display text of the 'Submit' button, guiding the user on the action to be taken.
  - **Example**: `"text": "Complete Registration"`

- **triggers (array)**:
  - **Required**: No
  - **Description**: Defines conditions and actions executed when the 'Submit' button is clicked, allowing dynamic form behavior based on user input.
  - **Available options**: `insert`, `update`, `relate`, `unlink`, `page`
  - **Example**:
    ```json
    "triggers": [
      {
        "if": [["field_id", "=", "value"]],
        "then": {"page": 2}
      }
      // Additional trigger conditions and actions as needed
    ],
       "cancel": {
        "text": "Exit",
        "uri": "/item/[itemid]"
      }
    ```

- **uri (string)**:
  - **Required**: No
  - **Description**: Optionally sets a URL for redirecting the user upon clicking 'Cancel', useful for specific navigation paths.
  - **Example**: `"uri": "/homepage"`

These components enhance the functionality and user experience of the 'Submit' and 'Cancel' buttons in 1Relation forms. By configuring these components, form designers can guide users through a form with clear pathways and options, aligning with the form’s intended workflow and user journey.

---

### JSON example for Submit & Cancel

```json
{
  "items": {
    // ...
  },
  "pages": {
    "1": {
      "name": "New contact person",
      "fields": [
        // ...
      ],
      "submit": {
        "text": "Submit",
        "triggers": [
          // ...
        ],
      },
      "cancel": {
        "text": "Exit",
        "uri": "/item/[itemid]"
      }
    }
  }
}
```