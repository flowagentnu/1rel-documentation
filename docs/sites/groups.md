# Groups

In the Flow platform groups controls what permissions a user has (Create, Update, Read, Delete). Indirectly are they also used to decide what tabs a user has (this is setup on the tab settings for [items](/docs/modules/tabs) and dashboard.

Groups are also help to understand what roles a user has in a company.

:::tip
Create groups as roles in your company. That way it is easy for you to assign groups to users and you can easily verify that a given role only have exactly the needed permissions. Also if a user has multiple roles, you can simple assign them multiple groups.
:::

## Accessing the list of groups

1. Go to the **"Groups"** tab within the Site Settings.
2. Here you'll see a list of all existing groups.

## Creating and managing groups

### Adding a New Group

To create a new group:

1. Click the **"Create"** button.
2. Fill in the details for the new group, including the group name and description.

### Configuring Group Permissions

Once you have your group created, you can define its permissions:

1. Choose a group from the list to edit.
2. Navigate to the **"Permissions"** section.
'3. Set the permissions for each module and feature as required.

Permissions can be granular, allowing you to specify read, create, update, and delete capabilities for each aspect of the system.

### Duplicating a Group

If you need to create a group with similar permissions to an existing one:

1. Select the group you wish to duplicate.
2. Click on the **"Duplicate"** option.

This function will create a new group with the same permissions as the original, which you can then modify as needed.

### Editing and Deleting Groups

To maintain your groups:

- **Edit**: Click the **pencil icon** next to the group to adjust its name, description, or permissions.
- **Delete**: Use the **trash icon** to remove a group entirely. Be cautious with this action, as it cannot be undone.

:::warning
When editing or deleting groups, consider the impact on users and the access they have. Ensure that changes do not inadvertently restrict necessary access to system features or data.
:::

## How permissions works when a user has multiple groups

If you combine multiple sets of groups to a user, the system merges the permissions together creating a unique set of permissions that the user has. It works by getting the highest level of access between the groups with the simple exception of "deny", as this rules the highest.

Before the example, we need to understand the possible "flags" we can give a user when talking about permissions:
- **Checkbox permissions**: Normally when setting up permissions there is a checkbox. You can either check it or not. Not checked means the user does not have access in regards to this group. Checked is YES and unchecked is NO.
- **Dropdown permissions**: On some cases we can select different options like **Site**, **Group**, **User** or **Deny**. Site are the highest form of access, and User are the lowest. Deny is the highest form of denying and is always respected.

Lets look at some examples on how groups are merged into a unique set of permissions for a user.

### Example 1: User has two groups, where has read access, but the other has read, create and update

| Group                 | Permission                 | Read | Create | Update | Delete |
|-----------------------|----------------------------|------|--------|--------|--------|
| Group 1               | Customer Module            | YES  | NO     | NO     | NO     |
| Group 2               | Customer Module            | YES  | YES    | YES    | NO     |
| **Result**            | Customer Module            | YES  | YES    | YES    | NO     |

As seen in above table, the highest access is given to the user. "No" (unchecked) are not respected higher than yes, leaving the users permission group to be: Read, Create and Update on Customer Module.

### Example 2: User has two groups, where one denies reading access to Customer items

| Group                 | Permission                 | Read | Create | Update | Delete |
|-----------------------|----------------------------|------|--------|--------|--------|
| Group 1               | Customer Item              | Site | NO     | NO     | NO     |
| Group 2               | Customer Item              | Deny | YES    | YES    | NO     |
| **Result**            | Customer Item              | Deny | YES    | YES    | NO     |

As seen in above table, we user does not have reading access to the item as Deny are respected higher than anything else.