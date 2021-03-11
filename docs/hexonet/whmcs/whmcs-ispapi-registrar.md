---
layout: default
title: Registrar Module
parent: WHMCS
grand_parent: HEXONET
nav_order: 2
showtoc: 1
---

# ISPAPI Registrar Module

[![License: MIT]({{site.baseurl}}/assets/images/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A Registrar Module connects WHMCS to the Domain Registrar's System. This Documentation covers the HEXONET/ispapi WHMCS Registrar Module maintained by HEXONET's 3rd-party Software Integrations Team.

NOTE: If you experience any issue when using this module, please take a look at the [FAQs](https://github.com/hexonet/whmcs-ispapi-registrar/wiki/FAQs). If you can't find help in there, feel free to contact our Support team.

## Introduction

Firstly, we want to welcome you on board. We are always interested in making our WHMCS integration and documentation better. So, in case you want to provide us some feedback, you're welcome.
We have a very short release cycle and can release patches and new features quickly, if necessary.

Back to topic, here the steps described in short about how to start with us using WHMCS.

## Supported Features

- 1-Click Migration from HEXONET registrar module
- Web Apps: G Suite supported
- Registrar TLD Sync / Pricing Import (WHMCS 7.10)
- Domain Registration
  - Additional domain fields (default configurations integrated!)
- Domain Transfer (with AuthInfo code support)
- Domain Management
  - Domain locking
  - Update Contact Information (with UTF-8 support)
  - Change Nameservers
  - Nameserver Registration (Add, Modify, Delete)
  - Explicit Deletions supported in Admin panel
- Domain Renewal
  - Special handling for registries without explicit renewals (many ccTLDs)
- DNS Management
  - Record-Types: A, AAAA, MX, MXE, CNAME, TXT
  - Allows user defined TTL values and MX priorities
- Email forwarding
- URL forwarding
  - Redirect using HTTP
  - Forward using HTML Frame
- Optional TLS/SSL for API connection
  - Supports proxy server for accelerated API access
- Support for testing environment
- WHOIS Privacy management of .CA domain names
- Change of Registrant for .CA / .IT domain names
- Support for WHOIS Privacy / ID Protection
  - Uses privacy service WHOISTRUSTEE.com
  - ID Protection toggle in Admin area gets synchronized
  - Client area WHOIS Privacy management
- Support for all bulk update operations
- Support for IDNs
  - automatically selects IDNA2008 if supported by TLD (e.g. .de)
  - uses API based IDN conversion in background
- Support for new domain sync method (\_Sync)
  - Workaround for ccTLDs that need to get renewed before expiration
- Support for .SWISS registrations
- Support for SRV records
- Support for DNSSEC Management
- Auto-Prefill additional domain fields
  - VAT ID
  - DK Hostmaster User ID
  - Contact Language (.ca)

... and MORE!

## Requirements

* WHMCS 7.6+ or 8.x
* installed and working: curl, php-curl

For the latest WHMCS minimum system requirements, please refer to
[https://docs.whmcs.com/System_Requirements](https://docs.whmcs.com/System_Requirements)

## Create your Account

We have two systems:

- an Operational Test & Evaluation (OT&E) system and
- a LIVE system ("the real world")

The OT&E system is thought for integration tests and everything you're doing there is for free - but ordered products are then also not existing in real. With an OT&E account, all functionality and transactional processes can be tested thoroughly.The LIVE system corresponds to the real world system and comes with costs for ordered products and services.

LIVE System Signup can be done [here](https://www.hexonet.net/cart?signup=true).
OT&E System Signup can be done [here](https://www.hexonet.net/signup-ote).

Your account will then be used in WHMCS for ordering our products and services and for managing them.
The creation of your account is completely free of charge.

Once your Account is created, a confirmation email with connection information will be provided to you.

## Default Domain Renewal Mode

Please visit our own Frontend that we offer our customers for free here: [LIVE System](https://account.hexonet.net) or [OT&E System](https://account-ote.hexonet.net/).

Click on your user name at top right and navigate to `Products > Domain Name Settings > Renewal Mode for New Domains`. Here select 'Expire Domain' and press 'Save'.

Note: The renewal mode setting is only applied to new domain registrations in your account. If you already have domains registered in your account, but not available in WHMCS - use our domain importer addon, but ensure to reconfigure also the renewal mode of all such domains to `expire` too.

This is necessary to avoid domains are getting automatically renewed and causing costs for you if your customer is not interested in renewing.

## Upgrading our Module

**IMPORTANT** Ensure to read the [Release Notes](https://github.com/hexonet/whmcs-ispapi-registrar/releases) carefully before Upgrading! Our Release numbers follow [semantic versioning](https://semver.org/) and thus we follow the version syntax: MAJOR.MINOR.PATCH.

You can always upgrade without worries if the PATCH or MINOR version have just changed.
If the MAJOR version has changed, check the release notes to avoid unexpected issues as a new MAJOR version comes always with breaking changes or at least with a new module behavior.

Follow the installations steps below and consider the provided release notes for the MAJOR version upgrade. In detail: if you're upgrading from 1.x.y to 4.x.y, ensure to check ALL major version release notes up to the version you're upgrading too. In this example, check the release notes for 2.0.0, 3.0.0 and 4.0.0.

If you're upgrading regularly and keeping all our modules / addons / widgets updated, you run in less upgrade effort than doing multiple major version number steps. You can add/subscribe  yourself to release notifications in our github repositories to get informed about new releases.

## Installing our Module

Even though a `HEXONET` Module is shipped with WHMCS, we highly recommend downloading and installing our white label module `HEXONET/ispapi` which is the maintained version and providing you latest features and patches. Available for download [here](https://github.com/hexonet/whmcs-ispapi-registrar/raw/master/whmcs-ispapi-registrar-latest.zip).

- Download the ZIP archive and extract it to your HDD
- Copy the contents of folder e.g. `modules/registrars` to the appropriate/matching folder of your WHMCS instance `modules/registrars`.

For non-technicians the above step covers in detail:

1. Navigate to the extracted folder of that zip archive. Go into that folder.
2. Below that sub folder, you again find a sub folder named `modules`. Go into that folder.
3. Below that sub folder, you again find a sub folder named `registrars`. Go into that folder.
4. Here you'll find a subfolder named `ispapi`. Copy that folder with all its contents into the sub folder `/modules/registrars` of your WHMCS installation.

For cPanel users: Use [this video](https://www.youtube.com/watch?v=SNtldWg_0gY) on how to upload and extract a ZIP archive using your cPanel. Use [this video](https://www.youtube.com/watch?v=T7OYIOwyWvU) on how to find the `public_html` folder in your cPanel. In there you'll find a subfolder `gwcorp` or `whmcs` containing again a subfolder `modules` and then the subfolder `registrars`. Please copy the above mentioned folder of our zip archive into that folder.

For non cPanel users: check location `/var/www/whmcs` (default path) or eventually `/var/www/html/whmcs`.

![cPanel, ZIP file structure]({{site.baseurl}}/assets/images/whmcs/ispapi-registrar/cpanel1.png)
![cPanel, WHMCS folder structure]({{site.baseurl}}/assets/images/whmcs/ispapi-registrar/cpanel2.png)

**NOTE: If you're upgrading** - please first delete the `modules/registrars/ispapi` folder in your WHMCS instance first.

Note: Feel free to add yourself as Watcher to that github repository by clicking on the `Watch` button at the top of the page and then choose `Releases Only`.
We are aware of that installation and upgrade effort of our module is something we need to minimize. We have projects in queue to achieve that and to cover a lot more.
If you already used the HEXONET Registrar Module, read [here](https://github.com/hexonet/whmcs-ispapi-registrar/wiki/Start-selling-domains-with-HEXONET-&-WHMCS#migrating-from-the-hexonet-module-to-the-ispapi-module) on how to migrate to the ISPAPI Registrar Module.

Before we continue, we want to point you to the Section [**Migrating**](#migrating-from-hexonet-registrar-module) if you have already started with the HEXONET Module that is shipped with WHMCS. Switching Domains to our ISPAPI Registrar Module can be done in ease at this point.

## Module Updates Subscription

Feel free to add yourself as Watcher to our GitHub repository to get informed about new releases:
![GH subscribe]({{site.baseurl}}/assets/images/whmcs/ispapi-registrar/ghwatch.png)

Simply click on the "Watch" Button, select "Custom" and there "Releases" and save. We also highly enjoy getting starred!
Another solution is to use our [Modules Overview Widget](whmcs-ispapi-widget-modules.md).

## Migrating from HEXONET Module

Some of our customers started with the HEXONET module as it is shipped with WHMCS. The ISPAPI Registrar Module is the maintained white-label version of the HEXONET Module. Migrating can be done by a single click:

![migrationbttn]({{site.baseurl}}/assets/images/whmcs/ispapi-registrar/migrate.png)

In addition:

- Ensure to have file `hexonet_summary.php` deleted (an old and deprecated HEXONET widget) - just in case you're using it. WHMCS Widget folder can be found under path `/modules/widgets` of your WHMCS instance. A replacement for that widget can be found [here](whmcs-ispapi-widget-modules.md).
- You can now deactivate the HEXONET module as the ISPAPI module is used as replacement.

## Module Configuration

Now, navigate in your WHMCS instance to `Setup > Products/Services > Domain Registrars`.
There, ensure to have the `HEXONET` module **deactivated**.
Find the `HEXONET/ispapi` Module in the list and activate it. If you're not able to find that Module in the list, something went wrong with the Module Installation - please check this part again please.

![configuration]({{site.baseurl}}/assets/images/whmcs/ispapi-registrar/config.png)

Now, configure this Module by entering your credentials (OT&E or LIVE System Account).
Activate `TestMode` by activating the checkbox in case you want to use the OT&E System - just ensure you don't mix it up with LIVE System Credentials or vice versa.

Activate `Automatic Transfer Lock` setting by using the appropriate checkbox to ensure outgoing transfers can't be initiated in ease. We suggest that setting not because it could be better for us as registrar - it helps securing your domain names from getting transferred out in ease.

Activate `Automatic NS Update` setting in case you want our module to update domain's nameservers automatically after successful transfer. Just a little note: WHMCS itself by default suggests your configured default nameservers. This setting will automatically update the nameservers after successful transfer without knowing if the customer set these nameservers or if WHMCS did it. Removing all nameservers from input fields in step Configure in WHMCS' Shopping Cart won't change anything as WHMCS keeps then using the default nameservers. So, be aware of that design issue of WHMCS for Transfer Orders when using that feature. Read [FAQ Entry #25](https://github.com/hexonet/whmcs-ispapi-registrar/wiki/FAQs#25-nameservers-not-updated-after-transfer) for more details.

At `IRTP (Inter-Registrar Transfer Policy)` setting, we suggest using `Option 1` to activate the default WHMCS way of the IRTP integration. Find further details documented below.

If you want to offer secure DNS / DNSSEC / Secure DNS, feel also free to activate the checkbox `Offer DNSSEC / Secure DNS`. Find further details documented [here](https://github.com/hexonet/whmcs-ispapi-registrar/wiki/Start-selling-domains-with-HEXONET-&-WHMCS#nameservers--dns-management).

If you want to offer our Web Apps to your customers, activate the `Offer Web Apps` checkbox. Find further details documented below.

Now, press Save and voilà. If you're getting a green message - you're connected. Otherwise, you have to investigate further as described [here](https://github.com/hexonet/whmcs-ispapi-registrar/wiki/FAQs#49-login-failed-in-registrar-module).

### Domain Contact Verification

It governs the domain name transfers between ICANN registrars. The Inter-Registrar Transfer Policy (IRTP) includes changes to domain ownership. Small changes to a domain name’s registrar first name, last name, organization, and email address trigger the validation process.

Have a further read about IRTP [here](https://wiki.hexonet.net/wiki/IRTP).

IRTP handling is supported in WHMCS since version 7.6. We have adapted our ISPAPI registrar module to support this accordingly.

We have introduced two options in the registrar module configuration settings. (`<WHMCS admin area> Setup > Products/Services > Domain Registrars > ISPAPI > Configure`)

- Options One: Check to act as Designated Agent for all contact changes. Ensure you understand your role and responsibilities before checking this option. (SUGGESTED!)
- Options Two: Check to use IRTP feature from our API.

**Option One**:

This is the default and suggested setting.
By checking this option you will be automatically acting as Designated Agent(DA) for the new and old registrant.
Our registrar module confirms the DA status by sending the following additional domain fields automatically with the TradeDomain command:

            "X-CONFIRM-DA-OLD-REGISTRANT" => 1,
            "X-CONFIRM-DA-NEW-REGISTRANT" => 1

Read more [here](https://docs.whmcs.com/Domain_Contact_Verification) about IRTP handling via WHMCS.

Note: Ensure to have the "gTLD Inter-Registrar Transfer Policy" settings deactivated/removed in our [control panel](https://account.hexonet.net/token=qYDCIxFn/#/domain-admin). If you haven't configured this in the past, no need to worry.

**Option Two**:

In order to handle the IRTP process over our API, you have to obtain verifiable DA (Designated Agent) status to act on behalf of the new registrant of a domain name.

- navigate on the [control panel](https://account.hexonet.net/token=qYDCIxFn/#/domain-admin): `Reseller Controls > Product Settings > Domain Settings`. Under the "gTLD Inter-Registrar Transfer Policy" section first read the terms, implement the legal changes, and finally verify your Designated Agent status and your wish to alter the ModifyDomain command for IRTP compliance.
- Whenever your customer evokes a material change of registrant, the Reseller must submit the change as the DA for the new registrant.
- The prior (old) registrant will always be sent an authorization email, and they will have fourteen (14) days to confirm the change.
- The opt-out of the sixty (60) transfer lock is enabled for module Resellers by default. However, if a Reseller wishes to opt-IN (disable the automatic opt-out) to the registrar transfer lock so that they can immediately process Change of Registrant requests with added security (for Change of Registrant when email addresses are not working), resellers can simply enable the checkbox stating "Disable the automatic opt-out. Registrant changes are processed in realtime, but domains will also get transfer-locked for 60 days. Dependant on fallback being enabled.

### Web Apps Support

This feature can be enabled in the Registrar Module configuration. When enabled, your customers can connect Web Apps to their domains in case the related DNSZone is managed by HEXONET (Active Addon `DNS Management`).
For now, we only have integrated `G Suite`, just let us know if further Web Apps are of high demand for you. Here the ones HEXONET in general supports on API-side: [Web Apps](https://www.hexonet.net/products/webapps).

Here some impressions:
![Web App Overview]({{site.baseurl}}/assets/images/whmcs/ispapi-registrar/webapps1.png)
![Web App Connecting]({{site.baseurl}}/assets/images/whmcs/ispapi-registrar/webapps2.png)
![Web App Disconnecting]({{site.baseurl}}/assets/images/whmcs/ispapi-registrar/webapps3.png)

## Admin/Tech/Billing Contact Data

In WHMCS navigate to `Setup > General Settings > Domains` and activate the checkbox `Use Clients Details` or alternatively configure the input fields directly after that checkbox accordingly. This configures WHMCS to provide the appropriate contact data in the Domain Registration Process.
If not configured, a registration attempt may fail as some of the Registries defined one or more such contacts as mandatory.

## Importing Prices

For WHMCS < 7.10: Check our [Pricing Importer AddOn](https://github.com/hexonet/whmcs-ispapi-pricingimporter).

For WHMCS >= 7.10: Use the [Registrar TLD Sync](https://docs.whmcs.com/Registrar_TLD_Sync) feature which you can find in the menu Utilities. Read our [FAQ entry 61](https://github.com/hexonet/whmcs-ispapi-registrar/wiki/FAQs#61-import-prices-with-currency-conversions-and-promotions) for details on that feature and [FAQ entry 55](https://github.com/hexonet/whmcs-ispapi-registrar/wiki/FAQs#55-do-you-support-tld--pricing-sync-mechanism-shipped-with-whmcs-710).

Both ways support import of IDN TLDs. WHMCS supports IDN TLD Import in `Registrar TLD Sync` since WHMCS 8 our module did allow IDN TLD import already earlier.

NOTE: The Pricing Importer AddOn is marked as deprecated since a while, we highly suggest to upgrade your WHMCS Software and to start with the `Registrar TLD Sync` feature.

## Internationalized Domain Names

In order to support Internationalized Domain Names (IDN) (e.g. v-8.ευ or موقع.وزارة-الاتصالات.مصر), it is required to activate the ‘Allow IDN Domains’ option in the WHMCS Admin area under:

`Setup > General Settings > Domains > Allow IDN Domains`

NOTE: Even though IDN Domains were just officially fully supported since [WHMCS 8](https://docs.whmcs.com/International_Domain_Names), our module is already capable of IDN handling for earlier WHMCS versions.

## Nameservers & DNS Management

If you want to use DNS, URL or Email forwarding, domains must resolve to the ISPAPI nameserver cluster (**ns1.ispapi.net, ns2.ispapi.net, ns3.ispapi.net**).

You can enter them in `Setup > General Settings > Domains` as **Default Nameservers** for your customers:

![nameservers]({{site.baseurl}}/assets/images/whmcs/ispapi-registrar/nameservers.png)

You can also create your own nameserver hostnames and use them, as long as they are registered and resolve to the correct IP addresses.

If you plan to use HEXONET's DNS, ensure to activate checkbox `DNS Management` for the appropriate TLDs in the Domain Pricing Section of WHMCS (System Settings > Domain Pricing).

![dnsmanagement]({{site.baseurl}}/assets/images/whmcs/ispapi-registrar/tldpricing.png)

When registering a domain name, a checkbox for this Domain Addon will then be offered to your customers. When used, it finally allows managing resource records for that domain name over WHMCS.

![shoppingcartdns]({{site.baseurl}}/assets/images/whmcs/ispapi-registrar/dnsmanagement.png)

NOTE: If you plan to offer .DK Domains, please ensure to have your custom nameservers registered at DK Hostmaster first. Read [here](https://wiki.hexonet.net/wiki/DK#Nameserver_Validation).

### White-label DNS

If you want to use your own branded nameservers, but our DNS behind the scenes, modify the A resource records of your custom nameservers to point to our nameserver ip addresses. You can find out our ip addresses by: `ping ns1.ispapi.net`, `ping ns2.ispapi.net` and `ping ns3.ispapi.net`.

### SRV Records

WHMCS doesn't allow SRV records. Our module makes it possible!

In order to activate that you have to update the clientareadomaindns.tpl file in your template directory.

In this file you will find 2 `<select>` tags. In the first you will have to add the following code:

```php
<option value="SRV"{if $dnsrecord.type eq "SRV"} selected="selected"{/if} >SRV</option>
```

In the second you should add:

```php
<option value="SRV">SRV</option>
```

Between the 2 tags, there is an if statement, here you have to replace

```php
{if $dnsrecord.type eq "MX"}
```

with

```php
{if $dnsrecord.type eq "MX" || $dnsrecord.type eq "SRV"}
```

Now you are ready to support SRV records!

### DNSSEC Management

In order to activate this feature, within the WHMCS Admin area, go to

`Setup > Products/Services > Domain Registrars > ISPAPI`

and activate the **DNSSEC** checkbox.

In the domain details, a new “DNSSEC Management” section will be displayed.
This feature allows your customers to add DS and KEY records and set the maxSigLife.

![dnssec]({{site.baseurl}}/assets/images/whmcs/ispapi-registrar/dnssec_management_support.png)

## Additional Domain Fields

The registration of some domain extensions requires sometimes additional domain fields (e.g. Legal Type and CIRA Agreement for .CA domain).

In order to provide this additional fields on the registration page and map them with our module, you have to  inject our HEXONET specific configuration in the **$additionaldomainfields** array.

> Prior to WHMCS 7.0, this file was located at /includes/additionaldomainfields.php
> From WHMCS 7.0 on, to add new additional domains fields, create a new file named additionalfields.php within the /resources/domains/ directory.

### Our Configuration Sample

If you want to customize an additional domain field configuration, just copy the code of the appropriate domain extension out of [our sample file](https://raw.githubusercontent.com/hexonet/whmcs-ispapi-registrar/master/registrars/ispapi/additionaldomainfields_sample.php) and add it into the above mentioned file.

### Auto-prefill fields

For some of the additional domain fields, it makes sense to prefill them with data out of client details:

- VAT ID input fields
- DK Hostmaster User ID input fields
- .CA: Contact Language (X-CA-LANGUAGE)

Let us know if you need other fields also being prefilled.

**DK Hostmaster User ID**:

Create a new custom field through `Setup > Client Custom Fields` using the below configuration:

**Field Name**: DK-Hostmaster User ID

**Field Type**: Text Box

No further configuration settings necessary.

In case your clients provide their data, it will be pre-filled accordingly.

## Automation Settings

FYI: When installing WHMCS 7.6 and above, it is already enabled by default - you can skip this section then.

WHMCS comes with some background automation scripts that allow to synchronize data like expiry date and the domain status / transfer status with the one in the registrar system. Ensure to have the WHMCS [Post Installation Steps covered](https://docs.whmcs.com/Installing_WHMCS), especially the [Automation Settings](https://docs.whmcs.com/Automation_Settings) chapter.

Find [here](https://docs.whmcs.com/Domain_Synchronisation) on how to set the **Domain Synchronization** up.

If it is necessary for any reason, you can trigger the domain synchronization also manually from command line:

`/usr/bin/php -q $YOUR_WHMCS_CRONS_PATH/cron.php do --DomainStatusSync` (domain status sync)
`/usr/bin/php -q $YOUR_WHMCS_CRONS_PATH/cron.php do --DomainTransferSync` (domain transfer status sync)

... where `$YOUR_WHMCS_CRONS_PATH` is the path to the cron script folder of your WHMCS instance.

Find [here](https://docs.whmcs.com/Crons) the full technical chapter about WHMCS Crons and their Options as reference.

## Lookup Provider

The HEXONET lookup provider yields high-performance availability checks of the domains using our fast API. For the domains that are not supported by HEXONET, the lookup fallbacks to WHOIS. In order to utilize this feature, you just have to choose “HEXONET” (The one with the logo HEXONET ISPAPI) in the lookup provider suggestions.

![hexonet as lookup provider]({{site.baseurl}}/assets/images/whmcs/ispapi-registrar/lookupprovider1.png)

> This new lookup feature requires at least WHMCS version 7.3

Configure the lookup provider by activating the suggestion engine for accurate and efficient search results.
You can customize our sugestion engine's default settings by using the additional configuration options provided.
The TLD List selection field is provided by WHMCS itself and can't be influenced/skipped by our integration. Use `CTRL+A` to select all TLDs for lookup over HEXONET.

![lookup]({{site.baseurl}}/assets/images/whmcs/ispapi-registrar/lookupprovider2.png)

The Suggestion Engine provides fast domain suggestions based on the searched domain or keyword.

HEXONET is now providing Aftermarket and Registry premium domains support. (Without having to install our ISPAPI High-Performance DomainChecker Module)

In order to see premium domains suggestions in the search results, configure the “Premium Domains” section in WHMCS.

![premium_domains]({{site.baseurl}}/assets/images/whmcs/ispapi-registrar/premium_domains.png)

In order to configure your price markups for premium domains, you can use the “Configure” button.

![premium_conf]({{site.baseurl}}/assets/images/whmcs/ispapi-registrar/premium_domains_configuration.png)

**NOTE:** Since WHMCS 7.10, you can define a list of TLDs that have to be checked over the Lookup Provider.
We suggest to select _ALL_ TLDs you want to offer, even if you are not offering them over HEXONET / ISPAPI.

**Search example**:

![search_example]({{site.baseurl}}/assets/images/whmcs/ispapi-registrar/search_example.png)

## Our Domain Search Add-On

Even though this step is optional, it might be of interest for you!

The ISPAPI High Performance DomainChecker Module enables extremely fast domain availability checks utilizing HEXONET's registrar API. Further more, this module also allows the reseller to sell lucrative premium domain names. Follow [this guide](https://github.com/hexonet/whmcs-ispapi-domainchecker/blob/master/README.md) to get it up and running. **Documentation is included in the DomainChecker Module Package**.

![ispapi domainchecker]({{site.baseurl}}/assets/images/whmcs/ispapi-registrar/hx_search_800px_lossy.gif)

## Migrating

### Migrating your Portfolio

If you have doubts related to prices, please contact our [Sales Department](https://www.hexonet.net/contact).
We are highly interested in helping you getting your domain portfolio migrated to us - just get in touch with us [here](https://hexonet.support/). We are experienced with migrations and have Tools ready for this - even an Auto-Migration Tool for WHMCS. Ask for it!

**The customer is king**, is a principle to which we ascribe.

### Importing existing Domains

If you started with any other frontend, hosting solution or custom solution and you're already having domains on your account at HEXONET, you can still start with WHMCS. We offer a domain importer addon for free. It imports domains and automatically create clients if not existing in your WHMCS system based on the Registrant Contact Data. Find the Module documented [here](whmcs-ispapi-domainimport.md).

NOTE: if you import domains with activated trustee service, be aware of that these costs won't be invoiced in WHMCS as WHMCS itself has no built-in support for a trustee service domain addon. Feel free to upvote our feature request for this [here](https://requests.whmcs.com/topic/integrate-trustee-service-as-generic-domain-add-on).

An alternative Way for Importing is described [here](https://docs.whmcs.com/Migration_Guide#Adding_Domains).

## Domain Name WHOIS Privacy

The registrar module fully supports the WHOIS Privacy service WHOISTRUSTEE.com:

![whoistrustee]({{site.baseurl}}/assets/images/whmcs/ispapi-registrar/whois_trustee.gif)

Support for WHOIS Privacy (aka ID Protection in WHMCS) has been integrated into two ways:

### Toggle ID Protection

Whenever the ID protection flag gets enabled or disabled in the WHMCS Admin area, the module synchronizes the new protection status to the domain.

This functionality is compatible with the WHMCS API “domaintoggleidprotect” call.

> If the ID Protection flag gets disabled in the Admin area, clients will not be able to re-enable WHOIS Privacy themselves, it can only be re-enabled by an Administrator of your WHMCS Instance!

### WHOIS Privacy Management

The Registrar Module adds a new Menu Entry `WHOIS Privacy` that will show up on Client Area in the Domain Details Page.

![whois_privacy_management]({{site.baseurl}}/assets/images/whmcs/ispapi-registrar/whois_privacy_management.png)

Using that Feature, a client can verify the current protection status, and enable or disable it automatically.

The new WHOIS Privacy page looks as follows (protection is enabled in the example):

![whois_privacy_page]({{site.baseurl}}/assets/images/whmcs/ispapi-registrar/whois_privacy_page.png)

## Specials

### UTF-8 Support

For **WHMCS < 5**, if the system charset for WHMCS is set to utf8, the ISPAPI module will enable some workarounds to support UTF-8 for domain registrations, transfers, and contact updates.

For **WHMCS >= 5**, it uses the original unmodified parameters as provided by the system.

**WHMCS >= 6** decided to strip the umlauts in domain names and contacts. This module is able to fix this issue and will keep the umlauts.

In any case, the module is able to handle umlauts and special characters in whois data, as long as the respective registry supports it.

For registries that don't support umlauts, some characters will be mapped automatically, e.g. é to e, ö to oe and so on.

### WHOIS Servers Configuration

WHMCS comes with a default configuration that is not covering all TLDs. We started gathering such cases, feel free to copy the contents of our [sample configuration file](https://raw.githubusercontent.com/hexonet/whmcs-ispapi-registrar/master/registrars/ispapi/sample_whois.json) to the [whois.json override file](https://docs.whmcs.com/WHOIS_Servers#Customising_WHOIS_Servers). Ensure the final json format is valid using [jsonlint.com](https://jsonlint.com)!

### .CA Registrant WHOIS Privacy

The new WHOIS Privacy page for .CA domain names looks as follows (protection is enabled in the example):

![ca_whois_privacy]({{site.baseurl}}/assets/images/whmcs/ispapi-registrar/ca_registrant_whois_privacy.png)

### .CA Change of Registrant

The Change of Registrant page for .CA domain names are available under the Management Tools of a .CA domain.

### .IT .CH .SE .SG .LI Change of Registrant

The change of Registrant of these TLDs requires a special procedure called TRADE. This function is available under the Management Tools of the domain.

### .SWISS Registrations

Our registrar module is now supporting .SWISS registrations. (This function requires WHMCS 6.x)

.SWISS domain names are different and cannot be registered with the normal **AddDomain** command.

In order to apply for a .SWISS domain name it is always required to request a domain application with the **AddDomainApplication** command and to provide the class 'GOLIVE'.

Moreover .SWISS registrations require 2 additional domain fields. Please add the following code at the end of the **/resources/domains/additionalfields.php** file:

```php
## .SWISS DOMAIN REQUIREMENTS ##
$additionaldomainfields[".swiss"] = array();
$additionaldomainfields[".swiss"][] = array(
          "Name" => "Enterprise ID",
          "Type" => "text",
          "Required" => true,
        "Description" => "(must be CHE followed by 9 digits)",
          "Ispapi-Name" => "X-SWISS-REGISTRANT-ENTERPRISE-ID",
);
$additionaldomainfields[".swiss"][] = array(
          "Name" => "Intended use",
          "Type" => "text",
          "Required" => true,
          "Ispapi-Name" => "X-CORE-INTENDED-USE",
);
```

This function uses HOOKS and in order to activate these hooks you have to go to:

`Setup > Products/Services > Domain registrars`, click the “Configure” button in the ISPAPI module line and finally click “Save Changes”.

**Example of a .SWISS registration:**

- Customer register a .SWISS domain (like he will register a normal domain)
- Once the invoice paid, the domain application will be sent
- The domain will be set to **PENDING** until the application process has been completed
- A cronjob is checking the application status once a day
  - If the application is **successful** the domain will be set to **ACTIVE** and the customer will be able to manage it.
  - If the application is **failed**, the domain will be set to **CANCELLED** and you will have to **refund the customer manually**.

In order to work automatically the WHMCS Cron job has to be configured properly. Please have a look at [this page](http://docs.whmcs.com/Crons).

Further information regarding .SWISS is available in our wiki [here](https://wiki.hexonet.net/wiki/SWISS).

## HEXONET Account Hardening

In order to secure your WHMCS installation, we recommend creating a User Role only dedicated for WHMCS.
This User Role will only be able to execute the white-listed commands.

### Whitelist API Commands

Here the list of commands ordered by whmcs module, that you need to whitelist - see next section where to paste them.

**ALL our modules**:

The below list covers all commands you need for all our modules except the deprecated pricing importer addon. It also includes commands you need to also login HEXONET's own frontend / Control Panel using that user role.

```text
AddDomain():ALLOW
AddDomainApplication():ALLOW
AddNameserver():ALLOW
CheckAuthentication():ALLOW
CheckAuthorization(): ALLOW
CheckDomains():ALLOW
CheckDomainTransfer():ALLOW
ConvertIDN():ALLOW
CreatePremiumDNS():ALLOW
CreateSSLCert():ALLOW
DeleteDomain():ALLOW
DeleteNameserver():ALLOW
DENIC_CreateAuthInfo1():ALLOW
EndSession(): ALLOW
ExecuteOrder():ALLOW
GetEnvironment():ALLOW
GetUserIndex(): ALLOW
ModifyContact():ALLOW
ModifyDomain():ALLOW
ModifyNameserver():ALLOW
ModifyUserPassword(): ALLOW
PayDomainRenewal():ALLOW
PayPremiumDNSRenewal():ALLOW
PushDomain():ALLOW
QueryDNSZoneRRList():ALLOW
QueryDNSZoneStats():ALLOW
QueryDomainList():ALLOW
QueryDomainOptions():ALLOW
QueryDomainPendingRegistrantVerificationList():ALLOW
QueryDomainRepositoryInfo():ALLOW
QueryDomainSuggestionList():ALLOW
QueryDomainWhoisInfo():ALLOW
QueryEnvironmentList(): ALLOW
QueryObjectLogList():ALLOW
QueryOrderList():ALLOW
QuerySSLCertDCVEmailAddressList():ALLOW
QueryUserObjectStatistics():ALLOW
ParseSSLCertCSR():ALLOW
RenewDomain():ALLOW
RequestDomainAuthInfo():ALLOW
ResendDomainTransferConfirmationEmails():ALLOW
ResendSSLCertEmail():ALLOW
SetEnvironment():ALLOW
StartSession(): ALLOW
StatusAccount():ALLOW
StatusContact():ALLOW
StatusDNSZone():ALLOW
StatusDomain():ALLOW
StatusDomainApplication():ALLOW
StatusDomainTrade():ALLOW
StatusDomainTransfer():ALLOW
StatusObjectLog():ALLOW
StatusPremiumDNS():ALLOW
StatusRoleUser(): ALLOW
StatusSSLCert():ALLOW
StatusUser():ALLOW
TradeDomain():ALLOW
TransferDomain():ALLOW
UpdateDNSZone():ALLOW
UpgradePremiumDNS():ALLOW
```

Commands you need to login for our HEXONET frontend / Control Panel. Of course you can exclude the below commands, but note that some of them are also required for some of our modules, so double check first before simply excluding them.

```text
GetUserIndex(): ALLOW
GetEnvironment(): ALLOW
SetEnvironment(): ALLOW
QueryEnvironmentList(): ALLOW
StatusUser(): ALLOW
CheckAuthorization(): ALLOW
StatusAccount(): ALLOW
StartSession(): ALLOW
EndSession(): ALLOW
StatusRoleUser(): ALLOW
ModifyUserPassword(): ALLOW
```

**whmcs-ispapi-premiumdns**:

Commands for our [Premium DNS Add-on](https://github.com/hexonet/whmcs-ispapi-premiumdns):

```text
CreatePremiumDNS():ALLOW
ModifyDomain():ALLOW
PayPremiumDNSRenewal():ALLOW
QueryDNSZoneStats():ALLOW
QueryDomainRepositoryInfo():ALLOW
StatusDomain():ALLOW
StatusDNSZone():ALLOW
StatusPremiumDNS():ALLOW
StatusUser():ALLOW
UpdateDNSZone():ALLOW
UpgradePremiumDNS():ALLOW
```

**whmcs-ispapi-pricingimporter**:

Commands for our [Pricing Importer Add-on](https://github.com/hexonet/whmcs-ispapi-pricingimporter) (deprecated as of the `Registrar TLD Sync` feature available since WHMCS 7.10):

```text
CheckAuthentication():ALLOW
QueryUserClassList():ALLOW
StatusUser():ALLOW
StatusUserClass():ALLOW
```

**whmcs-ispapi-registrar**:

Commands for our [Registrar Module](https://github.com/hexonet/whmcs-ispapi-registrar):

```text
AddDomain():ALLOW
AddDomainApplication():ALLOW
AddNameserver():ALLOW
CheckAuthentication():ALLOW
CheckDomains():ALLOW
CheckDomainTransfer():ALLOW
ConvertIDN():ALLOW
DeleteDomain():ALLOW
DeleteNameserver():ALLOW
DENIC_CreateAuthInfo1():ALLOW
GetEnvironment():ALLOW
ModifyContact():ALLOW
ModifyDomain():ALLOW
ModifyNameserver():ALLOW
PayDomainRenewal():ALLOW
PushDomain():ALLOW
QueryDNSZoneRRList():ALLOW
QueryDomainList():ALLOW
QueryDomainOptions():ALLOW
QueryDomainPendingRegistrantVerificationList():ALLOW
QueryDomainSuggestionList():ALLOW
QueryObjectLogList():ALLOW
RenewDomain():ALLOW
RequestDomainAuthInfo():ALLOW
ResendDomainTransferConfirmationEmails():ALLOW
SetEnvironment():ALLOW
StatusAccount():ALLOW
StatusContact():ALLOW
StatusDNSZone():ALLOW
StatusDomain():ALLOW
StatusDomainApplication():ALLOW
StatusDomainTrade():ALLOW
StatusDomainTransfer():ALLOW
StatusObjectLog():ALLOW
StatusUser():ALLOW
TradeDomain():ALLOW
TransferDomain():ALLOW
UpdateDNSZone():ALLOW
```

**whmcs-ispapi-domainimport**:

Commands for our [Domain Importer Add-on](https://github.com/hexonet/whmcs-ispapi-domainimport):

```text
QueryDomainList():ALLOW
```

**whmcs-ispapi-backorder**:

Commands for our [Drop-Catching / Domain Backordering Add-on](https://github.com/hexonet/whmcs-ispapi-backorder):

```text
AddDomainApplication():ALLOW
CheckAuthentication():ALLOW
```

**whmcs-ispapi-domainchecker**:

Commands for our [High Performance Domain Checker Add-on](https://github.com/hexonet/whmcs-ispapi-domainchecker):

```text
CheckAuthentication():ALLOW
CheckDomains():ALLOW
ConvertIDN():ALLOW
QueryDomainSuggestionList():ALLOW
QueryDomainWhoisInfo():ALLOW
```

**whmcs-ispapi-ssl**:

Commands for our [SSLCert Add-on](https://github.com/hexonet/whmcs-ispapi-ssl):

```text
CheckAuthentication():ALLOW
CreateSSLCert():ALLOW
ExecuteOrder():ALLOW
ParseSSLCertCSR():ALLOW
QueryOrderList():ALLOW
QuerySSLCertDCVEmailAddressList():ALLOW
ResendSSLCertEmail():ALLOW
StatusSSLCert():ALLOW
StatusUser():ALLOW
```

**whmcs-ispapi-widget-account**:

Commands for our [Account Widget](https://github.com/hexonet/whmcs-ispapi-widget-account):

```text
QueryUserObjectStatistics():ALLOW
StatusAccount():ALLOW
```

**whmcs-ispapi-widget-modules**:

Commands for our [Account Widget](https://github.com/hexonet/whmcs-ispapi-widget-modules):

Nothing to white-list!

### Create a Role User

Create a restrictive Role User by:

- Login to the HEXONET [Control Panel](https://account.hexonet.net)
- Click on your username (top right)
- Click on 'Settings', click on 'Share Access' from the dropdown menu
- Create a new role user by clicking on "New Role User"
- Fill in the necessary input fields:

  ```text
  Role ID: whmcs 
  Password: ********** 
  Default Access: Deny 
  Status: Active
  ```

- Copy and paste the your desired commands from previous section into the "Access Control" section. Please remove **any** default commands listed in that textarea first.
- [Optional] Continue to the "IP Restrictions" step and enter the outgoing ip address of your server (that runs your WHMCS instance)
- Login to your WHMCS Backend and replace your Hexonet username with your role user.

(_If your Hexonet username is "customer1" and your role user is "whmcs" you have to use the login like this: customer1!whmcs_)

FYI: Further documentation about securing your WHMCS installation, can be found in the `Post Installation Suggested Steps` section of the [WHMCS Installation Guide](https://docs.whmcs.com/Installing_WHMCS#Post_Installation_Suggested_Steps).

### 2-Factour Authentication

WHMCS itself does **not** support using 2-Factor Authentication (2FA) for Registrar Modules. So having 2FA activated for your user and using it in WHMCS simply does **not** work. If you've set up a restrictive User Role as described above and you're using that one in your registrar configuration, then you can activate 2FA for your account (!!!not for your restrictive User Role!!!).

You can activate 2FA by logging in to our control panel ([OT&E](https://account-ote.hexonet.net), [LIVE](https://account.hexonet.net)). Then click on your user name at the top right of the page and then navigate to `Settings > Security`. There, click on `2-Factor Authentication` and follow that wizard.

If you lost your 2FA device / code generator, contact our support - see the footer of this page.

### Activate IP Restrictions

You can activate IP Restrictions for both: Your account and the above described User Role. Find instructions on how to do that for the restrictive User Role as described [here](#create-a-user-role).

You can do that for your Account by logging in to our Control Panel ([OT&E](https://account-ote.hexonet.net), [LIVE](https://account.hexonet.net)). Then click on your user name at the top right of the page and then navigate to `Settings > Security`. There, click on `IP Restrictions` and follow that wizard.

IMPORTANT: If you're doing something wrong here, like just white-listing your internal server ip address instead of the outgoing one or not white-listing the ip address you are currently using yourself, you might no longer be able to login. It is also possible to add there ip address ranges. We suggest to have someone of your administrative team helping with that to ensure the correct ip addresses being white-listed. If you run into trouble or need help, contact our support - see the footer of this page.

## Final steps

As the HEXONET system is a pre-paid system, you have to add funds to your account to be able to order products and services. For doing this login in to the HEXONET Control Panel [LIVE System](https://account.hexonet.net/). Click on your account name at the top right and then press the button `Add Funds`. If you need funds to be added to your [OT&E Account](https://account-ote.hexonet.net), [let us know](https://hexonet.support/).
