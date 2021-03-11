---
layout: default
title: Account Widget
parent: WHMCS
grand_parent: HEXONET
nav_order: 5
showtoc: 1
---

# ISPAPI Account Widget

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Build Status](https://github.com/hexonet/whmcs-ispapi-widget-account/workflows/Release/badge.svg?branch=master)](https://github.com/hexonet/whmcs-ispapi-widget-account/workflows/Release/badge.svg?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/hexonet/whmcs-ispapi-widget-account/blob/master/CONTRIBUTING.md)

This Repository covers the WHMCS "ISPAPI" Dashboard Widget "Account". It provides the following features in WHMCS:

## Introduction

![ISPAPI Widget Account]({{site.baseurl}}/assets/images/whmcs/ispapi-widget-account/preview.png)

At the left, you'll get your account balance displayed, and if applicable, also the Sum of Reserved Deposits - this only applies if you are managing Pre-Registrations or Backorders. At the right, you'll get Product Statistics shown. Number of Domains, SSLCerts etc. in Management. Such Statistics are only available for the LIVE System (See Setting "Test Mode" in the ISPAPI Registrar Module), otherwise our Logo is shown.

## Supported Features

* Account Balance Overview
* Product Statistics

## Requirements

* WHMCS version 7.0 or higher
* **ISPAPI Registrar Module** This module can be downloaded [here](https://github.com/hexonet/whmcs-ispapi-registrar/raw/master/whmcs-ispapi-registrar-latest.zip). Our Widget does not support the WHMCS built-in HEXONET provider module!
* **HEXONET Live or Test Account** must be configured in the ISPAPI Registrar Module. Account creation is always free:
  * [OT&E (Test System) Account](https://www.hexonet.net/signup-ote)
  * [LIVE (Real World System) Account](https://www.hexonet.net/cart?signup=true)

For the latest WHMCS minimum system requirements, please refer to the WHMCS System Requirements Documentation, [here](https://docs.whmcs.com/System_Requirements).

## Installation / Upgrade

Download the ZIP archive including the latest release version [here](https://github.com/hexonet/whmcs-ispapi-widget-account/raw/master/whmcs-ispapi-widget-account-latest.zip).

Copy the contents of that archive to your WHMCS directory, while keeping the folder structure intact.

e.g.

`modules/widgets/ispapi_account.php` => `$YOUR_WHMCS_ROOT/modules/widgets/ispapi_account.php`

## When using a restrictive role user

Check [this section](../whmcs-ispapi-registrar/#hexonet-account-hardening) of our registrar module to whitelist all required API commands.
