# Smart Text Widget

The Smart Text Widget lets you display dynamic, personalized text on your dashboard using variables and markdown formatting.

## When to Use
Use the Smart Text Widget to show custom messages, instructions, or dynamic content that can include user-specific data or other variables.

## How It Works
- Add the widget to your dashboard and configure the `text` property with an array of markdown strings.
- Use variables (e.g., `[user.name]`) to insert dynamic values.
- Supports markdown for headings, formatting, and lists.

## Usage Example

```json
{
  "text": [
    "# Hej [user.name]",
    "det skal nok blive fedt [user.name]"
  ]
}
```

*This example displays a personalized greeting using the user's name.*

## Options & Parameters
- **text** (array of strings, required): Each string is a line of markdown text. Variables like `[user.name]` are replaced with real values.

## Related Links
- [Replaceables & Variables](/docs/misc/replaceables.md)
- [Common Widget Properties](/docs/modules/widgets/common-properties.md)