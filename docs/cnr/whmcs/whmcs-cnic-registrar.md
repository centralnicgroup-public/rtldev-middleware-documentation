---
layout: default
title: Registrar Module
parent: WHMCS
grand_parent: CentralNic Reseller
nav_order: 2
showtoc: 1
---

# CentralNic Reseller Registrar Module<br/>(fka. RRPproxy)

This Repository covers the updated WHMCS Registrar Module of CentralNic Reseller. Source code and latest package version are stable. Just the documentation is to be seen as WIP.

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
- Premium Domains
- Domain & Transfer Synchronization
- IDNs Support (using idn_to_ascii)
- TLD Pricing Sync (since WHMCS 7.10)
- KeyDNS Management
- DNSSEC Management
- Web Forwarding
- Email Forwarding
- WHOIS Privacy / ID Protection
- Bulk Update Operations
- OT&E testing environment
- [Dashboard Widget](#dashboard-widget)
  - Account Balance Overview
  - Version Check

## Requirements

- WHMCS 7.10+ or 8.x
- installed and working: curl, php-curl

For the latest WHMCS minimum system requirements, please refer to [System_Requirements](https://docs.whmcs.com/System_Requirements).

## Introduction

Firstly, we want to welcome you on board. We are always interested in making our WHMCS integration and documentation better. So, in case you want to provide us some feedback, you're welcome.
We have a very short release cycle and can release patches and new features quickly, if necessary.

Back to topic, here the steps described in short about how to start with us using WHMCS.

## CentralNic Reseller™ - About us

CentralNic Reseller™ your instrument for a successful reselling business.

CentralNic Reseller is one of the leading reseller platforms worldwide for domains and internet related services. Our products are all resalable and can be easily implemented into your system through various API gateways and web interface. Manage your customers within our advanced subreseller system and benefit from further reselling features such as a SMS tool and a billing engine.

## Migrating

### From another Registrar

If you have doubts related to prices, please contact our [Sales Department](https://www.centralnicreseller.com/en/contact).
We are highly interested in helping you getting your domain portfolio migrated to us - just get in touch with us [here](https://www.centralnicreseller.com/en/contact). We are experienced with migrations and have tools ready for this.

**The customer is king**, is a principle to which we ascribe.

### CentralNic Reseller Module Migration

Some of our customers started with the CentralNic Reseller module as it is shipped with WHMCS. This Registrar Module is the maintained official version of the CentralNic Reseller Module.
The module configuration page will automatically detect the need for a migration and provide a button to get this covered with a single click. Ensure first to have that module correctly configured and to have it up and running!
It will do the following actions:

- Reconfigure Domain Pricing from `keysystems`, `rrpproxy` or `centralnic` to `cnic`, which is the internal name of this module.
- Reconfigure all domain names related to the Registrars `keysystems`, `rrpproxy` or `centralnic` to `cnic`.
- Deactivate the old module.

![image]({{ 'assets/images/whmcs/cnic-registrar/migrate.png' | relative_url }})

### Migrating Lookup Provider

If you were using the lookup provider funcionality with any previous module, you must upgrade it manually.

- Go to WHMCS System Settings > Domain Pricing
- Change the Lookup Provider to CentralNic Reseller

## Create a CentralNic Reseller Account

We have two systems:

- an Operational Test & Evaluation (OT&E) system and
- a LIVE system ("the real world")

The OT&E system is thought for integration tests and everything you're doing there is for free - but ordered products are then also not existing in reality. With an OT&E account, all functionality and transactional processes can be tested thoroughly. The LIVE system corresponds to the real world system and comes with costs for ordered products and services.

Signup can be done [here](https://www.centralnicreseller.com/en/sign-up).

Your account will then be used in WHMCS for ordering our products and services and for managing them.
The creation of your account is completely free of charge.

Once your account is created, a confirmation email with connection information will be provided to you via email.

## Domain Renewal Mode

Please visit our own Frontend that we offer our customers for free here: [LIVE System](https://www.centralnicreseller.com/en/sign-in) or [OT&E System](https://account-ote.centralnicreseller.com/).

Click on your user name at top right and navigate to `Settings > System > Account Policy > Renewalmode`. Here select 'Auto Expire' and press 'Save changes'.

This is necessary to avoid domains getting automatically renewed and causing costs for you and in WHMCS when they are not renewed by the customer.

## Installation / Upgrade

Simply upload the new version files by FTP or SCP.
Copy all files from the extracted archive to your WHMCS directory, while keeping the folder structure intact.

E.g.

`modules/ => $YOUR_WHMCS_ROOT/modules/`
`resources/ => $YOUR_WHMCS_ROOT/resources/`
`includes/ => $YOUR_WHMCS_ROOT/includes/`

### Upgrading

{% include whmcs-bundle-upgrade.md %}

### Installation

Even though a `CentralNic Reseller` Module is shipped with WHMCS, we highly recommend downloading and installing our white label module `CentralNic Reseller/Key-Systems` which is the official maintained version and providing you latest features and patches. Available for download [here](https://github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/releases).

- Download the ZIP archive and extract it to your HDD
- Copy the contents of folder e.g. `whmcs-cnic-bundle` to the root folder of your WHMCS instance `modules/registrars`.

For cPanel users: Use [this video](https://www.youtube.com/watch?v=SNtldWg_0gY) on how to upload and extract a ZIP archive using your cPanel. Use [this video](https://www.youtube.com/watch?v=T7OYIOwyWvU) on how to find the `public_html` folder in your cPanel. In there you'll find a subfolder `gwcorp` or `whmcs` containing again a subfolder. Please copy the above mentioned folder structure (eveything that you find in folder `whmcs-cnic-bundle`) into here.

For non cPanel users: check location `/var/www/whmcs` (default path) or eventually `/var/www/html/whmcs`.

![cpanel 1]({{ 'assets/images/whmcs/cnic-registrar/cpanel1.png' | relative_url }})
![cpanel 2]({{ 'assets/images/whmcs/cnic-registrar/cpanel2.png' | relative_url }})

## WHMCS Themes

We extended the WHMCS Themes `six` and `twenty-one` for a better user experience. The themes are included in the software bundle, we recommend using one of them or applying our changes to your custom theme. We improved the below in that way in WHMCS:

* Additional Fields included in the Client Area's Contact Information Page
* DNS Management: Added more supported Resource Records

We wrapped our changes with inline comments allowing you to identify our changes and to take these over to your custom theme in ease.

e.g.

```html
<!-- CNIC: Add support for ALIAS, CAA RRs: Start -->
<option value="ALIAS"{if $dnsrecord.type eq "ALIAS"} selected="selected"{/if}>ALIAS</option>
<option value="CAA"{if $dnsrecord.type eq "CAA"} selected="selected"{/if}>CAA</option>
<!-- CNIC: Add support for ALIAS, CAA RRs: End -->
```

Hope that helps!

## Module Configuration

- **For users with WHMCS version 8.0+**, Navigate to `WHMCS Admin Panel` > `System Settings` > `Domain Registrars`.
Find the `CentralNic Reseller` Module in the list and activate it. If you're not able to find that Module in the list, something went wrong with the Module Installation - please check this part again please.

![configuration]({{ 'assets/images/whmcs/modules-config/step-1-domain-registrars.jpg' | relative_url }})
![configuration]({{ 'assets/images/whmcs/modules-config/step-2-domain-registrars.jpg' | relative_url }})
![configuration]({{ 'assets/images/whmcs/modules-config/step-3-domain-registrars.jpg' | relative_url }})
![configuration]({{ 'assets/images/whmcs/modules-config/step-4-cnic-domain-registrars.jpg' | relative_url }})

- **For users with WHMCS version 7.10+**, Navigate in your WHMCS instance to `Setup` > `Products/Services` > `Domain Registrars`.
Find the `CentralNic Reseller` Module in the list and activate it. If you're not able to find that Module in the list, something went wrong with the Module Installation - please check this part again please.

![configuration]({{ 'assets/images/whmcs/cnic-registrar/config.png' | relative_url }})

Now, configure this Module by entering your credentials (OT&E or LIVE System Account).
Activate `TestMode` by activating the checkbox in case you want to use the OT&E System - just ensure you don't mix it up with LIVE System Credentials or vice versa.

If you want to offer secure DNS / DNSSec, feel also free to activate the checkbox for `DNSSEC`. Find further details documented [here](#ns--dns-management).

Now, press Save and voilà. :tada:

### Renewal Protection

The option is useful if for whatever reason you have some domains that have been renewed multiple times by mistake in the past, or if your default renewal policy is set to AUTORENEW, which we do not recommend. The proper setting would be AUTOEXPIRE.

If the option is enabled, upon renewal the current due date for the domain is retrieved from WHMCS. If the domain expiration date is already greater than the next due date, then the renewal will be skipped. So the due date in WHMCS will be increased by one year, but the domain will not be renewed because it already expires after the next due date.
The next year, the renewal should be processed normally, as it will be aligned.

When a renewal is skipped, it is logged in the WHMCS activity log, plus an email is sent to admins with the subject "CentralNic Reseller Renewal Skipped".

## Domain Contact Verification

It governs the domain name transfers between ICANN registrars. The Inter-Registrar Transfer Policy (IRTP) includes changes to domain ownership. Small changes to a domain name’s registrar first name, last name, organization, and email address trigger the validation process.

Have a further read about IRTP [here](https://kb.centralnicreseller.com/domains/icann/icann-ownerchange).

IRTP handling is supported by this Module and in WHMCS since version 7.6.

## WHOIS Contact Data

Navigate to `Setup > General Settings > Domains` and activate the checkbox `Use Clients Details` or alternatively configure the input fields directly after that checkbox accordingly. This configures WHMCS to provide the appropriate contact data in the Domain Registration Process.
If not configured, a registration attempt may fail as some of the Registries defined one or more such contacts as mandatory.

## Importing Prices

For WHMCS >= 7.10: Use the [Registrar TLD Sync](https://docs.whmcs.com/Registrar_TLD_Sync) feature which you can find in the menu Utilities.

Both ways support import of IDN TLDs. WHMCS supports IDN TLD Import in `Registrar TLD Sync` since WHMCS 8.

## IDN Support

In order to support Internationalized Domain Names (IDN) (e.g. v-8.ευ or موقع.وزارة-الاتصالات.مصر), it is required to activate the ‘Allow IDN Domains’ option in the WHMCS Admin area under:

`Setup > General Settings > Domains > Allow IDN Domains`

NOTE: Even though IDN Domains were just officially fully supported since [WHMCS 8](https://docs.whmcs.com/International_Domain_Names), our module is already capable of IDN handling for earlier WHMCS versions.

## NS & DNS Management

If you want to use DNS, URL or Email forwarding, domains must resolve to the CentralNic Reseller nameserver cluster (\*_ns1.dnsres.net, ns2.dnsres.net, ns3.dnsres.net_).

You can enter them in `Setup > General Settings > Domains` as **Default Nameservers** for your customers:

![nameservers]({{ 'assets/images/whmcs/cnic-registrar/dns.png' | relative_url }})

You can also create your own nameserver hostnames and use them, as long as they are registered and resolve to the correct IP addresses.

If you plan to use CentralNic Reseller's KeyDNS, ensure to activate checkbox `DNS Management` for the appropriate TLDs in the Domain Pricing Section of WHMCS (System Settings > Domain Pricing).

![dnsmanagement]({{ 'assets/images/whmcs/cnic-registrar/pricing.png' | relative_url }})

When registering a domain name, a checkbox for this Domain Addon will then be offered to your customers. When used, it finally allows managing resource records for that domain name over WHMCS.

### Additional DNS Records support

WHMCS only supports a few DNS record types out of the box. The pretty common SRV record, for example, is not supported.
Our module comes with a tempalte that adds support for quite a few other record types.

Have a look in the `templates` directory in our module bundle, and you will find adapted `clientareadomaindns.tpl` files based on the WHMCS twentyone and six templates.
You can either replace your template file with our variant, or use our child templates instead.

### DNSSEC Management

In order to activate this feature, within the WHMCS Admin area, go to

`Setup > Products/Services > Domain Registrars > CentralNic Reseller`

and activate the **DNSSEC** checkbox.

In the domain details, a new “DNSSEC Management” section will be displayed.
This feature allows your customers to add DS and KEY records and set the maxSigLife.

![dnssec]({{ 'assets/images/whmcs/cnic-registrar/dnssec_management_support.png' | relative_url }})

## Additional Domain Fields

The registration of some domain extensions requires sometimes additional domain fields (e.g. Legal Type and CIRA Agreement for .CA domain).

**BEFORE BUNDLE VERSION 19**

In order to provide this additional fields on the registration page and map them with our module, you have to inject our CentralNic Reseller specific configuration in the **$additionaldomainfields** array.

To add new additional domains fields, copy the additionalfields.php file provided by our module the /resources/domains/ directory.

**BUNDLE VERSION 19 AND LATER**

No need for a custom additional domain fields configuration. Feel free to clean up previous configurations related to TLDs offered over us.
We ship with a new mechanism which is API-driven and therefore directly connected to the CentralNic Reseller API. It is providing the additional domain fields fully auto-generated and cares for considering them in the API Requests accordingly. By this approach, we were able to introduce full translation support via Language Override Files which is not possible via WHMCS Core built-in possibilities. Also, we expect the support effort to dramatically decrease and we added a automatic prefilling mechanism for VATID, Legal Type and Country and Language related fields. If you notice a field that could be automatically filled with data, let us know.

If you're interested in adding your custom translation, add domains with TLDs of interests to your Shopping Cart and switch to the Shopping Cart Item's Configuration. There, add `&showtranslationkeys=1` to the URL and press enter. Instead of the texts, you'll now see the Translation Keys which can be used in the Language Override files for adding your custom translations. If you remove that URL parameter again, texts will be displayed as usual. The fallback will always be our default english texts in case a translation is not present. It allows for translating step by step.

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

The CentralNic Reseller lookup provider yields high-performance availability checks of the domains using our fast API. For the domains that are not supported by CentralNic Reseller, the lookup fallbacks to WHOIS. In order to utilize this feature, you just have to choose CentralNic Reseller in the lookup provider suggestions.

![cnic_as_lookup]({{ 'assets/images/whmcs/cnic-registrar/lookup.png' | relative_url }})

**NOTE:** Since WHMCS 7.10, you can define a list of TLDs that have to be checked over the Lookup Provider.
We suggest to select _ALL_ TLDs you want to offer, even if you are not offering them over CentralNic Reseller.

**Search example**:

![search_example]({{ 'assets/images/whmcs/cnic-registrar/search_example.png' | relative_url }})

## Domain Name WHOIS Privacy

The registrar module fully supports the TRUSTEE WHOIS Privacy service:

Support for WHOIS Privacy (aka ID Protection in WHMCS) been integrated into two ways:

**Support for the WHMCS 'toggle ID protection' functionality**:

Whenever the ID protection flag gets enabled or disabled in the WHMCS Admin area, the module synchronizes the new protection status to the domain.

This functionality is compatible with the WHMCS API “domaintoggleidprotect” call.

> If the ID Protection flag gets disabled in the Admin area, clients will not be able to re-enable WHOIS Privacy themselves, but it can only be re-enabled by an admin!

## Specials

{% include whmcs-dashboard-widget.md %}

### UTF-8 Support

The module is able to handle umlauts and special characters in whois data, as long as the respective registry supports it.

For registries that don't support umlauts, some characters will be mapped automatically, e.g. é to e, ö to oe and so on.

### Change of Registrant

The change of Registrant of .IT .CH .SE .SG .LI TLDs requires a special procedure called TRADE. This function is called automatically when necessary when you alter contact data.

NOTE: The Contact Update via WHMCS' Admin Area is a two-step procedure. Firstly, update the additional domain fields with the new values and save. Secondly, click on "Modify Contact Information", review the data and save. The new values of the additional fields are then considered. Via Client Area, we realized a one-step process. Check the WHMCS Themes section for more related information.

### .SWISS Registrations

.SWISS domain names are different and their registration is a two step process.

**Example of a .SWISS registration:**

- Customer register a .SWISS domain (like he will register a normal domain)
- Once the invoice paid, the domain application will be sent
- The domain will be set to **PENDING** until the application process has been completed
- A cronjob is checking the application status once a day
  - If the application is **successful** the domain will be set to **ACTIVE** and the customer will be able to manage it.
  - If the application is **failed**, the domain will be set to **CANCELLED** and you will have to **refund the customer manually**.

In order to work automatically the WHMCS Cron job has to be configured properly. Please have a look at [this page](https://docs.whmcs.com/Crons).

Further information regarding .SWISS is available in our wiki, [here](https://kb.centralnicreseller.com/domains/tlds/swiss).

## Securing WHMCS

In order to secure your WHMCS installation, we recommend creating a role user only dedicated for WHMCS.
This role user will only be able to execute the WHMCS needed commands.

### Restrictive User Role

- Login to the CentralNic Reseller [Control Panel](https://www.centralnicreseller.com/en/sign-in)
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
- Login to your WHMCS Backend and replace your CentralNic Reseller username with your new user.

If there's any of the above permissions not available for selection, please reach out to support.
If it is still not working, please try again after activating "Rights required for webinterface usage" as well in the above mentioned Control Panel.

### 2-Factour Authentication

WHMCS itself does **not** support using 2-Factor Authentication (2FA) for Registrar Modules. So having 2FA activated for your user and using it in WHMCS simply does **not** work. If you've set up a restrictive role user as described above and you're using that one in your registrar configuration, then you can activate 2FA for your account (!!!not for your restrictive role user!!!).

You can activate 2FA by logging in to our control panel ([OT&E](https://account-ote.centralnicreseller.com), [LIVE](https://www.centralnicreseller.com/en/sign-in)). Then click on your user name at the top right of the page and then navigate to `Passwords and Security`. There, click on `Enable Two-Factor Authentication` and follow that wizard.

If you lost your 2FA device / code generator, contact our support - see the footer of this page.

### Activate IP Restrictions

You can activate IP Restrictions for both: your account and the above described role user. Find instructions on how to do that for the restrictive role user as described [here](#restrictive-user-role).

You can do that for your account by logging in to our control panel ([OT&E](https://account-ote.centralnicreseller.com), [LIVE](https://www.centralnicreseller.com/en/sign-in)). Then click on your user name at the top right of the page and then navigate to `Passwords and Security`. There, click on `Restrict API Access to Whitelist` and fill out the form.

## Final steps

As the CentralNic Reseller system is a pre-paid system, you have to add funds to your account to be able to order products and services. For doing this login in to the CentralNic Reseller Control Panel [LIVE System](https://www.centralnicreseller.com/en/sign-in). Click on `Account Balance`, then `Charge your account`.

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

### 6. Importing TLD registration terms and renewal terms

For some registries, registration terms do not match renewal terms (such as in the below table).

```bash
TLD      REGISTRATION TERM (years)  RENEWAL TERM (years)
---------------------------------------------------------
.as      1,2,3,4,5,6,7,8,9,10       1,2,3,4,5,6,7,8,9
.au      1,2,3,4,5                  1,2,3,4
.com.au  1,2,3,4,5                  1,2,3,4
.com.my  1,2,3,4,5,6,7,8,9,10       1,2,3,4,5
.id.au   1,2,3,4,5                  1,2,3,4
.my      1,2,3,4,5,6,7,8,9,10       1,2,3,4,5
.net.au  1,2,3,4,5                  1,2,3,4
.org.au  1,2,3,4,5                  1,2,3,4
.tm      10                         1,2,5
```

Although this is supported by CentralNic (both CentralNic Reseller and Hexonet), WHMCS does not have enough flexibility to support this, as it assumes that registries will offer matching terms for both registration and renewal, and so is unable to distinguish between available registration terms and renewal terms within the Registrar TLD Sync Feature. You see registration terms listed that are partially not supported as renewal period.

A [Feature Request](https://requests.whmcs.com/idea/registrar-tld-sync-to-support-different-list-of-terms) has been raised with WHMCS to address this issue.

Until WHMCS addresses this deficiency, the workaround is to manually reconfigure these TLDs after import.

### 7. Function Deprecations

Reported to and confirmed by WHMCS (-> #CORE-17038). The [developer documentation for Registrar Modules](https://developers.whmcs.com/domain-registrars/domain-information/) is pointing out function `GetDomainInformation` to be integrated instead of the deprecated functions `GetNameservers` and `GetRegistrarLock`. We just run into issues after removing these deprecated functions and re-alived them again. Find the whole related issues and topic documented here. This isn't affecting you as reseller or your customers. But, when patched by WHMCS, would increase the performance of our integration.

### 8. localAPI GetTLDPricing

Reported to and confirmed by WHMCS (-> #CORE-16920). This API Command is not returning prices that are set to 0.00. Not affecting our Integration, just something we addressed to WHMCS.

### 9. localAPI DomainRequestEPP

Reported to WHMCS, but not confirmed as bug. So let us see it as strange behavior. The epp code returned has to be html decoded. Not affecting our Integration.

## Troubleshooting

Find here some cases brought up to our hands:
{% include whmcs-collation.md %}
