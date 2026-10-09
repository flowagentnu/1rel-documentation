# Calendar Widget

The Calendar Widget shows **events** in a month, week or day view and lets users create, move and edit them. Events are the appointments of the platform's calendar (including events synced from Outlook). The calendar does not show module records: there is no setting that turns a date field of a module into calendar entries. To show records on a timeline, use the [Gantt Widget](/docs/modules/widgets/gantt).

## When to Use
Use the Calendar Widget to show and plan appointments, for example:
- On a customer page: the meetings related to that customer, with new meetings related to the customer automatically.
- On a dashboard: all events the user may see, or the events of one user.
- When users should pick a title, a description template or a reminder quickly while creating an event.

For one day with a week strip, see the [Agenda Widget](/docs/modules/widgets/agenda). For a list of events, newest first, see the [Event Timeline Widget](/docs/modules/widgets/calendar-timeline).

## How It Works
- All calendar settings are placed inside one object, **calendarWidget**. The general widget settings `moduleid`, `query`, `columns` and `relations` are not used by the calendar.
- In the [form editor on the widget settings page](/docs/modules/widgets/widget-settings) the settings are split into three sections:
  - **Events**: which events are shown (`relevantItem`, `showUserId`, `eventShowRelatedOnly`) and the status shown on events (`statusModuleId`, `statusField`).
  - **Calendar view**: the view the calendar opens in, read-only mode, the week and month views and time zones.
  - **Creating events**: the record pickers, title suggestions, description templates and reminders of the event form.
- **Which events are shown:** on a record page the calendar shows, by default, only the events related to that record. Set `relevantItem` to `""` to show all events the user may see, or to another record (for example `[relation12]`). `showUserId` limits the calendar to one user's events.
- **Who sees which events:** a user sees events according to their **Calendar** permission (Read): their own events, the events of users in the same groups, or all events of the site. Users without Calendar access see only their own events. Two settings widen this: when the calendar is limited to a record the user can read (`relevantItem`), they see the events related to that record, and when it is limited to one user (`showUserId`), they see that user's events.
- **Event relations:** an event can be related to records. Each entry in `eventRelations` adds a record picker for one module to the event form, can pre-select a record (for example the record of the page) and can fill the event's location and participants from fields of the picked record.
- **Status:** with `statusModuleId` and `statusField`, the status of the related record of that module is shown in the event's tooltip.
- **Reminders:** documents listed in `reminders` are offered as reminder templates in the event form. When the user chooses one and a time, an e-mail based on the document is sent to the event's owner and participants that long before the event. In the document, `[name]` is replaced with the recipient's name, and the document's fields are filled from the event's related record of the document's module.
- Users switch between month, week and day view in the widget. The calendar is 580 px high. On phones and narrow screens it is read-only by default (no dragging or selecting to create).
- Placeholders such as `[itemid]`, `[itemname]`, `[relation77]` and `[relation77.title]` work in every value. See [Replaceables](/docs/misc/replaceables).

## Usage Examples

### Customer page: meetings of the customer
```json
{
  "calendarWidget": {
    "defaultView": "week",
    "relevantItem": "[itemid]",
    "eventRelations": [
      {
        "moduleId": 58,
        "moduleName": "Customer",
        "itemId": "[itemid]",
        "itemName": "[itemname]",
        "updateLocationField": ["kunderfield_adresse", "kunderfield_Postnummer", "kunderfield_by"],
        "updateRecipientsField": ["kunderfield_email"]
      }
    ],
    "eventTitleSuggestions": ["Sales visit", "Screen set-up", "Change of owner"],
    "bodySuggestions": [
      { "label": "Visit agenda", "keyName": "customersdoc_visit-agenda", "itemId": "[itemid]" }
    ],
    "statusModuleId": 58,
    "statusField": "kunderfield_status",
    "reminders": ["customersdoc_husk-dit-m-de"]
  }
}
```

*In this example:*
- Only events related to the customer of the page are shown (`"[itemid]"` is also the default on a record page).
- New events get a "Customer" picker with the customer pre-selected, and the event's location and participants are filled from the customer's address and e-mail fields.
- The user can click a title suggestion, or load the "Visit agenda" document into the description.
- The customer's status is shown on each event.
- The document `customersdoc_husk-dit-m-de` can be chosen as a reminder.

### Page of a related record: events of the parent customer
On a page whose record is related to a customer through relation 77:
```json
{
  "calendarWidget": {
    "relevantItem": "[relation77]",
    "eventRelations": [
      { "moduleId": 58, "moduleName": "Customer", "itemId": "[relation77]", "itemName": "[relation77.title]" }
    ]
  }
}
```

### Dashboard: my own calendar, office hours
```json
{
  "calendarWidget": {
    "relevantItem": "",
    "showUserId": "[user]",
    "defaultView": "week",
    "week": { "taskView": false, "startDayOfWeek": 1, "hourStart": 7, "hourEnd": 17, "workweek": true }
  }
}
```

## Options & Parameters

