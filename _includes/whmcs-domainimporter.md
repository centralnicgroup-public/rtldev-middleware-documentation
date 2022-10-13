# Domain Importer Addon

## Introduction

The Domain Importer Addon provides a user-friendly interface allowing for importing your existing Domain Portfolio from HEXONET / CentralNic Reseller into your WHMCS system.

The Addon automatically creates new clients out of the registrant contact assigned to the domains if not yet existing. Alternatively you can also specify a single Client Account that is then used as Import Target. Provide Domain Names to Import by copy'n'paste.

The Domain Importer Addon then finally connects to the respective Registrar Module to import the given domain names.

## Features

- Domain Import from [HEXONET](//github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/raw/main/whmcs-cnic-bundle.zip) / [CentralNic Reseller](//github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/raw/main/whmcs-cnic-bundle.zip) Registrar System
- Regular Domain Imports
- IDN Domain Imports (IDN Language auto-detection, if supported)
- Premium Domain Imports
- Bulk Import into specified existing WHMS Client Account
- Bulk Import by auto-creating Client Accounts based on Registrant Data
- Import of additional domain field settings (if supported by Registrar Module)

... and MORE!

## Registrar Matrix

| Registrar                                                                                                       | Supported | Add. Fields | IDNs  | Premium Domains |
| --------------------------------------------------------------------------------------------------------------- | --------- | ----------- | ----- | --------------- |
| [HEXONET](//github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/raw/main/whmcs-cnic-bundle.zip)             | YES       | YES         | YES   | YES             |
| [CentralNic Reseller](//github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/raw/main/whmcs-cnic-bundle.zip) | YES       | NO          | YES\* | NO              |
| ~~TPP Wholesale~~                                                                                               | NO        | NO          | NO    | NO              |
| ~~internet.bs~~                                                                                                 | NO        | NO          | NO    | NO              |
| ~~PartnerGate~~                                                                                                 | NO        | NO          | NO    | NO              |
| ~~Instra Corp.~~                                                                                                | NO        | NO          | NO    | NO              |

NOTE: Import of additional domain fields is uncritical, nice to have.

\*Import of idnLanguage not supported.

## Incompatibility Notice

In case you have domains with active **Trustee Service** / **Local Presence Service**, be aware of that WHMCS itself doesn't support this Domain Addon. This finally means that such costs can't be invoiced in WHMCS. There's an open feature request you can upvote [here](//requests.whmcs.com/topic/integrate-trustee-service-as-generic-domain-add-on) to get it finally considered for integration in WHMCS.

Still, these domains are included in the import, but highlighted as follows:

![Local Presence Service]({{ 'assets/images/whmcs/cnic-domainimporter/trusteeservice.png' | relative_url }})

## Preparatory Work

Care about:

- Domain Pricing Configuration
- if you offer Premium Domains: Premium Domain Configuration (incl. Pricing)
- Domain Add-On Pricing Configuration
- Assign Domain Add-Ons to the TLDs of interest that support them

## Installation / Upgrade
### Requirements

- WHMCS version 8.0 or higher
- Find the supported Registrar Modules linked above.

### Upgrading

{% include whmcs-bundle-upgrade.md %}

### Download & Unpack

Download the ZIP archive including the latest release version [here](//github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/raw/main/whmcs-cnic-bundle.zip).

Copy the zip archive's contents to your WHMCS System's root folder.

Now you can activate this addon by navigating to `Setup > Addon Modules > CNIC Domain Importer` to activate and configure it as described below.

**NOTE**: The WHMCS root directory is the folder that contains the "configuration.php" file.

### Addon Activation

Within the WHMCS Admin area, go to `Setup > Addon Modules`

![configuration]({{ 'assets/images/whmcs/cnic-domainimporter/configuration.png' | relative_url }})

Activate the "CNIC Domain Importer" Add-on, give the module "Full Administrator" Access Control right.

## Import Wizard

In Admin Area navigate to `Addons > ISPAPI Domain Importer` and fill out the import form to fit your needs.
![Import Wizard]({{ 'assets/images/whmcs/cnic-domainimporter/wizard.png' | relative_url }})

First copy'n'paste your List of Domains into the text area and choose the Registrar to import from.

If you wish to import to an existing WHMCS client account, please check `Import to` and provide the ID of that client account in WHMCS.

Otherwise, we will automatically create client accounts based on the domains registrant data with a random password set. Clients are automatically created with the given payment method and currency. The client can finally use the WHMCS build-in password reset functionality to gain access to his account.

Now, you're ready. Click on the "Start Import" button to get this started. The import process will import the list of domains sequentially. The progress will be displayed.

![Import in Progress]({{ 'assets/images/whmcs/cnic-domainimporter/importing.png' | relative_url }})

![Import Finished]({{ 'assets/images/whmcs/cnic-domainimporter/finished.png' | relative_url }})
