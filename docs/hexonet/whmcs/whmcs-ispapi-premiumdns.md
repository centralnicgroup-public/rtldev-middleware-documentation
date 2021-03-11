---
layout: default
title: ~~Premium DNS~~
parent: WHMCS
grand_parent: HEXONET
nav_order: 11
showtoc: 1
---

# ISPAPI Premium DNS

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Build Status](https://github.com/hexonet/whmcs-ispapi-premiumdns/workflows/Release/badge.svg?branch=master)](https://github.com/hexonet/whmcs-ispapi-premiumdns/workflows/Release/badge.svg?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/hexonet/whmcs-ispapi-premiumdns/blob/master/CONTRIBUTING.md)

This Repository covers the WHMCS Premium DNS Module of HEXONET.

> **DEPRECATION NOTICE: For technical Reasons the Premium DNS Product itself will be discontinued on April 1st 2021. You can still manage existing Premium DNS Zones, but won't be able to create new ones.**

## Introduction

The ISPAPI Premium DNS Module is a combination of an add-on and a provisioning module.

The Premium DNS add-on provides a user-friendly interface to load and import premium DNS plans efficiently under a product group. The add-on allows the user to compare cost and sale prices. Sale prices can be updated by adding a profit margin or simply edit each sale price. It configures the module settings and pricing in the Premium DNS provisioning module when the premium DNS plans are imported. In addition, custom fields and upgrades are configured.

The premium DNS provisioning module connects to the configured ISPAPI registrar module to establish the possibility to register and maintain premium DNS plans for DNS zones at HEXONET. In the client area, under the product management page, the purchased premium DNS plan can be managed. The product management page includes the status of the plan, graphical representation of usage of queries, a list of Premium DNS plans for upgrades, etc. A cronjob included in the module. By setting up this cronjob, email notifications are received in the case of exceeding usage of queries and disable DNSSEC.

## Supported Features

The ISPAPI Premium DNS Module supports the following functions and features:

* Unified handling of different suppliers
* Support for testing environment
* Premium DNS products directly connected to the ISPAPI Registrar Module
* Premium DNS addon
  * Load available Premium DNS plans and import them under a product group
  * Bulk price update by using a profit margin
  * Support for different currencies
* 6 nodes in our Global Anycast DNS network
* Works with any domain name regardless
 of registrar
* Supports IPv6 resolution and management
 of AAAA resource records
* Supports DNSSEC natively
* Supports secondary DNS configuration
* Provides hourly/daily/monthly reports to
 track DNS usage per zone
* 99.99% uptime SLA
* 24/7 real time monitoring of DNS zone
* REST and SOAP API to automate DNS
 management
* Manage DNS zone via HEXONET's Control Panel,
 a white-label Web-based portal
* Changes to DNS configuration is propagated
 globally within 2 seconds (on average)
* Worldwide DNS response time as low as 10ms
* 345.6 million DNS queries responded every day

A geographically distributed Anycast DNS solution gives you lightning fast DNS responses from the nearest
DNS service data center. With highly redundant DNS nodes per DNS service data center paired together
with the Anycast DNS architecture, HEXONET guarantees a 99.99% reliability SLA.

HEXONET's current data centers for Premium DNS:

* Vancouver, Canada
* Frankfurt, Germany
* Saarlouis, Germany
* London, UK
* Dallas, USA
* Tampa, USA

More nodes available soon!

## Requirements

* WHMCS version 7.0 or higher
* Latest **ISPAPI Registrar Module**. This module can be downloaded [here](https://github.com/hexonet/whmcs-ispapi-registrar/raw/master/whmcs-ispapi-registrar-latest.zip). Our Premium DNS Module does not support the WHMCS built-in HEXONET provider module!
* **HEXONET Live or Test Account** must be configured in the ISPAPI Registrar Module. Account creation is always free:
  * [OT&E (Test System) Account](https://www.hexonet.net/signup-ote)
  * [LIVE (Real World System) Account](https://www.hexonet.net/cart?signup=true)

For the latest WHMCS minimum system requirements, please refer to the WHMCS System Requirements Documentation, [here](https://docs.whmcs.com/System_Requirements).

## Installation / Upgrade

Download the ZIP archive including the latest release version [here](https://github.com/hexonet/whmcs-ispapi-premiumdns/raw/master/whmcs-ispapi-premiumdns-latest.zip).

Copy files from the zip to your WHMCS installation root directory ($YOUR_WHMCS_ROOT), while keeping the folder structure intact.

E.g.

     modules/addons/ispapipremiumdns_addon
     => $YOUR_WHMCS_ROOT/modules/addons/ispapipremiumdns_addon

     modules/servers/ispapipremiumdns
     => $YOUR_WHMCS_ROOT/modules/servers/ispapipremiumdns

**For an update**, unzip the downloaded file and upload the content of addons and servers folders to your WHMCS root directory. Then go to `Setup > Addon Modules > ISPAPI Premium DNS Addon > Configure` and click on the “Save Changes” button.

**NOTE**: The WHMCS root directory is the folder which contains the “configuration.php” file.

## Add Cron Job

In order to receive email notifications on exceeding query usage and disable DNSSEC support information, configure the following cronjob on your server. The cron should run every 30 minutes.

    */30 * * * * php -q {PATH_TO_WHMCS}/modules/servers/ispapipremiumdns/ispapipremiumdnscron.php >/dev/null 2>&1

## Addon Activation

Within the WHMCS Admin area, go to `Setup > Addon Modules`

![addon01]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/premium_DNS_addon_01.png)

Activate the ISPAPI Premium DNS Addon, give the module “Full Administrator” Access Control right.

## Addon Configuration

Within the WHMCS Admin area, navigate to `Addons > ISPAPI Premium DNS`

## Import Premium DNS Plans

`You are now ready to import premium DNS plans.`

Two ways to import and setup your premium plans:

* **Wizard mode** explains how to import premium DNS plans in an automated way.

* **Manual mode** explains how to import premium DNS plans manually.

### Wizard Mode

**a) Step 1: Load Premium DNS plans**:

Navigate to `Addons > ISPAPI Premium DNS`

Select your product group, click and 'Load' button

![dnsaddon02]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/premium_DNS_addon_02.png)

**b) Step 2: Update prices and import Premium DNS plans**:

Make sure to import pricing for the default currency in your WHMCS. In the client area, only the products with the pricing of default currency will be displayed.

Add profit margin on your premium DNS plans (if applicable) by adding percentage in 'Profit margin' input field and clicking the 'add' button. Here you can see the comparison between the actual price(cost) and selling price(sale). Editing each individual price is available. You can select any currency that you configured in your WHMCS from drop down option under 'Currency' section. You can select all premium DNS plans by checking the checkbox on the top line or select individual plans. Click on 'Import' button to import plans into your WHMCS.

![addon03]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/premium_DNS_addon_03.png)

**c) Manage imported Premium DNS plans**:

