# Price Group App

A guide to using the Price Group app in FlowAgent for advanced pricing and discount logic.

## When to Use
Use this app when you need to manage complex pricing rules, customer-specific prices, or bulk discounts.

## How It Works
- Price Groups let you define different prices for products based on customer, quantity, or other criteria.
- Configure rules in the app settings to match your business needs.
- The app integrates with orders, products, and customer modules.

## JSON Configuration Example
Below is a real-world example of a Price Group app configuration:

```json
{
  "pricegroup": {
    "products": {
      "keyname": "produkter",
      "fieldmap": {
        "salesprice": "produkterfield_salgspris"
      }
    },
    "customers": {
      "customercaserelation": "kundermr_kundeprojekt"
    },
    "pricegroups": {
      "keyname": "price-groups",
      "fieldmap": {
        "defaultPercentage": "pricegroupsfield_default-discount-percentage"
      },
      "pricegrouplinesrelation": "pricegroupsmr_price-groups-price-group-lines",
      "customerrelation": "pricegroupsmr_price-groups-customers",
      "caserelation": "pricegroupsmr_price-groups-cases"
    },
    "pricegrouplines": {
      "keyname": "price-group-lines",
      "fieldmap": {
        "discounttype": "pricegrouplinesfield_discount-type",
        "amount": "pricegrouplinesfield_amount",
        "discounttypeOptions": {
          "percentage": "pricegrouplinesfield_discounttypeopt_percentage",
          "fixed": "pricegrouplinesfield_discounttypeopt_fixed"
        }
      },
      "productrelation": "pricegrouplinesmr_price-group-line-products"
    }
  }
}
```

### Explanation
- **products**: Maps product key names and sales price fields.
- **customers**: Defines the relation between customers and cases.
- **pricegroups**: Sets up price group key names, default discount fields, and relations to price group lines, customers, and cases.
- **pricegrouplines**: Configures discount type, amount, discount type options, and product relations for each price group line.

## Usage Example
- Set up a price group for a VIP customer to get special pricing on certain products.
- Apply bulk discounts automatically when order quantity exceeds a threshold.

## Tips
- Review your price group rules regularly to ensure accuracy.
- Combine with automations for dynamic pricing updates.