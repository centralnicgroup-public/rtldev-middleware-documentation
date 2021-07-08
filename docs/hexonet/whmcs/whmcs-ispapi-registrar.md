---
layout: default
title: Registrar Module
parent: WHMCS
grand_parent: HEXONET
nav_order: 2
showtoc: 1
---

# ISPAPI Registrar Module

[![License: MIT]({{ 'assets/images/License-MIT-blue.svg' | relative_url }})](//opensource.org/licenses/MIT)

A Registrar Module connects WHMCS to the Domain Registrar's System. This Documentation covers the HEXONET/ispapi WHMCS Registrar Module maintained by HEXONET's 3rd-party Software Integrations Team.

NOTE: If you experience any issue when using this module, please take a look at the [FAQs]({{ 'docs/hexonet/faqs/whmcs-ispapi-registrar/' | relative_url }}) or get in touch with our [Support team](#contact-us).

## Introduction

Firstly, we want to welcome you on board. We are always interested in making our WHMCS integration and documentation better. So, in case you want to provide us some feedback, you're welcome.
We have a very short release cycle and can release patches and new features quickly, if necessary.

Back to topic, here the steps describing how to start with us using WHMCS.

## Supported Features

- [Registrar TLD Sync / Pricing Import](#importing-prices) (WHMCS 7.10)
- [Domain & Transfer Synchronization](#automation-settings)
- Transfer-Out Automation
- [Internationlized Domain Names](#idn-support) (IDNs)
- [Additional Domain Fields](#additional-domain-fields)
- [Premium Domains](#premium-domains)
- Domain Registration (feat. [.SWISS](#swiss-registrations)!)
- Domain Renewal
- Domain Transfer
- Domain Management
  - [Automatic Registrar Lock](#module-configuration)
  - WHOIS Update (UTF-8 capable)
  - Nameserver Registration & Management
  - Get EPP Code
- Domain Release / Explicit Deletions
- [Domain Restore](#domain-restore)
- [DNS Management](#ns--dns-management)
  - Record-Types: A, AAAA, MX, MXE, CNAME, TXT, [SRV](#srv-records)
  - Allows user defined TTL values and MX priorities
- [Email Forwarding](#ns--dns-management)
- [URL Forwarding](#ns--dns-management)
  - Redirect using HTTP
  - Forward using HTML Frame
- [WHOIS Privacy / ID Protection](#whois-privacy-management)

<details>
  <summary><strong>... AND MORE!</strong>
</summary>

<ul>
  <li><a href="#module-configuration">Testing / Sandbox Environment</a></li>
  <li><a href="#hexonet-module-migration">1-Click Migration from HEXONET Registrar Module</a></li>
  <li><a href="#web-apps-support">Web Apps</a></li>
  <li><a href="#auto-prefill-fields">Auto-prefill of Additional Domain Fields</a></li>
  <li>Automatic Contact Data and <a href="#module-configuration">NS Update after Transfer</a></li>
  <li><a href="#dnssec-management">DNSSEC / SecDNS Management</a></li>
  <li><a href="#module-configuration">Proxy Server Configuration for API Communication</a></li>
  <li>Special: <a href="#ca-whois-privacy">WHOIS Privacy management of .CA domain names</a></li>
  <li>Special: <a href="#change-of-registrant">Change of Registrant / Trade</a></li>
  <li>Support for all bulk update operations</li>
</ul>

</details>

## Requirements

We encourage our Resellers to stick on the latest WHMCS release for security reasons and to benefit of latest features and patches.

- WHMCS 7.6+ or 8.x
- Installed and working: curl, php-curl

For the latest WHMCS minimum system requirements, please refer to [System_Requirements](//docs.whmcs.com/System_Requirements).

## Create your Account

We have two System Environments:

- an Operational Test & Evaluation (OT&E) system and
- a LIVE system ("the real world")

The OT&E system is thought for Integration Tests and everything you're doing there is for free - but ordered products are then also not existing in real. With an OT&E account, all functionality and transactional processes can be tested thoroughly. The LIVE system corresponds to the real world system and comes with costs for ordered products and services.

LIVE System Signup can be done [here](//www.hexonet.net/cart?signup=true).
OT&E System Signup can be done [here](//www.hexonet.net/signup-ote).

The creation of your account is completely free of charge. Your account will be used in WHMCS for ordering our products and services and for managing them.

Once your Account is created, a confirmation email with connection information will be provided to you by mail.

## Domain Renewal Mode

By default the Domain Renewal Mode in our Systems is set to "Automatic Renewal". WHMCS comes with its own logic and processes regarding domain management and that's why it is important to change this default behavior accordingly. This is necessary to avoid domains are getting automatically renewed and causing costs for you if your customer is not interested in a renewal. Your customer wouldn't renew then over WHMCS, but our API would do so.
Please follow the below instructions to get this covered:

- Login to your account here: [LIVE System](//account.hexonet.net) or [OT&E System](//account-ote.hexonet.net/).
- Click on your user name at top right
- Navigate to `Products > Domain Name Settings > Renewal Mode for New Domains`
- Select 'Expire Domain' and press 'Save'

Note: The renewal mode setting is only applied to new domain registrations in your account. If you already have domains registered previously in your account, ensure to reconfigure also their renewal mode to `expire`.

## Upgrading our Module

**IMPORTANT** Ensure to read the [Release Notes](//github.com/hexonet/whmcs-ispapi-registrar/releases) carefully before Upgrading! Our Release numbers follow [semantic versioning](//semver.org/) and thus we follow the version syntax: MAJOR.MINOR.PATCH. Please ensure to backup your current version's folder to have a fallback possibility you can use, just in case there's something wrong with our new version.

![Semantic Versioning]({{ 'assets/images/semver.png' | relative_url }})

You can always upgrade without worries if the PATCH or MINOR version have just changed.
If the MAJOR version has changed, check the release notes to avoid unexpected issues as a new MAJOR version comes always with breaking changes or at least with a new module behavior.

Follow the installations steps below and consider the provided release notes for the MAJOR version upgrade. In detail: if you're upgrading from 1.x.y to 4.x.y, ensure to check **ALL Major Version Release Notes** up to the version you're upgrading too. In this example, check the release notes for 2.0.0, 3.0.0 and 4.0.0.

If you're upgrading regularly and keeping all our modules / addons / widgets updated, you run in less upgrade effort than doing multiple major version number steps. You can add/subscribe  yourself to release notifications in our github repositories to get informed about new releases.

## Installing our Module

The `HEXONET` Module that is shipped with WHMCS is maintained by the WHMCS Core Team and as Pull Requests took to long, we decided to work on our own Module Version. We highly recommend downloading and installing our white label module `HEXONET/ispapi` which is our maintained version and providing you latest features and patches. Available for download [here](//github.com/hexonet/whmcs-ispapi-registrar/raw/master/whmcs-ispapi-registrar-latest.zip).

- When upgrading: Backup your current module version (folder `modules/registrars/ispapi`) and then delete that folder
- Download the ZIP archive and extract it to your HDD
- Copy the folder `modules` into the root directory of your WHMCS instance
- If you want to use our Transliteration, please copy the folder `includes` into the root directory of your WHMCS instance. Our Transliteration just cares about replacing Greek characters with Greeklish ones in contact data and replacing HTML Entities with their related character pendant.
- Copy the folder `lang` into the root directory of your WHMCS instance. First check if you have language override files there already in place and if our files would override them. If so, please merge our translations into the existing files.

For cPanel users: Use [this video](//www.youtube.com/watch?v=SNtldWg_0gY) on how to upload and extract a ZIP archive using your cPanel. Use [this video](//www.youtube.com/watch?v=T7OYIOwyWvU) on how to find the `public_html` folder in your cPanel. In there you'll find a subfolder `gwcorp` or `whmcs` containing again a subfolder `modules` and then the subfolder `registrars`. Please copy the above mentioned folder of our zip archive into that folder.

For non cPanel users: check location `/var/www/whmcs` (default path) or eventually `/var/www/html/whmcs`.

![cPanel, ZIP file structure]({{ 'assets/images/whmcs/ispapi-registrar/cpanel1.png' | relative_url }})
![cPanel, WHMCS folder structure]({{ 'assets/images/whmcs/ispapi-registrar/cpanel2.png' | relative_url }})

Note: Feel free to add yourself as Watcher to that github repository by clicking on the `Watch` button at the top of the page and then choose `Releases Only`.
We are aware of that installation and upgrade effort of our module is something we need to minimize. We have projects in queue to achieve that and to cover a lot more.

Before we continue, we want to point you to the Section [**Migrating**](#migrating-from-hexonet-registrar-module) if you have already started with the HEXONET Module that is shipped with WHMCS. Switching Domains to our ISPAPI Registrar Module can be done in ease at this point.

## Module Updates Subscription

Feel free to add yourself as Watcher to our GitHub repository to get informed about new releases:
![GH subscribe]({{ 'assets/images/whmcs/ispapi-registrar/ghwatch.png' | relative_url }})

Simply click on the "Watch" Button, select "Custom" and there "Releases" and save. We also highly enjoy getting starred!
Another solution is to use our [Modules Overview Widget]({{ 'docs/hexonet/whmcs/whmcs-ispapi-widget-modules/' | relative_url }}).

## HEXONET Module Migration

Some of our customers started with the HEXONET module as it is shipped with WHMCS. The ISPAPI Registrar Module is the maintained white-label version of the HEXONET Module. Migrating can be done by a single click:

![migrationbttn]({{ 'assets/images/whmcs/ispapi-registrar/migrate.png' | relative_url }})

In addition:

- Ensure to have file `hexonet_summary.php` deleted (an old and deprecated HEXONET widget) - just in case you're using it. WHMCS Widget folder can be found under path `/modules/widgets` of your WHMCS instance. A replacement for that widget can be found [here]({{ 'docs/hexonet/whmcs/whmcs-ispapi-widget-modules/' | relative_url }}).
- You can now deactivate the HEXONET module as the ISPAPI module is used as replacement.

## Module Configuration

Now, navigate in your WHMCS instance to `Setup > Products/Services > Domain Registrars`.
There, ensure to have the `HEXONET` module **deactivated**.
Find the `HEXONET/ispapi` Module in the list and activate it. If you're not able to find that Module in the list, something went wrong with the Module Installation - please check this part again please.

[![configuration]({{ 'assets/images/whmcs/ispapi-registrar/config.png' | relative_url }})]({{ 'assets/images/whmcs/ispapi-registrar/config.png' | relative_url }})

Now, configure this Module by entering your credentials (OT&E or LIVE System Account).
Activate `TestMode` by activating the checkbox in case you want to use the OT&E System - just ensure you don't mix it up with LIVE System Credentials or vice versa.

Activate `Automatic Transfer Lock` setting by using the appropriate checkbox to ensure outgoing transfers can't be initiated in ease. We suggest that setting as it helps securing your domain names from getting transferred out in ease.

Activate `Automatic NS Update` setting in case you want our module to update domain's nameservers automatically after successful transfer. Just a little note: WHMCS itself by default suggests your configured default nameservers. This setting will automatically update the nameservers after successful transfer without knowing if the customer set these nameservers or if WHMCS did it. Removing all nameservers from input fields in step Configure in WHMCS' Shopping Cart won't change anything as WHMCS keeps then using the default nameservers. So, be aware of that design issue of WHMCS for Transfer Orders when using that feature. Read [FAQ Entry #25]({{ 'docs/hexonet/faqs/whmcs-ispapi-registrar/#25-nameservers-not-updated-after-transfer' | relative_url }}) for more details.

Activate `Automatic Contact Update` setting in case you want our module to update your .com/.net/.cc/.tv domain's contact details automatically after successful transfer. The mechanism will care about updating the related registrant contact details to the data of the client who initiated the transfer. It also cares about updating admin/tech/billing contact details as configured in WHMCS. This mechanism will only be updating domain names where we were not able to parse Contact Details out of WHOIS Data after successful transfer because of active WHOIS Privacy / id protection service (Hint: "Redacted for Privacy").

At `IRTP (Inter-Registrar Transfer Policy)` setting, we suggest using `Option 1` to activate the default WHMCS way of the IRTP integration. Find further details documented below.

If you want to offer secure DNS / DNSSEC / Secure DNS, feel also free to activate the checkbox `Offer DNSSEC / Secure DNS`. Find further details documented [here](#ns--dns-management).

If you want to offer our Web Apps to your customers, activate the `Offer Web Apps` checkbox. Find further details documented below.

Now, press Save and voilà. If you're getting a green message - you're connected. Otherwise, you have to investigate further as described [here]({{ 'docs/hexonet/faqs/whmcs-ispapi-registrar/#49-login-failed-in-registrar-module' | relative_url }}).

Activate `Transfer Checkout Pre-Checks` setting in case you want to have Domain Transfer Orders pre-checked. We validate if initiating the Transfer would succeed - so, if:

- the given eppcode / Authorization Code is correct,
- the Domain Name is unlocked
- etc.

If something fails, it would look like shown below:

![Transfer Checkout Pre-Checks]({{ 'assets/images/whmcs/ispapi-registrar/transferprecheck.png' | relative_url }})

### Domain Contact Verification

It governs the domain name transfers between ICANN registrars. The Inter-Registrar Transfer Policy (IRTP) includes changes to domain ownership. Small changes to a domain name’s registrar first name, last name, organization, and email address trigger the validation process.

Have a further read about IRTP [here](//wiki.hexonet.net/wiki/IRTP).

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

Read more [here](//docs.whmcs.com/Domain_Contact_Verification) about IRTP handling via WHMCS.

Note: Ensure to have the "gTLD Inter-Registrar Transfer Policy" settings deactivated/removed in our [control panel](//account.hexonet.net/token=qYDCIxFn/#/domain-admin). If you haven't configured this in the past, no need to worry.

**Option Two**:

In order to handle the IRTP process over our API, you have to obtain verifiable DA (Designated Agent) status to act on behalf of the new registrant of a domain name.

- navigate on the [control panel](//account.hexonet.net/token=qYDCIxFn/#/domain-admin): `Reseller Controls > Product Settings > Domain Settings`. Under the "gTLD Inter-Registrar Transfer Policy" section first read the terms, implement the legal changes, and finally verify your Designated Agent status and your wish to alter the ModifyDomain command for IRTP compliance.
- Whenever your customer evokes a material change of registrant, the Reseller must submit the change as the DA for the new registrant.
- The prior (old) registrant will always be sent an authorization email, and they will have fourteen (14) days to confirm the change.
- The opt-out of the sixty (60) transfer lock is enabled for module Resellers by default. However, if a Reseller wishes to opt-IN (disable the automatic opt-out) to the registrar transfer lock so that they can immediately process Change of Registrant requests with added security (for Change of Registrant when email addresses are not working), resellers can simply enable the checkbox stating "Disable the automatic opt-out. Registrant changes are processed in realtime, but domains will also get transfer-locked for 60 days. Dependant on fallback being enabled.

### Web Apps Support

This feature can be enabled in the Registrar Module configuration. When enabled, your customers can connect Web Apps to their domains in case the related DNSZone is managed by HEXONET (Active Addon `DNS Management`).
For now, we only have integrated `G Suite`, just let us know if further Web Apps are of high demand for you. Here the ones HEXONET in general supports on API-side: [Web Apps](//www.hexonet.net/products/webapps).

Here some impressions:

![Web App Overview]({{ 'assets/images/whmcs/ispapi-registrar/webapps1.png' | relative_url }})
![Web App Connecting]({{ 'assets/images/whmcs/ispapi-registrar/webapps2.png' | relative_url }})
![Web App Disconnecting]({{ 'assets/images/whmcs/ispapi-registrar/webapps3.png' | relative_url }})

### Domain Renewal Restrictions

NOTE: This step is mandatory!

Read [here](https://docs.whmcs.com/Domains_Configuration#Customising_Domain_Name_Length_Restrictions) about how to customize the Domain Renewal Restrictions.

Add the below code snippet to your `configuration.php`:

```php
// generated on 2021-05-17
$DomainRenewalMinimums[".amsterdam"] = "61";
$DomainRenewalMinimums[".at"] = "61";
$DomainRenewalMinimums[".be"] = "61";
$DomainRenewalMinimums[".ch"] = "61";
$DomainRenewalMinimums[".co.at"] = "61";
$DomainRenewalMinimums[".com.ar"] = "61";
$DomainRenewalMinimums[".com.lv"] = "61";
$DomainRenewalMinimums[".com.ru"] = "61";
$DomainRenewalMinimums[".com.ve"] = "61";
$DomainRenewalMinimums[".co.ve"] = "61";
$DomainRenewalMinimums[".de"] = "61";
$DomainRenewalMinimums[".dk"] = "61";
$DomainRenewalMinimums[".info.ve"] = "61";
$DomainRenewalMinimums[".it"] = "61";
$DomainRenewalMinimums[".jp"] = "61";
$DomainRenewalMinimums[".li"] = "61";
$DomainRenewalMinimums[".lu"] = "61";
$DomainRenewalMinimums[".lv"] = "61";
$DomainRenewalMinimums[".net.lv"] = "61";
$DomainRenewalMinimums[".net.ru"] = "61";
$DomainRenewalMinimums[".net.ve"] = "61";
$DomainRenewalMinimums[".nl"] = "61";
$DomainRenewalMinimums[".no"] = "61";
$DomainRenewalMinimums[".or.at"] = "61";
$DomainRenewalMinimums[".org.lv"] = "61";
$DomainRenewalMinimums[".org.ru"] = "61";
$DomainRenewalMinimums[".org.ve"] = "61";
$DomainRenewalMinimums[".pp.ru"] = "61";
$DomainRenewalMinimums[".ru"] = "61";
$DomainRenewalMinimums[".web.ve"] = "61";
```

The registries behind these TLDs do not support explicit renewals. We start accepting their renewal orders 61 days prior to expiration and we will forward the renewal to their systems as soon as they allow for it.

## WHOIS Contact Data

In WHMCS navigate to `Setup > General Settings > Domains` and activate the checkbox `Use Clients Details` or alternatively configure the input fields directly after that checkbox accordingly. This configures WHMCS to provide the appropriate contact data in the Domain Registration Process.
If not configured, a registration attempt may fail as some of the Registries defined one or more such contacts as mandatory.

## Importing Prices

For WHMCS < 7.10: Check our [Pricing Importer AddOn]({{ 'docs/hexonet/whmcs/whmcs-ispapi-pricingimporter/' | relative_url }}).

For WHMCS >= 7.10: Use the [Registrar TLD Sync](//docs.whmcs.com/Registrar_TLD_Sync) feature which you can find in the menu Utilities. Read our [FAQ entry 61]({{ 'docs/hexonet/faqs/whmcs-ispapi-registrar/#61-import-prices-with-currency-conversions-and-promotions' | relative_url }}) for details on that feature and [FAQ entry 55]({{ 'docs/hexonet/faqs/whmcs-ispapi-registrar/#55-do-you-support-tld--pricing-sync-mechanism-shipped-with-whmcs-710' | relative_url }}).

Both ways support import of IDN TLDs. WHMCS supports IDN TLD Import in `Registrar TLD Sync` since WHMCS 8 our module did allow IDN TLD import already earlier.

NOTE: The Pricing Importer AddOn is marked as deprecated since a while, we highly suggest to upgrade your WHMCS Software and to start with the `Registrar TLD Sync` feature.

## IDN Support

In order to support Internationalized Domain Names (IDN) (e.g. v-8.ευ or موقع.وزارة-الاتصالات.مصر), it is required to activate the ‘Allow IDN Domains’ option in the WHMCS Admin area under:

`Setup > General Settings > Domains > Allow IDN Domains`

NOTE: Even though WHMCS officially supported IDNs since [WHMCS 8](//docs.whmcs.com/International_Domain_Names), our module is already capable of IDN handling for earlier WHMCS versions.

## NS & DNS Management

If you want to use DNS, URL or Email forwarding, domains must resolve to the ISPAPI nameserver cluster (**ns1.ispapi.net, ns2.ispapi.net, ns3.ispapi.net**).

You can enter them in `Setup > General Settings > Domains` as **Default Nameservers** for your customers:

![nameservers]({{ 'assets/images/whmcs/ispapi-registrar/nameservers.png' | relative_url }})

You can also create your own nameserver hostnames and use them, as long as they are registered and resolve to the correct IP addresses.

If you plan to use HEXONET's DNS, ensure to activate checkbox `DNS Management` for the appropriate TLDs in the Domain Pricing Section of WHMCS (System Settings > Domain Pricing).

![dnsmanagement]({{ 'assets/images/whmcs/ispapi-registrar/tldpricing.png' | relative_url }})

When registering a domain name, a checkbox for this Domain Addon will then be offered to your customers. When used, it finally allows managing resource records for that domain name over WHMCS.

![shoppingcartdns]({{ 'assets/images/whmcs/ispapi-registrar/dnsmanagement.png' | relative_url }})

NOTE: If you plan to offer .DK Domains, please ensure to have your custom nameservers registered at DK Hostmaster first. Read [here](//wiki.hexonet.net/wiki/DK#Nameserver_Validation).

### White-label DNS

If you want to use your own branded nameservers, but our DNS behind the scenes, modify the A resource records of your custom nameservers to point to our nameserver ip addresses. You can find out our ip addresses by: `ping ns1.ispapi.net`, `ping ns2.ispapi.net` and `ping ns3.ispapi.net`.

### SRV Records

WHMCS doesn't allow SRV records. Our module makes it possible! We have WHMCS templates customized to introduce the SRV Resource Record to WHMCS.

Find the Template File for

- the Six Theme [here](https://raw.githubusercontent.com/hexonet/whmcs-ispapi-registrar/master/modules/registrars/ispapi/templates/six/clientareadomaindns.tpl)
- the Twenty-One [here](https://raw.githubusercontent.com/hexonet/whmcs-ispapi-registrar/master/modules/registrars/ispapi/templates/twenty-one/clientareadomaindns.tpl).

First make a backup of the `clientaredomaindns.tpl` template file of your current theme in use.
Then replace it with our template file.

Voilà, now you are ready to support SRV records!

### DNSSEC Management

In order to activate this feature, within the WHMCS Admin area, go to

`Setup > Products/Services > Domain Registrars > ISPAPI`

and activate the **DNSSEC** checkbox.

In the domain details, a new “DNSSEC Management” section will be displayed.
This feature allows your customers to add DS and KEY records and set the maxSigLife.

![dnssec]({{ 'assets/images/whmcs/ispapi-registrar/dnssec_management_support.png' | relative_url }})

## Domain Restore

We introduced the support of Domain Restores with v4.8.0 of our Registrar Module. As Domain Restores are very poorly documented, here some additional information about how this works.

Read the article ["Domain Grace and Redemption Grace Periods"](https://docs.whmcs.com/Domain_Grace_and_Redemption_Grace_Periods) of the WHMCS Documentation.

So, Domain Restores are in WHMCS covered over Renewals. Whenever a Domain is in Redemption Grace Periods, we will display it as follows:

![Domain in Redemption Grace Period]({{ 'assets/images/whmcs/ispapi-registrar/restore_domainstatus.png' | relative_url }})

If you trigger a Renewal for such a Domain, WHMCS will include additional Redemption Fees in the related invoice:

[![Domain Restore Invoice]({{ 'assets/images/whmcs/ispapi-registrar/restore_invoice.png' | relative_url }})]({{ 'assets/images/whmcs/ispapi-registrar/restore_invoice.png' | relative_url }})

After Payment, WHMCS will then invoke the Registrar Module accordingly. We execute the Restore and if necessary also followed by a Renewal.
This might be necessary in case of multi-year Restores where the Restore Period our System uses differs from the Renewal Period provided by WHMCS.

## Additional Domain Fields

**NOTE**: Since Version 6 of our Registrar Module, no need to worry about this configuration section any longer.

The registration of some domain extensions requires sometimes additional domain fields (e.g. Legal Type and CIRA Agreement for .CA domain).

In order to provide this additional fields on the registration page and map them with our module, you have to  inject our HEXONET specific configuration in the **$additionaldomainfields** array.

> Prior to WHMCS 7.0, this file was located at /includes/additionaldomainfields.php
> From WHMCS 7.0 on, to add new additional domains fields, create a new file named additionalfields.php within the /resources/domains/ directory.

### Our Configuration Sample

If you want to customize an additional domain field configuration, just copy the code of the appropriate domain extension out of [our sample file](//raw.githubusercontent.com/hexonet/whmcs-ispapi-registrar/master/modules/registrars/ispapi/additionaldomainfields_sample.php) and add it into the above mentioned file.

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

WHMCS comes with some background automation scripts that allow to synchronize data like expiry date and the domain status / transfer status with the one in the registrar system. Ensure to have the WHMCS [Post Installation Steps covered](//docs.whmcs.com/Installing_WHMCS), especially the [Automation Settings](//docs.whmcs.com/Automation_Settings) chapter.

Find [here](//docs.whmcs.com/Domain_Synchronisation) on how to set the **Domain Synchronization** up.

If necessary, you can trigger the Domain and Transfer Synchronization also manually from Command Line:

`/usr/bin/php -q $YOUR_WHMCS_CRONS_PATH/cron.php do --DomainTransferSync --DomainExpirySync`

... where `$YOUR_WHMCS_CRONS_PATH` is the path to the cron script folder of your WHMCS instance.

Find [here](//docs.whmcs.com/Crons) the full technical chapter about WHMCS Crons and their Options as reference.

## Lookup Provider

The HEXONET lookup provider yields high-performance availability checks of the domains using our fast API. For the domains that are not supported by HEXONET, the lookup fallbacks to WHOIS. In order to utilize this feature, you just have to choose “HEXONET” (The one with the logo HEXONET ISPAPI) in the lookup provider suggestions.

![hexonet as lookup provider]({{ 'assets/images/whmcs/ispapi-registrar/lookupprovider1.png' | relative_url }})

> This new lookup feature requires at least WHMCS version 7.3

Configure the lookup provider by activating the suggestion engine for accurate and efficient search results.
You can customize our sugestion engine's default settings by using the additional configuration options provided.
The TLD List selection field is provided by WHMCS itself and can't be influenced/skipped by our integration. Use `CTRL+A` to select all TLDs for lookup over HEXONET.

![lookup]({{ 'assets/images/whmcs/ispapi-registrar/lookupprovider2.png' | relative_url }})

The Suggestion Engine provides fast domain suggestions based on the searched domain or keyword.

HEXONET is now providing Aftermarket and Registry premium domains support. (Without having to install our ISPAPI High-Performance DomainChecker Module)

**NOTE:** Since WHMCS 7.10, you can define a list of TLDs that have to be checked over the Lookup Provider.
We suggest to select _ALL_ TLDs you want to offer, even if you are not offering them over HEXONET / ISPAPI.

**Search example**:

![search_example]({{ 'assets/images/whmcs/ispapi-registrar/search_example.png' | relative_url }})

## Premium Domains

In order to see premium domain name suggestions in the search results, configure the “Premium Domains” section in WHMCS.

![premium_domains]({{ 'assets/images/whmcs/ispapi-registrar/premium_domains.png' | relative_url }})

In order to configure your price markups for premium domains, you can use the “Configure” button.

![premium_conf]({{ 'assets/images/whmcs/ispapi-registrar/premium_domains_configuration.png' | relative_url }})

## Better Domain Search

Even though this step is optional, it might be of interest for you!

The ISPAPI High Performance DomainChecker Module enables extremely fast domain availability checks utilizing HEXONET's registrar API. Further more, this module also allows the reseller to sell lucrative premium domain names. Follow [this guide]({{ 'docs/hexonet/whmcs/whmcs-ispapi-domainchecker/' | relative_url }}) to get it up and running.

![ispapi domainchecker]({{ 'assets/images/whmcs/ispapi-registrar/hx_search_800px_lossy.gif' | relative_url }})

## Migrating

### Migrating your Portfolio

If you have doubts related to prices, please contact our [Sales Department](//www.hexonet.net/contact).
We are highly interested in helping you getting your domain portfolio migrated to us - just get in touch with us [here](//hexonet.support/). We are experienced with migrations and have Tools ready for this - even an Auto-Migration Tool for WHMCS. Ask for it!

**The customer is king**, is a principle to which we ascribe.

### Importing existing Domains

If you started with any other frontend, hosting solution or custom solution and you're already having domains on your account at HEXONET, you can still start with WHMCS. We offer a domain importer addon for free. It imports domains and automatically create clients if not existing in your WHMCS system based on the Registrant Contact Data. Find the Module documented [here]({{ 'docs/hexonet/whmcs/whmcs-ispapi-domainimport/' | relative_url }}).

NOTE: if you import domains with activated trustee service, be aware of that these costs won't be invoiced in WHMCS as WHMCS itself has no built-in support for a trustee service domain addon. Feel free to upvote our feature request for this [here](//requests.whmcs.com/topic/integrate-trustee-service-as-generic-domain-add-on).

An alternative manual Way of Importing is described [here](//docs.whmcs.com/Migration_Guide#Adding_Domains).

## WHOIS Privacy Management

(Deprecated)

The registrar module fully supports the WHOIS Privacy service WHOISTRUSTEE.com:

![whoistrustee]({{ 'assets/images/whmcs/ispapi-registrar/whois_trustee.gif' | relative_url }})

Whenever the `ID protection` flag gets enabled or disabled in the WHMCS Admin Area, the module synchronizes the new protection status to the domain.

> If the ID Protection flag gets disabled in the Admin Area, clients will not be able to re-enable WHOIS Privacy themselves, it can only be re-enabled by an Administrator of your WHMCS Instance!

In addition, the Registrar Module adds a new Menu Entry `WHOIS Privacy` that will show up on Client Area in the Domain Details Page.

![whois_privacy_management]({{ 'assets/images/whmcs/ispapi-registrar/whois_privacy_management.png' | relative_url }})

Using that Feature, a client can verify the current protection status, and enable or disable it automatically.

The new WHOIS Privacy page looks as follows (protection is enabled in the example):

![whois_privacy_page]({{ 'assets/images/whmcs/ispapi-registrar/whois_privacy_page.png' | relative_url }})

### .CA WHOIS Privacy

(Deprecated)

The new Registrant related WHOIS Privacy for .CA domain names looks as follows (protection is enabled in the example):

![ca_whois_privacy]({{ 'assets/images/whmcs/ispapi-registrar/ca_registrant_whois_privacy.png' | relative_url }})

## Specials

### Translations

With v6 of our Registrar Module, we have introduced a Translation Mechanism that is allowing us to translate our Module's Texts in Client Area.

Find our translation files in the `lang` folder of our ZIP Archive. As long as you don't have language override files already in use in your system, just copy that folder into your WHMCS System's root directory. Otherwise, please merge our translations into the existing ones. Please cover this step after each module upgrade.

### Transliteration

Since Version 6 of our Registrar Module we started considering WHMCS' transliterated data for contact data in Registrations, Transfers and Contact Information Updates.

We ignored this in the past as WHMCS in Version < v7 had a lot trouble regarding Transliterations. Our Module offers a ready-to-use transliteration approach that replaces HTML Entities with their UTF-8 Pendants and maps Greek Characters to so-called Greeklish ones. Copy folder `includes` from our ZIP Archive to your WHMCS System's root directory. Please cover this step after each module upgrade.

Read [here](https://docs.whmcs.com/Custom_Transliteration) for further Details.

### WHOIS Servers

WHMCS comes with a default configuration that is not covering all TLDs. We started gathering such cases, feel free to copy the contents of our [sample configuration file](//raw.githubusercontent.com/hexonet/whmcs-ispapi-registrar/master/registrars/ispapi/sample_whois.json) to the [whois.json override file](//docs.whmcs.com/WHOIS_Servers#Customising_WHOIS_Servers). Ensure the final json format is valid using [jsonlint.com](//jsonlint.com)!

NOTE: The above provided configuration is just an example how it might work. We know this .bo WHOIS Server Configuration not being compatible with the possibilities of WHMCS Core.

### Change of Registrant

Will be automatically executed when Contact Information has changed accordingly.
If there are costs for this process, we will output them in the WHMCS Activity Log for Reference.
WHMCS is not invoicing this as it is completely incompatible with Domain Trades.

We are looking for a solution to get this improved, but probably impossible as long WHMCS Core isn't support this natively.

### .SWISS Registrations

Our registrar module is supporting .SWISS registrations. This function requires WHMCS 6.x and has been reviewed from scratch in our Registrar Module Version 6.

When using our Module in Version < 6:

.SWISS registrations require 2 additional domain fields. Please add the following code at the end of the **/resources/domains/additionalfields.php** file:

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

**.SWISS registration process:**

- Customer registers a .SWISS domain (like he will register a normal domain)
- Once the invoice paid, the domain registration will be sent
- The domain will be set to **Pending Registration** until the application process has been completed
- A cronjob is checking the application status once a day
  - If the Registration **succeeded** the domain will be set to **Active** and the customer will be able to manage it.
  - If the Registration **failed**, the domain will be set to **Cancelled** and you will have to **refund the customer manually**.

In order to work automatically the WHMCS Cron job has to be configured properly. Please have a look at [this page](//docs.whmcs.com/Crons).

Further information regarding .SWISS is available in our wiki [here](//wiki.hexonet.net/wiki/SWISS).

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
CheckAuthorization():ALLOW
CheckDomains():ALLOW
CheckDomainTransfer():ALLOW
ConvertIDN():ALLOW
CreatePremiumDNS():ALLOW
CreateSSLCert():ALLOW
DeleteDomain():ALLOW
DeleteNameserver():ALLOW
DENIC_CreateAuthInfo1():ALLOW
EndSession():ALLOW
ExecuteOrder():ALLOW
GetEnvironment():ALLOW
GetUserIndex():ALLOW
ModifyContact():ALLOW
ModifyDomain():ALLOW
ModifyNameserver():ALLOW
ModifyUserPassword():ALLOW
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
QueryEnvironmentList():ALLOW
QueryObjectList():ALLOW
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
StartSession():ALLOW
StatusAccount():ALLOW
StatusContact():ALLOW
StatusDNSZone():ALLOW
StatusDomain():ALLOW
StatusDomainApplication():ALLOW
StatusDomainTrade():ALLOW
StatusDomainTransfer():ALLOW
StatusObjectLog():ALLOW
StatusPremiumDNS():ALLOW
StatusRoleUser():ALLOW
StatusSSLCert():ALLOW
StatusUser():ALLOW
TradeDomain():ALLOW
TransferDomain():ALLOW
UpdateDNSZone():ALLOW
UpgradePremiumDNS():ALLOW
```

Commands you need to login for our HEXONET frontend / Control Panel. Of course you can exclude the below commands, but note that some of them are also required for some of our modules, so double check first before simply excluding them.

```text
GetUserIndex():ALLOW
GetEnvironment():ALLOW
SetEnvironment():ALLOW
QueryEnvironmentList():ALLOW
StatusUser():ALLOW
CheckAuthorization():ALLOW
StatusAccount():ALLOW
StartSession():ALLOW
EndSession():ALLOW
StatusRoleUser():ALLOW
ModifyUserPassword():ALLOW
```

**whmcs-ispapi-premiumdns**:

Commands for our [Premium DNS Add-on]({{ 'docs/hexonet/whmcs/whmcs-ispapi-premiumdns' | relative_url }}):

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

Commands for our [Pricing Importer Add-on]({{ 'docs/hexonet/whmcs/whmcs-ispapi-pricingimporter' | relative_url }}) (**deprecated as of the `Registrar TLD Sync` feature** available since WHMCS 7.10):

```text
CheckAuthentication():ALLOW
QueryUserClassList():ALLOW
StatusUser():ALLOW
StatusUserClass():ALLOW
```

**whmcs-ispapi-registrar**:

Commands for our [Registrar Module]({{ 'docs/hexonet/whmcs/whmcs-ispapi-registrar' | relative_url }}):

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
QueryDomainRepositoryInfo():ALLOW
QueryDomainSuggestionList():ALLOW
QueryObjectList():ALLOW
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

Commands for our [Domain Importer Add-on]({{ 'docs/hexonet/whmcs/whmcs-ispapi-domainimport' | relative_url }}):

```text
QueryDomainList():ALLOW
```

**whmcs-ispapi-backorder**:

Commands for our [Drop-Catching / Domain Backordering Add-on]({{ 'docs/hexonet/whmcs/whmcs-ispapi-backorder' | relative_url }}):

```text
AddDomainApplication():ALLOW
CheckAuthentication():ALLOW
```

**whmcs-ispapi-domainchecker**:

Commands for our [High Performance Domain Checker Add-on]({{ 'docs/hexonet/whmcs/whmcs-ispapi-domainchecker' | relative_url }}):

```text
CheckAuthentication():ALLOW
CheckDomains():ALLOW
ConvertIDN():ALLOW
QueryDomainSuggestionList():ALLOW
QueryDomainWhoisInfo():ALLOW
```

**whmcs-ispapi-ssl**:

Commands for our [SSLCert Add-on]({{ 'docs/hexonet/whmcs/whmcs-ispapi-ssl' | relative_url }}):

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

Commands for our [Account Widget]({{ 'docs/hexonet/whmcs/whmcs-ispapi-widget-account' | relative_url }}):

```text
QueryUserObjectStatistics():ALLOW
StatusAccount():ALLOW
```

**whmcs-ispapi-widget-modules**:

Commands for our [Account Widget]({{ 'docs/hexonet/whmcs/whmcs-ispapi-widget-modules' | relative_url }}):

Nothing to white-list!

### Create a Role User

Create a restrictive Role User by:

- Login to the HEXONET [Control Panel](//account.hexonet.net)
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

FYI: Further documentation about securing your WHMCS installation, can be found in the `Post Installation Suggested Steps` section of the [WHMCS Installation Guide](//docs.whmcs.com/Installing_WHMCS#Post_Installation_Suggested_Steps).

### 2-Factour Authentication

WHMCS itself does **not** support using 2-Factor Authentication (2FA) for Registrar Modules. So having 2FA activated for your user and using it in WHMCS simply does **not** work. If you've set up a restrictive User Role as described above and you're using that one in your registrar configuration, then you can activate 2FA for your account (!!!not for your restrictive User Role!!!).

You can activate 2FA by logging in to our control panel ([OT&E](//account-ote.hexonet.net), [LIVE](//account.hexonet.net)). Then click on your user name at the top right of the page and then navigate to `Settings > Security`. There, click on `2-Factor Authentication` and follow that wizard.

If you lost your 2FA device / code generator, contact our support - see the footer of this page.

### Activate IP Restrictions

You can activate IP Restrictions for both: Your account and the above described User Role. Find instructions on how to do that for the restrictive User Role as described [here](#create-a-role-user).

You can do that for your Account by logging in to our Control Panel ([OT&E](//account-ote.hexonet.net), [LIVE](//account.hexonet.net)). Then click on your user name at the top right of the page and then navigate to `Settings > Security`. There, click on `IP Restrictions` and follow that wizard.

IMPORTANT: If you're doing something wrong here, like just white-listing your internal server ip address instead of the outgoing one or not white-listing the ip address you are currently using yourself, you might no longer be able to login. It is also possible to add there ip address ranges. We suggest to have someone of your administrative team helping with that to ensure the correct ip addresses being white-listed. If you run into trouble or need help, contact our support - see the footer of this page.

## Final steps

As the HEXONET system is a pre-paid system, you have to add funds to your account to be able to order products and services. For doing this login in to the HEXONET Control Panel [LIVE System](//account.hexonet.net/). Click on your account name at the top right and then press the button `Add Funds`. If you need funds to be added to your [OT&E Account](//account-ote.hexonet.net), let us know.