Managing imported premium DNS plans can be done at `Setup > Products/Services > Products/Services`

![aadon04]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/premium_DNS_addon_04.png)

Update Premium DNS plan settings if required:

![addon05]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/premium_DNS_addon_05.png)

### Manual Mode

Within the WHMCS Admin area, navigate to `Setup > Products/Services > Products/Services`

**a) Create a new group**:

In this example, the new group is taken as “Premium DNS Plans”.

![newgroup]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/create_new_group.png)

**b) Create a new product**:

Select 'Product Type' as 'Other', 'Premium DNS Plan' as Product Group. Name your product name, eg: 'Premium DNS Plan 2M'. Select the module: 'ISPAPI Premium DNS'. Make sure the 'Create as Hidden' is OFF.

![server01]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/premium_DNS_server_01.png)

**On the “Details” tab:**

Edit Product Description as per your wishes (optional).

Ensure the Welcome Email field is set to “None”.

Ensure the Required Domain field is unchecked.

![server02]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/premium_DNS_server_02.png)

**On the “Pricing” tab:**

Set the Payment Type field to Recurring and set a price.

Make sure to set pricing for the default currency in your WHMCS. In the client area, only the products with the pricing of default currency will be displayed.

![server03]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/premium_DNS_server_03.png)

**On the “Module Settings” tab:**

Choose “ISPAPI Premium DNS” for the module Name field. Other fields “Years” and “Registrar” are automatically filled and the connection between our API and product is established. If you configured a production account, the product will be registered and managed in the production environment. Same applies for the test environment. Simply configure your test account in the registrar module to register and manage premium plans in the test environment.

Enter Premium DNS plan Class. Please check the class name for each plan at HEXONET and enter the exactly matching class name for the plan. Otherwise, our API be not able to recognize the premium DNS plan to register. Set “Automatically setup the product as soon as the first payment is received” to ensure the premium DNS plan is paid for before registration. Save changes.

![server04]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/premium_DNS_server_04.png)

**On the “Custom Fields” tab:**

