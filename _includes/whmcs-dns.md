# DNS Addon

[![License: MIT]({{ 'assets/images/License-MIT-blue.svg' | relative_url }})](//opensource.org/licenses/MIT)

WHMCS Addon for automatic DNS zone creation upon domain registration.

## Introduction

This addon allows you to predefine DNS zone templates to be used when a new domain is being registered with DNS management.
For example, you might want to direct that to a default website. Or, if the domain is assigned to a hosting product, use a specific zone for that product.

## Features

- Manage DNS zones for your domains at CentralNic brands
- Currenctly supported registrar modules: ISPAPI and CentralNic Reseller
- Define a global zone, to be applied to all new domain registrations
- Define zones for specific hosting products, to be applied when registering a domain belonging to a hosting product
- Supports A, AAAA, MX, MXE, CNAME, TXT and SRV records
- Supports WHMCS specific URL and FRAME record types for the website redirection feature

## Requirements

- WHMCS version 8.0 or higher
  For the latest WHMCS minimum system requirements, please refer to [WHMCS System Requirements](//docs.whmcs.com/System_Requirements) page.
- PHP 7.4 or higher
- One of the following registrar modules installed and enabled:
  - ISPAPI
  - CentralNic Reseller
  
  This addon only works with those registrar modules.

## Installation / Upgrade

Available for download [here](//github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/raw/main/whmcs-cnic-bundle.zip).

### Extract files

Extract the zip contents to the root folder of your installed WHMCS instance.

### Addon activation

- Open the WHMCS Admin Area
- Navigate to `System Settings` > `Addon Modules`
- Find `CentralNic DNS` and click on `Activate`
- Click on `Configure` and make sure to configure Access Control as needed

### Upgrading

{% include whmcs-bundle-upgrade.md %}

## Usage

- Open the WHMCS Admin Area
- From the `Addons` menu, select `CentralNic DNS`
- The list of configured zones will appear

![adminarea]({{ 'assets/images/whmcs/cnic-dns/list.png' | relative_url }})

### Create a zone template

- Click on the `Add` button
- A modal will appear

![modal]({{ 'assets/images/whmcs/cnic-dns/zone.png' | relative_url }})

Fill out the form:

- `Name`: this can be anything that helps you identify the template
- `Zone`: this should contain the template with a predefined syntax (see below)
- `Products/Services`: if you want the template to apply to specific hosting products, select them here
- `Instructions`: clicking here will show hints for the template syntax
- `Set as global default`: if enabled, the template will act as default for any domain.

### Zone syntax

Write one record per line in this format:

```text
<hostname> <type> <address> (<priority>)
```

- Type should one of the following:
  A, AAAA, MX, MXE, CNAME, TXT, SRV, URL, FRAME
- You can use '@' for getting the domain name
- You can use '%ip%' for assigning the IP based on the server
- Priority is only necessary for MX records

Example:

```text
@ A %ip%
www CNAME @
mail A 127.0.0.1
@ MX mail.@ 10
```

### Behavior

The decision making process that establishes if and which zone template will be applied to a domain, follows this flow chart:

![behavior]({{ 'assets/images/whmcs/cnic-dns/behavior.png' | relative_url }})
