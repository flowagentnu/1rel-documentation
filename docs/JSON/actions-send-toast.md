# Send Toast Action

A guide to showing toast messages to users via automation in FlowAgent.

## When to Use
Use this page when you want to notify users of success, info, or errors after an action.

## How It Works
- Use `type` to set the toast style: `success`, `info`, or `danger`.
- Set `title` and `text` for the message.
- Toasts only display if the user stays on the same page.

## Usage Example
**Show a success message:**
```json
{
  "type": "success",
  "title": "Success!",
  "text": "The task was successfully completed."
}
```

**Show an info message:**
```json
{
  "type": "info",
  "title": "Info!",
  "text": "The task was completed but with some warnings."
}
```

**Show an error message:**
```json
{
  "type": "danger",
  "title": "Error!",
  "text": "The task could not be completed. Please try again."
}
```

## Tips
- Use `danger` for errors, `info` for warnings, `success` for confirmations.