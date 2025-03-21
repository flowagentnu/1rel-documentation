# Language

The primary language of the Flow platform is English. However, the platform supports multiple languages to cater to a diverse user base. A site has a default language, and users can change this setting to view the site in their preferred language.

## Multi-Language Support

When configuring objects (e.g., tabs, widgets, action buttons), you can specify the languages that the site supports. This allows you to provide translations for the site's content, such as labels, descriptions, and messages. The platform uses the user's language preference to display the content in the appropriate language.

Typically, when displaying text, a `label` is used. There can be variations, such as `description` and others. To support multiple languages, you need to provide a `labels` object with the language code as the key and the translation as the value (if the variable is not called `label`, but something else, just add an `s` to the end, e.g., `descriptions`).

The `label` should always be written in English, as it is the default language of the platform. Then, in the `labels` object, you can provide translations for the languages you want to support.

### Example

```json
"visual": {
    "label": "Complete Task",
    "labels": {
        "da_dk": "Afslut opgave",
        "pl_pl": "Zakończ zadanie",
        "ro_ro": "Finalizează sarcina"
    }
}
```
