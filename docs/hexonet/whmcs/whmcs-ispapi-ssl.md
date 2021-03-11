---
layout: default
title: ISPAPI SSL Certs
parent: WHMCS
grand_parent: HEXONET
nav_order: 7
showtoc: 1
---

# ISPAPI SSL Certs

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Build Status](https://github.com/hexonet/whmcs-ispapi-ssl/workflows/Release/badge.svg?branch=master)](https://github.com/hexonet/whmcs-ispapi-ssl/workflows/Release/badge.svg?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/hexonet/whmcs-ispapi-ssl/blob/master/CONTRIBUTING.md)

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
- Latest **ISPAPI Registrar Module**. This module can be downloaded [here](https://github.com/hexonet/whmcs-ispapi-registrar/raw/master/whmcs-ispapi-registrar-latest.zip). Our SSL Cert Module does not support the WHMCS built-in HEXONET provider module!
- **HEXONET Live or Test Account** must be configured in the ISPAPI Registrar Module. Account creation is always free:
  - [OT&E (Test System) Account](https://www.hexonet.net/signup-ote)
  - [LIVE (Real World System) Account](https://www.hexonet.net/cart?signup=true)
- PHP 7.2 or higher

For the latest WHMCS minimum system requirements, please refer to
[https://docs.whmcs.com/System_Requirements](https://docs.whmcs.com/System_Requirements)

If you wish to use this module on older WHMCS versions, please use [Version 8.0](https://github.com/hexonet/whmcs-ispapi-ssl/releases) or earlier.

## Installation / Upgrade

Download the ZIP archive including the latest release version [here](https://github.com/hexonet/whmcs-ispapi-ssl/raw/master/whmcs-ispapi-ssl-latest.zip).

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

![Configuration]({{site.baseurl}}/assets/images/whmcs/ispapi-ssl/configuration.png)

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

![GUI]({{site.baseurl}}/assets/images/whmcs/ispapi-ssl/addon.gif)

### Manual Mode

Within the WHMCS Admin area, navigate to `Setup > Products/Services > Products/Services`

1. Create a new product group. In this example, we will name the new group as “SSL Certificates”.
2. Create a new product.
   - Set Product Type to "Other".
   - Set Product Group as desired.
   - Define a product name.
     ![create new product]({{site.baseurl}}/assets/images/whmcs/ispapi-ssl/create_new_product.png)
3. Open the `Details` tab.
   - Set a Product Description (optional).
   - Ensure the Welcome Email field is set to “None” as the module sends its own email.
   - Ensure the Required Domain field is unchecked.
     ![details tab]({{site.baseurl}}/assets/images/whmcs/ispapi-ssl/details_tab.png)
4. Open the `Pricing` tab.
   - Set the Payment Type field to Recurring.
   - Set a price.
     ![pricing tab]({{site.baseurl}}/assets/images/whmcs/ispapi-ssl/pricing_tab.png)
5. Open the `Module Settings` tab.
   - Choose `ISPAPI SSL Certificate` for the module Name field.
   - Enter Certificate Class. For a list of possible certificate classes, please refer to [this article](https://wiki.hexonet.net/wiki/SSL).
   - Set “Automatically setup the product as soon as the first payment is received” to ensure the certificate is paid for before registration.
     ![Module Settings]({{site.baseurl}}/assets/images/whmcs/ispapi-ssl/modulesettings_tab.png)
6. Click `Save changes`.

## Manage imported Prices

Managing imported certificates can be done at `Setup > Products/Services > Products/Services`

![manageimportedcerti]({{site.baseurl}}/assets/images/whmcs/ispapi-ssl/manage_imported_certificates.png)

## Frontend overview

`WHMCS client area > Store > SSL Certificates`

![frontend-overview]({{site.baseurl}}/assets/images/whmcs/ispapi-ssl/frontend_overview.png)

## How to buy a certificate

1. Go to the created certificate group on your WHMCS frontend and “Order Now” the desired certificate.
2. Follow the steps in the buying process.
3. Once the invoice is paid, you will receive an SSL certificate Configuration email, which contains a link to configure the new certificate.
4. Click this link or to go to the bought SSL certificate product page and click the “Configure SSL Certificate” button.

   ![buy-cert]({{site.baseurl}}/assets/images/whmcs/ispapi-ssl/buy_a_certificate.png)

5. On this configuration page, the module will prefill the contact information and auto generate a CSR based on the domain provided and your client information. At this point, you are free to alter any information and replace the proposed CSR with your own if you wish.

   ![buycert02]({{site.baseurl}}/assets/images/whmcs/ispapi-ssl/buy_a_certificate_02.png)

6. On the subsequent configuration page, you will be asked for a Certificate Approver Email.

   ![buycert3]({{site.baseurl}}/assets/images/whmcs/ispapi-ssl/buy_a_certificate_03.png)

7. The configuration is now completed

   ![cert04]({{site.baseurl}}/assets/images/whmcs/ispapi-ssl/buy_a_certificate_04.png)

8. Follow the instructions you will get via e-mail from the Certificate Authority to validate your purchase.
9. It might take some minutes after validation until the certificate shows up in the client area
