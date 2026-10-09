# Agenda Widget

The Agenda Widget shows the calendar **events** of one day as a list, with a week strip above it to pick the day. It uses the same events as the [Calendar Widget](/docs/modules/widgets/calendar). When the user has a home address, it also shows the driving time and distance between the day's appointments.

## When to Use
Use the Agenda Widget for a compact "my day" view, for example on a dashboard for field workers, or on a record page to see the day's appointments related to that record.

## How It Works
- The widget opens on today. Click a day in the week strip to see its events, and use the arrows to move a week back or forward. The title of the widget shows the month, year and week number.
- Click an event to open it.
- **Driving times:** when the logged-in user has a home address and driving times are available on the site, the agenda shows the drive from home to the first appointment with a location, between appointments, and back home, plus the total driving time and distance of the day.
- The settings are placed inside the **calendarWidget** object, like the Calendar Widget's. The agenda only uses the "which events" settings: `relevantItem`, `showUserId`, `eventShowRelatedOnly`, `statusModuleId` and `statusField`. In the [form editor on the widget settings page](/docs/modules/widgets/widget-settings) they are in the **Events** section. All other calendar settings, and `moduleid`, `query`, `columns` and `relations`, are not used.
- **Which events are shown:** on a record page the agenda shows, by default, only the events related to that record. On a dashboard it shows the events the user may see according to their **Calendar** permission: their own events, the events of users in the same groups, or all events of the site. Use `showUserId` to show only one user's events, for example `"[user]"` for the logged-in user.
- The widget always has a header and no background or margin, so the general settings `showWidgetHeader`, `hasBackground`, `hasMargin` and `style` have no effect. The title set on the widget is replaced by the month and week.

## Usage Examples

### Dashboard: my day
```json
{
  "calendarWidget": {
    "showUserId": "[user]"
  }
}
```

### Project page: the day's appointments on the project
```json
{
  "calendarWidget": {
    "relevantItem": "[itemid]",
    "statusModuleId": 167,
    "statusField": "projectsfield_status"
  }
}
```

## Options & Parameters
- **calendarWidget** (object): container for the settings below. An empty configuration (`{}`) is valid.
  - **relevantItem** (number or string, default: the record of the page; on a dashboard: none): show only events related to this record. Use a record id or a placeholder such as `"[itemid]"` or `"[relation12]"`. `""` (or `0`) shows all events the user may see, also on a record page.
  - **showUserId** (string or number, default: none): only events of this user: `"user_<id>"`, the user id, or `"[user]"` for the logged-in user. Users without Calendar access can then see this user's events.
  - **eventShowRelatedOnly** (boolean, default: `false`): hide events not related to `relevantItem`. Only use it together with `relevantItem`: without a record, every event is hidden.
  - **statusModuleId** (number, default: none): module whose related record's status is shown on each event. Requires `statusField`.
  - **statusField** (string, default: none): **keyname** of the status field on that module (for example `"projectsfield_status"`, not `"cf123"`). Requires `statusModuleId`.

See the [Calendar Widget](/docs/modules/widgets/calendar) for more about these settings.

## Related Links
- [Calendar Widget](/docs/modules/widgets/calendar)
- [Event Timeline Widget](/docs/modules/widgets/calendar-timeline)
- [Widget Settings](/docs/modules/widgets/widget-settings)
- [Replaceables](/docs/misc/replaceables)
- [Common Widget Properties](/docs/modules/widgets/common-properties)
