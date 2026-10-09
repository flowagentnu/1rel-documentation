# Gantt Widget

The Gantt Widget shows records as bars on a timeline, from a start date to an end date. Records can be grouped by project and by another field, and each row shows how far the period has passed and how much of the work is done.

## When to Use
Use the Gantt Widget to plan and follow up on work over time, for example the tasks of a project, all running projects with their tasks, or the bookings of a team.

## How It Works
- **Records** come from the module in `moduleid`, filtered by `query`. Use `relations` to use fields of related modules, for example the project a task belongs to. In the [form editor on the widget settings page](/docs/modules/widgets/widget-settings) this is the **Which records** section; the bar settings are in the **Gantt chart** section.
- Each record becomes a row with a bar from `startField` to `endField` (both days included). The row's name is `titleField` and links to the record.
- Each row has two percentages:
  - **DL%** (deadline %): how much of the period from start to end has passed today.
  - **TC%** (task completed %): the value of `progressField`. The badge is green when the work is on track, yellow when it is slightly behind (up to about five days' worth of the period) and red when it is further behind. Without `progressField` it shows "-".
- **Layout modes**, decided by which grouping settings are filled in:
  1. **Project, group, task:** with `projectField`, records are grouped under one row per project and, if `groupField` is also set, under one row per group inside each project. Project rows link to the project record and show a coloured dot from `projectStatusField`; projects are ordered by the order of that field's options.
  2. **Group, task:** with only `groupField`, records are grouped under one row per value of that field.
  3. **Flat list:** with neither, every record is a row. With `parentField`, a record is shown under the record whose id is stored in that field.
- Group and project rows show the period of their records and the average progress. They can be expanded and collapsed and start collapsed.
- The chart opens on the current year by month ("12 months"). Users can switch to one month by day, pick a year (three years back or forward) and move back and forward.
- All field settings in the `gantt` object are field **keynames**, for example `"tasksfield_start"`, not `"cf123"`. The `columns` setting is not used: the fields are taken from the `gantt` object.

## Usage Examples

### Tasks of the project on the project page (flat)
```json
{
  "moduleid": 169,
  "query": [["module167Item.id", "=", "[itemid]"]],
  "relations": {
    "module167": { "parent": 167, "child": 169, "relationid": 196 }
  },
  "gantt": {
    "titleField": "tasksfield_name",
    "startField": "tasksfield_start",
    "endField": "tasksfield_end",
    "progressField": "tasksfield_progress",
    "colorField": "tasksfield_color"
  }
}
```

### All tasks grouped by project and responsible (dashboard)
```json
{
  "moduleid": 169,
  "relations": {
    "module167": { "parent": 167, "child": 169, "relationid": 196 }
  },
  "gantt": {
    "titleField": "tasksfield_name",
    "startField": "tasksfield_start",
    "endField": "tasksfield_end",
    "progressField": "tasksfield_progress",
    "projectField": "projectsfield_name",
    "projectStatusField": "projectsfield_status",
    "groupField": "tasksfield_responsible"
  }
}
```

*In the second example:* every project gets a row (with a dot in the colour of its status, ordered by status), each project is split by the task's responsible person, and each task is a bar.

## Options & Parameters

### Which records
- **moduleid** (number, required): the module whose records are shown. Only records the user may read are shown.
- **query** (list, default: none): filters for the records, for example `["module167Item.id", "=", "[itemid]"]` for the tasks of the project of the page. See [JSON Query](/docs/JSON/json-query).
- **relations** (object, default: none): joins related modules, so that their fields can be used in filters and in the `gantt` settings (for example a project's name and status). See [JSON Relations](/docs/JSON/json-relations).

### Gantt chart (`gantt` object)
All values are field **keynames**. Fields of related modules can be used when the relation is added under `relations`.
- **gantt** (object, required): container for the settings below.
- **titleField** (string, required): the name of the row; any field type.
- **startField** (string, required): date field where the bar starts.
- **endField** (string, required): date field where the bar ends (included).
- **progressField** (string, default: none): number field with the progress in percent (0-100), shown as TC%.
- **colorField** (string, default: the standard bar colour): field whose value is a colour, such as `#ff0000`, used as the bar colour. A list field does not work here, because its value is an option, not a colour.
- **projectField** (string, default: none): groups rows by project, usually a field of a related project module such as its name. Turns on the project, group, task layout.
- **projectStatusField** (string, default: none): list field of the project. The option colour is shown as a dot on the project row, and projects are ordered by the order of the options. Only used with `projectField`.
- **groupField** (string, default: none): groups rows by the value of this field, for example a responsible user or a list field. With `projectField` it is the second level inside each project.
- **parentField** (string, default: none): field holding the record id of another record in the chart; the record is shown under that record. Only used when `projectField` and `groupField` are empty.

### General settings
Title, icon and size work as described in [Common Widget Properties](/docs/modules/widgets/common-properties).

## Related Links
- [Widget Settings](/docs/modules/widgets/widget-settings)
- [JSON Query Documentation](/docs/JSON/json-query)
- [JSON Relations Documentation](/docs/JSON/json-relations)
- [Replaceables](/docs/misc/replaceables)
- [Common Widget Properties](/docs/modules/widgets/common-properties)
