# Business Process Widget

The Business Process Widget shows the steps of a process as a horizontal row of steps, based on a status field of the record. Users can see at a glance which steps are done, which step the record is in now, and which steps are still ahead.

## When to Use
Use the Business Process Widget on a record page to visualise a process that follows a status field, for example *New → Planned → In progress → Done* for a case or an order.

## How It Works
- Choose a **status field** (a dropdown or radio field) and the options of that field that make up the normal flow, in the order they happen.
- Each option becomes a step, named after the option. The option the record has now is the **active** step. Steps before it are shown as **completed**, steps after it as **not started**.
- **Side flow**: if the record has an option that is not one of the steps (for example *On hold* or *Cancelled*), that option is shown as an orange extra step after the first step. The first step is shown as completed and the other steps as not started.
- If the record has no value in the status field, the widget shows the message that no process steps are configured.
- The widget updates when the record is changed.
- The widget only works on a record page.
- The widget has no header, title, icon or background, so it blends into the page. The form editor therefore does not offer these settings.

In the form editor on the [widget settings page](./widget-settings.md), these settings are in the **Process steps** section. Pick the status field first; the list of steps then offers the options of that field.

## Usage Example
```json
{
  "bp": {
    "statusField": "cases_status",
    "options": [
      "cases_status_new",
      "cases_status_planned",
      "cases_status_in-progress",
      "cases_status_done"
    ]
  }
}
```
*Shows four steps from the field `cases_status`. A case with the status Planned shows New as completed, Planned as active, and In progress and Done as not started. A case with the status On hold shows On hold as an orange side step after New.*

## Options & Parameters
- **bp** (object, required): The process settings.
  - **statusField** (text, required): The **keyname** of the status field (not its id), for example `cases_status`. The field must be a dropdown or radio field.
  - **options** (array of texts, required): The **keynames** of the options that are the steps, in step order. Options that do not belong to the field are skipped.

There are no settings for the colour, icon or text of each step. The step names are the option names of the field.

## Related Links
- [Widget Settings](./widget-settings.md)
- [Common Widget Properties](./common-properties.md)
