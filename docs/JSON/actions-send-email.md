# Send email

Ability to send an email to a specific email or user.

| Property                 | Type    | Default Value  | Options        | Description                                                                 |
|--------------------------|---------|----------------|----------------|-----------------------------------------------------------------------------|
| `toEmail`                | string  | (empty)        | N/A            | A static email receiver.                                                    |
| `toName`                 | string  | (empty)        | N/A            | A static name receiver.                                                     |
| `toUser`                 | string  | (empty)        | N/A            | A dynamic user to receive the email.                                        |
| `fromName`               | string  | (empty)        | N/A            | A static name sender.                                                       |
| `fromEmail`              | string  | (empty)        | N/A            | A static email sender.                                                      |
| `fromUser`               | string  | (empty)        | N/A            | A dynamic user who is the sender of the email.                              |
| `replyToName`            | string  | From name.     | N/A            | The name of the one to receive any replies (static field).                  |
| `replyToEmail`           | string  | From email.    | N/A            | The email of the one to receive any replies (static field).                 |
| `subjectLine`            | string  | (empty)        | N/A            | Subject line just like in a regular email.                                  |
| `previewText`            | string  | (empty)        | N/A            | A short recap of what the email is about.                                   |
| `documentKeyName`        | string  | (empty)        | N/A            | The keyname of the document to use for the email body.                      |
| `attachments`            | array   | (empty)        | N/A            | Array of attachments, each with `name` and `url`.                           |

**Note:** `documentKeyName` is always required. Either `toEmail` or `toUser` is also required.

## Examples

### Example 1: Send email to a static email

```json
{
  "documentKeyName": "mltiderdoc_dette-er-min-document-email",
  "toEmail": "info@flowagent.nu",
  "toName": "FlowAgent",
  "fromName": "FlowAgent",
  "fromEmail": "contact@flowagent.nu",
  "subjectLine": "This is my subject line",
  "previewText": "This is my preview text",
  "attachments": [
    { "name": "file.pdf", "url": "https://example.com/file.pdf" }
  ]
}
```

### Example 2: Send email to a dynamic user

```json
{
  "documentKeyName": "mltiderdoc_dette-er-min-document-email",
  "toUser": "[user]",
  "fromUser": "[user]",
  "replyToName": "FlowAgent",
  "replyToEmail": "contact@flowagent.nu",
  "subjectLine": "This is my subject line",
  "previewText": "This is my preview text"
}
```

### Example 3: Send email using a document (minimal)
    
```json
{
  "documentKeyName": "mltiderdoc_dette-er-min-document-email",
  "toName": "[user.name]",
  "toEmail": "[user.email]"
}
```