# Resource Planning App

A guide to using the Resource Planning app in FlowAgent for scheduling and resource allocation.

## When to Use
Use this app when you need to plan, allocate, or track resources (people, equipment, etc.) for projects or tasks.

## How It Works
- Resource Planning lets you assign resources to projects, tasks, or events.
- Visualize schedules and availability in the app dashboard.
- Integrates with modules for projects, tasks, and more.

## JSON Configuration Example
Below is a real-world example of a Resource Planning app configuration:

```json
{
  "resourceplanning": {
    "tasks": {
      "keyname": "opgave",
      "projectrelation": "projektmr_projektopgave",
      "noteTitle": "opgave-beskrivelse",
      "fieldmap": {
        "dateTimeSince": "opgavefield_planlagt-fra",
        "dateTimeUntil": "opgavefield_planlagt-til",
        "status": "opgavefield_status",
        "assigned": "opgavefield_tildelt"
      },
      "filters": {
        "types": [
          "projektmit_enterprise"
        ],
        "statusUnplanned": [
          "opgavefield_statusopt_under-forberedelse"
        ]
      },
      "defaultDuration": 60,
      "update": {
        "planned": {
          "opgavefield_tildelt": "[assigned]",
          "opgavefield_status": "opgavefield_statusopt_klar-til-udf-rsel",
          "opgavefield_planlagt-fra": "[datetimestart]",
          "opgavefield_planlagt-til": "[datetimeend]"
        }
      }
    },
    "projects": {
      "keyname": "projekt",
      "fieldmap": {
        "address": "projektfield_fuld-adresse",
        "latitude": "projektfield_latitude",
        "longitude": "projektfield_longitude"
      }
    },
    "createEventModal": {
      "titleSuggestions": [
        "Syg",
        "Fridag",
        "Tilsyns vagt"
      ]
    }
  }
}
```

### Explanation
- **tasks**: Maps task key names, project relations, note titles, field mappings (dates, status, assigned), filters for types and unplanned status, default duration, and update logic for planning.
- **projects**: Maps project key names and address/coordinate fields for location-based planning.
- **createEventModal**: Provides title suggestions for quick event creation (e.g., sick day, day off, on-call duty).

## Usage Example
- Assign a technician to a service job and see their schedule update automatically.
- Track equipment usage and avoid double-booking.

## Tips
- Keep resource data up to date for accurate planning.
- Use filters to focus on specific teams or resource types.