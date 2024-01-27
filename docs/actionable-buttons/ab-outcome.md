# Outcome

The `outcome` component in an Actional Button's JSON configuration in 1Relation is crucial for defining the feedback or response after an action is executed. It outlines how the system should convey the result of the action to the user, enhancing the interactive experience by providing clear and immediate feedback.

## Structure of `outcome`

The `outcome` object specifies the type of response that should be presented to the user after the action is performed. This could be in the form of visual feedback, a message, redirection, or other post-action behaviors.

| Property    | Type    | Required | Options         | Description |
|-------------|---------|----------|-----------------|-------------|
| `type`      | string  | Yes      | toast, redirect, none | Defines the type of outcome or feedback to present. |
| `visual`    | object  | No       |                 | Specifies the visual properties of the outcome, like disabling or hiding the button post-action. |
| `title`     | string  | No       |                 | The title of the toast, if a toast is used. |
| `message`   | string  | No       |                 | The message content of the toast or feedback to the user. |
| `uri`       | string  | No       |                 | The URI to redirect the user to, if a redirect is specified. |

### Outcome Types and Configurations

Depending on the `type` of outcome chosen, different properties may be used:

#### Toast
For outcomes intended to display a toast message:

| Property | Type   | Required | Options | Description |
|----------|--------|----------|---------|-------------|
| `title`  | string | No       |         | The title or heading of the toast message. |
| `message`| string | No       |         | The detailed message or content of the toast. |

#### Redirect
For outcomes that involve redirecting the user to another page:

| Property | Type   | Required | Options | Description |
|----------|--------|----------|---------|-------------|
| `uri`    | string | Yes      |         | The destination URI to which the user will be redirected. |

#### Visual Feedback
For outcomes that involve changing the visual state of the button:

| Property    | Type    | Required | Options | Description |
|-------------|---------|----------|---------|-------------|
| `disabled`  | boolean | No       |         | Specifies whether the button should be disabled post-action. |
| `hide`      | boolean | No       |         | Specifies whether the button should be hidden post-action. |

### JSON Examples

#### Example 1: Toast Outcome
Below is an example illustrating the `outcome` component with a toast type within an Actional Button's configuration:

```json
{
  "outcome": {
    "type": "toast",
    "visual": {
      "disabled": true,
      "hide": false
    },
    "title": "Action Completed",
    "message": "The task status has been successfully updated."
  }
}
```

In this example:

- The `type` is set to "toast", indicating that a toast message will be displayed as feedback.
- The `visual` properties indicate that the button will be disabled after the action, but not hidden.
- The `title` and `message` provide the content of the toast, giving the user clear feedback about the action that was performed.

#### Example 2: Redirect Outcome
Below is another example illustrating the `outcome` component with a redirect type within an Actional Button's configuration:

```json
{
  "outcome": {
    "type": "redirect",
    "uri": "/dashboard"
  }
}
```

In this example:

- The `type` is set to "redirect", indicating that the user will be redirected to a new URI after the action is performed.
- The `uri` specifies the destination, in this case, "/dashboard", where the user will be redirected, providing a seamless navigation experience post-action.

These examples demonstrate the flexibility and user-friendly design of the `outcome` component in Actional Buttons, ensuring clear communication and interaction with the user.
