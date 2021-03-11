---
layout: default
title: Modules Widget
parent: WHMCS
grand_parent: HEXONET
nav_order: 4
showtoc: 1
---

# ISPAPI Modules Widget

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Build Status](https://github.com/hexonet/whmcs-ispapi-widget-modules/workflows/Release/badge.svg?branch=master)](https://github.com/hexonet/whmcs-ispapi-widget-modules/workflows/Release/badge.svg?branch=master)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/hexonet/whmcs-ispapi-widget-modules/blob/master/CONTRIBUTING.md)

This Repository covers the WHMCS "ISPAPI" Dashboard Widget "Modules". It provides the following features in WHMCS:

## Introduction

![Modules Dashboard Widget]({{site.baseurl}}/assets/images/whmcs/ispapi-widget-modules/preview.png "Modules Overview Widget")

If the module version number is displayed in green, then you are running the latest release. Otherwise, we suggest upgrading. Click on the version number to download the latest module release.

## Supported Features

* ISPAPI Modules Overview
* Version Check

## Requirements

In order to run the ISPAPI Backorder Addon, your WHMCS installation must meet the following requirements:

* WHMCS version 7.0 or higher
* **ISPAPI Registrar Module** This module can be downloaded [here](https://github.com/hexonet/whmcs-ispapi-registrar/raw/master/whmcs-ispapi-registrar-latest.zip). Our Widget does not support the WHMCS built-in HEXONET provider module!
* **HEXONET Live or Test Account** must be configured in the ISPAPI Registrar Module. Account creation is always free:
  * [OT&E (Test System) Account](https://www.hexonet.net/signup-ote)
  * [LIVE (Real World System) Account](https://www.hexonet.net/cart?signup=true)

For the latest WHMCS minimum system requirements, please refer to the WHMCS System Requirements Documentation, [here](https://docs.whmcs.com/System_Requirements).

## Installation / Upgrade

Download the ZIP archive including the latest release version [here](https://github.com/hexonet/whmcs-ispapi-widget-modules/raw/master/whmcs-ispapi-widget-modules-latest.zip).

Copy the contents of the downloaded archive to your WHMCS directory, while keeping the folder structure intact.

e.g.

`modules/widgets/ispapi_modules.php` => `$YOUR_WHMCS_ROOT/modules/widgets/ispapi_modules.php`
