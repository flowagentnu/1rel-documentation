# Groups

A guide to using groups for permissions and roles in FlowAgent.

## When to Use
Read this page when you want to manage user roles or set up permissions for modules, tabs, and dashboards.

## How It Works
- **Groups = Roles:**
  - Assign groups to users to control what they can see and do.
  - Users can have multiple groups (roles).
- **Permissions:**
  - Set granular permissions (read, create, update, delete) for each module or feature.
  - Permissions are merged: the highest access is granted, except for "deny," which always overrides.
- **Managing Groups:**
  - Create, duplicate, edit, or delete groups from the Groups tab in Site Settings.

## Usage Example
**Merging permissions:**
| Group   | Read | Create | Update | Delete |
|---------|------|--------|--------|--------|
| Group 1 | YES  | NO     | NO     | NO     |
| Group 2 | YES  | YES    | YES    | NO     |
| Result  | YES  | YES    | YES    | NO     |

**Deny example:**
| Group   | Read | Create | Update | Delete |
|---------|------|--------|--------|--------|
| Group 1 | Site | NO     | NO     | NO     |
| Group 2 | Deny | YES    | YES    | NO     |
| Result  | Deny | YES    | YES    | NO     |

## Tips
- Create groups that match your company’s roles for easier management.
- Be careful when editing or deleting groups—changes affect all assigned users.

## Related Links
- [Users](users.md)
- [Organisations](organisations.md)