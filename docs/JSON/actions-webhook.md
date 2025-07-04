# Webhook Action

A guide to calling webhooks via automation in FlowAgent.

## When to Use
Use this page when you want to trigger external integrations or notify other systems.

## How It Works
- Use the `url` property to specify the webhook endpoint (must be HTTPS).
- The webhook can return a message to display as a toast.

## Usage Example
**Call a webhook:**
```json
{
  "url": "https://flowagent.nu/webhook"
}
```

## Tips
- Use valid HTTPS URLs for webhooks.
- Handle webhook responses for user feedback.