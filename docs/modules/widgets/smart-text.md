# Smart Text Widget

The Smart Text Widget shows text written in Markdown, with placeholders that are filled in with values from the record, related records, the user and the date. It can show some text only when a condition is met.

## When to Use
Use the Smart Text Widget to show messages, instructions, summaries or key values, for example a greeting on the dashboard, the customer and deadline of a case, or a warning when a field is empty.

## How It Works
- The widget has no header, icon, title or background: only the text is shown, directly on the page. The form editor therefore does not offer these settings.
- **text** is either one text or a list of text blocks. Each block is shown in order, as its own Markdown document.
- Markdown works for formatting: `**bold**`, `*italic*`, `# heading`, `- list`, `[link](https://…)`. HTML is not allowed and is shown as plain text.
- All [placeholders](/docs/misc/replaceables) work, including:
  - Record values: `[itemname]`, `[itemid]`, `[cf12]`, `[item.title]`, `[item.<field keyname>]`.
  - Related records: `[relation12]`, `[relation12.title]`, `[relation12.cf34]`, `[relation12.<field keyname>]`.
  - The user: `[user.name]`, `[user.email]`, `[usergroups]` and more.
  - Dates: `[datenow]`, `[timenow]`, `[datetimenow]`, `[datetomorrow]`, `[dateyesterday]`, `[dateweek]` (Monday this week), `[datemonth]` (first day of the month). Add a number of days, for example `[datenow+7]` or `[datemonth-1]`.
  - Power searches: `[powersearch.<keyname>.count]` gives the number of results, and `[powersearch.<keyname>.sum:<field keyname>]` gives the sum of a field. `avg`, `min` and `max` work the same way as `sum`.
- **Conditions**: `[if CONDITION]text[else]other text[/if]` shows text only when the condition is met. `[else]` is optional, and blocks can be nested. Conditions can be:
  - `X is empty` and `X is not empty`
  - `X = Y`, `X != Y`, `X > Y`, `X < Y`, `X >= Y`, `X <= Y`
  - `X like Y`, `X not like Y`, `X in Y`, `X not in Y`
  - `anynotempty(a, b)` and `allnotempty(a, b)`
  - several conditions joined with `and` or `or`

  Use `[cf12]`, `[relation12]`, `[itemname]`, user values or dates inside a condition. Put a placeholder in single quotes, for example `'[cf12]' is empty` or `'[cf12]' = 'Copenhagen'`, so the condition also works when the value is empty or contains spaces. `[cfN]` gives the stored value, so for a list field compare with the option value, for example `'[cf14]' = 'option_3'`. `[item.…]`, `[relation12.…]` and power search values are filled in after the conditions are checked, so they cannot be tested.
- On the dashboard there is no record, so record and relation placeholders are not filled in. User and date placeholders work everywhere.

In the form editor on the [widget settings page](/docs/modules/widgets/widget-settings), the text is in the **Text** section. The **[ ]** button inside the text field lists all placeholders, including the fields and relations of the module.

:::caution Avoid the | character
When the text contains a placeholder or a link, everything from the first `|` onward is cut off. Do not use `|` (for example Markdown tables) in a text that also has placeholders or links.
:::

:::note
Values inserted with `[cfN]` and `[itemname]` lose quotes, line breaks and special characters such as é or ü. To show a field value exactly as stored, use `[item.<field keyname>]` or `[relation12.<field keyname>]`.
:::

## Usage Examples

### Greeting on the dashboard
```json
{
  "text": [
    "# Hello [user.name]",
    "Today is [datenow]. Have a good day!"
  ]
}
```
*Shows a heading with the user's name and a second block with today's date.*

### Case summary with a condition
```json
{
  "text": "**Customer:** [relation12.title]\n\n[if '[cf33]' is not empty]**Deadline:** [cf33][else]*No deadline set.*[/if]"
}
```
*Shows the customer of the case. If the deadline field (field 33) has a value, it is shown; otherwise a note says that no deadline is set. `\n\n` starts a new paragraph.*

### Count from a power search
```json
{
  "text": "Open tasks: **[powersearch.open_tasks.count]**"
}
```

## Options & Parameters
- **text** (text, or list of texts, required): The Markdown content with placeholders. A list shows each block in order. Without text, the widget shows nothing.

## Related Links
- [Widget Settings](/docs/modules/widgets/widget-settings)
- [Replaceables](/docs/misc/replaceables)
- [Common Widget Properties](/docs/modules/widgets/common-properties)
