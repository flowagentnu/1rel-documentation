# Field HTML

A guide to the `html` property for form fields, based on the schema.

## When to Use
Use the `html` property to add custom display elements (such as headings, sections, or formatted text) to a form page, without collecting user input.

## How It Works
- The `html` object is used within a field entry in the `fields` array.
- Only one of `key`, `html`, or `options` should be used per field object.
- The `html` object defines the HTML tag, label, and optional translations.

## Options & Properties (per schema)
- `tag` (string, required): The HTML tag to use (e.g., `h1`, `h2`, `h3`, `p`).
- `label` (string, required): The text to display.
- `labels` (object, optional): Translated versions of the label. Keys are language codes.

## Usage Example
```json
{
  "html": {
    "tag": "h3",
    "label": "Project Section",
    "labels": {
      "da": "Projektafsnit",
      "pl": "Projekt sekcja"
    }
  }
}
```