# Event Timeline Widget

The Event Timeline Widget displays calendar events in a chronological list, making it easy to track meetings, appointments, and interactions over time.

## When to Use
Use the Event Timeline Widget to get a clear overview of all events related to a customer, project, or module—especially when you want to see the sequence of interactions at a glance.

## How It Works
- Add the widget to your dashboard and configure it just like the Calendar Widget.
- All configuration options must be wrapped inside the **calendarWidget** property.
- The widget will show events as a timeline, ordered by date and time.
- All configuration options are identical to the [Calendar Widget](/docs/modules/widgets/calendar).

## Usage Example

```json
{
  "calendarWidget": {
    "defaultView": "week",
    "eventRelations": [
      {
        "moduleId": 58,
        "moduleName": "Medlem",
        "itemName": "[relation77.title]",
        "itemId": "[relation77]"
      }
    ],
    "eventShowRelatedOnly": true,
    "eventRelevantItem": "[relation77]"
  }
}
```

*This example shows a timeline of events for a related customer, using the same configuration as the Calendar Widget, all inside the calendarWidget property.*

## Options & Parameters
- All options and parameters are the same as the [Calendar Widget](/docs/modules/widgets/calendar), and must be placed inside the **calendarWidget** property.

## Related Links
- [Calendar Widget](/docs/modules/widgets/calendar)
- [Common Widget Properties](/docs/modules/widgets/common-properties.md)

