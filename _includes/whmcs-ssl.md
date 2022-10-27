# SSL Certificates

[![License: MIT]({{ 'assets/images/License-MIT-blue.svg' | relative_url }})](//opensource.org/licenses/MIT)

WHMCS Provisioning Module and Addon for HEXONET & CentralNic Reseller SSL certificates

## Introduction

The CentralNic SSL Module is a combination of an addon and a provisioning module.

The SSL addon provides a user friendly interface to automatically import SSL certificates as WHMCS products. In addition, it gives the possibility to update prices based on current cost and configurable margins.

The SSL provisioning module connects to the configured registrar module and allows you to register and maintain SSL certificates over HEXONET or CentralNic Reseller.

## Supported Features

The CentralNic SSL Module supports the following functions and features:

- Support for the CentralNic brands [HEXONET](//hexonet.net) and [CentralNic Reseller](//www.centralnicreseller.com)
- SSL Provisioning Module
  - Support for both productive and test (OT&E) environments
  - Create, renew and revoke certificates
  - Support for Email, DNS and File based domain validation methods
- SSL addon
  - Import available SSL certificates
  - Bulk price update by using a profit margin
  - Multicurrency support
  - Import product logos and descriptions
  - Unified handling of different certificate providers

## Requirements

- WHMCS version 8.0 or higher
  For the latest WHMCS minimum system requirements, please refer to [WHMCS System Requirements](//docs.whmcs.com/System_Requirements) page.
  *If you wish to use this module on older WHMCS versions, please use [Version 8.0](//github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/releases) or earlier*
- PHP 7.4 or higher
- For HEXONET:
  - Latest **ISPAPI Registrar Module**. This module can be downloaded [here](//github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/raw/main/whmcs-cnic-bundle.zip). Our SSL Cert Module does not support the WHMCS built-in HEXONET provider module!
  - **HEXONET Live or Test Account** must be configured in the ISPAPI Registrar Module. Account creation is always free:
    - [OT&E (Test System) Account](//www.hexonet.net/signup-ote)
    - [LIVE (Real World System) Account](//www.hexonet.net/cart?signup=true)
- For CentralNic Reseller:
  - Latest **CentralNic Reseller Registrar Module**. This module can be downloaded [here](//github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/raw/main/whmcs-cnic-bundle.zip). Our SSL Cert Module does not support the WHMCS built-in CentralNic Reseller provider module!
  - **CentralNic Reseller Live or Test Account** must be configured in the CentralNic Reseller Registrar Module. Account creation is always free: [Register](//www.centralnicreseller.com)

## Installation / Upgrade

Download the ZIP archive including the latest release version [here](//github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/raw/main/whmcs-cnic-bundle.zip).

Extract/copy all contents from the zip archive to your WHMCS installation root directory, while keeping the folder structure intact.

### Upgrading

{% include whmcs-bundle-upgrade.md %}

## SSL Addon

### Addon Activation

- **For users with WHMCS version 8.0+**, Navigate to `WHMCS Admin Area` > `System Settings` > `Addon Modules`

- **For users with WHMCS version 7.3+**, In the WHMCS Admin area, go to `Setup` > `Addon Modules`

![Configuration]({{ 'assets/images/whmcs/cnic-ssl/configuration.png' | relative_url }})

1. Activate the `CNIC SSL Addon`
2. Choose the registrar you want to use (additional module and accounts required! see [Requirements](#requirements))
3. Give the module “Full Administrator” Access Control right.
4. Save changes

You are now ready to create SSL certificate products in WHMCS.
You can do so manually, or automatically by using our convenient addon.

### Automatic Product Import & Pricing Sync

This will allow you to import any desired certificate as WHMCS product.
Any existing product will be updated with current information.

1. Open the `CNIC SSL` Addon in the WHMCS Admin Area.
2. Fill out the form to your liking.
   - `Margin type`: Percentage or Fixed Amount.
   - `Profit margin`: percentage value or amount in your default currency.
   - `Round to Next`: select the desired rounding value.
   - `Apply rounding to all currencies`: if active, the rounding will be applied to the prices for currencies.
   - `Automatic Registration`: select the desired automatic registration behavior for the products.
   - `Generate product descriptions`: this will add provider logos and feature highlights to the imported products. The recommended Order Form Template to leverage this information is Supreme Comparison.
   - `Generate product groups`: this will create one product group per certificate provider with group features. If disabled, all products will be assigned to the same product group. Existing products are not affected.
3. Tick the checkboxes on the products you wish to import or update.
4. Press the Import button. Existing products will be updated, missing products will be automatically created.

![GUI]({{ 'assets/images/whmcs/cnic-ssl/addon.png' | relative_url }})

## Managing SSL Products

Product management can be handled automatically by using the [SSL Addon](#ssl-addon).
However it is possible to do so manually, if desired.

### Manually create Products

Within the WHMCS Admin area, navigate to `Setup > System Settings > Products/Services`

1. Create a new product group. In this example, we will name the new group as “SSL Certificates”.
2. Create a new product.
   - Set Product Type to "Other".
   - Set Product Group as desired.
   - Define a product name.
   - Select `CNIC SSL Certificate` as Module.

     ![create new product]({{ 'assets/images/whmcs/cnic-ssl/create_new_product.png' | relative_url }})

3. Open the `Details` tab.
   - Set a Product Description (optional).
   - Ensure the Welcome Email field is set to “None” as the module sends its own email.
   - Ensure the Required Domain field is unchecked.

     ![details tab]({{ 'assets/images/whmcs/cnic-ssl/details_tab.png' | relative_url }})

4. Open the `Pricing` tab.
   - Set the Payment Type field to Recurring.
   - Set an annual price.

     ![pricing tab]({{ 'assets/images/whmcs/cnic-ssl/pricing_tab.png' | relative_url }})

5. Open the `Module Settings` tab.
   - Enter Certificate Class.
     - For HEXONET: refer to [this article](//wiki.hexonet.net/wiki/SSL) for a list of possible certificate classes
     - For CentralNic Reseller:
       1. Log into your [Web Interface](//account.centralnicreseller.com/)
       2. In the Menu, open `SSL > Certificate Prices`
       3. The value shown in the `Type` column would be the certificate class you need to specify
   - Set “Automatically setup the product as soon as the first payment is received” to ensure the certificate is paid for before registration.

     ![Module Settings]({{ 'assets/images/whmcs/cnic-ssl/modulesettings_tab.png' | relative_url }})

6. Click `Save changes`.

### Manage imported Prices

Managing imported certificates can be done at `Setup > System Settings > Products/Services`

![manageimportedcerti]({{ 'assets/images/whmcs/cnic-ssl/manage_imported_certificates.png' | relative_url }})

## Customer Experience

### Client Area

You can check the product groups in the store in your WHMCS Client Area.
If you used our Addon to import Product Groups and Products, you will see those pages already configured with a comparison cart, product features, certificate provider logos and so on. You are basically ready to go!

![frontend-overview]({{ 'assets/images/whmcs/cnic-ssl/frontend_overview.png' | relative_url }})

### Certificate Ordering Process

This is how a client would proceed to order an SSL certificate.

1. Go to the created certificate group on your WHMCS Client Area and “Order Now” the desired certificate.
2. Follow the steps in the buying process.
3. Once the invoice is paid, you will receive an SSL certificate Configuration email, which contains a link to configure the new certificate.
4. Click this link or to go to the bought SSL certificate product page and click the “Configure SSL Certificate” button.

   ![buy-cert01]({{ 'assets/images/whmcs/cnic-ssl/buy_a_certificate_01.png' | relative_url }})

5. On this configuration page, the module will prefill the contact information and auto generate a CSR based on the domain provided and your client information. At this point, you are free to alter any information and replace the proposed CSR with your own if you wish.

   ![buycert02]({{ 'assets/images/whmcs/cnic-ssl/buy_a_certificate_02.png' | relative_url }})

6. On the subsequent configuration page, you will be asked for a Certificate Approver Email.
   Alternatively, you can choose the `DNS` or `HTTP File` validation methods, if available (not all certificates support all validation methods).

   ![buycert03]({{ 'assets/images/whmcs/cnic-ssl/buy_a_certificate_03.png' | relative_url }})

7. The configuration is now completed

   ![cert04]({{ 'assets/images/whmcs/cnic-ssl/buy_a_certificate_04.png' | relative_url }})

8. Follow the instructions you will get via e-mail from the Certificate Authority to validate your purchase.
   If you chose `DNS` or `HTTP File` validation, just follow the instructions that are presented to you in the confirmation screen.
9. It might take some minutes after validation until the certificate shows up in the client area
