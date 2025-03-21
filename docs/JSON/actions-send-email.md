# Send email

Ability to send an email to an specific email or user.

| Property                 | Type    | Default Value  | Options        | Description                                                                 |
|--------------------------|---------|----------------|----------------|-----------------------------------------------------------------------------|
| `toEmail`                | string  | (empty)        | N/A            | A static email receiver. |
| `toName`                 | string  | (empty)        | N/A            | A static name receiver. |
| `toUser`                 | string  | (empty)        | N/A            | A dynamic user to receive the email. |
| `fromName`               | string  | (empty)        | N/A            | A static email sender. |
| `fromEmail`              | string  | (empty)        | N/A            | A static name sender. |
| `fromUser`               | string  | (empty)        | N/A            | A dynamic user who is the sender of the email. |
| `replyToName`            | string  | From name.     | N/A            | The name of the one to receive any replies (static field). |
| `replyToEmail`           | string  | From email.    | N/A            | The email of the one to receive any replies (static field). |
| `subjectLine`            | string  | (empty)        | N/A            | Subject line just like in a regular email. |
| `previewText`            | string  | (empty)        | N/A            | A short recap of what the email is about. |
| `templateTitle`          | string  | (empty)        | N/A            | If using template, this is the title inside the email body. |
| `templateBody`           | string  | (empty)        | N/A            | If using template, this is the text inside the email body. |
| `templateHasButton`      | bool    | false          | `true` or `false` | If using template, this decides if a button should be shown. |
| `templateButtonText`     | string  | (empty)        | N/A            | If using templates that has a button, this is the text of the button. |
| `templateButtonUrl`      | string  | (empty)        | N/A            | If using templates that has a button, this is the url of the button. |
| `documentKeyName`        | string  | (empty)        | N/A            | If using documents (and not template), this is the keyname of the document. |

## Examples

### Example 1: Send email to a static email

```json
{
  "toEmail": "info@flowagent.nu",
    "toName": "FlowAgent",
    "fromName": "FlowAgent",
    "fromEmail": "contact@flowagent.nu",
    "subjectLine": "This is my subject line",
    "previewText": "This is my preview text",
    "templateTitle": "This is my body title",
    "templateBody": "Hello world, this is my body!",
    "templateHasButton": true,
    "templateButtonText": "Hi, click me!",
    "templateButtonUrl": "https://flowagent.nu/"
}
```

### Example 2: Send email to a dynamic user

```json
{
    "toUser": "[user]",
    "fromUser": "[user]",
    "replyToName": "FlowAgent",
    "replyToEmail": "contact@flowagent.nu",
    "subjectLine": "This is my subject line",
    "previewText": "This is my preview text",
    "templateTitle": "This is my body title",
    "templateBody": "Hello world, this is my body!",
    "templateHasButton": true,
    "templateButtonText": "Hi, click me!",
    "templateButtonUrl": "https://flowagent.nu/"
}
```

### Example 3: Send email using a document
    
```json
{
    "documentKeyName": "mltiderdoc_dette-er-min-document-email",
    "toName": "[user.name]",
    "toEmail": "[user.email]"
}
```