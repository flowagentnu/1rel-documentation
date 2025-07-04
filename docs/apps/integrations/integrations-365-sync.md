# Microsoft 365 Sync

A FlowAgent app for two-way synchronization between Microsoft 365 Calendar and FlowAgent, enabling seamless event management across platforms.

## When to Use
Use this integration if you want to keep your Microsoft 365 Calendar and FlowAgent events in sync, allowing updates from either side to reflect automatically.

## How It Works
- Admin installs the Microsoft 365 Sync App (see [Marketplace](/docs/sites/marketplace)).
- Users connect their Microsoft account in FlowAgent via Account Settings.
- Events are synchronized bidirectionally using Microsoft Graph API.
- Data is encrypted in transit and at rest, with strict access controls.

## Usage Example
1. Go to **Account Settings** in FlowAgent.
2. Click **Connect to Microsoft** under the General tab.
3. Log in and approve the connection.
4. Your Microsoft 365 Calendar events will now sync with FlowAgent apps (e.g., [Calendar Widget](/docs/modules/widgets/calendar)).

## Security & Data Handling
- OAuth login with Microsoft; FlowAgent is a verified publisher.
- Only required permissions are requested; organization approval is needed.
- Data is encrypted (SSL/TLS in transit, AES at rest) and stored in Denmark (GDPR compliant).
- Regular security audits and strict access controls.

## Related Links
- [Microsoft Graph API](https://learn.microsoft.com/en-us/graph/)
- [Calendar Widget](/docs/modules/widgets/calendar)


