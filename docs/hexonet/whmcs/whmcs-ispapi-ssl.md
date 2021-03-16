---
layout: default
title: SSL Certs
parent: WHMCS
grand_parent: HEXONET
nav_order: 7
showtoc: 1
---

# ISPAPI SSL Certs

[![License: MIT]({{ 'assets/images/License-MIT-blue.svg' | relative_url }})](//opensource.org/licenses/MIT)

This Repository covers the WHMCS SSL Module of HEXONET. It provides the following features in WHMCS:

## Introduction

The ISPAPI SSL Module is a combination of an addon and a provisioning module.

The SSL addon provides a user friendly interface to automatically import SSL certificates as WHMCS products. In addition, it gives the possibility to update prices based on current cost and configurable margins.

The SSL provisioning module connects to the configured ISPAPI registrar module to establish a possibility to register and maintain SSL certificates at HEXONET.

## Supported Features

The ISPAPI SSL Module supports the following functions and features:

- Unified handling of different suppliers
- Support for testing environment
- Certificate products directly connected to the ISPAPI Registrar Module
- Create, renew and revoke certificates
- SSL addon
  - Load available SSL certificates and import them under a product group
  - Bulk price update by using a profit margin
  - Multicurrency support

## Requirements

- WHMCS version 8.0 or higher
- Latest **ISPAPI Registrar Module**. This module can be downloaded [here](//github.com/hexonet/whmcs-ispapi-registrar/raw/master/whmcs-ispapi-registrar-latest.zip). Our SSL Cert Module does not support the WHMCS built-in HEXONET provider module!
- **HEXONET Live or Test Account** must be configured in the ISPAPI Registrar Module. Account creation is always free:
  - [OT&E (Test System) Account](//www.hexonet.net/signup-ote)
  - [LIVE (Real World System) Account](//www.hexonet.net/cart?signup=true)
- PHP 7.2 or higher

For the latest WHMCS minimum system requirements, please refer to [System_Requirements](//docs.whmcs.com/System_Requirements).

If you wish to use this module on older WHMCS versions, please use [Version 8.0](//github.com/hexonet/whmcs-ispapi-ssl/releases) or earlier.

## Installation / Upgrade

Download the ZIP archive including the latest release version [here](//github.com/hexonet/whmcs-ispapi-ssl/raw/master/whmcs-ispapi-ssl-latest.zip).

Copy files from the zip archive to your WHMCS installation root directory ($YOUR_WHMCS_ROOT), while keeping the folder structure intact.

e.g.

     addons/ispapissl_addon
     => $YOUR_WHMCS_ROOT/modules/addons/ispapissl_addon

     servers/ispapissl
     => $YOUR_WHMCS_ROOT/modules/servers/ispapissl

**For an update**, unzip the downloaded file and upload the content of addons and servers folders to your WHMCS root directory. Then go to `Setup > Addon Modules > ISPAPI SSL Addon > Configure` and click on the “Save Changes” button.

**NOTE**: The WHMCS root directory is the folder which contains the “configuration.php” file.

## Addon Activation

Within the WHMCS Admin area, go to `Setup > Addon Modules`

![Configuration]({{ 'assets/images/whmcs/ispapi-ssl/configuration.png' | relative_url }})

Activate the ISPAPI SSL Addon, give the module “Full Administrator” Access Control right.

## Addon Configuration

Within the WHMCS Admin area, navigate to `Addons > ISPAPI SSL`

## Import Prices

You are now ready to create SSL certificate products in WHMCS.
You can do so manually, or automatically by using our convenient addon.

### Wizard Mode

1. Open the `ISPAPI SSL` Addon in the WHMCS Admin Area
2. Configure price margin, rounding and further settings to your liking
3. Tick the checkboxes on the products you wish to import or update
4. Press the Import button

![GUI]({{ 'assets/images/whmcs/ispapi-ssl/addon.gif' | relative_url }})

### Manual Mode

Within the WHMCS Admin area, navigate to `Setup > Products/Services > Products/Services`

1. Create a new product group. In this example, we will name the new group as “SSL Certificates”.
2. Create a new product.
   - Set Product Type to "Other".
   - Set Product Group as desired.
   - Define a product name.
     ![create new product]({{ 'assets/images/whmcs/ispapi-ssl/create_new_product.png' | relative_url }})
3. Open the `Details` tab.
   - Set a Product Description (optional).
   - Ensure the Welcome Email field is set to “None” as the module sends its own email.
   - Ensure the Required Domain field is unchecked.
     ![details tab]({{ 'assets/images/whmcs/ispapi-ssl/details_tab.png' | relative_url }})
4. Open the `Pricing` tab.
   - Set the Payment Type field to Recurring.
   - Set a price.
     ![pricing tab]({{ 'assets/images/whmcs/ispapi-ssl/pricing_tab.png' | relative_url }})
5. Open the `Module Settings` tab.
   - Choose `ISPAPI SSL Certificate` for the module Name field.
   - Enter Certificate Class. For a list of possible certificate classes, please refer to [this article](//wiki.hexonet.net/wiki/SSL).
   - Set “Automatically setup the product as soon as the first payment is received” to ensure the certificate is paid for before registration.
     ![Module Settings]({{ 'assets/images/whmcs/ispapi-ssl/modulesettings_tab.png' | relative_url }})
6. Click `Save changes`.

## Manage imported Prices

Managing imported certificates can be done at `Setup > Products/Services > Products/Services`

![manageimportedcerti]({{ 'assets/images/whmcs/ispapi-ssl/manage_imported_certificates.png' | relative_url }})

## Frontend overview

`WHMCS client area > Store > SSL Certificates`

![frontend-overview]({{ 'assets/images/whmcs/ispapi-ssl/frontend_overview.png' | relative_url }})

## How to buy a certificate

1. Go to the created certificate group on your WHMCS frontend and “Order Now” the desired certificate.
2. Follow the steps in the buying process.
3. Once the invoice is paid, you will receive an SSL certificate Configuration email, which contains a link to configure the new certificate.
4. Click this link or to go to the bought SSL certificate product page and click the “Configure SSL Certificate” button.

   ![buy-cert01]({{ 'assets/images/whmcs/ispapi-ssl/buy_a_certificate.png' | relative_url }})

5. On this configuration page, the module will prefill the contact information and auto generate a CSR based on the domain provided and your client information. At this point, you are free to alter any information and replace the proposed CSR with your own if you wish.

   ![buycert02]({{ 'assets/images/whmcs/ispapi-ssl/buy_a_certificate_02.png' | relative_url }})

6. On the subsequent configuration page, you will be asked for a Certificate Approver Email.

   ![buycert03]({{ 'assets/images/whmcs/ispapi-ssl/buy_a_certificate_03.png' | relative_url }})

7. The configuration is now completed

   ![cert04]({{ 'assets/images/whmcs/ispapi-ssl/buy_a_certificate_04.png' | relative_url }})

8. Follow the instructions you will get via e-mail from the Certificate Authority to validate your purchase.
9. It might take some minutes after validation until the certificate shows up in the client area
