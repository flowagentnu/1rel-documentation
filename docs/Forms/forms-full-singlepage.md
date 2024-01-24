# Introduction to Forms (TEST)

In 1Relation, forms serve as a dynamic interface between the system and its users, offering a structured and interactive way to capture information. They are integral to various functionalities within 1Relation, designed to present questions and fields that require user input. Whether it's for creating, editing, or managing data, forms play a crucial role in ensuring efficient and accurate data collection.

## Use Cases for Forms

Forms in 1Relation are versatile and cater to a wide range of applications, including but not limited to:

- **Creating Items**: Streamlining the process of adding new entries, such as registering a new customer.
- **Editing Items**: Offering a user-friendly interface to modify existing data, like updating customer details.
- **Relating Items**: Facilitating the creation of new relationships, for instance, linking a contact person to a customer.
- **Unlinking Items**: Simplifying the process of removing existing relationships, such as detaching a contact person from a customer.
- **Deleting Items**: Enabling the removal of data from the system, like deleting an outdated customer record.

## Configuration and Activation of Forms

### Creating and Managing Forms

To create, edit, or archive forms in 1Relation:

1. Navigate to the desired module and access the module settings.
2. Proceed to the forms section.
3. Assign a name to the form and configure group permissions.
4. Utilize JSON code to customize the form's layout, fields, and functionalities.

### Activation of Forms

Forms are typically activated in two ways:

- **Through Apps**: Certain applications within 1Relation are designed to trigger forms, initiating specific workflows or data entry processes.
- **Via Actionable Buttons**: Forms can be linked to actionable buttons, providing users with immediate access to the forms through a simple click, streamlining the process of data entry or modification.
---

# Forms Documentation

## Introduction
This documentation provides a detailed guide on the JSON structure used for configuring forms in 1Relation. It is designed to assist system designers in understanding and applying the various components and configurations necessary for form creation and management. The documentation is structured hierarchically, starting with top-level components and delving into more specific elements and their properties. Each component is explained with its properties, types, and required values, followed by JSON examples for practical understanding.

## Top-Level Components

The JSON structure for forms is primarily divided into three top-level components: `items`, `pages`, and `endflow`. Each of these components plays a vital role in form configuration.

| Component | Description |
|-----------|-------------|
| `items`   | Defines the items that are associated with the form. This could include any data items that the form will interact with or manipulate. |
| `pages`   | Contains the pages of the form. Each page can have its own set of fields, as well as submit and cancel actions. |
| `endflow` | Specifies the behavior at the end of the form process, such as redirection or other post-submission actions. |

### JSON Example

The following is a simple JSON example illustrating how these top-level components might be structured in a form configuration:

```json
{
  "items": {
    // Item definitions go here
  },
  "pages": {
    // Page definitions, including fields and actions, go here
  },
  "endflow": {
    // Endflow actions (like redirection) go here
  }
}
```

## Items Component

The `items` component in the form's JSON structure serves two primary purposes:
1. **Populating Form Fields**: It allows for the presentation of fields in the form with predefined information extracted from the custom fields related to these items.
2. **Performing Actions through Triggers**: It enables the manipulation of these items through CRUD (Create, Read, Update, Delete) functions as part of form processing.

### Structure of `items`

The `items` object is a collection of key-value pairs where each key represents an item type, and the value is an array defining how to fetch or interact with these items.

| Property | Type   | Required | Options                          | Description |
|----------|--------|----------|----------------------------------|-------------|
| Key      | string | Yes      | N/A                              | The name of the item, serving as an identifier in the form. |
| Value    | array  | Yes      | `itemid`, `parentitemid`, `relationxx`, other as desicribed in the `JSON Query document`| An array of conditions or parameters used to specify how to fetch or manipulate the item. |

### JSON Example

Below is an example illustrating the `items` component with different item types:

```json
{
  "items": {
    "Project": [
      ["id", "=", "[itemid]"]
    ],
    "customer": [
      ["id", "=", "[parentitemid]"]
    ],
    "task": [
      ["id", "=", "[relation79]"]
    ]
  }
}

```

