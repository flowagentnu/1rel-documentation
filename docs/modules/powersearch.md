# Powersearch

Powersearch lets you quickly find items across all modules using advanced filters and queries.

## When to Use
Use Powersearch when you need to locate specific items, run complex searches, or filter data across multiple modules.

## How It Works
- Powersearch lists are built and configured in module settings.
- You can use Powersearch as a standalone feature on the module page or embed it in a widget table.
- Enter keywords, select filters, or build advanced queries.
- Results update in real time as you refine your search.
- Configure columns with options like clickable, editable, sort, backgroundColor, and textColor. See [JSON Columns](/docs/JSON/json-columns.md) for all supported options.
- Use filters to predefine search criteria.
- Use relations to join related modules.

## Example Configuration
A full Powersearch configuration might look like this:

```json
{
  "filters": [
    ["cf649.string", "=", "option_1045"],
    ["module77Mit.name", "=", "Entreprise"]
  ],
  "columns": [
    { "keyName": "kunderfield_navn", "clickable": true },
    { "keyName": "projektfield_navn", "clickable": true, "editable": false },
    { "keyName": "projektfield_ansvarlig", "clickable": false, "editable": true },
    { "keyName": "projektfield_skilteplan-1", "clickable": false, "editable": true },
    { "keyName": "projektfield_tilladelser---status", "clickable": false, "editable": true },
    { "keyName": "projektfield_start", "clickable": false, "editable": true, "sort": { "order": "ASC", "priority": 1 } },
    { "keyName": "projektfield_slut", "clickable": false, "editable": true },
    { "keyName": "projektfield_projektstatus", "clickable": false, "editable": false }
  ],
  "relations": {
    "module75": {
      "parent": 75,
      "child": 77,
      "relationid": 79
    }
  }
}
```
*This configuration sets up filters, advanced column options, and joins related modules for a powerful search experience. See [JSON Columns](/docs/JSON/json-columns.md) for all available column options.*

## Options & Parameters
- **filters** (array, optional): Predefined search criteria. Each filter is `[field, operator, value]`.
- **columns** (array, required): Columns to display in the results. Each column can have:
  - **keyName** (string, required): Field to display.
  - **clickable** (boolean, optional): If true, the column is clickable (e.g., opens details).
  - **editable** (boolean, optional): If true, the column can be edited inline.
  - **sort** (object, optional): Sorting options for the column.
    - **order** (string): `ASC` or `DESC`.
    - **priority** (integer): Sort priority if multiple columns are sorted.
- **relations** (object, optional): Join related modules. Each relation defines:
  - **parent** (integer): Parent module ID.
  - **child** (integer): Child module ID.
  - **relationid** (integer): Relation ID.

## Usage Example
Suppose you want to find all tasks assigned to a specific user and due this week:

1. Open Powersearch from the module page or use a widget table configured for Powersearch.
2. Set filters: Module = Tasks, Assigned To = [User], Due Date = This Week.
3. View and export results as needed.

## Tips
- Configure Powersearch lists in module settings for consistent use across widgets and module pages.
- Use Powersearch widgets to provide users with quick access to filtered data views.
- Use advanced column options to make your search results more interactive and user-friendly.

---