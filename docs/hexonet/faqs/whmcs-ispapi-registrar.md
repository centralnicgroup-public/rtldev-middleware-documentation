---
layout: default
title: WHMCS - Registrar Module
parent: FAQs
grand_parent: HEXONET
nav_order: 1
showtoc: 1
---

# FAQs

### 1. Additional Domain fields

I am unable to register special domains like .ca, .de, .it, etc,. Your API gives an error message: Missing the required information. How can I solve this issue and be able to register domains?

Firstly, follow the below steps to ensure your WHMCS System is correctly set up with our integration:

* Ensure to keep the default additional domain fields file untouched! `/resources/domains/dist.additionalfields.php`
* **WHMCS >=7.8**: Use the latest version of our ispapi registrar module. Ensure not having a custom configuration file in place: `/resources/domains/additionalfields.php`
* **WHMCS <7.8**:  Use v5.1.12 of our registrar module. Ensure to have a custom configuration file in place: `/resources/domains/additionalfields.php`.

For building up the custom configuration file, refer to our sample file [here](https://github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/blob/archive/ispapi/additionaldomainfields_sample.php). This is as mentioned only required for WHMCS Version lower than 7.8 (and when not using our latest registrar module version - lower than v6).

NOTE: Our latest ISPAPI Registrar Module Version comes with translation files that need a special one-time installation step. Read about it [here]({{ 'docs/hexonet/whmcs/whmcs-ispapi-registrar#installing-our-module' | relative_url }}).

Find all this and related topics documented [here]({{ 'docs/hexonet/whmcs/whmcs-ispapi-registrar#additional-domain-fields' | relative_url }}).

### 2. Do you provide the Grace Period and Redemption Period? What are their duration and fees?

The redemption period is nothing but a Restorable period and also we call it a 'Deletion Restorable Period'.

These settings are now part of TLD Import & Pricing Sync Feature of WHMCS v7.10 (aka. Registrar TLD Sync). Find it under `Utitlities > Registrar TLD Sync`. Read [here]({{ 'docs/hexonet/whmcs/whmcs-ispapi-registrar#importing-prices' | relative_url }}) on how to import prices using the Registrar TLD Sync Feature of WHMCS. Check also FAQ #32.

*Releases < WHMCS 7.10:*
You can find the duration of the redemption period on our wiki for each TLD. For example, check 'Deletion Restorable Period' [here](https://wiki.hexonet.net/wiki/COM). Pricing can be found in the [control panel](https://account.hexonet.net). Navigate under your account > BILLING > Prices & costs > Domains > see 'Restore' column for pricing.

### 3. Do you provide these: ID Protection, DNS Management, and Email Forwarding? and their Fees?

Yes, HEXONET provides these Add-On services. Find the Pricing for ID protection in our Control Panel by navigating through: BILLING > Prices & costs > Add-ons. DNS Mangement and Email forwarding are free if the DNS Zone is managed by us.

NOTE: In our Registrar Module Configuration, you'll find the checkbox `Sync Id Protection` that you may want to activate. It allows importing for which TLDs we are supporting the ID Protection Service. This isn't natively supported by WHMCS and a custom feature of our integration. Read [here]({{ 'docs/hexonet/whmcs/whmcs-ispapi-registrar#importing-prices' | relative_url }}) on how to import prices using the Registrar TLD Sync Feature of WHMCS. Check also FAQ #32.

### 4. How do I add my own nameserver via WHMCS?

After registering the domain name, navigate to Domain management page of the domain on the client area. Click on 'Private Nameservers' and register your nameserver by providing relevant information.

Give [this section]({{ 'docs/hexonet/whmcs/whmcs-ispapi-registrar#ns--dns-management' | relative_url }}) of our usage guide a in-depth read.

### 5. Domain Registration throws an error: Invalid attribute value; X-ACCEPT-WHOISTRUSTEE-TAC not supported. How to solve this issue?

Disable 'ID Protection' for the related TLD under System Settings > Domain Pricing. This TLD isn't supporting ID Protection.
Refer to FAQ #3 on how to import for which TLDs the ID Protection Service is supported.

### 6. .CA Domain Registration throws an error: Object does not exist; Create the host on the Registry system before you assign it to a domain

It might be the case that your nameservers do not exist yet. Please create them and then try to register the domain.
This needs to be done at your domain managing registrar.

### 7. I want to transfer my domain to another HEXONET account. How can this be done via WHMCS?

As usual via WHMCS' Domain Transfer Process. You eventually need an authorization code / epp code.

### 8. I want to transfer a domain from one customer to another in my WHMCS. How can I initiate this transfer from WHMCS?

You can cover this as described [here](https://docs.whmcs.com/Domains_Management#Moving_a_Domain_to_another_Client).

### 9. Below warning keeps showing up after Domain Registration

**`Registrar Warning: Click to Review and then Contact your Service Provider**`
    `**Registrar Transfer Lock: This domain cannot be transferred`**

It is a regular transfer lock after new registration. Usually, all gTLDs and nTLDs have this transfer lock for 60 days after new registration. Sometimes also after transfer. After the 60d, the transfer lock will be removed automatically.

This 60d transfer lock, aka. "serverTransferProhibited" and "Registry Lock", can be identified for freshly registered/transferred domain names as such in the Whois Data and in our System.

### 10. How to import your existing domain portfolio to WHMCS?

If your domain names are not yet managed by HEXONET, you have two possibilities:

(1) Transfer every domain by "Single Transfer" into WHMCS ("Transfer" button on the entry page of your WHMCS instance). This is the best way if you just have a few domains.

(2) If you have a lot of domains to transfer, you may want to use our [Migration & Consolidation Tool]({{ 'docs/hexonet/whmcs/whmcs-migration/' | relative_url }}) for WHMCS.

If your domain names are already managed by HEXONET, just follow the procedure check our [Domain Importer Addon]({{ 'docs/hexonet/whmcs/whmcs-domainimporter/' | relative_url }}). Let us also point to the built-in, but manual way of importing single, non-premium domain names to WHMCS. Read [here](https://docs.whmcs.com/Migration_Guide#Manual_Entry) for more details.

### 11. Wrong Availability Search Results

* Ensure you're using our ISPAPI Registrar Module as Lookup Provider
* Ensure to have the pricing correctly configured for the related TLD
* Ensure to have the latest version of WHMCS and our registrar module in use
* Check if you're eventually connected to the OT&E System (TestMode activated). Find the Setting in our registrar module settings. In case the TestMode is activated you're connected to our Demo System which is NOT representing the real world, but can be used for integration tests.
* The TLD is eventually not supported by us - please reach out to us.
* The Domain Name you provided is eventually not valid. e.g. xxx.pro. The minimum required domain name length for .pro is 4. Some registry provider are in addition restrictive regarding supported characters / IDNs. Check the related TLD in our [wiki](https://wiki.hexonet.net/wiki/) to identify if there are such restrictions.
* In case of a Premium Domain Name, ensure that the underlying Currency of the Registry Provider is configured and available in WHMCS. Find the currency out by executing the following command in our Control Panel (`>  'API ACCESS' > enter the command > submit`. Find the currency in the API response. WHMCS enforces the pricing to be returned, which is only possible if the related currency is configured.

     COMMAND = CheckDomains
     domain0 = <your domain name>
     premiumchannels = *

### 12. What's the difference between WHOISTrustee and Trustee?

Some ccTLDs require a local contact in the underlying country. This might require a so-called "local presence / proxy / trustee service". This means registration could require a company/individual to be located in a particular country, or may require an administrative contact with a physical address in that particular country. Using our trustee service (which is NOT free of charge), would allow you to order such a ccTLD domain name if you're not located in a particular country.

The "WHOISTrustee Service" is our ID Protection Service and can be ordered via WHMCS. Read FAQ #13 for more details.

### 13. What's the ID Protection Service?

This service (also known as whois privacy) cloaks your personal or company details from the publicly accessible whois database.

When you registered a domain you are required to provide accurate contact details which must be verified, these contact detail are then stored in a publicly accessible database called the ‘whois database’. Unfortunately hackers, spammers and fraudsters have been known to use this information to target domain holders. This service protects you from this by acting as a proxy, the detail listed in the whois database rather than being your own are that of our proxy services.

It is available for the most gTLDs and nTLDs at least, but using the Service got superfluous as of GDPR.

Check FAQ #3 on how to import which TLDs support this service.

### 14. Nameservers not updated after Transfer

In general HEXONET's Backend System / API does not apply the requested nameservers after successful transfer. We of course accept the transfer requests including nameservers, but that feature has just been introduced there for exceptional TLDs that allow this on registry-side - so registries that do not follow the EPP Standard. The EPP Standard itself does not offer a way in the transfer process to include nameserver changes. For historical reasons (to stay downward compatible) the decision was made to not change this in the way of a post-processing step on API-side. Still, I can forward that we plan to work on a new Middleware App (WIP) that will focus on such topics.

Now to the better news: We worked on this in our WHMCS ISPAPI Registrar Module as WHMCS itself allows such post-processing over hooks or TransferSync. In case you're using an updated version of our ISPAPI Registrar Module, and have it configured accordingly (read [here]({{ 'docs/hexonet/whmcs/whmcs-ispapi-registrar/#module-configuration' | relative_url }})), we will process a domain update after successful inbound transfer to take over the requested nameservers.

Basically, this has to be used with caution as of WHMCS' bad design. So, how does WHMCS cover this itself? In the transfer order process, the customer can provide new nameservers - by default your configured default nameservers are provided in the form (The Namserver Configuration in "General Settings" in WHMCS). This means: WHMCS will always provide nameservers - if the customer wants to change them or not! I tested this and even if the customer does not provide nameservers (removes them from the input fields), WHMCS makes a fallback to your configured default nameserver set. This is the bad design I mentioned. We on registrar-side don't get any information about who has provided the namservers to the transfer order - the customer or WHMCS itself. That's why the setting we introduced has to be used with caution. Using it might fit to some customers, but probably not all of them. I hope you were able to follow me here in this point.

### 15. Multi-year Registration Pricing calculation

In our Frontend aka. [Control Panel](https://account.hexonet.net), access your pricing details by clicking on your username at the top right and than navigate to "Billing > Prices & Costs".

Domain Registration Prices are calculated by considering Setup and Annual Price Price Portions. The Renewal price is nothing but the 'Annual price' here.

The below explains the calculation formula:

    price = setup + (term * annual)

In the most cases the setup portion is 0.00 and is therefore not "problematic" regarding WHMCS' Pricing Import aka. Registrar TLD Sync.
Our Pricing Import Integration in WHMCS as importing as follows. There's no better alternative based on possibilities provided by WHMCS.

    price = (setup + annual) * term

WHMCS just allows for specifying a single registration and renewal price and is multiplying it with the given terms.
Check FAQ #32 regarding pricing import issues.

### 16. SRV Record Support

WHMCS doesn't support this record type yet - upvote the feature request [here](https://requests.whmcs.com/topic/add-srv-records-through-dns-management-interface-in-clientarea-in-whmcs).

Our ISPAPI registrar module offers support for SRV records in WHMCS. Please read [here]({{ 'docs/hexonet/whmcs/whmcs-ispapi-registrar/#srv-records-support' | relative_url }}) for more information.

### 17. .DK Domain Registration as Organization/Company without VATID

Small companies in DK don't essentially have a VAT ID. But the domain registration process is enforcing it.
Sadly, DK Hostmaster isn't providing a special possibility to register domain names as company without VAT ID. You may order as Individual/Private Person without VAT ID or as Organization with VAT ID.

We reflected those possibilities via built-in Additional Domain Fields.
Let us also point to a special [.DK Custom Fields Configuration]({{ 'docs/hexonet/whmcs/whmcs-ispapi-registrar/#auto-prefill-fields' | relative_url }}) we are supporting.

### 18.  Lost control of a .DK Domain

Firstly, the .DK TLD and its underlying registry provider DK Hostmaster are highly special. This might happen if a customer is renewing directly at the registry provider or not renewing right at time. We are finally dropping the domain out of our systems as we haven't got paid for the continuation of the domain management. Still, .DK Domains are then not lost and still accessible for a while at the registry provider.

In order to get the domain back under HEXONET management/yours, execute the TransferDomain command in the control panel. An Authorization Code / EPP Code is not required in this case. Why not via WHMCS?: Because WHMCS enforces the Auth code to be submitted with transfers and the transfer request may get rejected in case of authorization code submission.

Please execute the following in the control panel:

     Command = TransferDomain
     Domain = <your domain>

Once the transfer is successful, you might need to renew (if applicable, asap). As WHMCS isn't synchronizing expired/cancelled Domains, you've to switch the status manually back to 'Active'.

### 19. Domain Renewed even though Account is set to AUTOEXPIRE

When switching your HEXONET account's setting to AUTOEXPIRE, ensure to manually set all existing domains to AUTOEXPIRE as well. The global setting just applies to new domain registrations, not to your existing portfolio. In addition, Automatic Renewal might be enabled for this domain in WHMCS.

### 20. Changing Auto-Renewal in WHMCS isn't reflected in your API

That are totally different settings / topics as WHMCS has its own built-in processes and data layer. Ensure to have your global account setting for domain renewals at HEXONET set to AUTOEXPIRE (when changing this, update existing domain names as well in that direction). Using the Auto-Renewal function in WHMCS then works as expected (enabled / disabled).

### 21. Registrar "1API GmbH" shown in public whois as registrar instead of HEXONET

It is our in-house registrar company, so, that is why it shows up as the official registrar.

### 22. Renew/Transfer Process Automation not working in WHMCS

* Check if you correctly configured your TLD Auto-Reg Settings for this TLD (via System Settings > Domain Pricing)
* WHMCS checks for the credit balance of your client to automate transfer/registration operation triggered by him/her. Without the client's credit balance, the transfer would not be triggered automatically.
* Your HEXONET account should be with enough funds (The account specified in the registrar module configuration).
* A bug of the Payment Gateway Addon eventually (not auto-processing correctly)

### 23. How to register .ONG domains via WHMCS

.ONG domain registration is a special case. You need to register .NGO domain to get .ONG domain. Both TLDs are technically bundled. 
For more information please have a read [here](https://wiki.hexonet.net/wiki/NGO).

.ONG domain can automatically be registered when a .NGO domain is registered.
But .ONG domain cannot be (seen)/maintained in our system. Since .ONG and .NGO are bundled, managing .NGO domain also affects the .ONG domain maintenance automatically.

If you want to particularly manage/have it in your account a .ONG domain, the domain should be using HEXONET nameservers and DNS zone. If that is the case we can manually import the .ONG domain into our system and make it possible for you to maintain it(Contact Backend for this).

### 24. Premium Domain Renewal / Transfer fails

Logs / Error Output shows something similar to:

  Missing required attribute; CLASS=PREMIUM_DONUTS_BBB+ required ...

Premium Domain Transfers were broken in WHMCS Core for a while. It got patched somewhere in WHMCS 8. Upgrading help here.

Premium Domain Renewals fail with such errors in case Premium Pricing Data in your WHMCS is incomplete. This is also a result of either a WHMCS Core Bug that they patched somethere around WHMCS 7.7 or that the underlying registry provider switched this domain name from regular to premium. Please reach out to us. We have some tooling at hand for helping you.

### 25. Whois lookup is not supported for .africa

This is the warning we are getting:

    WHOIS Lookups cannot be performed for the TLD .africa

The whois URL for .africa provided by WHMCS is outdated. Please create `/resources/domains/whois.json` (for WHMCS version >=7.0) and add the following code:

    [
        {
            "extensions": ".africa",
            "uri": "socket://africa-whois.registry.net.za",
            "available": "Available"
        }
    ]

Note: **DO NOT** modify dist.whois.json. For more information, have a look at [here](https://docs.whmcs.com/WHOIS_Servers)

### 26. Make error messages customer friendly

Forward examples to us via support ticket. We have some rude possibilities to cover that. We'll be improving step by step.

### 27. Hostname automatically changes in Resource Record configuration

e.g.

    help.hexo.com -> help.hexo.com.hexo.com.

Why my zone is added at the end of my hostname? How can I fix this issue?

-> Ensure that any hostname end with a ".". So, in this case "help.hexo.com.".

### 28. Nameserver Change for a .DE Domain

How can I update nameservers on my domain name in case it fails with something similar to:

    `Command failed; 53300102912 Nameserver error [ERROR: 901 Unexpected RCODE (target\, entity\, RCODE) (ns3.test.ch./130.211.50.255:53\, er-ert.de\, REFUSED)]`

Before you can update the nameservers via WHMCS, you need to create the zone at your nameserver (using our Control panel) It's a DENIC specific case. DENIC does nameserver checks.

For additional information, read:

* [Our WIKI](https://wiki.hexonet.net/wiki/DE#Nameserver)
* [DENIC Nast Tool](https://www.denic.de/en/service/tools/nast/)

Once you've created the zone, you will be able to update the nameservers for your domain, even via WHMCS. (Tier-1 support)

### 29. Domain registration failed when using external Nameservers

I received the following error for my domain registration:

    "#31125 - host association mapping references a nonexistent host name; host_name"

The reason is that your nameservers do not exist yet. Register your nameservers and try again to register your domain with your nameservers.

### 30. Cronjobs in WHMCS

When you upgrade PHP version in your system, cron may stop running. Always check if the cron is running properly after every change you made in your system.

Running WHMCS cronjob in your system is important for automation of operations(eg: domain transfer sync)
There is a limit to the WHMCS cron. Each time it runs it automates (say 50) jobs.  It may take time to update the status of your transferred domains. It depends also on how many numbers of jobs to automate created in your WHMCS.

You can also manually execute the crons in your system.
Eg: `php -q <PATH-TO-YOUR-WHMCS-CRON-FOLDER>/cron.php do --DomainTransferSync`

Read the [WHMCS Docs](https://docs.whmcs.com/Crons) for additional information.

### 31. WHMCS' built-in HEXONET registrar module vs. our ISPAPI registrar module

The HEXONET registrar module is natively shipped with the WHMCS Software and maintained by the WHMCS.com Team.

The ISPAPI registrar module is not shipped with the WHMCS Software, but available for download at [github](https://github.com/hexonet/whmcs-ispapi-registrar#readme). It is maintained by CentralNic's Middleware Team and coming with the latest features and patches.

We highly recommend using our ISPAPI registrar module. In addition, all our addon modules are linked to the ISPAPI registrar module to establish a connection between our API and WHMCS. So that you can register and manage HEXONET products in WHMCS. For example, SSL certificates and DNS Zones and RRs, etc.

### 32. Registrar TLD Sync Support

Yes, we support this feature since WHMCS 7.10. Please upgrade to the latest registrar module version. Feel free to forward further related question to us. Documentation around that topic:

* [Registrar TLD Sync](https://docs.whmcs.com/Registrar_TLD_Sync)
* [TLD Pricing Sync](https://developers.whmcs.com/domain-registrars/tld-pricing-sync/)

NOTE:

* ensure to increase `max_input_vars` in your php.ini to `10000` as a lot data is being submitted by whmcs
* Although we also return if the TLD requires EPP/Auth-Code for transfer, it doesn't update the setting in section `Domain Pricing`. That's not a bug, that's a feature of WHMCS. In case the EPP code settings got manually configured before, this won't get overwritten. So to activate the sync for EPP code, you'll first have to completely drop your old domain pricing configuration.
* In the pricing popup you might recognize `-1.00` prices which are placeholders in WHMCS for being disabled. No need to worry if you sell then under your own costs! From WHMCS Support:

> For example, transfers are generally only good for 1 year, so for years 2 and onward the price appears `-1.00`. Likewise if you opt to disable renewals for a certain length, it's perfectly legitimate to do that there as well. In particular, it's very difficult to renew a domain name for 10 years unless you do it at precisely the right time on the day of expiration, so 10 year renewal is frequently disabled with a values of `-1.00`.

* Promotions are not part of that pricing sync. We are investigating in that point to find the best way to bring this to WHMCS too.
* The TLD & Pricing Sync isn't perfect - I see 0Y / costfree transfers still missing and unsupported in WHMCS Core
* We in general return the registration periods. Some exotic TLDs support those periods just partially or not for renewal. That's the downside of the built-in Importer. It would have been better having the possibility returning registrartion, renewal and transfer periods completely separated to WHMCS. But this isn't desired by WHMCS' Design. We addressed this multiple times.

### 33. .UK registrar/IPS tag support in WHMCS

For more general information, have a read [here](https://wiki.hexonet.net/wiki/CO.UK#TLD_specific).

First create a transfer request at the gaining registrar. Then request the Domain Release a the loosing registrar by navigating to domain details page in WHMCS' Admin Area (one way: Clients > select your client > Domains > select your domain). There, click on the 'Release Domain' button. A pop up with a text field for Transfer Tag will appear. Specify the registrar tag of the **gaining** registrar in that text field. Click on Submit.

Our tag is "1API-DE".

### 34. Manual Domain Sync

If you want to trigger your Domain Synchronisation Process manually, you can do that by

```bash
/usr/bin/php -q {PATH_TO_CRONS_FOLDER}/cron.php do --DomainExpirySync --DomainTransferSync
```

NOTE: The Path to your PHP Binary might be different. Find it out by `which php`. Replace `{PATH_TO_CRONS_FOLDER}` accordingly to fit your WHMCS installation. This covers the Domain Synchronisation including the Domain Transfers.

### 39. Login failed in registrar module

If you need assistance finding the reason out why your login fails, please reach out. We can look this up in ease and provide help. Still, find below a whole chapter for reference guiding you through the issue.

The easiest way to solve this, is probably to create a new User Role under your Account and to use it in the registrar module configuration. This removes the debug effort completely and helps you in short.

Login to our Frontend here: [LIVE System](https://account.hexonet.net/) or [OT&E System](https://account-ote.hexonet.net/).
Then click on your User Name in the upper right and navigate to "Settings > Share Access".
In the upper right, you'll find a button for adding a new Role User - click it. Provide your data as follows:

[![Create User Role]({{ 'assets/images/whmcs/ispapi-registrar/role_user.png' | relative_url }})]({{ 'assets/images/whmcs/ispapi-registrar/role_user.png' | relative_url }})

Then skip the next Steps by just confirming using Button "Next". Now, reconfigure our Registrar Module as follows:

[![Use a User Role in WHMCS]({{ 'assets/images/whmcs/ispapi-registrar/role_user_whmcs.png' | relative_url }})]({{ 'assets/images/whmcs/ispapi-registrar/role_user_whmcs.png' | relative_url }})

NOTE: Ensure to separate your account id and the user role id by "!" as shown in the screenshot.

**Voilà! Connection successfully estabilished.** You can stop here. If you were not able to establish a connection, reach out to us and ask for help or go through the steps below:

* Ensure a ping is going through - otherwise, there's a network or setup error (firewall etc.).

  ```bash
  ping api.ispapi.net
  ping api-ote.ispapi.net
  ```

* Ensure to have the Requirements of our Module fulfilled: curl, php-curl have to be installed and working.
  You can test it with the following command from Shell:
  
  ```bash
  # test with our demo user (OT&E System)
  curl -k -d 's_login=test.user&s_pw=test.passw0rd&s_entity=1234&command=statusaccount' https://api-ote.ispapi.net/api/call.cgi
  # test with your credentials in LIVE System
  # s_login -> your user name
  # s_pw -> your passw0rd
  curl -k -d 's_login=...&s_pw=...&s_entity=54cd&command=statusaccount' https://api.ispapi.net/api/call.cgi
  ```

  You should get something like:

  ```bash
  [RESPONSE]
  PROPERTY[VAT][0]=19.00
  PROPERTY[DEPOSIT][0]=1517.62
  PROPERTY[CREDIT][0]=1000000.00
  PROPERTY[AMOUNT][0]=9902.03
  PROPERTY[CURRENCY][0]=EUR
  DESCRIPTION=Command completed successfully
  CODE=200

  QUEUETIME=0
  RUNTIME=0.004

  EOF
  ```

* php-curl correctly installed? Find a test script [here](https://raw.githubusercontent.com/centralnicgroup-opensource/rtldev-middleware-whmcs/archive/ispapi/test.curl.php). Download and execute it via command line:
  
  ```bash
  php test.curl.php
  ```

  If this works, you should see a similar response as shown in the previous point.
* WHMCS 7.6?

  WHMCS version 7.6 has a bug in the registrar module configuration page. You are already connected to our API even though WHMCS shows 'Disconnected'. To avoid this issue, you need to upgrade your WHMCS System.

* username or password could be wrong
* you probably mixup using OT&E system (TestMode checked) with using your production system credentials or vice versa. if you use your production account, ensure to have TestMode unchecked (and vice versa).
* 2-Factor authentication is active - which can't be supported in WHMCS. detailed read [here](https://github.com/hexonet/whmcs-ispapi-registrar/issues/128). Deactivate it, or better create a restrictive role user as described [here]({{ 'docs/hexonet/whmcs/whmcs-ispapi-registrar/#hexonet-account-hardening' | relative_url }}).
* the public ip-address used by your WHMCS system needs to be white-listed in case you have ip restrictions configured in our control panel. Find your Server IP address listed next to the error output.
* the api node has to be reachable, not blocked by a firewall. We connect to `https://api.ispapi.net` (LIVE System) and to `https://api-ote.ispapi.net` (OT&E System). This means outgoing connection to that url/domain name using port 443 has to be allowed.
* up to now unconfirmed: special characters in your password could be a reason. change your password. We will check this and if confirmed, it will also be fixed in the next releases.

Why can't we provide a specific reason for you? To harden our authentication process against hackers, we don't provide information about why it is exactly failing.