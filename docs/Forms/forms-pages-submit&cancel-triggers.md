# Triggers

Triggers in the `submit` and `cancel` components of 1Relation forms are essential for dynamic user interaction. They enable forms to respond to user inputs with various actions, such as navigation and data manipulation.

## Structure of `triggers`

Triggers consist of several components, each with specific roles in managing form actions and navigation.

### Trigger Components

| Property     | Type    | Required | Options                | Description |
|--------------|---------|----------|------------------------|-------------|
| `Actions`    | object  | No       | insert, update, relate, delete, unlink | Refers to CRUD actions to be executed. |
| `Page`       | integer | No       | Page numbers           | Directs users to a specific page within the form. |
| `Endflow`    | boolean | No       | true, false            | Determines the end of form interaction. |
| `BreakAfter` | boolean | No       | true, false            | Specifies whether to stop executing further triggers. |
| `Uri`        | string  | No       | URL paths              | Redirects the user to a specific page if no other triggers are defined for the action |

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
Each of these examples demonstrates different configurations of triggers, showcasing how they can be used to manage form navigation, perform actions, and control the flow based on user interactions.