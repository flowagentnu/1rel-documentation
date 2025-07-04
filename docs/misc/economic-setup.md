1) Open https://secure.e-conomic.com/secure/api1/requestaccess.aspx?appPublicToken=WI2oIGz09dBKrhbrA2WD98kviDvI3YD7qRnJVGoljKY1
2) Follow the guide on screen to allow FlowAgent acces to your e-conomic account
3) Copy the "App Token" and save it for later use.
4) Go to FlowAgent marketplace and install E-conomic integration
5) Open the E-conomic integration in FlowAgent and paste the below code into the configuraton:
```json
{
  "api_key": "",
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

6) Replace the `api_key` with the App Token you copied in step 3.
7) Update all fields in the configuration to match your FlowAgent setup.
8) Save the configuration.

9) Go back into e-conomic and open https://secure.e-conomic.com/settings/extensions/web-hooks
10) Create a new webhook with the following settings:
- Type: Vare opdateret
- Navn: Vare til FlowAgent
- URL: https://job.flowagent.nu/api/sync/economic/products/{app_token}
- Content-Type: application/json
- Sendte data: numbers=[OLDNUMBER]&newnumber=[newnumber]&oldnumber=[oldnumber]
11) Create a new webhook with the following settings:
- Type: Kunde opdateret
- Navn: Kunder til FlowAgent
- URL: https://job.flowagent.nu/api/sync/economic/customers/{app_token}
- Content-Type: application/json
- Sendte data: numbers=[OLDNUMBER]&newnumber=[newnumber]&oldnumber=[oldnumber]

12) Replace `{app_token}` in the URLs with the App Token displayed in the FlowAgent Marketplace under the E-conomic integration.