In this example:

The Project item uses the current item's ID ([itemid]).
The customer item refers to the ID of a parent item ([parentitemid]).
The task item is associated with a related item, identified through a relation ([relation79]).
Each array under an item key (like Project, customer, task) specifies how to retrieve or interact with that item, primarily for the purpose of populating form fields or performing actions through form triggers.

## Pages Component

The `pages` component is a crucial part of the form's JSON structure, as it defines the individual pages of the form, each containing its own set of fields, actions, and navigation options.

### Structure of `pages`

Each page within the `pages` object is identified by a key (usually a number or identifier) and contains various properties to define the page's content and behavior.

#### Page Properties

| Property | Type   | Required | Options | Description |
|----------|--------|----------|---------|-------------|
| `name`   | string | Yes      | N/A     | The title or name of the page. |
| `fields` | array  | Yes      | N/A     | An array of field objects defining the input fields on the page. |
| `submit` | object | No       | N/A     | Defines the submit action of the page, including text and triggers. |
| `cancel` | object | No       | N/A     | Defines the cancel action of the page, including text and optional triggers. |

### JSON Example

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

## Fields Component

Within each page of the form, the `fields` component is essential, as it defines the individual input fields where users can enter or select data. Each field has specific properties and configurations.

### Structure of `fields`

Each field within a page is defined by an object with specific properties to control its behavior and appearance.

#### Field Properties

| Property       | Type    | Required | Options                    | Description |
|----------------|---------|----------|----------------------------|-------------|
| `id`           | string  | Yes      | N/A                        | Unique identifier for the field. |
| `name`         | string  | Yes      | N/A                        | Display name of the field. |
| `required`     | boolean | No       | true, false                | Specifies if the field is mandatory for form submission. |
| `cftype_id`    | integer | Yes      | N/A                        | Custom field type identifier. |
| `defaultValue` | various | No       | "[customer.cf123]", "option_2", "string" | Default value of the field. Can reference a custom field, an option, or be a fixed string. |
| `options`      | array   | No       | Depends on field type      | Options for fields like dropdowns, radio buttons, etc. |

### JSON Example

Below is an example illustrating the `fields` component within a page with various types of keys:

```json
{
  "pages": {
    "1": {
      "name": "Page Name",
      "fields": [
        {
          "key": {
            "id": "simpleField",
            "name": "Simple Field",
            "required": true,
            "cftype_id": 123,
            "defaultValue": "Simple is good",
          }
        },
        {
          "key": {
            "id": "dropdownField",
            "name": "Dropdown Field",
            "required": false,
            "cftype_id": 124,
            "defaultValue": "Option 1"
          },
          "options": [
            {"id": "option1", "value": "High"},
            {"id": "option2", "value": "low"}
          ]
        },
        {
          "key": {
            "id": "fieldWithCustomFieldDefault",
            "name": "Field with Custom Field Default",
            "required": false,
            "cftype_id": 125,
            "defaultValue": "[customer.cf123]"
          }
        },      
      ],
      "submit": {
        "text": "Submit Button Text",
        // Submit action configuration...
      },
      "cancel": {
        "text": "Cancel Button Text",
        // Cancel action configuration...
      }
    }
    // Additional pages...
  }
}
```
In this example, we illustrate different types of fields within a page. These include a simple key with no options, a key with options and a default static text value, a key with options and a default value fetched from a custom field of an item, and a key with options where the default value is set to one of the options.

## Options Component

The `options` component is used within certain types of fields (like dropdowns, radio buttons, and checkboxes) to provide a list of selectable choices to the user.

### Structure of `options`

`options` is an array where each element represents a selectable choice within the field. Each option has specific properties that define its value and behavior.

#### Options Properties

| Property | Type    | Required | Description |
|----------|---------|----------|-------------|
| `id`     | string  | Yes      | A unique identifier for the option, used for referencing and selection logic. |
| `value`  | string  | Yes      | The display text of the option that the user will see and select. |

