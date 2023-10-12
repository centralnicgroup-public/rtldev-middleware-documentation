---
layout: default
title: Registrar Module
parent: WHMCS
grand_parent: internet.bs
nav_order: 1
showtoc: 1
---

# IBS Registrar Module

A Registrar Module connects WHMCS to the Domain Registrar's System. This Documentation covers the internet.bs WHMCS Registrar Module maintained by Team Internet's Middleware Team.

NOTE: If you experience any issue when using this module, feel free to reach out to our [Support team](#contact-us).

## Introduction

Firstly, we want to welcome you on board. We are always interested in making our WHMCS integration and documentation better. So, in case you want to provide us some feedback, you're welcome.
We have a very short release cycle and can release patches and new features quickly, if necessary.

Back to topic, here the steps describing how to start with us using WHMCS.

## Supported Features

- Registrar TLD Sync / Pricing Import (WHMCS 7.10)
- Domain & Transfer Synchronization
- Internationl Domain Names (IDNs)
- Additional Domain Fields
- Premium Domains
- Domain Registration
- Domain Renewal
- Domain Transfer
- Domain Management
- WHOIS Update
- Nameserver Registration & Management
- Get EPP Code
- DNS Management
- Email Forwarding
- URL Forwarding
- WHOIS Privacy / ID Protection

Our custom Registrar Module is continuously maintained and coming with more features than the module shipped with WHMCS.
Some features might be not listed here, this section is WIP (2023-03).

## Requirements

We encourage our Resellers to stick on the latest WHMCS release for security reasons and to benefit of latest features and patches.

- WHMCS >= 7.10 / better >=8 plus PHP 8++
- Installed and working: curl, php-curl

For the latest WHMCS minimum system requirements, please refer to [System_Requirements](https://docs.whmcs.com/System_Requirements).

## Installation

To install our module please download the latest version from [here](https://github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/raw/main/whmcs-ibs-registrar-latest.zip) and follow the belows steps:

1. Extract the entire archive contents to your WHMCS installation's root directory
2. Login to whmcs Admin area and activate the module.
3. Fill in your API key and password, chose whether you want to use the live or the test environment and save. If using in test mode please use testapi/testpass for API key/password.
4. **IMPORTANT NOTE**: If you want to enable premium domains in whmcs, you need to make sure that you define an exchange rate between USD and your currency in Admin the menu Setup→Payments→Currencies. Our module explicitly sets USD when checking the price for premium names and USD price will be sent back to us when confirming the price for the premium name at registration time. Also you need to enable premiu domains for your API KEY in your account in the reseller settings page (need to change “Allow premium domains operations” from NO to YES).
5. NOTE: If you plan on configuring the cron job to synchronize expiration dates of your domains (useful when you have pending transfers or have autorenewal enabled for your domains in your account on our system) when the “SyncNextDueDate” checkbox is not checked the script will only update the status and the expiration date. If you check the “SyncNextDueDate” it will also update the Next Due Date which determines the time when WHMCS will issue a new invoice for the domain. **This only applies if you are using our custom sync script and not the WHMCS built in sync**.
6. _Optional_: If you are upgrading from a previous verson of our module or swirtchng from the one shipped with WHMCS please also execute the SQL queries in the file upgrade.sql
7. _Optional_: We offer language files (Italian only for now) [here](https://github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/tree/archive/ibs/lang/overrides). Please copy those files to the **/lang/overrides** folder of your WHMCS installation's root directory. See [below](#localization) for details on adding your own.
8. _Optional_: If you want to register .it, .fr, .be, etc., please configure your additional domain fields as explained [here](#additionalfields).

## Additional Fields

WHMCS provides a way to define additional fields that are needed for some TLDs. We add those for our module via file `/resources/domains/dist.additionalfields.php`. Add the below at the end of the file, if not yet present.

```php
include(ROOTDIR."/modules/registrars/ibs/ibs_additionaldomainfields.php");
```

Unfortunately we do not yet have support for all TLDs that have additional fields in our WHMCS module but plan to add it in future releases.

From the TLDs that require additional data we currently support: .co.uk, .org.uk, .me.uk, .uk, .eu, .be, .asia, .fr, .re, .pm, .tf, .wf, .yt, .it, .de, .nl, .tel, .us

**NOTE**: If you want to offer .it domain names, please copy the file itterms.html (or itterms-it.html for the italian variant, please rename it then) to the root of your WHMCS installation. Find the files under `modules/registrars/ibs`.

**NOTE**: The above way via `/resources/domains/dist.additionalfields.php` is not a recommended way, still suggested by our documentation since years.
We will rewrite that mechanism to a future-safe way. Just a matter of time and priorities. Also, please keep in mind that you have to apply the current solution after each WHMCS upgrade again.

## Localization support

Our module is in English, and we provide an Italian translation as well.

Find all the language files we offer [here](https://github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/tree/archive/ibs/lang/overrides). The ones of interest please copy to `/lang/overrides/`.

## Notes

The price sync feature supports only the following currencies: USD, EUR, GBP, CAD, AUD and JPY.
If your default currency is not one of the above then the prices are pulled from our API in USD and you need to define exchange rates between USD and your default currency in order to use this feature.
