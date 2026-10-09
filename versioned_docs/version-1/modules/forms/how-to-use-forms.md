# How to Use Forms

A brief overview of how forms are structured and used in FlowAgent. For detailed configuration of each section, see the components subpages.

## When to Use
Use forms to collect, edit, or process data, trigger workflows, or manage item lifecycles in your application.

## How It Works
- Forms are defined as JSON objects following a specific schema.
- The main sections of a form are:
  - `label` and `labels`: The form's name and translations.
  - `items`: (optional) Pre-fetched or related data for use in the form.
  - `visibility`: (optional) Controls when the form is shown.
  - `pages`: The core of the form, containing one or more pages. Each page includes:
    - `label` and `labels`: Page name and translations.
    - `fields`: Array of field definitions (inputs, HTML, or options).
    - `submit` and `cancel`: Button configurations for submitting or cancelling the page, including triggers and redirection.
  - `endflow`: (optional) Controls what happens when the form is completed (e.g., redirect, close modal).

## Usage Example
```json
{
  "label": "Project Form",
  "pages": {
    "1": {
      "label": "Info",
      "fields": [
        { "key": { "id": "project_name", "label": "Project Name", "fieldtype": "text" } }
      ],
      "submit": { "label": "Save" },
      "cancel": { "label": "Cancel" }
    }
  }
}
```

