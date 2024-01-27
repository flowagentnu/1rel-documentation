# Main Components

## Introduction
This document provides a comprehensive guide on the JSON structure used for configuring Actional Buttons in 1Relation. It aims to support system designers in comprehending and implementing the diverse components and settings essential for the creation and management of Actional Buttons. The documentation is organized in a hierarchical manner, commencing with top-level components and progressing to more intricate elements, along with their properties. Each component is elucidated with its respective properties, types, and necessary values, complemented by practical JSON examples for a clearer understanding.

## Top-Level Components

The JSON structure for Actional Buttons is mainly segmented into four top-level components: `items`, `visibility`, `actions`, and `outcome`. Each component is pivotal in the configuration of Actional Buttons.

| Component    | Description |
|--------------|-------------|
| `items`      | Defines the data items that the button can interact with or modify. This includes specifying any items for CRUD operations or other item-based conditions and actions. |
| `visibility` | Determines when and under what conditions the button should be visible to the user. This includes settings for visual aspects of the button as well as logical conditions for its display. |
| `actions`    | Specifies the set of actions that will be triggered when the button is pressed. This encompasses not just the direct actions but also any conditional logic that decides what actions are taken. |
| `outcome`    | Describes the expected outcome or feedback after the button is pressed. This can include visual feedback, messages, redirections, or other post-action behaviors. |

### JSON Example

Below is a simplified JSON example showcasing how these top-level components may be organized within an Actional Button's configuration:

```json
{
  "items": {
    // Definitions of items to be used or affected by the button
  },
  "visibility": {
    // Conditions and visual properties defining when and how the button is displayed
  },
  "actions": {
    // Actions and conditional logic to be executed when the button is pressed
  },
  "outcome": {
    // Definitions of the outcome or feedback following the button's activation
  }
}
