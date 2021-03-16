---
layout: default
title: Domain Import
parent: WHMCS
grand_parent: HEXONET
nav_order: 8
showtoc: 1
---

# ISPAPI Domain Importer

[![License: MIT]({{ 'assets/images/License-MIT-blue.svg' | relative_url }})](//opensource.org/licenses/MIT)

This Repository covers the WHMCS Domain Import Module of HEXONET.

## Introduction

The ISPAPI Domain Import Addon Module provides a user-friendly interface for you to import existing Domains from the HEXONET system.

The add-on automatically creates new clients out of the registrant contact assigned to the domains if not yet existing. Use the domain name filter to just select a sublist of all your domain names for import or leave the default value `*` to select all.

NOTE: We limit the results of the domain list to 10k.

The Domain Import module connects to the configured ISPAPI registrar module to import the selected domains.

## Supported Features

* Domain Import form HEXONET system
* Domain Filter input field
* Domain List preview (10k Domains at max.)
* Client password for new clients (auto-created)
* Set Payment Gateway
* Set Currency

... and MORE!

**Requested Features**:

The below features are requested and added to our task queue:

* Import Domains to an existing client account.

Still, we can't provide an ETA for the listed features.

## Requirements

* WHMCS version 7.0 or higher
* Latest **ISPAPI Registrar Module**. This module can be downloaded [here](//github.com/hexonet/whmcs-ispapi-registrar/raw/master/whmcs-ispapi-registrar-latest.zip). Our Importer Module does not support the WHMCS built-in HEXONET provider module!
* **HEXONET Live or Test Account** must be configured in the ISPAPI Registrar Module. Account creation is always free:
  * [OT&E (Test System) Account](//www.hexonet.net/signup-ote)
  * [LIVE (Real World System) Account](//www.hexonet.net/cart?signup=true)

For the latest WHMCS minimum system requirements, please refer to the WHMCS System Requirements Documentation, [here](//docs.whmcs.com/System_Requirements).

## Installation / Upgrade

Download the ZIP archive including the latest release version [here](//github.com/hexonet/whmcs-ispapi-domainimport/raw/master/whmcs-ispapi-domainimport-latest.zip).

Copy files from the zip archive to the addons folder of your WHMCS installation ($YOUR_WHMCS_ROOT/modules/addons), while keeping the folder structure intact.

E.g.

     whmcs-ispapi-domainimport-1.0.0
     => $YOUR_WHMCS_ROOT/modules/addons/ispapidomainimport

Now you can activate this addon by navigating to `Setup > Addon Modules > ISPAPI Domain Import` to activate and configure it as described below.

**For an update**, unzip the downloaded file and upload the contents as mentioned above to your WHMCS addons directory. Then go to `Setup > Addon Modules > ISPAPI Domain Import` and reconfigure it, if necessary.

**NOTE**: The WHMCS root directory is the folder that contains the "configuration.php" file.

## Addon Activation

Within the WHMCS Admin area, go to `Setup > Addon Modules`

![configuration]({{ 'assets/images/whmcs/ispapi-domainimporter/configuration.png' | relative_url }})

Activate the "ISPAPI Domain Import" Add-on, give the module "Full Administrator" Access Control right.

## Addon Configuration

Nothing to configure.

## Import Domains

In Admin Area navigate to `Addons > ISPAPI Domain Import` and fill out the import form to fit your needs.
![form1]({{ 'assets/images/whmcs/ispapi-domainimporter/form1.png' | relative_url }})
When done, click `Pull Domain List`. The domain filter can be used to just pull and import a subset of your domains into WHMCS. Example:
![form2]({{ 'assets/images/whmcs/ispapi-domainimporter/form2.png' | relative_url }})

NOTE: We limit the number of domains that can be pulled in this way to 10k at max.

If necessary, new clients are automatically created out of registrant data with a random password set. The client can use the WHMCS build-in functionality to reset this password to get access to the account.

Finally, click on the "Import" button to start importing. The import process will import the list of domains sequentially. The progress will be displayed.
![configuration]({{ 'assets/images/whmcs/ispapi-domainimporter/import.png' | relative_url }})

NOTE: In case you have domains with active Trustee Service, be aware of that WHMCS itself doesn't support this. This finally means that such costs can't be invoiced in WHMCS. There's an open feature request you can upvote [here](//requests.whmcs.com/topic/integrate-trustee-service-as-generic-domain-add-on) to get it finally considered for integration in WHMCS.
