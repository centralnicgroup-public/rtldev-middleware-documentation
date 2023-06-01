---
layout: default
title: Blesta
parent: HEXONET
nav_order: 2
showtoc: 1
---

# Blesta

[![License: MIT]({{ 'assets/images/License-MIT-blue.svg' | relative_url }})](https://opensource.org/licenses/MIT)

Blesta is an all-in-one domain provisioning, client management, billing/invoicing, and client support solution for any business selling through a website. By coupling Blesta with the HEXONET Registrar Module, anyone can start reselling hundreds of profitable domain name extensions (TLDs) quickly and in ease.

If you have not yet Blesta set up, please follow their [Installation Guide](https://docs.blesta.com/display/user/Installing+Blesta) which explains the Installation Process completely and well. System Requirements can be found [here](https://docs.blesta.com/display/user/Requirements).

## Module Installation

Copy all files from our archive to your Blesta directory, while keeping the folder structure intact.

E.g.

`components/modules/ispapi/ispapi.php`
`=> Your_Blesta_Directory/components/modules/ispapi/ispapi.php`

### Set up a Cron Job

In order to automate tasks within Blesta, a cron job must be created.
More information on how to set up the cron job, can be found here [(section 4)](https://docs.blesta.com/display/user/Installing+Blesta)

## Module Configuration

**Reseller Credentials**:

In the Blesta Admin area, go to
`Settings > Modules > Available`

Install the new registrar ”**ISPAPI vx.y.z**”, and enter your HEXONET credentials. You can create your account [here](https://www.hexonet.net/sign-up)

If you want to use the “TestMode”, you have to create your OT&E account [here](https://www.hexonet.net/signup-ote)

To enter your credentials, go to

`Settings > Modules > Installed > Ispapi module → Manage > Add Account`

You can add multiple accounts there. Check ‘Sandbox’ if it represents your OT&E account.

![credentials]({{ 'assets/images/blesta/reseller_credentials.png' | relative_url }})

> **Make sure that the account you are using is set to renewal mode AUTOEXPIRE in your Control Panel, otherwise, domains might be renewed without being paid for by the customer**

## Domain Contact Verification

Inter-Registrar Transfer Policy (IRTP). It governs the domain name transfers between ICANN registrars. The IRTP includes changes to domain ownership. Small changes to a domain name’s registrar first name, last name, organization, and email address trigger the validation process.

Have a read more about IRTP [here](https://wiki.hexonet.net/wiki/IRTP)

At the moment this feature is **not** supported by Blesta. In order to make it possible for our customers to trigger the validation process, we provide the following procedure:

"You have to obtain verifiable DA status to act on behalf of the new registrant of a domain name. To do that:

* navigate on the control panel: `Reseller Settings > Domain Settings`. Under the "gTLD Inter-Registrar Transfer Policy" section first read the terms, implement the legal changes, and finally verify your Designated Agent status and your wish to alter the ModifyDomain command for IRTP compliance.

* Whenever your customer evokes a material change of registrant, the Reseller must submit the change as the DA for the new registrant.

* The prior (old) registrant will always be sent an authorization email, and they will have fourteen (14) days to confirm the change.

* The opt-out of the sixty (60) transfer lock is enabled for module Resellers by default. However, if a Reseller wishes to opt-IN (disable the automatic opt-out) to the registrar transfer lock so that they can immediately process Change of Registrant requests with added security (for Change of Registrant when email addresses are not working), resellers can simply enable the checkbox stating "Disable the automatic opt-out. Registrant changes are processed in realtime, but domains will also get transfer-locked for 60 days. Dependant on fallback being enabled."

## Additional Domain Fields

The registration of some extensions requires additional domain fields. (e.g. Legal Type for a .CA domain etc.) in special cases.
Additional fields are already included in the module. When you enter a domain to register, the additional fields will be automatically displayed.

## Reselling with Blesta

This [link](https://docs.blesta.com/pages/viewpage.action?pageId=2621862) provides general information on how you can sell domains using Blesta and a registrar module.

if this is still leaving questions, feel free to reach out.
