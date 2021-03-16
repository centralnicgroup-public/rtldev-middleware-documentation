---
layout: default
title: Drop-Catching
parent: WHMCS
grand_parent: HEXONET
nav_order: 9
showtoc: 1
---

# ISPAPI Backorder Module

[![License: MIT]({{ 'assets/images/License-MIT-blue.svg' | relative_url }})](//opensource.org/licenses/MIT)

This Repository covers the WHMCS Backorder Module of HEXONET. It provides the following features in WHMCS:

## Introduction

Backordering of domain names is a fast-growing and highly lucrative business in the domain industry. When domain names expire, the underlying registry makes them available again for registration through interested parties. Some of these domain names may be very valuable for existing internet traffic or simply because of the names’ intrinsic worth. Resellers, who strive for increasing their profits, should consider offering domain name backordering.

The ISPAPI Backorder Addon for WHMCS allows any reseller to quickly and easily offer domain name backorders. Once the module is installed, operations are fully automated.

## Supported Features

* High Performance Drop-Catching Technology
* Supports gTLDs / nTLDs / ccTLDs listed [here](//www.hexonet.net/de/backorder#backorder-list)
* Commissions paid to Resellers for successful Backorders
* Backorders are free to place and the Backorder fee is paid only on successful Registration
* Multiple Currencies supported
* Multi-lingual (available in English, German with more to come)
* Includes a Backorder Domain Name Search Engine
* Automatic Droplist Update
* Auction Platform for handling multiple Backorder Applications
* Easy to install and operate
* Frontend Features:
  * Display of Funds Details
  * Regex Support for searching Domain Names
  * Search Results based on specific TLD Selection
  * Selection of Amount of displayed Results
  * Filter Domains by upcoming Drop Rate
  * Showcase TLD's Backorder Pricing
  * Filtering of backordered Domains based on their Status

... and MORE!

## Requirements

In order to run the ISPAPI Backorder Addon, your WHMCS installation must meet the following requirements:

* WHMCS version 7.0 or higher
* PHP with ZIP Extension (php-zip)
* **ISPAPI Registrar Module** This module can be downloaded [here](//github.com/hexonet/whmcs-ispapi-registrar/raw/master/whmcs-ispapi-registrar-latest.zip). Our Backorder Module does not support the WHMCS built-in HEXONET provider module!
* **HEXONET Live or Test Account** must be configured in the ISPAPI Registrar Module. Account creation is always free:
  * [OT&E (Test System) Account](//www.hexonet.net/signup-ote)
  * [LIVE (Real World System) Account](//www.hexonet.net/cart?signup=true)
* Server timezone should be set to UTC

For the latest WHMCS minimum System Requirements, please refer to the WHMCS System Requirements Documentation, [here](//docs.whmcs.com/System_Requirements)

## Installation / Upgrade

Download the ZIP archive including the latest release version [here](//github.com/hexonet/whmcs-ispapi-backorder/raw/master/whmcs-ispapi-backorder-latest.zip).

Copy the whole “ispapibackorder” directory to the “modules/addons/” directory.

After that, deactivate the module and re-activate it again as explained below.

## Configuration

### Addon Activation

In the WHMCS Admin area, go to `Setup  =>  Addon Modules`

Activate the ISPAPI Backorder Addon and give the module “Full Administrator” Access Control rights.

![addonactivation]({{ 'assets/images/whmcs/ispapi-backorder/addon_activation.png' | relative_url }})

### Addon Configuration

In the WHMCS Admin area, go to  `Addons  =>  ISPAPI Backorder`  

Select the “Pricing” tab and enter the desired prices you wish to charge your customers.  Please keep in mind the price you will be charged. (reseller prices are available on HEXONET’s web Control Panel).

![addon-conf]({{ 'assets/images/whmcs/ispapi-backorder/addon_configuration.png' | relative_url }})

### Add Cron Jobs

In order to fully automated the module, additional cron jobs must be installed.
Please configure the following cron jobs on your server.

    1 0,10 * * * php -q {PATH_TO_WHMCS}/modules/addons/ispapibackorder/crons/daily_import_pendingdomainlist.php >/dev/null 2>&1
    1 1,11 * * * php -q {PATH_TO_WHMCS}/modules/addons/ispapibackorder/crons/daily_dropdate_synch.php >/dev/null 2>&1
    */5 * * * *  php -q {PATH_TO_WHMCS}/modules/addons/ispapibackorder/crons/batch.php >/dev/null 2>&1

> * Replace {PATH_TO_WHMCS} with the real path of your WHMCS installation.

The **daily_import_pendingdomainlist.php** cron job should run twice a day at 0:01 and 10:01.

The **daily_dropdate_synch.php** cron job should run twice a day at 1:01 and 11:01.

The **batch.php** cron job should run every 5 minutes.

**NOTE: Some distributions do not provide the superglobal `$_SERVER` when running in crontab environment.
For Ubuntu/Debian we know this to be working. If your distribution fails in that point, change the cron jobs as follows:**

from `php -q {PATH_TO_WHMCS}/modules/addons/ispapibackorder/crons/batch.php`
to e.g.  `curl {YOUR_WHMCS_INSTANCE}/modules/addons/ispapibackorder/crons/batch.php`

`YOUR_WHMCS_INSTANCE` is the url with which your WHMCS Instance is reachable e.g. `https://mywhmcs.com` (plus a subfolder name, if you have it configured).

### Import the Drop List

When you use the module for the first time, you must import the drop list. In order to do that, just execute the following script from your command line:

```bash
php -q {PATH_TO_WHMCS}/modules/addons/ispapibackorder/crons/daily_import_pendingdomainlist.php
```

**The script takes a few minutes to complete.**

### Customize Email Templates

The module comes with one pre-installed email template. The template is called “backorder_lowbalance_notification” and is available under `Setup  =>  Email Templates`.

This template is used to send email notices if there are not enough funds in the account to properly process a domain name backorder. Failure to provide additional funds will result in a domain name backorder to be abandoned.

Resellers can customize the content of this template.

## Technical information

### Functioning

Once the module is completely installed and configured your customers will be able to backorder domain names.  Keep in mind that backordering domain names is based on a PREPAID balance. Customers with insufficient account funds will result in their backorders being abandoned.  Your customers can add funds with WHMCS’ default “Add Funds” functionality.

PLEASE KEEP IN MIND THAT, the reseller must also have enough prepaid funds in their HEXONET account that covers all the pending backorders of their customers.  Reseller’s with insufficient funds will also have some or all of their domain name backorders fail.

* Your customers can click on a domain backorder, which will set the backorder status for the respective domain name to REQUESTED.
* Three days before the drop date of a backordered domain name, the backorder status is set to ACTIVE.  This will trigger the system to obtain the backorder fees from the customer’s account and hold those funds as reserved. Again, if the customer has insufficient funds, a low balance notification email is sent and the backorder itself will remain status REQUESTED.
* Two hours before the respective domain name’s drop time, the status of the backorder will change from ACTIVE to PROCESSING.  Once in processing backorders can’t be deleted.
* The drop-catch system will then try to obtain the respective domain name..

There are different backorder results:

**a) The Backorder Failed**:

If the system failed to get the domain name the backorder status will change from **PROCESSING** to **FAILED** and the reserved monies will be released.

**b) The Backorder was Successful**:

_Single Backorder_:

If the system successfully got the domain and the customer was the only person on the system to have backordered the domain name (single backorder), then the status will change from **PROCESSING** to **PENDING-PAYMENT** and the customer will receive an invoice, indicating they have obtained the backorder they have requested.  And since backordering is a prepaid system, the invoice will be immediately and automatically paid.  The backorder status will be changed from  **PENDING-PAYMENT** to **SUCCESSFUL**.  The acquired domain name will now be displayed in the customer’s account.

_Multiple Backorder_:

If a domain backorder was successfully obtained, but two (2) or more accounts placed backorders for the same domain name (multiple backorders) then the domain name will go to a private auction (between the backorder participants) at www.premiumsale.com.  Emails are automatically sent to the participants by the auction house Premiumsale and the status of the backorder will change from **PROCESSING** to **AUCTION-PENDING**.

The losers of the auction at PremiumSale.com will have the status of their backorders changed from **AUCTION-PENDING** to **AUCTION-LOST**. Any reserved money held for the backorder will be released.

The winning customer of the private auction, once the winning auction bid is paid to PremiumSale.com will have the status of their backorder changed from **AUCTION-PENDING** to **AUCTION-WON**. The winning and paid domain name will show up in the account of the winning bidder.

## Process Diagram for Backorders

![process-diagram]({{ 'assets/images/whmcs/ispapi-backorder/process_diagram.png' | relative_url }})

## Frontend

Once the addon installed, a new item named “Backorders” will be displayed in the Navigation.

This new navigation item contains 2 pages:

* Expiring Domains
* My Backorders

**Expiring Domains screenshot**:

![expiring-domains]({{ 'assets/images/whmcs/ispapi-backorder/frontend_expiring_domains.png' | relative_url }})

**My Backorders screenshot**:

![mybackorders]({{ 'assets/images/whmcs/ispapi-backorder/frontend_my_backorders.png' | relative_url }})

## Backend

In the admin area of WHMCS a new item will be displayed under  `Addon  =>  ISPAPI Backorder`.
The backend part of this module contains 3 pages:

* Manage - This page allows managing all the existing backorders.
  ![manage-page]({{ 'assets/images/whmcs/ispapi-backorder/manage_page.png' | relative_url }})
* Pricing - This page allows managing the pricing of each TLDs. If a price is set to 0 or empty then the customer will not be able to backorder this TLD.
  ![pricing page]({{ 'assets/images/whmcs/ispapi-backorder/pricing_page.png' | relative_url }})
* Logs - This page allows to search for a domain and see all the status changes. This is very useful to see what happened exactly to a backorder.
  ![logspage]({{ 'assets/images/whmcs/ispapi-backorder/logs_page.png' | relative_url }})
