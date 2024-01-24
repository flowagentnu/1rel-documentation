# Triggers

Triggers in the 'Submit' and 'Cancel' components of 1Relation forms are integral in managing user interactions and navigating through the form. These triggers allow forms to respond dynamically to user inputs, enhancing the overall user experience. This document focuses on the functionality of triggers and their application in form design.

## Use Cases

Triggers within 'Submit' and 'Cancel' components serve various purposes in form interactions, including:

- **Form Navigation**: Directing users to different form pages based on their responses.
- **Conditional Actions**: Executing specific actions, like creating or modifying records, based on user inputs.
- **User Feedback and Redirection**: Providing immediate feedback or redirecting users after form submission or cancellation.

## Trigger Components

Triggers use the `Actions` functionality to perform CRUD actions and change pages

### Submit Trigger Example
For a 'Submit' button, the trigger might look like this:

```json
{
  "submit": {
    "text": "Submit",
    "triggers": [
      {
        "if": [["field_id", "=", "specific_value"]],
        "then": {
          "crud": {
            "insert": {
              "Entity": {
                "field1": "value1",
                "field2": "value2"
              }
            }
          }
        }
      },
    ]
  },
   "cancel": {
   "text": "Back",
   "triggers": [
       {
       "then": {
           "page": "2"
       }
     }
   ]
  }
}
```

---

## Example: Create a new item

In this example a customer is created using a form. The user adds customer information to the fields in the form fields.

```json
{
  "pages": {
    "1": {
      "name": "Customer Information",
      "fields": [
        // Field definitions for name, address, zipcode, city, revenue
      ],
      "submit": {
        "text": "Create",
        "triggers": [
          {
            "then": {
              "do": {
                "insert": {
                  "newCustomer": {
                    "moduleid": 58,
                    "moduleitemtype_id": 100,
                    "customfield": {
                      "cf314": "post[name]",
                      "cf315": "post[address]",
                      "cf316": "post[zipcode]",
                      "cf317": "post[city]",
                      "cf322": "post[revenue]"
                    }
                  }
                }
              },
              "endflow": true
            }
          }
        ]
      },
      "cancel": {
        "text": "Cancel"
      }
    }
  },
  "endflow": {
    "redirect": "itemkey.newCustomer"
  }
}
```
## Example: Edit an existing item
This example demonstrates editing an existing customer's information in 1Relation. The form is pre-populated with the customer's current data, which can be updated as needed. The key part of this configuration is the trigger action, which is executed upon form submission to update the customer details.

```json
Copy code
{
  "items": {
    "existingCustomer": [
      [
        "id",
        "=",
        "[itemid]"
      ]
    ]
  },
  "pages": {
    "1": {
      "name": "Edit Customer Information",
      "fields": [
        // Field definitions for name, address, zipcode, city, revenue
      ],
      "submit": {
        "text": "Update",
        "triggers": [
          {
            "then": {
              "do": {
                "update": {
                  "existingCustomer": {
                    "customfield": {
                      "cf314": "post[name]",
                      "cf315": "post[address]",
                      "cf316": "post[zipcode]",
                      "cf317": "post[city]",
                      "cf322": "post[revenue]"
                    }
                  }
                }
              },
              "endflow": true
            }
          }
        ]
      },
      "cancel": {
        "text": "Cancel"
      }
    }
  },
  "endflow": {
    "redirect": "itemkey.existingCustomer"
  }
}
```