# Send toast
In some cases we need to show a toast message to the user, telling them about what happened or what to do.

| Property                 | Type    | Default Value  | Options        | Description                                                                 |
|--------------------------|---------|----------------|----------------|-----------------------------------------------------------------------------|
| `type`                   | string  | success        | `danger`, `info` or `success` | What type of message to be displayed. Will affect the toast look. |
| `title`                  | string  | (empty)        | N/A            | Sets the title of the toast |
| `text`                   | string  | (empty)        | N/A            | Detailed description or message to be displayed to the user. Supports replaceables. |

:::note
Toast are only displayed if user stays on same page and not navigated away.
:::

## Examples

### Example 1: Show a success message
```json
{
  "type": "success",
  "title": "Success!",
  "text": "The task was successfully completed."
}
```

### Example 2: Show an info message
```json
{
  "type": "info",
  "title": "Info!",
  "text": "The task was completed but with some warnings."
}
```

### Example 3: Show an error message
```json
{
  "type": "danger",
  "title": "Error!",
  "text": "The task could not be completed. Please try again."
}
```