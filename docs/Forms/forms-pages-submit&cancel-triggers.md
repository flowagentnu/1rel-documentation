# Triggers

Triggers in the `submit` and `cancel` components of 1Relation forms are essential for dynamic user interaction. They enable forms to respond to user inputs with various actions, such as navigation and data manipulation.

## Structure of `triggers`

Triggers consist of several components, each with specific roles in managing form actions and navigation.

### Trigger Components

| Property        | Type    | Required | Options                                   | Description |
|-----------------|---------|----------|-------------------------------------------|-------------|
| `Actions`       | object  | No       | insert, update, relate, delete, unlink    | Refers to CRUD actions to be executed. |
| `Page`          | integer | No       | Page numbers                              | Directs users to a specific page within the form. |
| `Endflow`       | boolean | No       | true, false                               | Determines the end of form interaction. |
| `BreakAfter`    | boolean | No       | true, false                               | Specifies whether to stop executing further triggers. |
| `Uri`           | string  | No       | URL paths                                 | Redirects the user to a specific page if no other triggers are defined for the action. |
| `dynamicdata`   | object  | No       |                                           | Retrieves data dynamically based on specified conditions and uses it in other actions. |
| `createInModule`| object | No        |                                           | Creates new items in a specified module, utilizing dynamically retrieved data or form inputs. |


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
          "insert": {
            // Insert details...
          },
          "relate": [
            // Relate details...
          ]
        }
      }
    ]
  }
}
```
#### Trigger with Two Actions and "If"
This example shows a trigger performing two actions: insert and relate. It creates a new record and establishes a relationship with another item, all without a conditional statement (if).

```json
{
  "submit": {
    "triggers": [
      {
        "if": [["field_id", "=", "specific_value"]],
        "then": {
          "insert": {
            // Insert details...
          },
          "update": {
            // Update details...
          }
        }
      }
    ]
  }
}
```
This trigger includes a conditional check (if) and executes two actions (insert and update) based on the condition being met. It illustrates how to conditionally perform multiple actions based on user input.

#### Example with `Uri`
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
This trigger is set on the cancel button. When the user clicks "Go Back," they are redirected to a specific URI, showing how the uri property can be used for redirection.

#### Trigger with Multiple Actions and breakAfter: false
```json
{
  "submit": {
    "triggers": [
      {
        "then": {
          "insert": {
            // Insert details...
          },
          "update": {
            // Update details...
          },
          "breakAfter": false
        }
      },
      {
        "then": {
          "relate": {
            // Relate details...
          }
        }
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
This complex trigger involves multiple actions: insert, update, and relate. It uses breakAfter: false to continue executing subsequent actions without stopping the flow, ending with endflow: true.

#### Trigger with "dynamicdata" and "createInModule"
```json
{
  // ...
  "submit": {
    "triggers": [
      {
        "then": {
          "do": {
            // Other actions...
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
                }
              }
            }
          }
        }
      }
      // Additional triggers...
    ],
    "endflow": true
  }
  // ...
}
```
This example illustrates the use of the dynamicdata feature to fetch data based on specific criteria. The retrieved data is then used in a createInModule action to create a new item in a specified module. This showcases advanced data handling capabilities within triggers.

Each of these examples demonstrates different configurations of triggers, showcasing how they can be used to manage form navigation, perform actions, and control the flow based on user interactions.