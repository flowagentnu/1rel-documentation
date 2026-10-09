# General Site Settings

A guide to configuring the foundational settings for your FlowAgent site.

## When to Use
Read this page when you want to set up or adjust your site's basic information, defaults, or advanced options.

## How It Works
- **Accessing General Settings:**
  1. Open Site Settings (three-dot menu, top right).
  2. Go to the General tab (first page loaded).
- **Site Info:**
  - Set the site name and logo for branding and identification.
- **Site Defaults:**
  - Choose default date, time, number formats, and language for new users.
  - Users can override these defaults in their profile.
- **Storage:**
  - View current storage usage. Contact FlowAgent to upgrade.
- **JSON Configuration:**
  - Advanced settings for default organisation, support URL, login, mail, dashboard, pricegroup, and resource planning.

## Usage Example (JSON)
**Set a support link for super users:**
```json
{
  "supportUrl": "https://flowagent.nu/kontakt"
}
```

**Full example with all properties:**
```json
{
  "supportUrl": "",
  "login": {},
  "mail": {},
  "dashboard": { "actionalButtons": [] },
  "pricegroup": {},
  "resourceplanning": {}
}
```

## Tips
- Refer to the PHP documentation for date/time format options.
- Use the JSON configuration for advanced customizations.

## Related Links
- [Custom Login Screen](../misc/custom-login-screen.md)
- [Custom Mail Templates](../misc/custom-mail-templates.md)
- [Actional Buttons](actionalbuttons/how-to-use.md)
- [Price Group](../apps/pricegroup/introduction.md)
- [Resource Planning](../apps/resourceplanning/introduction.md)

---

For more on advanced configuration, see the related links above.