### JSON Example

Below is an example illustrating the `options` component within a field:

```json
{
  "pages": {
    "1": {
      "name": "Page Name",
      "fields": [
        {
          "key": {
            "id": "dropdownField",
            "name": "Dropdown Field",
            "required": false,
            "cftype_id": 124,
            "defaultValue": "option_2"
          },
          "options": [
            {"id": "option_1", "value": "high"},
            {"id": "option_2", "value": "low"},
            // Additional options...
          ]
        }
        // Additional fields...
      ],
      "submit": {
        "text": "Submit Button Text",
        // Submit action configuration...
      },
      "cancel": {
        "text": "Cancel Button Text",
        // Cancel action configuration...
      }
    }
    // Additional pages...
  }
}
```

In this example, the field dropdownField has multiple options, each defined with an id and value. The id serves as a unique identifier, while value is what the user sees in the dropdown menu. The defaultValue for the field can reference one of these options, pre-selecting it for the user.

## HTML Component

The `html` component within a field is used to integrate custom HTML content, enabling enhanced presentation and layout customization within the form. This component allows for adding rich text, links, or other HTML elements to a field for a richer user experience.

### Structure of `html`

The `html` object within a field allows the inclusion of custom HTML elements with specific tags and content.

#### HTML Properties

| Property  | Type   | Required | Options                                      | Description |
|-----------|--------|----------|----------------------------------------------|-------------|
| `tag`     | string | Yes      | h1, h2, h3, h4, h5, h6, b, p, i, u, strong   | Defines the HTML tag to be used for the field content. This enables custom styling and layout within the form. |
| `content` | string | Yes      | N/A                                          | Specifies the actual HTML content to be displayed within the field. This can include formatted text, images, links, or other HTML elements. |

### JSON Example

Below is an example illustrating the `html` component within fields, showcasing how custom HTML content can be embedded:

```json
{
  "fields": [
    {
      "html": {
        "tag": "h1",
        "content": "Customer Details"
      }
    },
    {
      "html": {
        "tag": "p",
        "content": "Remember to close the task"
      }
    }
    // Additional fields with html configurations as needed
  ]
}
```

In this example, two fields demonstrate the use of the html component: one uses an `h1` tag for a heading, and the other uses a `p` tag for a paragraph with custom content. This flexibility allows for diverse and rich content presentation within the form.

## Submit and Cancel Components

The `submit` and `cancel` components within a form page define the actions to be executed when the form is either submitted or cancelled. They also include configurations for button text and any triggers associated with these actions.

### Structure of `submit` and `cancel`

These components consist of properties that define their behavior and appearance on the form.

#### Submit and Cancel Properties

| Property   | Type   | Required | Description |
|------------|--------|----------|-------------|
| `text`     | string | Yes      | The text displayed on the submit or cancel button. |
| `triggers` | array  | No       | An array of action triggers that are executed when the button is clicked. |

### JSON Example

Below is an example illustrating the `submit` and `cancel` components within a form page:

```json
{
  "pages": {
    "1": {
      "name": "Page Name",
      // Fields configuration...
      "submit": {
        "text": "Submit",
        "triggers": [
          {
            // Trigger configurations...
          }
          // Additional triggers...
        ]
      },
      "cancel": {
        "text": "Cancel",
        "triggers": [
          {
            // Optional trigger configurations for cancel action...
          }
        ]
      }
    }
    // Additional pages...
  }
}
```

In this example, the submit component has a text label "Submit" and may include triggers that define actions to be executed upon form submission, such as moving to another page, updating data, or triggering custom workflows. Similarly, the cancel component includes a "Cancel" button, which can optionally have triggers for actions to be performed when the user cancels the form.

## Triggers Component

Triggers in the `submit` and `cancel` components of 1Relation forms are essential for dynamic user interaction. They enable forms to respond to user inputs with various actions, such as navigation and data manipulation.

### Structure of `triggers`

Triggers consist of several components, each with specific roles in managing form actions and navigation.

