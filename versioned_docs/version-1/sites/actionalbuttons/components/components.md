# Main Components of Actional Buttons

A guide to the main JSON components for configuring Actional Buttons in FlowAgent.

## When to Use
Read this page when you want to understand or customize the structure of Actional Button configurations.

## How It Works
- The JSON for Actional Buttons is organized into four top-level components:
  - `items`: Data items the button interacts with.
  - `visibility`: When and how the button is shown.
  - `actions`: What happens when the button is pressed.
  - `outcome`: What feedback/result is shown after the action.

## Usage Example
```json
{
  "items": { /* ... */ },
  "visibility": { /* ... */ },
  "actions": [ /* ... */ ],
  "outcome": { /* ... */ }
}
```

## Tips
- Use the example above as a template for your own buttons.
- See the subpages for details on each component.

## Related Links
- [Items](items.md)
- [Visibility](visibility.md)
- [Actions](actions.md)
- [Outcome](outcome.md)

---

For more on each component, see the subpages above.