### Events (form section "Events")
- **calendarWidget** (object): container for all the settings below. Without it the calendar uses its defaults.
- **relevantItem** (number or string, default: the record of the page; on a dashboard: none): show only events related to this record. Use a record id or a placeholder such as `"[itemid]"` or `"[relation12]"`. Set it to `""` (or `0`) to show all events the user may see, also on a record page.
- **showUserId** (string or number, default: none): show only the events of this user. Write `"user_<id>"`, the user id, or `"[user]"` for the logged-in user. Users without Calendar access can then see this user's events.
- **eventShowRelatedOnly** (boolean, default: `false`): hide events that are not related to `relevantItem`. Only use it together with `relevantItem`: without a record, every event is hidden.
- **statusModuleId** (number, default: none): module id. If an event is related to a record of this module, that record's status is shown on the event. Requires `statusField`.
- **statusField** (string, default: none): **keyname** of the field on the `statusModuleId` record whose value is shown as the status (for example `"kunderfield_status"`, not `"cf123"`). Requires `statusModuleId`.

### Calendar view (form section "Calendar view")
- **defaultView** (string, default: `"month"`): the view the calendar opens in: `"month"`, `"week"` or `"day"`.
- **isReadOnly** (boolean, default: automatic): `true` turns off dragging, resizing and selecting a period to create an event. `false` always allows it. When it is not set, the calendar is read-only on phones and screens narrower than 768 px.
- **usageStatistics** (boolean, default: `false`): send usage statistics to the maker of the calendar library. Leave it off.
- **week** (object): settings of the week and day views. Default: `{"taskView": false, "startDayOfWeek": 1, "hourStart": 6, "hourEnd": 18, "workweek": true}`.
  - **startDayOfWeek** (number 0-6, default: `1`): first day of the week; 0 is Sunday, 1 is Monday.
  - **hourStart** / **hourEnd** (number 0-24, defaults: `6` / `18`): the hours shown.
  - **workweek** (boolean, default: `true`): hide Saturday and Sunday.
  - **narrowWeekend** (boolean, default: `false`): show weekend days narrower.
  - **showNowIndicator** (boolean, default: `true`): line at the current time.
  - **taskView** (boolean or list, default: `false`): task rows above the hours: `false`, `true` (milestones and tasks), `["milestone"]` or `["task"]`.
  - **eventView** (boolean or list, default: all-day and timed): `true`, `["allday"]` or `["time"]`.
  - **collapseDuplicateEvents** (boolean, default: `false`): collapse duplicate events.
  - **dayNames** (list of 7 texts): names of the days, Sunday first.
- **month** (object): settings of the month view. Default: `{"taskView": false, "startDayOfWeek": 1, "workweek": true}`.
  - **startDayOfWeek** (number 0-6, default: `1`), **workweek** (boolean, default: `true`), **narrowWeekend** (boolean, default: `false`), **dayNames** (list): as for the week view.
  - **visibleWeeksCount** (number 0-6): number of weeks shown; 0 shows the whole month.
  - **isAlways6Weeks** (boolean, default: `true`): always show 6 weeks.
  - **visibleEventCount** (number): events shown per day before "more".
  - **taskView** (boolean, default: `false`): task rows.
- **timezone** (object, default: Europe/Copenhagen): `{"zones": [{"timezoneName": "Europe/Copenhagen", "displayLabel": "Copenhagen"}]}`. Each zone in **zones** has a **timezoneName** (IANA time zone name) and a **displayLabel**.

:::caution Write week and month as a complete object
`week` and `month` replace the default object as a whole. `{"week": {"hourStart": 7}}` also loses Monday as first day, the hidden weekends and the 18:00 end. Always write all the values you want, as in the dashboard example above. The form editor fills in the default values for you when you change one of them.
:::

Other options of the calendar library (TOAST UI Calendar) can also be written inside `calendarWidget`, but keep `useFormPopup` and `useDetailPopup` off, because Flow uses its own event form.

### Creating events (form section "Creating events")
- **eventRelations** (list of objects, default: none): one record picker per entry in the event form.
  - **moduleId** (number, required): the module whose records can be picked.
  - **moduleName** (string, required): label of the picker. It is also saved on the event's relation.
  - **itemId** (number or string, default: none): record pre-selected when a new event is created, for example `"[itemid]"` or `"[relation77]"`.
  - **itemName** (string, default: none, required with `itemId`): the name shown for the pre-selected record, for example `"[itemname]"` or `"[relation77.title]"`.
  - **updateLocationField** (list or comma-separated string of field **keynames**, default: none): when a record is picked or pre-selected, the event's location is set to these fields' values, joined with spaces.
  - **updateRecipientsField** (list or comma-separated string of field **keynames**, default: none): same, but fills the participants (e-mail addresses).
- **eventTitleSuggestions** (list of texts, default: none): title buttons in the event form, filtered as the user types.
- **bodySuggestions** (list of objects, default: none): buttons that load a document into the event's description.
  - **label** (string, required): button text.
  - **keyName** (string, required): **keyname of the document** to load.
  - **itemId** (number or string, optional): record used to fill the document's fields, for example `"[itemid]"`.
- **reminders** (list of document keynames, default: none): documents offered as reminder templates in the event form. Without this setting the reminder choice is only shown for events that already have a reminder.

### General settings
Title, icon and size work as described in [Common Widget Properties](/docs/modules/widgets/common-properties).

## Related Links
- [Widget Settings](/docs/modules/widgets/widget-settings)
- [Agenda Widget](/docs/modules/widgets/agenda)
- [Event Timeline Widget](/docs/modules/widgets/calendar-timeline)
- [Replaceables](/docs/misc/replaceables)
- [Common Widget Properties](/docs/modules/widgets/common-properties)
