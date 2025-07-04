# Send Email Action

A guide to sending emails via automation in FlowAgent.

## When to Use
Use this page when you want to send emails automatically from actions or automations.

## How It Works
- Use `toEmail` or `toUser` to specify the recipient.
- Set subject, preview text, and document key for the email body.
- Attach files if needed.

## Usage Example
**Send an email to a static address:**
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

## Tips
- Use `documentKeyName` for the email body template.
- Either `toEmail` or `toUser` is required.