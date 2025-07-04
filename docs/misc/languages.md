# Languages

A guide to multi-language support and translation in FlowAgent.

## When to Use
Use this page when you want to provide translations for labels, descriptions, or messages in your site.

## How It Works
- The platform's default language is English, but you can add translations for any supported language.
- Use a `labels` object (or `descriptions`, etc.) with language codes as keys for translations.
- The user's language preference determines which translation is shown.

## Usage Example
**Provide translations for a button label:**
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

## Tips
- Always provide an English default for `label`.
- Add as many translations as your users need.
- Use language codes (e.g., `da_dk`, `pl_pl`, `ro_ro`).

## Related Links
- [Visibility Component](../sites/actionalbuttons/components/visibility.md)

---

For more on translations, see the Visibility Component documentation.
