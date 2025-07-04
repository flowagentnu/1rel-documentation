# E-conomic Integration Setup

A step-by-step guide to connecting FlowAgent with your E-conomic account for accounting, invoicing, and automation.

## When to Use
Use this page when you want to integrate FlowAgent with E-conomic for seamless financial data sync, invoicing, and automation (including webhooks).

## How It Works
1. **Authorize FlowAgent in E-conomic:**
   - Go to [E-conomic API Access](https://secure.e-conomic.com/secure/api1/requestaccess.aspx?appPublicToken=WI2oIGz09dBKrhbrA2WD98kviDvI3YD7qRnJVGoljKY1).
   - Follow the on-screen guide to allow FlowAgent access to your E-conomic account.
   - Copy the "App Token" provided at the end. You will need this for configuration.
2. **Install the Integration:**
   - In FlowAgent, go to the Marketplace and install the E-conomic integration.
3. **Configure the Integration:**
   - Open the E-conomic integration settings in FlowAgent.
   - Paste your App Token and fill out the configuration JSON (see below for a full example and field explanations).
4. **Set Up Webhooks in E-conomic:**
   - Go to [E-conomic Webhooks Settings](https://secure.e-conomic.com/settings/extensions/web-hooks).
   - Create a new webhook for product updates:
     - **Type:** Vare opdateret
     - **Navn:** Vare til FlowAgent
     - **URL:** `https://job.flowagent.nu/api/sync/economic/products/{app_token}`
     - **Content-Type:** application/json
     - **Sendte data:** `numbers=[OLDNUMBER]&newnumber=[newnumber]&oldnumber=[oldnumber]`
   - Create a new webhook for customer updates:
     - **Type:** Kunde opdateret
     - **Navn:** Kunder til FlowAgent
     - **URL:** `https://job.flowagent.nu/api/sync/economic/customers/{app_token}`
     - **Content-Type:** application/json
     - **Sendte data:** `numbers=[OLDNUMBER]&newnumber=[newnumber]&oldnumber=[oldnumber]`
   - Replace `{app_token}` with your actual E-conomic App Token.
   - These webhooks will ensure FlowAgent receives real-time updates from E-conomic for products and customers.

## Configuration Example (JSON)
Below is a sample configuration for the E-conomic integration. Adjust the modules, field mappings, and values to match your setup.

```json
{
  "api_key": "<your-app-token>",
  "layout_number": 20,
  "currency": "DKK",
  "vat": 0.25,
  "payment_terms": {
    "number": 4,
    "days_of_credit": 14,
    "name": "Netto 14 dage"
  },
  "vat_zone": {
    "name": "Domestic",
    "number": 1,
    "enabled_for_customer": true,
    "enabled_for_supplier": true
  },
  "orders": {
    "module": "bogf-ring",
    "fieldmap": {
      "title": "bogfringfield_titel",
      "delivery_date": "bogfringfield_bogf-ringsdato",
      "message": "bogfringfield_e-conomic-besked",
      "status": "bogfringfield_status"
    },
    "relations": {
      "customer": "kkkenermr_k-kken-bogf-ring",
      "orderlines": "bogfringmr_bogf-ring-bogf-ringslinjer"
    },
    "update": {
      "success": "bogfringfield_statusopt_bogf-rt",
      "error": "bogfringfield_statusopt_fejlet"
    }
  },
  "orderlines": {
    "module": "bogf-ringslinjer",
    "fieldmap": {
      "title": "bogfringslinjerfield_titel",
      "amount": "bogfringslinjerfield_antal",
      "discount_percentage": "bogfringslinjerfield_-discount"
    },
    "relations": {
      "product": "produktermr_produkter-bogf-ringslinjer"
    }
  },
  "products": {
    "module": "produkter",
    "moduleitemtype": "produktermit_produkter",
    "distribution_number": 40,
    "fieldmap": {
      "name": "produkterfield_produktnavn",
      "number": "produkterfield_produkt-nr",
      "sales_price": "produkterfield_salgspris",
      "cost_price": "produkterfield_kostpris",
      "items_per_colli": "produkterfield_antal-i-kolli"
    }
  },
  "customers": {
    "module": "k-kkener",
    "moduleitemtype": "kkkenermit_skole",
    "fieldmap": {
      "distribution_number": "kkkenerfield_afdelingsnummer",
      "company_name": "kkkenerfield_k-kken",
      "number": "kkkenerfield_k-kken-nummer",
      "address": "kkkenerfield_vejnavn",
      "city": "kkkenerfield_by",
      "zip": "kkkenerfield_postnummer",
      "country": "kkkenerfield_land",
      "department_id": "kkkenerfield_afdelings-id",
      "contact_id": "kkkenerfield_kontakt-id",
      "ean": "kkkenerfield_ean"
    }
  }
}
```

### Configuration Field Explanations
- **api_key**: Your E-conomic App Token.
- **layout_number, currency, vat, payment_terms, vat_zone**: General invoice/accounting settings.
- **orders, orderlines, products, customers**: Map your FlowAgent modules and fields to E-conomic data.
- **relations**: Define how modules are linked (e.g., which customer/orderlines relate to which order).
- **update**: Specify which fields to update on success/error.

## Tips
- Always test the integration in a safe environment before using it in production.
- Use the Marketplace to install and manage integrations.
- Set up webhooks for real-time updates between E-conomic and FlowAgent.

## Related Links
- [Marketplace](../sites/marketplace.md)
- [Webhook Action](../JSON/actions-webhook.md)

---

For more on integrations and automations, see the Marketplace and Webhook documentation.