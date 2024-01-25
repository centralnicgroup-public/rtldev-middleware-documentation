---
layout: default
title: Registrar Module
parent: WHMCS
grand_parent: TPP Wholesale
nav_order: 1
showtoc: 1
---

# TPP Wholesale Registrar Module

A Registrar Module connects WHMCS to the Domain Registrar's System. This Documentation covers the internet.bs WHMCS Registrar Module maintained by Team Internet's Middleware Team.

NOTE: If you experience any issue when using this module, feel free to reach out to our [Support team](#contact-us).

## Introduction

Firstly, we want to welcome you on board. We are always interested in making our WHMCS integration and documentation better. So, in case you want to provide us some feedback, you're welcome.
We have a very short release cycle and can release patches and new features quickly, if necessary.

Back to topic, here the steps describing how to start with us using WHMCS.

## Supported Features

We support all features of the WHMCS built-in module.

Check our webpage [here](https://www.tppwholesale.com.au/whmcs/).

Our custom Registrar Module is continuously maintained and coming with more features than the module shipped with WHMCS.
Some features might be not listed here, this section is WIP (2023-03).

## Requirements

We encourage our Resellers to stick on the latest WHMCS release for security reasons and to benefit of latest features and patches.

- WHMCS >= 7.10 / better >=8 plus PHP 8++
- Installed and working: curl, php-curl

For the latest WHMCS minimum system requirements, please refer to [System_Requirements](https://docs.whmcs.com/System_Requirements).

## Installation

To install our module please download the latest version from [here](https://github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/raw/main/whmcs-tpp-registrar-latest.zip) and follow the belows steps:

1. Extract the entire archive contents to your WHMCS installation's root directory
2. Login to whmcs Admin area and activate the module.
3. Configure the Registrar Module as necessary.
4. Find our additional fields file and installation instructions [below](#additionalfields).

## Additional Fields

WHMCS provides a way to define additional domain fields that are needed for some TLDs to get domains registered. We add those for our module via file `/resources/domains/additionalfields.php`. Initially, this file is not present and has to be manually created.

Find our example file as part of our registar module under `modules/registrars/tppwregistrar/additionaldomainfields_sample.php`.

Create the additional fields configuration file `/resources/domains/additionalfields.php` manually as follows:

```php
<?php
include(ROOTDIR."/modules/registrars/tppwregistrar/additionaldomainfields_sample.php");
```

That's it, voilà.

Unfortunately we do not yet have support for all TLDs that have additional fields in our WHMCS module but plan to add it in future releases.

From the TLDs that require additional data we currently support: .au, .asn.au, .id.au, .com.au, .net.au and .org.au.
