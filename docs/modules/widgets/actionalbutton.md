# ActionalButton Widget

The ActionalButton Widget lets you display a large, interactive Actional Button directly on your dashboard or page, making key actions highly visible and accessible.

## When to Use
Use the ActionalButton Widget when you want to highlight a specific action—such as creating an order, submitting a request, or triggering a workflow—directly from a widget area.

## How It Works
- The widget displays a single Actional Button, styled prominently.
- All visibility, appearance, and logic are controlled by the Actional Button’s own configuration.
- The widget simply references the button by its `keyName`.
- You can override some visual options (like `displayIconOnly`) in the widget config if needed.

## Usage Example

```json
{
  "actionalButton": {
    "keyName": "ab_m-ltid---tilf-j-bestilling",
    "visibility": {
      "visual": {
        "displayIconOnly": false
      }
    }
  }
}
```
*This example displays the Actional Button with keyName `ab_m-ltid---tilf-j-bestilling` as a large widget, showing both icon and label.*

## Options & Parameters
- **actionalButton.keyName** (string, required): The keyName of the Actional Button to display.
- **actionalButton.visibility.visual.displayIconOnly** (boolean, optional): Override to show/hide label next to the icon.

## Related Links
- [Actional Buttons Overview](/docs/sites/actionalbuttons/introduction.md)
- [How to Use Actional Button](/docs/sites/actionalbuttons/how-to-use.md)
- [Visibility Component](/docs/sites/actionalbuttons/components/visibility.md)
- [Count Widget](/docs/modules/widgets/count.md)
