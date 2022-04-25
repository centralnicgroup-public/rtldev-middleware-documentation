---
layout: default
title: Account Widget
parent: WHMCS
grand_parent: HEXONET
nav_order: 5
showtoc: 1
---

# ISPAPI Account Widget

[![License: MIT]({{ 'assets/images/License-MIT-blue.svg' | relative_url }})](//opensource.org/licenses/MIT)

This Repository covers the WHMCS "ISPAPI" Dashboard Widget "Account". It provides the following features in WHMCS:

## Introduction

![ISPAPI Widget Account]({{ 'assets/images/whmcs/ispapi-widget-account/preview.png' | relative_url }})

At the left, you'll get your account balance displayed, and if applicable, also the Sum of Reserved Deposits - this only applies if you are managing Pre-Registrations or Backorders. At the right, you'll get Product Statistics shown. Number of Domains, SSLCerts etc. in Management. Such Statistics are only available for the LIVE System (See Setting "Test Mode" in the ISPAPI Registrar Module), otherwise our Logo is shown.

## Supported Features

* Account Balance Overview
* Product Statistics

## Requirements

* WHMCS version 7.0 or higher
* **ISPAPI Registrar Module** This module can be downloaded [here](//github.com/hexonet/whmcs-ispapi-registrar/raw/master/whmcs-ispapi-registrar-latest.zip). Our Widget does not support the WHMCS built-in HEXONET provider module!
* **HEXONET Live or Test Account** must be configured in the ISPAPI Registrar Module. Account creation is always free:
  * [OT&E (Test System) Account](//www.hexonet.net/signup-ote)
  * [LIVE (Real World System) Account](//www.hexonet.net/cart?signup=true)

For the latest WHMCS minimum system requirements, please refer to the WHMCS System Requirements Documentation, [here](//docs.whmcs.com/System_Requirements).

## Installation / Upgrade

Download the ZIP archive including the latest release version [here](//github.com/hexonet/whmcs-ispapi-widget-account/raw/master/whmcs-ispapi-widget-account-latest.zip).

Copy the contents of that archive to your WHMCS directory, while keeping the folder structure intact.

e.g.

`modules/widgets/ispapi_account.php` => `$YOUR_WHMCS_ROOT/modules/widgets/ispapi_account.php`

## When using a restrictive role user

Check [this section]({{ 'docs/hexonet/whmcs/whmcs-ispapi-registrar/#hexonet-account-hardening' | relative_url }}) of our registrar module to whitelist all required API commands.