Fill 'Field Name' as 'DNS Zone', select 'Field Type' as Text Box, enter 'Description' as 'Please enter DNS zone', and fill 'Validation' with /^(\w+\.\w+\.$)/ -> this regex expression validates if the correct format of a DNS zone entered by customer. Do not forget to check 'Required Field'. This option makes customer enter the DNS zone in text field otherwise he/she cannot proceed further. The DNS zone is important to buy a premium DNS plan. Check 'Show on Order Form' and 'Show on Invoice' if you want the premium DNS plan on your order form and invoice. Save Changes.

![server05]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/premium_DNS_server_05.png)

**On the “Upgrades” tab:**

Select existing higher premium plans(if any) for the current plan. This will allow a customer to upgrade to a higher premium DNS plan and generate an invoice. Save Changes.
In the current example, our premium DNS plan is 2M which is the lowest plan of all other. Therefore all the plans need to be selected.

![server06]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/premium_DNS_server_06.png)

## Frontend overview

`WHMCS client area > Services > Order New Services > select your category -> Premium DNS Plans`

'Premium Comparison' template was selected when created a product group. Any other template can be selected as per your interest.

![clientarea01]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/client_area_01.png)

## Buying a Premium DNS Plan

Go to the created premium DNS plan group on your WHMCS frontend: Click on 'Order Now' to buy a premium DNS plan.

Follow the steps in the buying process.

Step 1:

Add your DNS zone in the order 'Configure' option that you would like to assign the premium DNS plan:

![clientarea08]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/client_area_08.png)

Step 2: Checkout the order

![clientarea09]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/client_area_09.png)

Once the invoice is paid, your premium DNS plan will be activated. On the client, area navigate to: 'Services > My Services > select your plan

Activated premium DNS with details looks as follows:

![clientarea02]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/client_area_02.png)

Click on each view to reveal the information: 'DNS details', 'DNSSEC support', 'View analytics'

**DNS details**:

![clientarea04]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/client_area_04.png)

**DNSSEC support**:

**Enable DNSSEC**:

![enablednssec01]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/enable_dnssec.png)

Once clicked on the button 'Enable DNSSEC', a confirmation text will be displayed. Click on the 'Confirm' button to enable DNSSEC support otherwise click on 'Cancel' button.

![enablednssec02]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/enable_dnssec_02.png)

When successfully enabled DNSSEC, a success message will be displayed:

![enablednssec02]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/enable_dnssec_03.png)

**Disable DNSSEC**:

![disablednssec01]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/client_area_05.png)

Once clicked on the button 'Disable DNSSEC', a confirmation text will be displayed. Click on the 'Confirm' button to disable DNSSEC support otherwise click on 'Cancel' button.

![disablednssec01]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/disable_dnssec_02.png)

DNSSEC will be successfully disabled after 10 days since the request. In order to avoid any failures of disabling DNSSEC, make sure to set up the cronjob in your system. On the successful first step of disabling DNSSEC, a message will be displayed:

![disablednssec01]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/disable_dnssec_03.png)

**Re-enable DNSSEC**:

Re-enable DNSSEC for your domain.

![reenablednssce]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/re_enable_dnssec.png)

On successful reenabling of DNSSEC, a message will be displayed.

![reenablednssce]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/re_enable_dnssec_02.png)

**View Analytics**:

Here you see the usage of queries history and a graphical illustration of success and error count of the queries over a certain time period: days, weeks, 6months, and 12months.

Example view from a domain name:

![viewanalytics]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/view_analytics.png)

**Request Cancellation**:

This button is available in the product management page in the client area. Admin can hide this button for his clients as per his convenience.

Immediate cancellation/termination of a premium DNS plan is not supported at HEXONET. The product will be automatically deleted from system after 36 days from its expiration date.

If a customer clicks on the 'Request Cancellation' button, the module checks and if required updates the renewal mode on the product to AUTOEXPIRE. So that the product will not be auto-renewed at HEXONET without paid for it by the customer.

When the above changes are applied, a message is displayed on the product management page:

> The renewal mode on your product is set to AUTOEXPIRE. Your product will be automatically deleted after 36 days from the expiration date.

## Upgrading your Premium DNS Plan

To upgrade premium DNS plan, click on 'Upgrade' on the sidebar. List of available higher tiered premium DNS plans will be shown: choose any plan and continue to check out the order.

![clientarea07]({{site.baseurl}}/assets/images/whmcs/ispapi-premiumdns/client_area_07.png)
