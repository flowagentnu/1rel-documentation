# Custom Mail Templates

A guide to customizing email templates in FlowAgent.

## When to Use
Use this page when you want to change the content or appearance of system emails (e.g., invites, notifications).

## How It Works
- Email templates are configured in the `mail` object in your site settings.
- You can customize titles, text, subject lines, and preview text for different email types.

## Usage Example (JSON)
```json
{
  "mail": {
    "organisation": {
      "invite": {
        "title": "Customer portal invitation",
        "text": "Please login using the button below",
        "subjectLine": "Your customer portal login",
        "previewText": "Open this mail to access the customer portal"
      }
    },
    "default": {
      "invite": {
        "title": "User invitation",
        "text": "Please login using the button below",
        "subjectLine": "Your user invitation",
        "previewText": "Open this mail to access the site"
      }
    }
  }
}
```

## Tips
- Use replaceables (e.g., `[user.name]`) to personalize emails.
- Test your templates before sending to users.

## Related Links
- [Replaceables](replaceables.md)

---

For more on dynamic content, see the Replaceables documentation.