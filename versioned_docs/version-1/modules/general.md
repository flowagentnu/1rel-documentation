# General Module Settings

The General settings tab lets you configure the basic properties and appearance of each module in FlowAgent.

## When to Use
Use General settings to set up or update a module’s name, description, color, icon, parent relationship, and permissions.

## How It Works
- Access General settings from the module’s settings menu.
- Configure module info, appearance, and permissions.
- Changes affect how the module appears and behaves throughout FlowAgent.

## Usage Example
To update a module’s name and icon:

1. Open **Site Settings** > **Modules**.
2. Select your module and click the edit icon.
3. Change the name and select a new icon.
4. Save your changes.

## Main Properties
- **name** (string): Module name
- **description** (string): Description of the module
- **color** (string): Color used to identify the module
- **icon** (image): Icon representing the module
- **Parent relationship** (Module Relation): Parent module (if any)
- **Title column** (Customfield): Main title field for the module
- **Subtitle columns** (Customfields): Subtitle fields for the module
- **options** (JSON editor): Advanced settings for the module. You can add supported properties here to control module behavior.
  - **permissionFields** (array of customfield keynames): A supported method for restricting item view access. Specifies which custom fields act as view permissions for module items. If a module item uses user or group-based permissions, the logged-in user's name or group must be present in at least one of these fields to grant view access to that item.

  **Example:**
  ```json
  {
    "permissionFields": ["cf1234", "cf5678"]
  }
  ```
  If the permission type on the item is user or group, and the user's name or group is found in any of these fields, they will have view access to the item.