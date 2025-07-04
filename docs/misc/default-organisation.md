# Default Organisation Setting

A guide to setting a default organisation group in FlowAgent via Site Settings.

## When to Use
Set a default organisation group when you want all new organisation users to automatically be added to a specific group—ensuring consistent permissions and access control.

## How It Works
- Add the `defaultOrganisation` setting in your site configuration:

```json
{
  "defaultOrganisation": "group_kundegruppe---f-lles"
}
```
- When this is set, all new organisation users are automatically added to the specified group.
- This is useful for applying default permission rules and ensuring all external users have a baseline set of access rights.

## Usage Example
Suppose you want all new vendor or customer users to be added to a shared group for default permissions:
1. Go to Site Settings.
2. Set the `defaultOrganisation` value to your desired group key (e.g., `group_kundegruppe---f-lles`).
3. Save your settings.
4. All new organisation users will now be added to this group by default.

## Tips
- Use a default organisation group to simplify permission management for external users.
- You can still manually assign users to additional groups as needed.

## Related Links
- [Users](/docs/sites/users.md)
- [Organisations](/docs/sites/organisations.md)
- [Groups](/docs/sites/groups.md)
