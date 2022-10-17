---
layout: default
title: ~~Modules Widget~~
parent: WHMCS
grand_parent: HEXONET
nav_order: 9
showtoc: 1
---

# ISPAPI Modules Widget

[![License: MIT]({{ 'assets/images/License-MIT-blue.svg' | relative_url }})](//opensource.org/licenses/MIT)

> **DEPRECATION NOTICE: This project will no longer be maintained seperately, and is now an integrated part of our registrar module. Download the new version of our WHMCS Bundle [here](//github.com/centralnicgroup-opensource/rtldev-middleware-whmcs) to benefit our newly integrated features.**

This Repository covers the WHMCS "ISPAPI" Dashboard Widget "Modules". It provides the following features in WHMCS:

## Introduction

![Modules Dashboard Widget]({{ 'assets/images/whmcs/ispapi-widget-modules/preview.png' | relative_url }} "Modules Overview Widget")

If the module version number is displayed in green, then you are running the latest release. Otherwise, we suggest upgrading. Click on the version number to download the latest module release.

## Supported Features

* ISPAPI Modules Overview
* Version Check

## Requirements

In order to run the ISPAPI Backorder Addon, your WHMCS installation must meet the following requirements:

* WHMCS version 7.0 or higher
* **ISPAPI Registrar Module** This module can be downloaded [here](//github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/raw/main/whmcs-cnic-bundle.zip). Our Widget does not support the WHMCS built-in HEXONET provider module!
* **HEXONET Live or Test Account** must be configured in the ISPAPI Registrar Module. Account creation is always free:
  * [OT&E (Test System) Account](//www.hexonet.net/signup-ote)
  * [LIVE (Real World System) Account](//www.hexonet.net/cart?signup=true)

For the latest WHMCS minimum system requirements, please refer to the WHMCS System Requirements Documentation, [here](//docs.whmcs.com/System_Requirements).

## Installation / Upgrade

Download the ZIP archive including the latest release version [here](//github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/raw/main/whmcs-cnic-bundle.zip).

Copy the contents of the downloaded archive to your WHMCS directory, while keeping the folder structure intact.

e.g.

`modules/widgets/ispapi_modules.php` => `$YOUR_WHMCS_ROOT/modules/widgets/ispapi_modules.php`
