# Replaceables

Replaceables are a way to define a placeholder in a string that can be replaced with a value. This is useful for defining templates that can be reused with different values.

## Syntax
The syntax for a replaceable is `[variableName]`.

## Commands

### User Related
| Command | Description | Return Example |
|---------|-------------|--------------|
| `[user]` | A reference to the current user. | user_1 |
| `[userid]` | The ID of the current user. | user_1 |
| `[usergroups]` | The groups the current user belongs to. | group_1,group_2 |
| `[user.name]` | The name of the current user. | John Doe |
| `[user.email]` | The email of the current user. | johndoe@flowagent.nu |
| `[user.workphonenumber]` | The work phone number of the current user. | 12345678 |
| `[user.personalphonenumber]` | The personal phone number of the current user. | 12345678 |
| `[user.gps]` | The GPS location of the current user. | 12.345678,12.345678 |

### Item Related
| Command | Description | Return Example |
|---------|-------------|--------------|
| `[itemid]` | A reference to the current item. | 1 |
| `[parentitemid]` | The ID of the parent item. | 2 |

### Date and Time Related
| Command | Description | Return Example |
|---------|-------------|--------------|
| `[datenow]` | The current date. | 2021-01-01 |
| `[timenow]` | The current time. | 12:00 |
| `[datetimenow]` | The current date and time. | 2021-01-01 12:00 |
| `[datetomorrow]` | The date of tomorrow. | 2021-01-02 |
| `[dateyesterday]` | The date of yesterday. | 2021-01-01 |
| `[dateweek]` | The date of the start of the current week. | 2021-01-01 |
| `[datemonth]` | The date of the start of the current month. | 2021-01-01 |

### POST Values
Post commands start with `[post.` and end with `]`. The value between the dots is the key of the post value.

| Command | Description | Return Example |
|---------|-------------|--------------|
| `[post.key]` | The value of the key in the post. | value |

### Relation Values
Relation commands start with `[relation` the relation id `.`, the field name, and end with `]`.

| Command | Description | Return Example |
|---------|-------------|--------------|
| `[relation1.id]` | The ID of the related item. | 1 |
| `[relation1.title]` | The title of the related item. | Item 1 |
| `[relation1.type]` | The name of the type of the related item. | type1 |
| `[relation1.cf1234]` | The value of the field in the related item. | value |

### Item Values
Item commands start with `[` the item name, then `.`, the field name, and end with `]`.

| Command | Description | Return Example |
|---------|-------------|--------------|
| `[item1.id]` | The ID of the item. | 1 |
| `[item1.title]` | The title of the item. | Item 1 |
| `[item1.type]` | The name of the type of the item. | type1 |
| `[item1.cf1234]` | The value of the field in the item. | value |

### Power Search
Power Search commands start with `[powersearch.` and end with `]`, and have `keyname` within the brackets to specify the key of the power search value.

| Command | Description |
|---------|-------------|
| `[powersearch.keyname]` | The ID of the item in the power search. |

Power Search commands will return the table with content of the power search results.

### Price Group Command
:::note
This command is not public available yet.
:::

### Strip Option
This is not a replaceable, but an ability to strip `option_` part of a returned value.

Example: Where `[item1.cf1234]` will return `option_1234`, you can use `[item1.cf1234]|strip_option` to return `1234`.

## Tips
- Use replaceables to personalize messages and automate workflows.
- Always use square brackets for variable names.

## Related Links
- [Custom Mail Templates](custom-mail-templates.md)
- [Automations](../sites/automations.md)

---

For more on dynamic content, see the Automations and Mail Templates documentation.