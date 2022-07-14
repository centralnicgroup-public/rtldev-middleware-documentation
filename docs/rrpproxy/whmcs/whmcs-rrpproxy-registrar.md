---
layout: default
title: Registrar Module
parent: WHMCS
grand_parent: RRPproxy
nav_order: 2
showtoc: 1
---

# RRPproxy Registrar Module

[![License: MIT]({{ 'assets/images/License-MIT-blue.svg' | relative_url }})](//opensource.org/licenses/MIT)

This Repository covers the updated WHMCS Registrar Module of RRPproxy. Source code and latest package version are stable. Just the documentation is to be seen as WIP.

A Registrar Module connects WHMCS to the Domain Registrar's System.

## Supported Features

- Domain Registration
  - Additional domain fields (Extensions)
- Domain Transfer
- Domain Management
  - WHOIS Contact Verification (IRTP)
  - Domain Locking (Transfer Lock)
  - Update Contact (Owner/Admin) Information
  - Nameservers Change
  - Child Nameserver Management (Add, Modify, Delete)
  - Explicit Deletions in Admin panel
- Domain Renewal
- IDNs Support (using idn_to_ascii)
- TLD Pricing Sync (since WHMCS 7.10)
- KeyDNS Management
- DNSSEC Management
- Web Forwarding
- Email Forwarding
- WHOIS Privacy / ID Protection
- Bulk Update Operations
- OT&E testing environment

**Not yet supported**:

- Premium Domains

## Requirements

- WHMCS 7.6+ or 8.x
- installed and working: curl, php-curl

For the latest WHMCS minimum system requirements, please refer to [System_Requirements](//docs.whmcs.com/System_Requirements).

## Introduction

Firstly, we want to welcome you on board. We are always interested in making our WHMCS integration and documentation better. So, in case you want to provide us some feedback, you're welcome.
We have a very short release cycle and can release patches and new features quickly, if necessary.

Back to topic, here the steps described in short about how to start with us using WHMCS.

## RRPproxy™ - About us

RRPproxy™ your instrument for a successful reselling business.

RRPproxy is one of the leading reseller platforms worldwide for domains and internet related services. Our products are all resalable and can be easily implemented into your system through various API gateways and web interface. Manage your customers within our advanced subreseller system and benefit from further reselling features such as a SMS tool and a billing engine.

## Migrating

### From another Registrar

If you have doubts related to prices, please contact our [Sales Department](//www.rrpproxy.net/Contact/Sales).
We are highly interested in helping you getting your domain portfolio migrated to us - just get in touch with us [here](//www.rrpproxy.net/Contact/Contact_Form). We are experienced with migrations and have tools ready for this.

**The customer is king**, is a principle to which we ascribe.

### RRPproxy Module Migration

Some of our customers started with the RRPproxy module as it is shipped with WHMCS. This Registrar Module is the maintained official version of the RRPproxy Module.
The module configuration page will automatically detect the need for a migration and provide a button to get this covered with a single click. Ensure first to have that module correctly configured and to have it up and running!
It will do the following actions:

- Reconfigure Domain Pricing from `rrpproxy` to `keysystems`, which is the internal name of this module.
- Reconfigure `rrpproxy` to `keysystems` of all domain names related to Registrar `RRPproxy`.
- Deactivate the old module.

![image]({{ 'assets/images/whmcs/rrpproxy-registrar/migrate.png' | relative_url }})

- Ensure to check the Additional Domain Fields setup for TLDs offered over us. Read more about that [here](#additional-domain-fields)

## Create a RRPproxy Account

We have two systems:

- an Operational Test & Evaluation (OT&E) system and
- a LIVE system ("the real world")

The OT&E system is thought for integration tests and everything you're doing there is for free - but ordered products are then also not existing in reality. With an OT&E account, all functionality and transactional processes can be tested thoroughly. The LIVE system corresponds to the real world system and comes with costs for ordered products and services.

Signup can be done [here](//www.rrpproxy.net/Register).

Your account will then be used in WHMCS for ordering our products and services and for managing them.
The creation of your account is completely free of charge.

Once your account is created, a confirmation email with connection information will be provided to you via email.

## Domain Renewal Mode

Please visit our own Frontend that we offer our customers for free here: [LIVE System](//wi.rrpproxy.net/) or [OT&E System](//wi-ote.rrpproxy.net/).

Click on your user name at top right and navigate to `Settings > System > Account Policy > Renewalmode`. Here select 'Auto Expire' and press 'Save changes'.

This is necessary to avoid domains getting automatically renewed and causing costs for you and in WHMCS when they are not renewed by the customer.

## Installation / Upgrade

Simply upload the new version files by FTP or SCP.
Copy all files from the extracted archive to your WHMCS directory, while keeping the folder structure intact.

E.g.

`modules/registrars/keysystems/ => $YOUR_WHMCS_ROOT/modules/registrars/keysystems/`

### Upgrading

**IMPORTANT** Ensure to read the [Release Notes](//github.com/rrpproxy/whmcs-rrpproxy-registrar/releases) carefully before Upgrading! Our Release numbers follow [semantic versioning](//semver.org/) and thus we follow the version syntax: MAJOR.MINOR.PATCH.

You can always upgrade without worries if the PATCH or MINOR version have just changed.
If the MAJOR version has changed, check the release notes to avoid unexpected issues as a new MAJOR version comes always with breaking changes or at least with a new module behavior.

Follow the installation steps below and consider the provided release notes for the MAJOR version upgrade. In detail: if you're upgrading from 1.x.y to 4.x.y, ensure to check ALL major version release notes up to the version you're upgrading too. In this example, check the release notes for 2.0.0, 3.0.0 and 4.0.0.

If you're upgrading regularly and keeping all our modules / addons / widgets updated, you run in less upgrade effort than doing multiple major version number steps. You can add/subscribe yourself to release notifications in our github repositories to get informed about new releases.

### Installation

Even though a `RRPproxy` Module is shipped with WHMCS, we highly recommend downloading and installing our white label module `RRPproxy/Key-Systems` which is the official maintained version and providing you latest features and patches. Available for download [here](//github.com/rrpproxy/whmcs-rrpproxy-registrar/releases).

- Download the ZIP archive and extract it to your HDD
- Copy the contents of folder e.g. `whmcs-rrpproxy-registrar-1.0.0/install/modules/registrars` to the appropriate/matching folder of your WHMCS instance `modules/registrars`.

For non-technicians the above step covers in detail:

1. Navigate to the extracted folder of that zip archive. Where you will find a sub folder named like `whmcs-registrar-registrar-1.0.0`. Go into that folder.
2. Below that sub folder, you again find a sub folder named `install`. Go into that folder.
3. Below that sub folder, you again find a sub folder named `modules`. Go into that folder.
4. Below that sub folder, you again find a sub folder named `registrars`. Go into that folder.
5. Here you'll find a sub folder named `keysystems`. Copy that folder into the sub folder `/modules/registrars` of your WHMCS installation.

For cPanel users: Use [this video](//www.youtube.com/watch?v=SNtldWg_0gY) on how to upload and extract a ZIP archive using your cPanel. Use [this video](//www.youtube.com/watch?v=T7OYIOwyWvU) on how to find the `public_html` folder in your cPanel. In there you'll find a subfolder `gwcorp` or `whmcs` containing again a subfolder `modules` and then the subfolder `registrars`. Please copy the above mentioned folder of our zip archive into that folder.

For non cPanel users: check location `/var/www/whmcs` (default path) or eventually `/var/www/html/whmcs`.

![cpanel 1]({{ 'assets/images/whmcs/rrpproxy-registrar/cpanel1.png' | relative_url }})
![cpanel 2]({{ 'assets/images/whmcs/rrpproxy-registrar/cpanel2.png' | relative_url }})

**NOTE: If you're upgrading** - please first delete the `modules/registrars/keysystems` folder in your WHMCS instance first.

Note: Feel free to add yourself as Watcher to that github repository by clicking on the `Watch` button at the top of the page and then choose `Releases Only`.
We are aware of that installation and upgrade effort of our module is something we need to minimize. We have projects in queue to achieve that and to cover a lot more.
If you already used the RRPproxy Registrar Module, read [here](#rrpproxy-module-migration) on how to migrate to the RRPproxy/Key-Systems Registrar Module.

## Module Configuration

Now, navigate in your WHMCS instance to `Setup > Products/Services > Domain Registrars`.
Find the `RRPproxy/Key-Systems` Module in the list and activate it. If you're not able to find that Module in the list, something went wrong with the Module Installation - please check this part again please.

![configuration]({{ 'assets/images/whmcs/rrpproxy-registrar/config.png' | relative_url }})

Now, configure this Module by entering your credentials (OT&E or LIVE System Account).
Activate `TestMode` by activating the checkbox in case you want to use the OT&E System - just ensure you don't mix it up with LIVE System Credentials or vice versa.

If you want to offer secure DNS / DNSSec, feel also free to activate the checkbox for `DNSSEC`. Find further details documented [here](#ns--dns-management).

Now, press Save and voilà.

### Domain Contact Verification

It governs the domain name transfers between ICANN registrars. The Inter-Registrar Transfer Policy (IRTP) includes changes to domain ownership. Small changes to a domain name’s registrar first name, last name, organization, and email address trigger the validation process.

Have a further read about IRTP [here](//wiki.rrpproxy.net/domains/icann/icann-ownerchange).

IRTP handling is supported by this Module and in WHMCS since version 7.6.

## WHOIS Contact Data

Navigate to `Setup > General Settings > Domains` and activate the checkbox `Use Clients Details` or alternatively configure the input fields directly after that checkbox accordingly. This configures WHMCS to provide the appropriate contact data in the Domain Registration Process.
If not configured, a registration attempt may fail as some of the Registries defined one or more such contacts as mandatory.

## Importing Prices

For WHMCS >= 7.10: Use the [Registrar TLD Sync](//docs.whmcs.com/Registrar_TLD_Sync) feature which you can find in the menu Utilities.

Both ways support import of IDN TLDs. WHMCS supports IDN TLD Import in `Registrar TLD Sync` since WHMCS 8.

## IDN Support

In order to support Internationalized Domain Names (IDN) (e.g. v-8.ευ or موقع.وزارة-الاتصالات.مصر), it is required to activate the ‘Allow IDN Domains’ option in the WHMCS Admin area under:

`Setup > General Settings > Domains > Allow IDN Domains`

NOTE: Even though IDN Domains were just officially fully supported since [WHMCS 8](//docs.whmcs.com/International_Domain_Names), our module is already capable of IDN handling for earlier WHMCS versions.

## NS & DNS Management

If you want to use DNS, URL or Email forwarding, domains must resolve to the RRPproxy nameserver cluster (\*_ns1.dnsres.net, ns2.dnsres.net, ns3.dnsres.net_).

You can enter them in `Setup > General Settings > Domains` as **Default Nameservers** for your customers:

![nameservers]({{ 'assets/images/whmcs/rrpproxy-registrar/dns.png' | relative_url }})

You can also create your own nameserver hostnames and use them, as long as they are registered and resolve to the correct IP addresses.

If you plan to use RRPpoxys's KeyDNS, ensure to activate checkbox `DNS Management` for the appropriate TLDs in the Domain Pricing Section of WHMCS (System Settings > Domain Pricing).

![dnsmanagement]({{ 'assets/images/whmcs/rrpproxy-registrar/pricing.png' | relative_url }})

When registering a domain name, a checkbox for this Domain Addon will then be offered to your customers. When used, it finally allows managing resource records for that domain name over WHMCS.

### SRV Records support

WHMCS doesn't allow SRV records. Our module makes it possible!

In order to activate that you have to update the clientareadomaindns.tpl file in your template directory.

In this file you will find 2 `<select>` tags. In the first you will have to add the following code:

`<option value="SRV"{if $dnsrecord.type eq "SRV"} selected="selected"{/if}>SRV</option>`

In the second you should add:

`<option value="SRV">SRV</option>`

Between the 2 tags, there is an if statement, here you have to replace

`{if $dnsrecord.type eq "MX"}`

with

`{if $dnsrecord.type eq "MX" || $dnsrecord.type eq "SRV"}`

Now you are ready to support SRV records!

### DNSSEC Management

In order to activate this feature, within the WHMCS Admin area, go to

`Setup > Products/Services > Domain Registrars > RRPproxy`

and activate the **DNSSEC** checkbox.

In the domain details, a new “DNSSEC Management” section will be displayed.
This feature allows your customers to add DS and KEY records and set the maxSigLife.

![dnssec]({{ 'assets/images/whmcs/rrpproxy-registrar/dnssec_management_support.png' | relative_url }})

## Additional Domain Fields

The registration of some domain extensions requires sometimes additional domain fields (e.g. Legal Type and CIRA Agreement for .CA domain).

In order to provide this additional fields on the registration page and map them with our module, you have to inject our RRPproxy specific configuration in the **$additionaldomainfields** array.

To add new additional domains fields, copy the additionalfields.php file provided by our module the /resources/domains/ directory.

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

If it is necessary for any reason, you can trigger the domain synchronization also manually from command line:

`/usr/bin/php -q $YOUR_WHMCS_CRONS_PATH/cron.php do --DomainStatusSync` (domain status sync)
`/usr/bin/php -q $YOUR_WHMCS_CRONS_PATH/cron.php do --DomainTransferSync` (domain transfer status sync)

... where `$YOUR_WHMCS_CRONS_PATH` is the path to the cron script folder of your WHMCS instance.

Find [here](//docs.whmcs.com/Crons) the full technical chapter about WHMCS Crons and their Options as reference.

## Lookup Provider

The RRPproxy lookup provider yields high-performance availability checks of the domains using our fast API. For the domains that are not supported by RRPproxy, the lookup fallbacks to WHOIS. In order to utilize this feature, you just have to choose RRPproxy in the lookup provider suggestions.

![rrpproxy_as_lookup]({{ 'assets/images/whmcs/rrpproxy-registrar/lookup.png' | relative_url }})

**NOTE:** Since WHMCS 7.10, you can define a list of TLDs that have to be checked over the Lookup Provider.
We suggest to select _ALL_ TLDs you want to offer, even if you are not offering them over RRPproxy.

**Search example**:

![search_example]({{ 'assets/images/whmcs/rrpproxy-registrar/search_example.png' | relative_url }})

## Domain Name WHOIS Privacy

The registrar module fully supports the TRUSTEE WHOIS Privacy service:

Support for WHOIS Privacy (aka ID Protection in WHMCS) been integrated into two ways:

**Support for the WHMCS 'toggle ID protection' functionality**:

Whenever the ID protection flag gets enabled or disabled in the WHMCS Admin area, the module synchronizes the new protection status to the domain.

This functionality is compatible with the WHMCS API “domaintoggleidprotect” call.

> If the ID Protection flag gets disabled in the Admin area, clients will not be able to re-enable WHOIS Privacy themselves, but it can only be re-enabled by an admin!

## Specials

### UTF-8 Support

The module is able to handle umlauts and special characters in whois data, as long as the respective registry supports it.

For registries that don't support umlauts, some characters will be mapped automatically, e.g. é to e, ö to oe and so on.

### Change of Registrant

The change of Registrant of .IT .CH .SE .SG .LI TLDs requires a special procedure called TRADE. This function is called automatically when necessary when you alter contact data.

### .SWISS Registrations

.SWISS domain names are different and their registration is a two step process.

**Example of a .SWISS registration:**

- Customer register a .SWISS domain (like he will register a normal domain)
- Once the invoice paid, the domain application will be sent
- The domain will be set to **PENDING** until the application process has been completed
- A cronjob is checking the application status once a day
  - If the application is **successful** the domain will be set to **ACTIVE** and the customer will be able to manage it.
  - If the application is **failed**, the domain will be set to **CANCELLED** and you will have to **refund the customer manually**.

In order to work automatically the WHMCS Cron job has to be configured properly. Please have a look at [this page](//docs.whmcs.com/Crons).

Further information regarding .SWISS is available in our wiki, [here](//wiki.rrpproxy.net/domains/tlds/swiss).

## Securing WHMCS

In order to secure your WHMCS installation, we recommend creating a role user only dedicated for WHMCS.
This role user will only be able to execute the WHMCS needed commands.

### Restrictive User Role

- Login to the RRPproxy [Control Panel](//wi.rrpproxy.net/)
- Click on your username (top right)
- Click on 'User management' from the dropdown menu
- Create a new user by clicking on "Create new User"
- Click on the newly created user to configure its permissions
- Give the following locations read, write and delete permissions:
  - Contact
  - Dns
  - Domain
  - Domainapplication
  - Nameserver
- Give the following locations read only permissions:
  - Price
- Login to your WHMCS Backend and replace your RRPproxy username with your new user.

If there's any of the above permissions not available for selection, please reach out to support.
If it is still not working, please try again after activating "Rights required for webinterface usage" as well in the above mentioned Control Panel.

### 2-Factour Authentication

WHMCS itself does **not** support using 2-Factor Authentication (2FA) for Registrar Modules. So having 2FA activated for your user and using it in WHMCS simply does **not** work. If you've set up a restrictive role user as described above and you're using that one in your registrar configuration, then you can activate 2FA for your account (!!!not for your restrictive role user!!!).

You can activate 2FA by logging in to our control panel ([OT&E](//wi-ote.rrpproxy.net), [LIVE](//wi.rrpproxy.net)). Then click on your user name at the top right of the page and then navigate to `Passwords and Security`. There, click on `Enable Two-Factor Authentication` and follow that wizard.

If you lost your 2FA device / code generator, contact our support - see the footer of this page.

### Activate IP Restrictions

You can activate IP Restrictions for both: your account and the above described role user. Find instructions on how to do that for the restrictive role user as described [here](#restrictive-user-role).

You can do that for your account by logging in to our control panel ([OT&E](//wi-ote.rrpproxy.net), [LIVE](//wi.rrpproxy.net)). Then click on your user name at the top right of the page and then navigate to `Passwords and Security`. There, click on `Restrict API Access to Whitelist` and fill out the form.

## Final steps

As the RRPproxy system is a pre-paid system, you have to add funds to your account to be able to order products and services. For doing this login in to the RRPproxy Control Panel [LIVE System](//wi.rrpproxy.net/). Click on `Account Balance`, then `Charge your account`.

## Known Issues

Find below some collection of incompatibilities of / with WHMCS.

### 1. Change of Registrant

When it comes to a change of owner while updating whois contact information of a domain, this might lead to a so-called `Trade`. This is in general for free, except at some ccTLD providers. WHMCS is by design totally incompatible to this process and can't therefore automatically generate an invoice for this (and to process the update after payment). We are trying to figure a better solution out. A [Feature Request](https://requests.whmcs.com/idea/change-of-registrant-trades) has been addressed to WHMCS as well.

### 2. Registrar-Lock Configuration

Registrar-Lock isn't supported by all TLDs/TLD providers. Registrars have therefore to implement a manual workaround for getting the menu item removed and the warning about the domain being unlocked removed. This should be better covered by a TLD-based configuration setting (like the one for epp code). A [Feature Request](https://requests.whmcs.com/idea/option-for-registrar-lock#comments) has been addressed to WHMCS.

### 3. IDN Conversion

Reported to and confirmed by WHMCS (-> #CORE-17342). When it comes to IDNs, WHMCS is doing the conversion to punycode incorrect. There are different standards - IDNA2003, IDNA2008, UTS46. It depends on the underlying TLD provider / registry which one to support. e.g. when searching for `fußball`, `fussball.com` is the right way for .com and `fußball.de` the right one for .de, but WHMCS is converting it to `fussball.de` which is still supported and valid, but probably not the domain you were looking for (`fußball.de`). This is affecting all registrar integrations.

### 4. Local Presence Service

WHMCS isn't offering a Domain Add-On to cover Local Presence Services. This would definitely increase selling. Furthermore, if you're manually importing Domains to WHMCS with activated Local Persence Service on Registrar-side, it won't get invoiced in WHMCS. A [Feature Request](https://requests.whmcs.com/idea/integrate-trustee-service-as-generic-domain-add-on) has been addressed to WHMCS.

### 5. Registrar TLD Sync Automation

Importing TLD Settings and Prices using WHMCS' Feature "Registrar TLD Sync" got released, but without the option to automatically schedule it via cron. A [Feature Request](https://requests.whmcs.com/idea/make-registrar-tld-sync-tool-automatable-with-cron-job) has been addressed to WHMCS.

### 6. Registrar TLD Sync Imports

WHMCS and its Pricing Import are not flexible enough. Registrars distinguish between supported Registration Terms, Renewal Terms and Transfer Terms where the Pricing Import is only allowing for specifying a single list of supported terms. So, what to import in case these lists differ completely? A [Feature Request](https://requests.whmcs.com/idea/registrar-tld-sync-to-support-different-list-of-terms) has been addressed to WHMCS.

The only way of getting around this would be to manually reconfigure such "problematic" cases after import.

```bash
TLD             REG TERM       RENEWAL TERM
-----------------------------------------------
.net.bd         2y, 10y        1y
.gi             2y, 10y        1y
.org.gi         2y, 10y        1y
.hu             2y             1y
.tm             10y            1y, 2y, 5y     
```

### 7. Function Deprecations

Reported to and confirmed by WHMCS (-> #CORE-17038). The [developer documentation for Registrar Modules](https://developers.whmcs.com/domain-registrars/domain-information/) is pointing out function `GetDomainInformation` to be integrated instead of the deprecated functions `GetNameservers` and `GetRegistrarLock`. We just run into issues after removing these deprecated functions and re-alived them again. Find the whole related issues and topic documented here. This isn't affecting you as reseller or your customers. But, when patched by WHMCS, would increase the performance of our integration.

### 8. localAPI GetTLDPricing

Reported to and confirmed by WHMCS (-> #CORE-16920). This API Command is not returning prices that are set to 0.00. Not affecting our Integration, just something we addressed to WHMCS.

### 9. localAPI DomainRequestEPP

Reported to WHMCS, but not confirmed as bug. So let us see it as strange behavior. The epp code returned has to be html decoded. Not affecting our Integration.
