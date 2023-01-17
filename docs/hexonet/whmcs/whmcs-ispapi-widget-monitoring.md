---
layout: default
title: Monitoring Widget
parent: WHMCS
grand_parent: HEXONET
nav_order: 6
showtoc: 1
---

# ISPAPI Monitoring Widget

This Repository covers the WHMCS "ISPAPI" Dashboard Widget "Monitoring". It provides the following features to WHMCS:

## Introduction

This widget was planned as nice to have for different purposes to show data differences between the HEXONET API and your WHMCS System. Don't worry, we do not have such issues in general. Whenever changes happen on domain level outside of WHMCS you might run into trouble as booked additional domain services might not correctly get invoiced to your customers (worst case!). This might happen when using another Frontend to activate or deactivate Domain Add-Ons / Services. Some Registries (e.g. DK Hostmaster) even allow Registrants to maintain domains over a registry frontend and to perform different actions directly there. This is where WHMCS modules in general might run into corner cases - Imagine that 3 systems are then involved: Registry, HEXONET, WHMCS. Whenever underlying processes are quite special, that's where it is getting hard with WHMCS at the end and this is where we are thinking that this Widget helps!
Another reason might be that our resellers need help getting domain data fixed as of a bug in older WHMCS Versions or other cases we expect to be useful for you.

## Supported Features

Monitoring of Domain Data Issues like

* WHOIS Privacy Service
* Transfer Lock
* Premium Renewal Cost Price (WHMCS Bug 'til v7.8)
* Standard Domains that are Premium in real
* Cleanup comments that got added by our Migration & Consolidation Tool

... and providing buttons to get the cases fixed.

If there's something missing, let us know and we will extend.

## Requirements

* Having Javascript activated in Browser.
* WHMCS version 7.0 or higher
* Latest **ISPAPI Registrar Module**. This module can be downloaded [here](https://github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/raw/main/whmcs-cnic-bundle.zip). Our Widget does not support the WHMCS built-in HEXONET provider module!
* **HEXONET Live or Test Account** must be configured in the ISPAPI Registrar Module. Account creation is always free:
  * [OT&E (Test System) Account](https://www.hexonet.net/signup-ote)
  * [LIVE (Real World System) Account](https://www.hexonet.net/cart?signup=true)

For the latest WHMCS minimum system requirements, please refer to the WHMCS System Requirements Documentation, [here](https://docs.whmcs.com/System_Requirements).

## Installation / Upgrade

Download the ZIP archive including the latest release version [here](https://github.com/hexonet/whmcs-ispapi-widget-monitoring/raw/master/whmcs-ispapi-widget-monitoring-latest.zip).

Extract the `ispapi_monitoring.php` into folder `/modules/widgets` of your WHMCS instance.

## Using this Widget

This is how it looks like in case everything is fine:
![allfine]({{ 'assets/images/whmcs/ispapi-widget-monitoring/preview_ok.png' | relative_url }})

Otherwise cases are listed accordingly and providing a wizard to get them fixed:
![inactivetransferlock]({{ 'assets/images/whmcs/ispapi-widget-monitoring/preview_transferlock_missing.png' | relative_url }})
![wpissues]({{ 'assets/images/whmcs/ispapi-widget-monitoring/preview_idprotection_sync.png' | relative_url }})

Click on `Details!` to get more information:
![wizard1]({{ 'assets/images/whmcs/ispapi-widget-monitoring/preview_transferlock_dialog1.png' | relative_url }})

By clicking on `Fix this!` the widget takes care of processing the items as described:
![wizard2]({{ 'assets/images/whmcs/ispapi-widget-monitoring/preview_transferlock_dialog2.png' | relative_url }})
![wizard3]({{ 'assets/images/whmcs/ispapi-widget-monitoring/preview_transferlock_dialog3.png' | relative_url }})

Furthermore you can download the affected items as CSV list for your reference before processing (without results) and after processing (including results).
NOTE: columns are separated by tab delimiter.

**Note:** This can of course take a while in case a lot of domains have to be processed on API side.