#### Trigger Components

| Property     | Type    | Required | Options                | Description |
|--------------|---------|----------|------------------------|-------------|
| `Actions`    | object  | No       | insert, update, relate, delete, unlink | Refers to CRUD actions to be executed. |
| `Page`       | integer | No       | Page numbers           | Directs users to a specific page within the form. |
| `Endflow`    | boolean | No       | true, false            | Determines the end of form interaction. |
| `BreakAfter` | boolean | No       | true, false            | Specifies whether to stop executing further triggers. |
| `Uri`        | string  | No       | URL paths              | Redirects the user to a specific page if no other triggers are defined for the action |


### JSON Examples

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

# Endflow and Redirection

The `endflow` component specifies the behavior when the form flow concludes, such as redirection to a specific page or item. It can be set globally for the entire form or specifically within a trigger.

## Default Behavior

When no specific `endflow` is defined, the form will automatically choose an action based on available information in the following order:

1. **Go to Defined Item**: Redirects to the first predefined item in the Items Array.
2. **Go to Created Item**: Redirects to a newly created item from the form's triggers.
3. **Go to Start Item**: Redirects to the starting item (the item on which the form was initiated).
4. **Go to Dashboard**: Redirects to the dashboard as a fallback option.

## Global Endflow

Global endflow is defined at the end of the document and applies to the entire form.

### Properties

| Property       | Default Value | Description |
|----------------|---------------|-------------|
| `redirect`     | N/A           | Specifies the redirection target (see commands table). |
| `redirect_uri` | N/A           | Used with `uri` command to define a specific URI for redirection. |

### Example - Global Endflow

```json
{
  "endflow": {
    "redirect": "item"
  }
}
```
In this global endflow example, the form will redirect the user to the starting item upon completion.

## Trigger-Specific Endflow
Endflow can also be set within a trigger, overriding the global endflow. This is useful for specific outcomes necessary for a trigger.

### Properties
|Property	|Default Value	|Description
|----------------|---------------|-------------|
|`endflow`	        |false	|Ends the form when the trigger is activated and calls endflow_redirect if defined.
|`endflow_redirect`	|N/A	|Specifies the redirection target for the trigger-specific endflow.
|`closeModal`	        |false	|Closes the modal upon form completion. Other endflow commands will be ignored.

#### Example - Trigger Endflow and Redirection

```json
{
  "submit": {
    "triggers": [
      {
        "then": {
          "endflow": true,
          "endflow_redirect": "itemkey.item1"
        }
      }
    ]
  },
  "endflow": {
    "redirect": "uri",
    "redirect_uri": "/item/12345"
  }
}
```
In this trigger-specific endflow example, the form ends and redirects to "item1" upon trigger activation.

## Endflow Commands

The following commands are available for both global and trigger-specific endflows:

|Command	    |Description
|---------------|-------------|
|`back`	        |Returns to the previous page.
|`dashboard`	    |Redirects to the dashboard.
|`item`	        |Redirects to the starting item. Requires the form to have been started on an item.
|`uri`	        |Redirects to a given URI. Only possible for global endflow and requires redirect_uri.
|`itemkey.[item]`	|Redirects to a specific item defined in the flow. Requires the item key to exist.

### Endflow Command Examples

#### Endflow Command: `back`
```json
{
  "endflow": {
    "redirect": "back"
  }
},
{
  "endflow": {
    "redirect": "dashboard"
  }
},
{
  "items": {
    "existingItem": [
      ["id", "=", "[itemid]"]
    ]
  },
  "endflow": {
    "redirect": "item"
  }
},
{
  "endflow": {
    "redirect": "uri",
    "redirect_uri": "/specific-path"
  }
},
{
  "items": {
    "newItem": [
      // Item details...
    ]
  },
  "endflow": {
    "redirect": "itemkey.newItem"
  }
}
```

Understanding and utilizing the endflow component allows for precise control over the form's behavior upon completion, enhancing user experience and ensuring seamless navigation within the 1Relation system.

