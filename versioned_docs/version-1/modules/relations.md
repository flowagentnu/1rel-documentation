# Relations

Relations let you connect items between modules, creating parent/child relationships and enabling linked workflows.

## When to Use
Use relations when you want to link items (e.g., customers to tasks) or create dependencies between modules.

## How It Works
- Define relations in module settings ("Relations" tab).
- Choose parent/child direction and specify which item types are valid.
- Use type selectors to create distinct or intra-module relations.

## Usage Example
Suppose you want to relate tasks to customers:

```json
{
  "relation": {
    "name": "Customer-Task",
    "module": "Tasks",
    "relationType": "1:n",
    "parent": "Customer",
    "child": "Task"
  }
}
```

## Options/Parameters
- **Name**: Name for the relation
- **Module**: Module to relate
- **Relation**: Parent or Child
- **Valid for types**: Restrict to certain item types
- **Relation type**: 1:1 or 1:n