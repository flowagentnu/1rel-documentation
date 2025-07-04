# Documents

The Documents module lets you create and manage document templates inside a module. These templates can be used for mail merge (e.g., sending personalized emails), generating PDFs (like invoices or order confirmations), and more.

## When to Use
Use the Documents module when you need to create reusable templates for emails, PDFs, or printed documents—such as invoices, order confirmations, or personalized letters.

## How It Works
- Write your document using a WYSIWYG editor directly in the module.
- Insert replaceables (e.g., `[user.name]`, `[itemid]`) to personalize content for each recipient or item.
- Templates can be used for mail merge, automated emails, or PDF generation.
- Attach documents to items or use them in automations.

## Usage Example
**Create a document:**
1. Go to the Documents module in your project or sales module.
2. Click "Create Document" and use the WYSIWYG editor to write your template.
3. Insert replaceables like `[user.name]`, `[item.cf100]`, etc.
4. Save and use the document in your workflows eg. send email action.

## Tips
- Use replaceables to personalize each document for the recipient or item.
- Combine with automations to send documents automatically.

## Related Links
- [Replaceables](/docs/misc/replaceables.md)
- [Send Email Action](/docs/JSON/actions-send-email.md)