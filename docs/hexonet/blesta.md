---
layout: default
title: Blesta
parent: HEXONET
nav_order: 2
showtoc: 1
---

# Blesta

[![License: MIT]({{site.baseurl}}/assets/images/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

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

![credentials]({{site.baseurl}}/assets/images/blesta/reseller_credentials.png)

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

## Reselling with Blesta

This [link](https://docs.blesta.com/display/user/Selling+Domains) provides general information on how you can sell domains using Blesta and a registrar module.

In the following, you will find example configuration settings for our ISPAPI registrar module in Blesta.

### Create a package group

`Packages > Package Groups > + > Create Group`

Example:

![CreatePackageGroup]({{site.baseurl}}/assets/images/blesta/package_group.png)

### Create package

Create a package for each TLD.

`Packages > Browse Packages > + >`

A package contains the TLD, its pricing, the assigned registrar module, a default nameserver configuration etc.

### Basic section of a package

![BasicSection]({{site.baseurl}}/assets/images/blesta/package_basic_section.png)

### Module options

![BasicModuleOptions]({{site.baseurl}}/assets/images/blesta/package_module_options.png)

### Pricing

![PackagePricing]({{site.baseurl}}/assets/images/blesta/package_pricing.png)

You will find your pricing for TLDs in the HEXONET control panel under your account. Click on your account name at the top right corner `> Billing > Prices & Costs > Domains`

Note: Please notice that the default registration and renewal period is set to one year (1Y) at HEXONET.

### Group Membership

If you wish to group your package under the created package group, select ‘Select from Available Groups” and move the group from the right to left multi-select box.

![PackageGroupMembership]({{site.baseurl}}/assets/images/blesta/pckage_group_memebership.png)

## Create order form

`Packages > Order Forms > + > Add Form`

### Basic

![OrderFormBasic]({{site.baseurl}}/assets/images/blesta/order_form_basic.png)

Set ‘Type’ to ‘Domain and Other’ for selling domains in the order form.

### Template

Select a template of your choice. Template selection and configuration of other available options are described [here](https://docs.blesta.com/display/user/Selling+Domains) in more details in the section ‘Create an order form > Basic’.

![OrderFormTemplate]({{site.baseurl}}/assets/images/blesta/order_form_template.png)

### Domain Package Group

![DomainPackageGroup]({{site.baseurl}}/assets/images/blesta/order_form_domain_package_group.png)

In the ‘Domain Package Group‘ section, select your package group under ‘Domain Package Group’.
‘Package Group’ section is only required when you want to sell hosting as well as domains.
In our example, we are only focusing on selling domains, so that we do not assign a group there.

### Currencies and Gateways

See the [Blesta documentation](https://docs.blesta.com/display/user/Selling+Domains).

![OrderFormCurrenciesGateways]({{site.baseurl}}/assets/images/blesta/order_form_currencies_gateways.png)

## Search example

`On the Blesta client area > Order`

Type your term, check TLDs from the selection and click on ‘Check Availability’. To transfer a domain click on ‘Transfer’ button.

![SearchExample]({{site.baseurl}}/assets/images/blesta/search_example.png)

## Admin Area: Domain Transfer

In the Admin Area, go to

`Clients > select your client >  Add Service >  select package from the package group > Continue`

Enter the Term, Status as Active, Domain Name and Nameservers. Click on Continue. On the next page, click on ‘Add Service’ to register the domain name.

![AdminAreaAddDomain]({{site.baseurl}}/assets/images/blesta/add_domain_admin_area.png)

To transfer a domain, click on the ‘Transfer’ radio button. It allows you to enter the EPP code for the domain name.

![TransferDomainAdminArea]({{site.baseurl}}/assets/images/blesta/transfer_domain_admin_area.png)

![AdminAreaAddDomain]({{site.baseurl}}/assets/images/blesta/add_domain_admin_area_01.png)

## Manage Domain Names

`Clients > select your client >  Manage >`

### Domain Information

Domain information at HEXONET includes status and expiry date of a domain at HEXONET. You can find it under ‘Basic Options’ page of a domain name.

![ManageDomain]({{site.baseurl}}/assets/images/blesta/manage_domain.png)

### Renew a Domain

To manually renew a domain from Blesta, select time period from the drop down list and click on ‘Save’ in the ‘Basic Options’ page of a domain name.

![RenewDomain]({{site.baseurl}}/assets/images/blesta/renew_domain.png)

### Domain Contact Information

`Clients > select your client >  Manage >   Whois`

The contact information of a registered domain name can be found in the ‘Whois’ tab. The ISPAPI registrar module allows you to modify the contact information and save the changes. These changes automatically sync to the HEXONET system.

![ContactInformation]({{site.baseurl}}/assets/images/blesta/domain_name_contact_information.png)

### Domain Name Servers

`Clients > select your client >  Manage >   Name Servers`

Name servers of a registered domain name can be found in the ‘Name Servers’ tab. The ISPAPI registrar module allows you to modify this information and save the changes. These changes automatically sync to the HEXONET system.

![Nameservers]({{site.baseurl}}/assets/images/blesta/domain_name_nameservers.png)

### Domain Settings

Settings of a domain include – Registrar Lock, EPP code, Whois Privacy settings.

Whois privacy setting will only be displayed if the TLD supports that setting. These settings of a registered domain can be found in the ‘Settings’ tab.

The ISPAPI registrar module allows you to modify this information and save the changes. These changes automatically sync to the HEXONET system.

![Settings]({{site.baseurl}}/assets/images/blesta/domain_name_settings.png)

## Additional Domain Fields

The registration of some extensions requires additional domain fields. (e.g. Legal Type for a .CA domain etc.) in special cases.
Additional fields are already included in the module. When you enter a domain to register, the additional fields will be automatically displayed.
