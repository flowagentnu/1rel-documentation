# Event Timeline Widget

The Event Timeline Widget shows calendar **events** as a vertical list, newest first, five per page. It uses the same events as the [Calendar Widget](/docs/modules/widgets/calendar), making it easy to follow the meetings and appointments of a customer or project over time.

## When to Use
Use the Event Timeline Widget on a record page to see all events related to that record at a glance, or on a dashboard to see the latest events of a user.

## How It Works
- The settings are placed inside the **calendarWidget** object, like the Calendar Widget's. The timeline only uses the "which events" settings: `relevantItem`, `showUserId`, `eventShowRelatedOnly`, `statusModuleId` and `statusField`. In the [form editor on the widget settings page](/docs/modules/widgets/widget-settings) they are in the **Events** section.
- Calendar view settings (`defaultView`, `week`, `month` and so on) and the event form settings (`eventRelations`, `eventTitleSuggestions`, `bodySuggestions`, `reminders`) have no effect on the timeline.
- Events are listed newest first, 5 per page, with buttons to page through older events. Click an event to open it.
- **Which events are shown:** on a record page the timeline shows all events related to that record, whoever owns them. Set `relevantItem` to another record (for example `[relation77]`), or to `""` to list all events the user may see according to their **Calendar** permission (as in the Calendar Widget).
- The widget always has a header and no background or margin, so the general settings `showWidgetHeader`, `hasBackground`, `hasMargin` and `style` have no effect.

## Usage Example

```json
{
  "calendarWidget": {
    "relevantItem": "[relation77]",
    "statusModuleId": 58,
    "statusField": "kunderfield_status"
  }
}
```

*This example lists the events of the customer the record is related to through relation 77, with the customer's status on each event.*

On a customer page, an empty configuration (`{}`) is enough to list the customer's own events.

## Options & Parameters
- **calendarWidget** (object): container for the settings below.
  - **relevantItem** (number or string, default: the record of the page; on a dashboard: none): list the events related to this record. Use a record id or a placeholder such as `"[itemid]"` or `"[relation12]"`. `""` (or `0`) lists all events the user may see.
  - **showUserId** (string or number, default: none): only events of this user: `"user_<id>"`, the user id, or `"[user]"` for the logged-in user. Also applies together with `relevantItem`.
  - **eventShowRelatedOnly** (boolean, default: `false`): hide events not related to `relevantItem`. Only use it together with `relevantItem`: without a record, every event is hidden.
  - **statusModuleId** (number, default: none): module whose related record's status is shown on each event. Requires `statusField`.
  - **statusField** (string, default: none): **keyname** of the status field on that module (for example `"kunderfield_status"`). Requires `statusModuleId`.

See the [Calendar Widget](/docs/modules/widgets/calendar) for more about these settings.

## Related Links
- [Calendar Widget](/docs/modules/widgets/calendar)
- [Agenda Widget](/docs/modules/widgets/agenda)
- [Widget Settings](/docs/modules/widgets/widget-settings)
- [Replaceables](/docs/misc/replaceables)
- [Common Widget Properties](/docs/modules/widgets/common-properties)
