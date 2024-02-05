# Triggers (Actions) in Forms

## Introduction

In 1Relation forms, 'triggers' are part of a broader concept referred to as 'actions.' These actions consist of rules and tasks executed when specific conditions are met, enhancing the dynamic and interactive capabilities of forms. This document provides an overview of how actions (as triggers) are utilized in forms, outlining their purpose, basic structure, and interaction with form components.

:::tip
For a comprehensive guide on the syntax, types, and advanced configurations of actions, including CRUD operations, form interactions, and more, please refer to the detailed [Actions Documentation](/docs/JSON/json-actions).
:::

## Purpose of Actions in Forms

Actions in forms serve to:

1. **Automate Data Manipulation**: Perform CRUD (Create, Read, Update, Delete) operations based on user input or predefined conditions.
2. **Control Form Flow**: Dynamically open forms, navigate between pages, or execute other actions based on user interactions or data states within the form.
3. **Integrate with System Workflows**: Initiate system actions or workflows, like sending notifications, creating tasks, or updating records, upon specific triggers within the form.

## Basic Structure of an Action

While actions can be complex and highly customizable, their basic structure within forms typically involves:

| Property | Type  | Required | Description |
|----------|-------|----------|-------------|
| `if`     | array | No       | A set of rules that define when an action is triggered. Conditions can involve field values, user groups, or other form-related data. |
| `then`   | object| Yes      | The tasks to be executed when conditions are met. This can include CRUD operations and more. |
| `breakAfter` | boolean | No | A flag to control the flow of subsequent actions. If set to `false`, the flow continues to the next action, if the current one is executed sucessfully. |

## Actions in Context: Submit and Cancel

Within forms, actions are defined within `submit` and `cancel` components, defining dynamic behaviors that occur when the user clicks these buttons:

### Submit Actions

- **Purpose**: Define dynamic operations upon form submission, such as data updates, record creation, or opening related forms.
- **Structure**: May include complex actions with multiple conditions and tasks.

### Cancel Actions

- **Purpose**: Optionally define dynamic operations upon form cancellation, like data reverting, logging activities, or redirecting to other forms or pages.
- **Structure**: Similar to submit actions, but typically focused on aborting the form process or cleaning up.

:::info
The `submit` and `cancel` components are completely similar in structure and properties.
:::

## Form specific actions
Form has two unique actions that can be used only in forms:
| Property | Type  | Required | Description |
|----------|-------|----------|-------------|
| `endflow`| boolean | No | If set to `true`, the form flow will end |
| `endflow_redirect` | string | No | If endflow is true and redirect is set, the form flow will end and the user will be redirected to the specified URI |
| `page`   | number | No | The page number to navigate to |

## Example of an Action in a Form

#### Trigger with Page Change
```json
{
  "submit": {
    "triggers": [
      {
        "then": {
          "page": 2
        }
      }
    ]
  }
}
```
This example demonstrates a trigger that navigates the user to the second page of the form when the submit button is clicked. It's a straightforward example of form navigation using triggers.

#### Trigger with Insert Action, "Relate" and No "If"
```json
{
  "submit": {
    "triggers": [
      {
        "then": {
          "crud": {
            "insert": {
              // Insert details...
            },
            "relate": [
              // Relate details...
            ]
          }
        }
      }
    ]
  }
}
```
#### Trigger with Two Actions and "If"
This example shows a trigger performing two actions: `insert` and `relate`. It creates a new record and establishes a relationship with another item, all without a conditional statement `if`.

```json
{
  "submit": {
    "triggers": [
      {
        "if": [["field_id", "=", "specific_value"]],
        "then": {
          "crud": {
            "insert": {
              // Insert details...
            },
            "update": {
              // Update details...
            }
          }
        }
      }
    ]
  }
}
```
This trigger includes a conditional check `if` and executes two actions (`insert` and `update`) based on the condition being met. It illustrates how to conditionally perform multiple actions based on user input.

#### Example with `uri`
```json
{
  "pages": {
    "1": {
      "name": "New Contact Person",
      "submit": {
        "text": "Submit",
        "triggers": [
          // Trigger actions...
        ]
      },
      "cancel": {
        "text": "Go Back",
        "uri": "/item/[itemid]"
      }
    }
    // Additional pages...
  }
}
```
This trigger is set on the cancel button. When the user clicks "Go Back," they are redirected to a specific URI, showing how the `uri` property can be used for redirection.

#### Trigger with Multiple Actions and breakAfter: false
```json
{
  "submit": {
    "triggers": [
      {
        "then": {
          "crud": {
            "insert": {
              // Insert details...
            },
            "update": {
              // Update details...
            }
          }
        },
        "breakAfter": false
      },
      {
        "then": {
          "crud": {
            "relate": {
              // Relate details...
            }
          }
        },
        "breakAfter": false
      },
      {
        "then": {
          "endflow": true
        }
      }
    ]
  }
}
```
This complex trigger involves multiple actions: `insert`, `update`, and `relate`. It uses `breakAfter: false` to continue executing subsequent actions without stopping the flow, ending with `endflow: true`. In this example all triggers are run, where normally (without `breakAfter: false`), the flow would stop after the first successful trigger.

#### Trigger with "dynamicdata" and "createInModule"
```json
{
  // ...
  "submit": {
    "triggers": [
      {
        "then": {
          "crud": {
            "dynamicdata": {
              "module_id": 68,
              "where": [
                ["cf548.string", "NOT LIKE", "#%"]
              ],
              "createInModule": {
                "moduleitemtype_id": 128,
                "module_id": 70,
                "customfield": {
                  "cf570": "0",
                  "cf615": "dynamicdata[cf548]",
                  "cf616": "dynamicdata[cf549]"
                },
                "relate": [
                  {
                    "child": "dynamicitem",
                    "parent": "opgave"
                  }
                ]
              }
            }
          }
        }
      }
      // Additional triggers...
    ]
  }
  // ...
}
```
This example illustrates the use of the dynamicdata feature to fetch data based on specific criteria. The retrieved data is then used in a `createInModule` action to create a new item in a specified module.
Another relation is also assigned to the items created with `createInModule` functionality. When refering to these items, the `dynamicitem` is used. This showcases advanced data handling capabilities within triggers.

Each of these examples demonstrates different configurations of triggers, showcasing how they can be used to manage form navigation, perform actions, and control the flow based on user interactions.