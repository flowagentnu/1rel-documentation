# Powersearch

Powersearch lets you quickly find items across all modules using advanced filters and queries.

## When to Use
Use Powersearch when you need to locate specific items, run complex searches, or filter data across multiple modules.

## How It Works
- Powersearch lists are built and configured in module settings.
- You can use Powersearch as a standalone feature on the module page or embed it in a widget table.
- Enter keywords, select filters, or build advanced queries.
- Results update in real time as you refine your search.

## Default Powersearch Example
A default Powersearch configuration might look like this:

```json
{
  "columns": [
    { "keyName": "kunderfield_navn" },
    { "keyName": "kunderfield_adresse" },
    { "keyName": "kunderfield_postnummer" },
    { "keyName": "kunderfield_cvr" },
    { "keyName": "kunderfield_oprettet-d" },
    { "keyName": "kunderfield_mail" },
    { "keyName": "kunderfield_telefonnummer" },
    { "keyName": "kunderfield_leverand-rtestfelt" },
    { "keyName": "kunderfield_status" }
  ]
}
```
This configuration defines which columns are shown in the Powersearch results for a customer module.

## Usage Example
Suppose you want to find all tasks assigned to a specific user and due this week:

1. Open Powersearch from the module page or use a widget table configured for Powersearch.
2. Set filters: Module = Tasks, Assigned To = [User], Due Date = This Week.
3. View and export results as needed.

## Tips
- Configure Powersearch lists in module settings for consistent use across widgets and module pages.
- Use Powersearch widgets to provide users with quick access to filtered data views.