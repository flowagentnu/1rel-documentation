# Automations

A guide to automating tasks and workflows in FlowAgent.

## When to Use
Read this page when you want to set up triggers and actions to automate processes in your site.

## How It Works
- **Automations = Triggers + Actions:**
  - Set up triggers (e.g., when an item is created or updated).
  - Define actions to run automatically (e.g., send an email, update a field).
- **Configuration:**
  - Automations are configured in the Automations section of Site Settings.
  - Use the UI or JSON for advanced logic.

## Usage Example (JSON)
**Send an email when a new item is created:**
```json
{
  "trigger": "onCreate",
  "actions": [
    { "type": "sendEmail", "to": "user@example.com" }
  ]
}
```

## Tips
- Start with simple automations and build up to more complex workflows.
- Use the documentation and examples for inspiration.

## Feedback & Help
If you need help, contact us at [kontakt@flowagent.nu](mailto:kontakt@flowagent.nu).