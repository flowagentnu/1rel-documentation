# Calendar Widget

The Calendar Widget lets you display and manage events, bookings, or schedules directly on your dashboard. It supports multiple views, event suggestions, reminders, and integration with related modules.

## When to Use
Use the Calendar Widget to visualize and interact with time-based data—such as appointments, tasks, or project milestones—within your modules. It's especially useful when you need to show events related to a parent or linked item (e.g., show a customer's events on a sales trip) or send reminders based on documents.

## How It Works
- Add the widget to your dashboard and configure its properties.
- All configuration options must be wrapped inside the **calendarWidget** property.
- Set up event relations to link events to other modules or related items.
- Use [relationXX] and [relationXX.title] to fetch the ID and name/title of a related item for event relations.
- Use `eventShowRelatedOnly` and `eventRelevantItem` to filter events and only show those related to a specific item (such as a customer via relation 77).
- Use `eventStatus` to display or filter events based on a status field in a related module.
- Use `reminders` to send document-based reminders to users, supporting variables like `[name]` for the recipient.
- Suggest event titles and body content for quick entry.
- Choose the default calendar view (e.g., week, month).

## Usage Example

```json
{
  "calendarWidget": {
    "defaultView": "week",
    "eventRelations": [
      {
        "moduleId": 58,
        "moduleName": "Medlem",
        "updateLocationField": [
          "kunderfield_adresse",
          "kunderfield_Postnummer",
          "kunderfield_by"
        ],
        "itemName": "[relation77.title]",
        "itemId": "[relation77]"
      }
    ],
    "eventTitleSuggestions": [
      "Nyt emne",
      "Salgsbesøg",
      "Opsætning skærm",
      "Facade",
      "DIV",
      "Ejerskifte"
    ],
    "eventShowRelatedOnly": true,
    "eventRelevantItem": "[relation77]",
    "eventStatus": {
      "moduleId": 58,
      "field": "kunderfield_status"
    },
    "reminders": [
      "customersdoc_husk-dit-m-de"
    ]
  }
}
```

*In this example:*
- All calendar configuration is inside the **calendarWidget** property.
- **eventRelations**: Uses `[relation77]` and `[relation77.title]` to fetch the related customer's ID and name for the event.
- **eventShowRelatedOnly**: If true, only shows events related to the relevant item.
- **eventRelevantItem**: Specifies which related item (e.g., customer) to use for filtering events.
- **eventStatus**: Specifies a status field from a related module (e.g., customer status) to display or filter events by status.
- **reminders**: Sends reminders using the specified document(s). You can use `[name]` in the document to reference the recipient's name.

## Options & Parameters
- **icon** (string): Widget icon (Google Fonts icon name).
- **iconColor** (string): Icon color (hex code).
- **iconBackgroundColor** (string): Icon background color (hex code).
- **calendarWidget** (object, required): All calendar configuration options must be placed inside this object:
  - **defaultView** (string): Initial calendar view (e.g., "week", "month").
  - **eventRelations** (array): Link events to other modules or related items. Each relation can include:
    - **moduleId** (integer): Related module ID.
    - **moduleName** (string): Related module name.
    - **updateLocationField** (array): Fields to update for event location.
    - **updateRecipientsField** (array): Fields to update for event recipients.
    - **itemName** (string): Name of the related item (supports variables like `[relationXX.title]`).
    - **itemId** (string): ID of the related item (supports variables like `[relationXX]`).
  - **eventTitleSuggestions** (array): Suggested titles for new events.
  - **bodySuggestions** (array): Suggested content for event descriptions. Each suggestion can include:
    - **label** (string): Label for the suggestion.
    - **keyName** (string): Key for the suggested content.
  - **eventShowRelatedOnly** (boolean): If true, only show events related to the current or relevant item via EventRelation. If false, show all events.
  - **eventRelevantItem** (string): Specify a related item (e.g., `[relation77]`) to filter events for that item instead of the current one.
  - **eventStatus** (object):
    - **moduleId** (integer): The module containing the status field.
    - **field** (string): The field name used to display or filter event status (e.g., `kunderfield_status`).
  - **reminders** (array): List of document keys to use for sending reminders. You can use `[name]` in the document to reference the recipient's name.
- **columns** (array): Not typically used for the Calendar Widget, but included for compatibility.

## Related Links
- [Common Widget Properties](/docs/modules/widgets/common-properties.md)