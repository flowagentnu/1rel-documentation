# Call webhook

In some cases we need to show a toast message to the user, telling them about what happened or what to do.

| Property                 | Type    | Default Value  | Options        | Description                                                                 |
|--------------------------|---------|----------------|----------------|-----------------------------------------------------------------------------|
| `url`                    | string  | (empty)        | N/A            | A url that supports webhooks from our servers. Has to be a valid HTTPS url. |

## Webhook response

The webhook can respond with a message that will be displayed as a toast if webhook responds as JSON looking like followingen.
If no respond is given, they user will be notified that the webhook responded with no message.

```json
{
  "code": 200,
  "message": "Webhook triggered"
}
```

## Examples

### Example 1: Call a webhook

```json
{
  "url": "https://flowagent.nu/webhook"
}
```