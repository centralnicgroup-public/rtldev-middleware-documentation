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

* To learn about special cases of any TLD, you can search for it on our wiki and read the document: [wiki](//wiki.hexonet.net/wiki/Main_Page) under 'TLD Specific' section.
* In order to find the reason for your failed domain registration, navigate on your WHMCS admin area > Utilities > Logs > Module Log. Make sure that you have already Enabled debug logging.   
* The special TLDs require some additional information to register them. The additional information can be provided to our system using WHMCS additional fields. We ship sample additional fields with our ISPAPI registrar module's installation folder. The file name is 'additionaldomainfields_sample.php'. In this file, you will find additional fields for all possible TLDs. You can simply copy the required code from this file and paste it in another file called 'additionalfields.php' under the path: `<your WHMCS>/resources/domains/`. **You should create this 'additionalfields.php' file in your system if does not exist yet.**.
* By using our additional fields code, you will be able to send required additional data of a domain to our system.
* To have quick access for the additional fields you can have a look [here](//github.com/hexonet/whmcs-ispapi-registrar/blob/master/registrars/ispapi/additionaldomainfields_sample.php)
* **IMPORTANT NOTE** : There is another file called `dist.additionalfields.php` under the path `<your whmcs>/resources/domains/` **DO NOT** modify this file. It comes by default with your WHMCS installation.

    **Hints:**
* Sometimes it can happen that one can forget to put the required code in between the PHP tags in the file additionalfields.php. Make sure you do not forget the PHP tags.

    example: `<?php .......your code ...... ?>`
* Make sure the file name is exactly named as `additionalfields.php`

### 2. Do you provide the Grace Period and Redemption Period? What are their duration and fees?

The redemption period is nothing but a Restorable period and also we call it a 'Deletion Restorable Period'.

These settings are now part of TLD Import & Pricing Sync Feature of WHMCS v7.10. Prices / durations can be found there.

*Releases < WHMCS 7.10:*
You can find the duration of the redemption period on our wiki for each TLD. For example, check 'Deletion Restorable Period' [here](//wiki.hexonet.net/wiki/COM). Pricing can be found in the [control panel](//account.hexonet.net). Navigate under your account > BILLING > Prices & costs > Domains > see 'Restore' column for pricing.

### 3. Do you provide these: ID Protection, DNS Management, and Email Forwarding? and their Fees?

Yes, HEXONET provides the Add-On services. Pricing for ID protection you can find on Control panel by navigating through: BILLING > Prices & costs > Add-ons.
DNS Mangement and Email forwarding are free if the DNS zone is managed by us otherwise they will be charged. If the DNS zone is not managed by HEXONET, it will run as a premium DNS zone. Therefore, costs of premium DNS zone includes for DNS Management and Email Forwarding.


### 4. How do I add my own nameserver via WHMCS?

After registering the domain name, navigate to Domain management page of the domain on the client area. Click on 'Private Nameservers' and register your nameserver by providing relevant information.


### 5. Why unable to transfer/register .DK domains on OTE?

The .DK registry OT&E is unstable and often down. Maybe it will work again later.
(DK registry uses it as their development system.)

### 6. (For incoming gTLD transfer - GDPR) When trying to change nameservers to the transferred domains, received an error from API: 'Missing required attribute; TOO FEW ADMIN CONTACTS (min=1)'

You need to update the contact details right after the transfer. (HBS-4652)
[we will not create empty contacts to circumvent the limitation that we need valid contact details for all domains.] (update: contact data will be updated automatically with the latest version of the ISPAPI registrar module. 23-01-2020. Required to check further details)

### 7. Error occurred for all .dk domain registrations:
**Invalid attribute value; INVALID CONTACT [OWNERCONTACT (Unaccepted value for contact:fax (Value does not look like (?^:^\+[0-9]{1,3}[. ][0-9]{1,14}$)) (you specified value as ''))]**

The reason for the issue was: changes/updates on the registry-side. They changed their interface to be more strict when validating company and fax data. We have applied a fix in our Backend-System to not to submit a fax number when it comes as empty string from any platform (like WHMCS). Therefore this issue no longer exists.

### 8. .CA domain registration throws an error: Invalid attribute value; X-ACCEPT-WHOISTRUSTEE-TAC not supported. How to solve this issue?

Disable 'ID Protection' for .CA TLD under <Your WHMCS admin area> Setup > Products/Services > Domain Pricing.
.CA TLDs do not support id protection. X-ACCEPT-WHOISTRUSTEE-TAC - this parameter contains the value of id protection.

### 9. .CA domain registration throws an error: DESCRIPTION=Object does not exist; Create the host on the Registry system before you assign it to a domain

It might be the case that your nameservers do not exist yet. Please create them and then try to register the domain.
This needs to be done at your domain managing registrar.

### 10. I want to transfer my domain to another HEXONET user. How can I initiate this transfer from WHMCS?

To initiate usertransfer, please navigate to Clients > select your client > Domains > select the domain > click on 'Transfer' button > enter the Auth code > click on 'Yes'

### 11. I want to transfer a domain from one customer to another in my WHMCS. How can I initiate this transfer from WHMCS?

You can cover this as described [here](//docs.whmcs.com/Domains_Management#Moving_a_Domain_to_another_Client).

### 12. I am using WHMCS 7.6.*. I have configured correct credentials in the ISPAPI registrar module config settings. Still, it shows an error: "Disconnected". How can I fix this issue?

WHMCS version 7.6 has a bug in the registrar module configuration page. You are already connected to our API even though WHMCS shows 'Disconnected'. To avoid this issue, you need to upgrade your WHMCS to the newest version.

### 13. I have registered the domain test.icu, but every time I see the Domain details, I get this warning:

**`Registrar Warning: Click to Review and then Contact your Service Provider**`
    `**Registrar Transfer Lock: This domain cannot be transferred`**

It is a regular transfer lock after new registration. Usually, all gTLDs and nTLDs have this transfer lock for 60days after new registration. Sometimes also after transfer. After the 60d, the transfer lock will be removed automatically.
you can check the 60d transfer lock always via the whois. If the lock is also called as "servertransferprohibited" in the whois and in our system, and the domain is a new registered/transferred, you know that it is a registry lock.

### 14. Why .EU domains have different expirations dates on WHMCS?

This issue has been fixed from version 1.8.2.

(The following solution is only applicable until the version ISPAPI registrar module 1.8.1. From v1.8.2 the module's behavior changed. See Q#24)

.EU is a special TLD that we handle differently than other TLDs:

In general, we set the "expiry date" to the date until the domain was paid, usually, this is in sync with the expiration date of the domain in our system and at the registry.
.EU domains, however, have the specialty that we purge them from our system 1 day before the expiration date because of registry policies.
In these cases where we purge the domain before it's expiration date we do not set the "expiry date" to the "paid until" date but to the "accounting date". The accounting date is the date on which our system will try to allocate funds for an upcoming autorenewal. For .EU the accounting date is set to 1 week prior to the expiration date. This is being done to ensure that in WHCMS an expiry date is shown that lies before the date the domain is actually being purged from our system.

The sync mechanism checks these conditions and has, therefore, set the expiry date to "accounting date"

For more information on the different periods of the domain life cycle please take a look at the 'periods' section in our Wiki [here](//wiki.hexonet.net/wiki/EU).
You can click on each period to get further information about the meaning of them.

### 15. Is it not possible for customers to order .UK from our WHMCS and then the order can be processed by you after matching their details? (RoR only applicable until the first week of July 2019)

Unfortunately, .UK RoR is not possible via WHMCS. You would need to initiate the process via the control panel. If the domain is managed under HEXONET and you would want to register again at HEXONET, send an AddDomain command with same registrant contact handle (contact data) of the domain plus Auth/EPP code of the CO.UK domain.

If the domain is under different registrar and you would want to register at HEXONET, send an Addomain command with same registrant contact data. Then the registrant will receive an email for a confirmation.

Please navigate on the control panel to 'API Access' and enter the command and required information.

To register a .UK domain where the .CO.UK domain is at HEXONET:

     command = AddDomain
     domain = (DOMAIN)
     ownercontact0 = (CONTACT) You should use the same contact ID than the .CO.UK one.
     admincontact0 = (CONTACT)
     techcontact0 = (CONTACT)
     billingcontact0 = (CONTACT)
     nameserver0 = (NAMESERVER)
     nameserver1 = (NAMESERVER)
     auth = <TEXT> You should use the auth code of the .CO.UK domain.

To register a .UK domain where the .CO.UK domain is not at HEXONET:

     command = AddDomain
     domain = (DOMAIN)
     ownercontact0 = (CONTACT) You should use the same contact Information than the .CO.UK ones.
     admincontact0 = (CONTACT)
     techcontact0 = (CONTACT)
     billingcontact0 = (CONTACT)
     nameserver0 = (NAMESERVER)
     nameserver1 = (NAMESERVER)

The registrant of the .CO.UK domain will get an email that should be confirmed.

**RoR .UK domains explained:**

Currently and until 25th June 2019 at 06:00 BST, all the customer now have a .co.uk are able to buy the same domain in .uk. This domain is reserved for them only.
So if you have test.co.uk at the moment, you will be able to buy test.uk, this domain is only reserved for you. 

After 25th June 2019 at 06:00 BST you will lose this right and all the unregistered .uk domains will be available for all customers. 
They will release the domains to the registrars who subscribed to this process in 5 batches, from July 1 to 5.

### 16. We have integrated the WHMCS billing system and intend to move our domain names to our HEXONET reseller. How we can proceed?

If your domain names are not yet managed by HEXONET, you have two possibilities:

(1) Transfer every domain by "Single Transfer" into WHMCS ("Transfer" button on the entry page of your WHMCS instance). This is the best way if you just have a few domains.

(2) If you have a lot of domains to transfer, a better idea might be to Transfer all domains first to HEXONET using our Control Panel and then using our ISPAPI Domain Import addon. Before importing in WHMCS, just make sure all domain data is correct after having the transfer finished (-> contact details).

If your domain names are already managed by HEXONET, just follow the procedure (2), but skip the step of transferring domain names using our Control Panel.

### 17. When requested search results for a certain TLD (eg: .CO), it always displayed as not available (its not the case for rest of the TLDs). We have validated and the prices are entered correctly in Our WHMCS and ISPAPI registrar module is selected as a lookup provider.

Can you please check your situation based on [this article](//help.whmcs.com/)?
Maybe activity logs provide something.
If you're not using the current version of WHMCS, please try also an upgrade.

### 18. When trying to register a .DE domain with ID protection through WHMCS, we get the following error:
Invalid attribute value; X-DE-ACCEPT-TRUSTEE-TAC not supported
It doesn't seem like the WHMCS module uses X-DE-ACCEPT-TRUSTEE-TAC as it should. Is there any way to fix this?

In our [Wiki](//wiki.hexonet.net/), you find domain extensions and their configurations listed.

Check the ["Addons" section](//wiki.hexonet.net/wiki/DE#Addons) for the domain extension, for .DE.

Uncheck the ID Protection Addon checkbox for TLD extension .DE in the Domain Pricing Overview.
You find this by navigating to `Setup > Products/Services > Domain Pricing`.

### 19. What's the difference between WHOISTrustee and Trustee?

Many country-based registries do not assign domain names the same way, and may require a "local presence" or "proxy service". This means registration could require a company/individual to be located in a particular country, or may require an administrative contact with a physical address in that particular country.

So using our trustee service (which is NOT free of charge), would allow you to order such a ccTLD domain name if you're not located in a particular country.

### 20. Here some short explanation about the ID Protection Service

Read [this](//www.eukhost.com/kb/what-is-domain-id-protection/).

It is available for the most gTLDs at least, but using the ID Protection Service got superfluous as of GDPR. We and a lot of registries do no longer show sensitive information in whois data.

To find if a TLD supports ID protection, execute the following command in the control panel:

     COMMAND = QueryDomainOptions
     DOMAIN0 = mydomain.com

Check the Response then for Property "X-PROXY", if there's a value returned in there. the service is available.

### 22. How can I use my own nameservers for domain registrations? / 'Any domains registered can they be set to automatically be pointed to my custom DNS names so they work with my hosting account.'

Yes, you can use your own nameservers. Login into your HEXONET account on the control panel > Click on your account name(top right corner of the page) > click on PRODUCTS > Domain Name Settings -> here you can configure your account with the required information.

Please also configure your default nameservers in your WHMCS.

### 23. Which versions of our modules are compatible with WHMCS 5.X or 6.X?

We do no longer support such old versions officially. Please upgrade your WHMCS to the latest version.

### 24. _sync method updated since v1.8.2. What is the update?

There had been a change in the ISPAPI registrar module included in v1.8.2 where we changed the sync of the expiry date for exceptional TLDs.

### 25. Nameservers not updated after Transfer

In general HEXONET's Backend System / API does not apply the requested nameservers after successful transfer. We of course accept the transfer requests including nameservers, but that feature has just been introduced there for exceptional TLDs that allow this on registry-side - so registries that do not follow the EPP Standard. The EPP Standard itself does not offer a way in the transfer process to include nameserver changes. For historical reasons (to stay downward compatible) the decision was made to not change this in the way of a post-processing step on API-side. Still, I can forward that we plan to work on a new API in 2021 that will focus such topics - to in general improve in direction of 3rd party software integrations / frontends.

Now to the better news: We worked on this in our WHMCS ISPAPI Registrar Module as WHMCS itself allows such post-processing over hooks or TransferSync. In case you're using an updated version of our ISPAPI Registrar Module, and have it configured accordingly (read [here]({{ 'docs/hexonet/whmcs/whmcs-ispapi-registrar/#module-configuration' | relative_url }})), we will process a domain update after successful inbound transfer to take over the requested nameservers.

Basically, this has to be used with caution as of WHMCS' bad design. So, how does WHMCS cover this itself? In the transfer order process, the customer can provide new nameservers - by default your configured default nameservers are provided in the form (The Namserver Configuration in "General Settings" in WHMCS). This means: WHMCS will always provide nameservers - if the customer wants to change them or not! I tested this and even if the customer does not provide nameservers (removes them from the input fields), WHMCS makes a fallback to your configured default nameserver set. This is the bad design I mentioned. We on registrar-side don't get any information about who has provided the namservers to the transfer order - the customer or WHMCS itself. That's why the setting we introduced has to be used with caution. Using it might fit to some customers, but probably not all of them. I hope you were able to follow me here in this point.

### 28. Additional fields are not required during transfers (in most cases). How can I remove them/hide them during transfer orders?

Additional fields are not needed during domain transfers. But this is by default presented by WHMCS. They explained the [here](//requests.whmcs.com/topic/additional-fields-in-domain-transfers). Via our API the additional fields during the transfers are ignored.
NOTE: Workaround to remove the additional fields during transfers is not supported by our API nor by WHMCS.(HM-565) (In the conf/cart pages, it is impossible to know if the order placed is for transfer domain or register domain)
WHMCS has to change this behavior.

### 29. As far as I know, the price of any registration/renewal for more than one year is multiplied by the number of that year. For example, registering a .com domain for one year is 10.89 USD, so 5 years is 10.89*5. Does this rule apply to all of the domains accepting more than one year process? are there any exceptions?

Prices must be calculated based on relations.

On the control panel please execute 'StatusUser' command to see the pricing relations.

      COMMAND = StatusUser

For any product (Domain, SSL, PremiumDNS) registration prices are calculated by considering Setup + Annual Price.
Renewal price is nothing but 'Annual price' here.

This is for one-year registration and renewal price calculation.

For two year registration period=> 2*(Setup + Annual prices). The same procedure of calculation, of course, for the rest of the years (3,4,5..10)

There are exceptions. If you find the price relation particularly for any year, you need to take that price (setup+annual). For example,  PRICE_CLASS_DOMAIN_COM_ANNUAL2, meaning, this is a price relation for 2years. Condition for this kind of relation is that SETUP relation should be also as follows: PRICE_CLASS_DOMAIN_COM_SETUP2. Otherwise, this kind of pricing relation should be ignored and apply the above-explained calculation.

If you would like to check the supported registration periods by any domain, please execute the 'QueryDomainOptions' command on the control panel.

(For example, .DE domains only support 1Y and 1M registration periods).

     COMMAND = QueryDomainOptions
     DOMAIN0 = example.com

You can use the control panel to calculate pricing for different registration periods. It may be helpful for you.
Control Panel > Bottom left "Reseller Controls" > "Reseller Settings" > "Price Plan"> "Plan Editor"

### 30. We have customers who are using o365 for mails and the would often contact us to add some more entries on their DNS. Can you please let us know how can we add the SRV option?

Our ISPAPI registrar module makes it possible to support SRV records into your WHMCS.

Please read [here]({{ 'docs/hexonet/whmcs/whmcs-ispapi-registrar/#srv-records-support' | relative_url }}) for more information.

WHMCS does not support this record type yet - upvote the feature request [here](//requests.whmcs.com/topic/add-srv-records-through-dns-management-interface-in-clientarea-in-whmcs).

### 31. I am able to register .DK domain as an invidual/private client. Once the company name entered and tried to register, the system gives an error:  INVALID CONTACT [OWNERCONTACT (Missing required attribute; VATID REQUIRED FOR ORGANIZATION)]. It seems that your system thinks, an organization is trying to register the .DK domain. How can I solve this issue?

When a company name found in the user contact details, the contact is considered as an organization. Therefore, our system looks for a VAT ID.

In order to send VAT ID from WHMCS, please have configured.DK domain additional fields into your WHMCS.

If you would like to register as an individual, please do not include the organization name.

### 32. There is a problem with searching domains. No matter what I search I get: “xxx.aaa.pro is unavailable”. Is that an issue with your plugin or WHMCS?

XXX is a TLD.
TLDs are not supported as domain names. In addition, .PRO requires at least 4 characters to be a valid domain name.

### 33.  We lost control of the renewal process of a .DK domain and the customer is lost between us, you and dk-hostmaster. We would like to gain control over the domain again. How can we do it?

.DK domain is a special TLD.

In order to get the domain under HEXONET management/yours, execute the TransferDomain command in the control panel. Auth code is not required in this case.

Why not via WHMCS?: Because WHMCS enforces the Auth code to be submitted with transfers and the transfer request may get rejected in case of auth submission.

Please execute the following in the control panel:

     Command = TransferDomain
     Domain = <your domain>

Once the transfer is successful, you can import and manage the domain into your WHMCS by using our ISPAPI Domain Import addon or enter manually.

### 34. I would like to renew my .ca domain. At HEXONET control panel I see different renewal date than at WHOIS. Which information is correct?

In general, we set the 'expiry date' to the date until the domain was paid. usually, this is in sync with the expiration date of the domain in our system and at the registry.
(checked data about the client's domain name in the CP)Your domain is now under the renewal grace period. Meaning your domain will be deleted from our system after 44 days from the expiration date. Please have read our Wiki [here](//wiki.hexonet.net/wiki/CA) (see Periods section). 
The expiration date in our system will be synced with the date at the registry after 44 days if you renew the domain until then. If not the domain will get deleted from our system and at the registry on that date. (Failure period)

### 35. My domain got renewed even though my HEXONET account is set to 'AUTOEXPIRE'. Why?

If the domain was already registered before setting the default renewal mode to AUTOEXPIRE, this setting won't affect that domain.

### 36. For my domain the registrar shown as "1 Api GmbH" instead of HEXONET. Why is that?

It is our in-house registrar company, so, that is why it shows up as the official registrar.

### 37. None of renew and transfer requests are done automatically from WHMCS. when users place an order for transfer or renew, I have to renew it manually by HEXONET panel or click on renew button on WHMCS. My cronjobs are running perfectly. Domain Sync is checked in WHMCS. Why these operations are not automated when an order is placed?

WHMCS checks for the credit balance of your client to automate transfer/registration operation triggered by him/her.
Without the client's credit balance, the transfer would not be triggered automatically.
Also: your HEXONET account should be with enough funds. (This is the account you use in the ISPAPI registrar module configuration settings.)

### 38. I am not able to register .ONG domains via WHMCS. Why?

.ONG domain registration is a special case. You need to register .NGO domain to get .ONG domain. Both TLDs are technically bundled. 
For more information please have a read [here](//wiki.hexonet.net/wiki/NGO).

.ONG domain can automatically be registered when a .NGO domain is registered.
But .ONG domain cannot be (seen)/maintained in our system. Since .ONG and .NGO are bundled, managing .NGO domain also affects the .ONG domain maintenance automatically.

If you want to particularly manage/have it in your account a .ONG domain, the domain should be using HEXONET nameservers and DNS zone. If that is the case we can manually import the .ONG domain into our system and make it possible for you to maintain it(Contact Backend for this).

### 39. I am unable to transfer premium domains via WHMCS using your registrar module. The API throws the following error: Retry Response: Missing required attribute; CLASS=PREMIUM_DONUTS_BBB+ required for Transfer of Premium Domain. How can solve this?

Unfortunately, WHMCS does not support Premium Domain Transfers. Once the WHMCS supports this feature, we can include the functionality in our registrar module. (still not supported. The latest version is 7.9)

### 40. Whois lookup is not supported for .africa. This is the warning we are getting >> WHOIS Lookups cannot be performed for the TLD .africa

The whois URL for .africa provided by WHMCS is outdated.

Please create a 'whois.json' file under `<path to your WHMCS>resources/domains/` (this path is only available from WHMCS version 7.0)

and add the following code:

    [
        {
            "extensions": ".africa",
            "uri": "socket://africa-whois.registry.net.za",
            "available": "Available"
        }
    ]

Note: **DO NOT** modify dist.whois.json.

For more information, have a look at [here](//docs.whmcs.com/WHOIS_Servers)

### 41. After the .COM domain transferred successfully, the domain has no contact data in your system. I tried to update and send modify domain command via WHMCS, but your API gives the following error: ... TOO FEW ADMIN CONTACTS. Another issue: I am not able to update the nameservers after domain transfer. API throws the same error as above. What is the reason for missing contacts? How can I fix it?

The origin of all the issues you've recognized, is: The registry behind .COM/.NET is a so-called THIN registry. That means we cannot simply get the contact data from the registry after the transfer is finished. In that case, our backend system tries to get the contact data from WHOIS. If the WHOIS does not contain contact data, it's impossible to create contacts in our system for domains. This is a rather common issue we have as the WHOIS doesn’t contain much information any more since GDPR. So finally, transferred domains in such a case have probably no contacts assigned.

That's why you're getting errors like "... TOO FEW ADMIN CONTACTS" when updating/adding nameservers or "Missing required attribute: COUNTRY of OWNERCONTACT0".

WHMCS contact update page tries also to update all data of the registrant which conflicts with IRTP for several extensions as a Trade is then necessary.

So, the only working way is to transfer the domains and then to add the missing contacts in the way(Bulk Updating using our Control Panel).

Then, it is possible to update the domains as desired.

Your workaround currently is to update the contacts manually after the transfer (using Bulk commands in Control Panel).

### 42. Could you please update your module, if the contact doesn't exist for a domain, to create a default contact that inherits the WHMCS user profile?

This is covered in the ISPAPI Regisrar module since version 2.4.5. For more information, see Q#45.

### 43. Can you please improve the error output in the direction to the customer? For example: Updating nameserver when the contact data is missing. Then the API throws the following error: ... TOO FEW ADMIN CONTACTS. Which is not understandable to our normal customers.

This is probably a future project - to get ALL error outputs covered, but nothing that can be covered in short as it comes with a lot more effort than just realizing a mapping of API code and description to a translation key.
(e.g. several of our commands might result in the same error code and description, but the error output has still to be specific to command / the section the customer is visiting).

### 44. When I tried to add a CNAME record, your registrar module additionally adds my DNS zone as well. eg: hexo.com. is my DNS zone. Under the Data column, I enter a hostname help.hexo.com and click on Save. After saving the record, the Data column contains- help.hexo.com.hexo.com. Why my zone is added at the end of my hostname? how can I fix this issue?

CNAME records map to another name, not to an IP address. Besides this, you should never use a CNAME record for your root domain name.   Once you enter the Hostname, please make sure that you enter a "." at the end of the hostname. Entering priority 100 should be a good default value.

### 45. Recently, we transferred a few domains from Enom and we now need to push the correct registrant data as it only has GDPR gibberish. However, when I have attempted to do so from inside WHMCS, it just shows the success message, but nothing actually changes.

Looks like there is a bug when using the contact picker inside WHMCS to update contact details because when I try to pick an existing contact on the client’s account with us, it ends up submitting:
COMMAND=ModifyDomain

DOMAIN=charliesdesserts.com

OWNERCONTACT0FIRSTNAME=

OWNERCONTACT0LASTNAME=

OWNERCONTACT0ORGANIZATION=

OWNERCONTACT0STREET=.......................

You then inexplicably reply with:

[RESPONSE]

DESCRIPTION=Command completed successfully

CODE=200

When I instead used the “Use Following Details” and filled out each contact by hand, it worked. That doesn’t explain why the HEXONET UI chose the wrong function unless I managed to do something wrong.

==> Answer:(Jan.06.2019) - 527271
This is a known issue for .com/.net/.cc/.tv domain names with active WHOIS privacy service (-> GDPR!).

When transferring domains to HEXONET, our backend system cannot fetch contact data out of whois data as there, no data is provided by the registry. In addition, the registry doesn't provide any other possibility to lookup contact data. Because of this, transferred domains have no/invalid contact data assigned. This requires a contact data update before you can continue with any other update in whmcs like nameserver update or DNS changes.

To cover this in a semi-automated way we have recently applied changes to the ISPAPI registrar module. It identifies such cases in the `_Sync` method and auto-updates such problematic domain cases using the whmcs client data. So, we suggest you upgrade to the latest release available [here](//github.com/hexonet/whmcs-ispapi-registrar/raw/master/whmcs-ispapi-registrar-latest.zip).

That said, it is not a WHMCS issue in general, just something that affects the transfer process because of introduced GDPR (at registry side, probably enforced by ICANN).

### 46. I've noticed that while testing, my DNS Zone wasn't created for the purchased domain. WHMCS register the domain but stopped showing the DNS  link. On Hexonet side, the nameservers are being identified as External.
I'm using different names for the nameserver (ns5.test.network, ns6.test.network and ns7.test.network), but it matches the same IPs os ns1, ns2 and ns3. hexonet.net.
What could be the problem? Previously it was working fine.

from a source code point of view, it might just be an issue that you have not activated the dns management addon for your domain name in the registration process.

(I've checked the log entry of your domain registration and looks like that was the case.)

The DNS Management addon finally adds the parameter INTERNALDNS with value 1 to the AddDomain command which is finally processed by our backend system.

This parameter cares about creating an internal DNS zone.


### 47. I registered a new domain (test.com & testq.com) with DNS Management Addon, but still, the DNS Zone wasn't created. The same happens if I enable DNS management on the domain (blup.com) which was off.

(This is just documented for info and as a reference) + related to 46.

The internaldns parameter has reached our backend system. probably timing issue - OT&E system might be a bit slower with rolling these things out in the background.

### 48. I am not able to change nameserver for my .de domain name. I tried via the control panel and WHMCS.

How can I update nameservers on my domain name?

Error description: `Command failed; 53300102912 Nameserver error [ERROR: 901 Unexpected RCODE (target\, entity\, RCODE) (ns3.test.ch./130.211.50.255:53\, er-ert.de\, REFUSED)]`

Before you can update the nameservers via WHMCS, you need to create the zone at your nameserver (using Control panel) It's a DENIC specific case. DENIC does nameserver checks.

For additional information, read:

* [Our WIKI](//wiki.hexonet.net/wiki/DE#Nameserver)
* [DENIC Nast Tool](//www.denic.de/en/service/tools/nast/)

Once you've created the zone, you will be able to update the nameservers for your domain, even via WHMCS. (Tier-1 support)

### 49. Login failed in registrar module

There can be several issues for this:

* Ensure a ping is going through - otherwise, there's a network or setup error (firewall etc.).

  ```bash
  ping api.ispapi.net
  ```

* Ensure to have the Requirements of our Module fulfilled: curl, php-curl have to be installed and working.
  You can test it with the following command from Shell:
  
  ```bash
  curl -k -d 's_login=test.user&s_pw=test.passw0rd&s_entity=1234&command=statusaccount' https://api.ispapi.net/api/call.cgi
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

* php-curl correctly installed? Find a test script [here](//raw.githubusercontent.com/hexonet/whmcs-ispapi-registrar/master/scripts/test.curl.php). Download and execute it via command line:
  
  ```bash
  php test.curl.php
  ```

  If this works, you should see a similar response as shown in the previous point.
* WHMCS 7.6?

  WHMCS version 7.6 has a bug in the registrar module configuration page. You are already connected to our API even though WHMCS shows 'Disconnected'. To avoid this issue, you need to upgrade your WHMCS System.

* username or password could be wrong
* you probably mixup using OT&E system (TestMode checked) with using your production system credentials or vice versa. if you use your production account, ensure to have TestMode unchecked (and vice versa).
* 2-Factor authentication is active - which can't be supported in WHMCS. detailed read [here](//github.com/hexonet/whmcs-ispapi-registrar/issues/128). Deactivate it, or better create a restrictive role user as described [here]({{ 'docs/hexonet/whmcs/whmcs-ispapi-registrar/#hexonet-account-hardening' | relative_url }}).
* the public ip-address used by your WHMCS system needs to be white-listed in case you have ip restrictions configured in our control panel. Find your Server IP address listed next to the error output.
* the api node has to be reachable, not blocked by a firewall. We connect to `https://api.ispapi.net`. This means outgoing connection to that url/domain name using port 443 has to be allowed.
* up to now unconfirmed: special characters in your password could be a reason. change your password. We will check this and if confirmed, it will also be fixed in the next releases.

Why can't we provide a specific reason for you? To harden our authentication process against hackers, we don't provide information about why it is exactly failing.

### 50. Domain registration failed by using external nameservers.

I received the following error for my domain registration: " #31125 - host association mapping references a nonexistent host name; host_name "

The reason is that your nameservers do not exist yet. Register your nameservers and try again to register your domain with your nameservers.

### 51. cronjob in WHMCS.

When you upgrade PHP version in your system, cron may stop running. Always check if the cron is running properly after every change you made in your system.

Running WHMCS cronjob in your system is important for automation of operations(eg: domain transfer sync)
There is a limit to the WHMCS cron. Each time it runs it automates (say 50) jobs.  It may take time to update the status of your transferred domains. It depends also on how many numbers of jobs to automate created in your WHMCS.

You can also manually execute the crons in your system.
Eg: `php -q <PATH-TO-YOUR-WHMCS-CRON-FOLDER>/cron.php do --DomainTransferSync`

Read the [WHMCS Docs](//docs.whmcs.com/Crons) for additional information.

### 52. HEXONET default registrar (vs) ISPAPI registrar module

HEXONET registrar module comes by default with WHMCS installation.
We highly recommend using our ISPAPI registrar module since it is easier to provide our customers with new features and improvements through the module ASAP. With the HEXONET default registrar, the changes would be available only when the WHMCS releases a new version of itself.
In addition, all our addon modules are linked with ISPAPI registrar module to establish a connection between our API and WHMCS. So that you can register and manage HEXONET products in the WHMCS. For example, SSL certificates and Premium DNS plans.

### 53 .Dk domains

.Dk is a special TLD. When the billing contact of a .DK domain gets updated, our system automatically transfers it away since our system does not manage billing operations on that domain.
In order to manage the domain under HEXONET, you need to transfer in your domain using our control panel and manually update the status of the domain to 'Active' in your WHMCS.

Once the domain status is set to transferred away in WHMCS, the sync mechanism of WHMCS will no longer update/sync the data of the domain. That's the default behavior of the WHMCS.

===> Expiry dates differ from registry to our system.

Scenario: A customer transferred in .DK domain and paid at DK hostmaster for renewing the domain. But registrar module still sets the old expiry date and status to expired.

[Note: the status of the domain in our system is Active with an old expiry date]

Solution: The dates need to be synced (registry to our system).
*contact tier-2

### 54 For accurate search results for Premium Domains

**Example scenario:**
The domain name: test.me original pricing is in currency EUR (at the registry) with price class PREMIUM_ME_E
This information you can get by executing the following command in the control panel -> click on 'API ACCESS' -> enter your command -> click on submit.

     COMMAND = checkdomains
     domain0 = test.me
     premiumchannels = *

In WHMCS, the currency in which originally the premium domains are offered in(at the registry) must be configured.

In order to display the accurate results for your domain name, you must configure EUR currency in your WHMCS. (your WHMCS admin area > Setup > Payments > Currencies)

### 55 Do you support TLD & Pricing Sync mechanism shipped with WHMCS 7.10?

Simple Answer: Yes, available [here](//github.com/hexonet/whmcs-ispapi-registrar/raw/master/whmcs-ispapi-registrar-latest.zip). Integrated since v2.5.0. Feel free to forward further related question to us.
Documentation around that topic:

* [Registrar TLD Sync](//docs.whmcs.com/Registrar_TLD_Sync)
* [TLD Pricing Sync](//developers.whmcs.com/domain-registrars/tld-pricing-sync/)

NOTE:

* ensure to increase `max_input_vars` in your php.ini to `10000` as a lot data is being submitted by whmcs
* IDN TLDs are not considered as WHMCS doesn't officially support them
* Although we also return if the TLD requires EPP/Auth-Code for transfer, it doesn't update the setting in section `Domain Pricing`. That's not a bug, that's a feature. In case the EPP code settings got manually configured before, this won't get overwritten. So to activate the sync for EPP code, you'll first have to completely drop your old domain pricing configuration.
* In the pricing popup you might recognize `-1.00` prices which are placeholders in WHMCS for being disabled. No need to worry if you sell then under your own costs! From WHMCS Support:

> For example, transfers are generally only good for 1 year, so for years 2 and onward the price appears `-1.00`. Likewise if you opt to disable renewals for a certain length, it's perfectly legitimate to do that there as well. In particular, it's very difficult to renew a domain name for 10 years unless you do it at precisely the right time on the day of expiration, so 10 year renewal is frequently disabled with a values of `-1.00`.

* We addressed topics to the WHMCS development team [here](//whmcs.community/topic/298959-developer-documentation-for-registrar-pricing-sync/) that could be improved, have a read. This covers topics you should be aware of before using that feature!
* Promotions are not part of that pricing sync. We are investigating in that point to find the best way to bring this to WHMCS too.

*SINCE v2.7.0* the graceFee and redemptionFee Sync is also included.

If you're getting the below SQL error, upgrade to v3.0.2. It changes the column type json to longtext which is finally working also for Maria DB and older SQL Server versions.

```
SQLSTATE[42000]: Syntax error or access violation: 1064 You have an error in your SQL syntax; check the manual
that corresponds to your MariaDB server version for the right syntax to use near 'json null, `repository` 
varchar(255) not null, `authRequired` tinyint(1) not nul' at line 1 (SQL: create table 
`ispapi_tbltldconfigurations` (`tld` varchar(255) not null, `tldclass` varchar(255) not null, `periods` json 
null, `repository` varchar(255) not null, `authRequired` tinyint(1) not null, `idprotection` tinyint(1) not 
null) default character set utf8 collate utf8_unicode_ci)
```

### 56 How does WHMCS handle the registrar/IPS tag for .UK domains?

For more general information, have a read [here](//wiki.hexonet.net/wiki/CO.UK#TLD_specific).

First create a transfer request at the gaining registrar. Then request the Domain Release a the loosing registrar by navigating to domain details page in WHMCS' Admin Area (one way: Clients > select your client > Domains > select your domain). There, click on the 'Release Domain' button. A pop up with a text field for Transfer Tag will appear. Specify the registrar tag of the **gaining** registrar in that text field. Click on Submit.

Our tag is "1API-DE".

### 57 I am unable to update contact data for .IT domain name. I received the following error: "Missing required attribute; X-IT-ACCEPT-LIABILITY-TAC " but that flag isn't shown anywhere.

.IT requires a special registrant change page that contains the additional and required data.
On the client area, under a Domain management page, you will be able to see '.IT Change of Registrant' page. Use this page to update the data.

### 58 When I update the auto-renewal setting of a domain in the WHMCS client area, the update is not reflecting on the HEXONET control panel.

You cannot change the auto-renew setting on the HEXONET control panel from WHMCS. Auto-Renew settings are handled only internally by WHMCS and not forwarded to the registrar.  The domains managed by WHMCS always be set to AUTOEXPIRE in the control panel despite the setting of Auto-Renew on WHMCS.

Please make sure that the account you are using is set to renewal mode AUTOEXPIRE in your control panel.  

For more information please refer to the registrar module's usage guide

### 59 I am trying to set MX record priority to 10 but once I click on Save, the value automatically changes to 100. How can I fix this issue? (note: I am using Lagom template in my WHMCS)

One reason could be: With the Langom template, the priority value sent as empty to our API. Our API then sets the default priority value as 100. To fix the issue, use the Six template.

If you want to continue to use Langom template, please contact the provider/maintainer of this template to fix the issues.

### 60 I tried to set nameservers on my domain name. (I used the test environment). I got the following error:

Object does not exist; ns ns3.gggg.com does not exist. Please advice.

Some TLDs/Domain Registries (like for .com) are managing nameservers as separate objects (so-called glue records). Therefore such a nameserver has to be created first before using it.
On the domain details page(client area), use `Private Nameservers` for creating nameserver. This cares about creating that nameserver and allows you finally to use it in your domain configuration itself.

### 61 Import prices with currency conversions and promotions.

With WHMCS 7.10 they introduced a new feature called [Registrar TLD Sync](//docs.whmcs.com/Registrar_TLD_Sync).
That feature covers what you need: importing prices and converting currencies behind the scenes.

Promotions: We decided not to consider them in the Registrar TLD Sync Integration.
Reason: Both of these processes don't update prices per background job and require manual interaction. Our Resellers could lose money if they miss syncing again prices after the end date of a promotion.

You can check the start- and end date of your promotions by clicking on your username at the top left in our [Control Panel](//account.hexonet.net/). Then navigate to Billing > Prices and Costs. See the Screenshots. You'll find there two columns at the end of the table covering the start- and end date.

### 62 Manual Domain Sync

If you want to trigger your Domain Synchronisation Process manually, you can do that by

```bash
/usr/bin/php -q {PATH_TO_CRONS_FOLDER}/cron.php do --DomainExpirySync --DomainTransferSync
```

NOTE: The Path to your PHP Binary might be different. Find it out by `which php`. Replace `{PATH_TO_CRONS_FOLDER}` accordingly to fit your WHMCS installation.

This covers the Domain Synchronisation including the Domain Transfers.
