---
layout: default
title: Blesta
parent: FAQs
grand_parent: HEXONET
nav_order: 6
showtoc: 1
---

# FAQs

### **1. How can I add more TLDs than listed in the Blesta ISPAPI registrar module?**

You can add more TLDs to the module. Please add in this file: `<module>/config/ispapi.php`
[These](https://www.hexonet.net/resellers/domains) are the TLDs supported by HEXONET.
You can choose from this list.

### **2. I tried to register a domain name with my existing/in use nameserver. But the registrar module throws an error: Object does not exist. What is the reason for this issue?**

It might be that you are trying to register a domain in the OTE system and the nameserver does not exist in the ote system. Add the nameserver in the OTE system and try again to register.

### **3. How can I import domains from HEXONET to Blesta and manage them via Blesta?**

Unfortunately, at the moment there is no automated way of importing domains from HEXONET to Blesta.

You can add the existing domains under your customer account in Blesta as follows:

On the Blesta admin area > navigate to Clients > select your client > click on 'Add Service' > select your suitable package (assuming you created a package already) > Continue > check 'Do not Invoice', select Term, set Status as 'Active', uncheck 'Provision using the Ispapi module when activated' and  'Send order confirmation email when activated', enter your domain name under 'Domain Name' field, enter Nameservers (which are assigned already your domain name) > Continue >  Add Service

Now, you will be able to see the domain name under the 'Active' list.

### **4. How can I import domains from WHMCS to Blesta and manage them via Blesta?**

Blesta provides a plugin called 'Import Manager'. Using this one can import domains from WHMCS to Blesta.
More information about this plugin can be found [here](https://docs.blesta.com/display/user/Import+Manager).

### **5. How/Where can I find about the Blesta details such as version number?**

Navigate to Settings > System > Upgrade Options > click on 'About Blesta' => You will find here verison number and other information.

### **6. I am unable to change owner contact data for my domain. How can I fix this issue?**

I have transferred this domain to HEXONET recently. When I try to modify the owner contact, I receive the following error message:
`[OWNERCONTACT (Missing required attribute; extended parameters for the registrant (organization) required)]` 

Answer: The issue is due to IRTP (Inter-Registrar Transfer Policy) effect on the domain's ownership change. All gTLDs including nTLDs are effected by IRTP. At the moment Blest does not support IRTP handling. Therefore we cannot support through our registrar module as well. But we provide a way for customers to trigger the validation process. Please read [here]({{ 'docs/hexonet/blesta/#domain-contact-verification--irtp' | relative_url }}).

Also, notice that the IRTP is effected on special TLDs like .FR, .RE ..


### **7. I am unable to change owner contact data for my .net domain after the transfer is successful. How can I fix this issue?**
(27th Jan 2020)

In case a domain arrived without proper registrant information after a transfer the command can vary, depending on the information available for the domain.
eg: In your case, the system does not accept the trade command.

The issue you have is known for .com/.net/.cc/.tv domain names with active WHOIS privacy service (-> GDPR!).

When transferring domains to HEXONET, our backend system cannot fetch contact data out of whois data as there, no data is provided by the registry. In addition, the registry doesn't provide any other possibility to look up contact data. Because of this, transferred domains have no/invalid contact data assigned. This requires a contact data update before you can continue with any other update in Blesta like nameserver update or DNS changes.

To cover this, we need to modify/update our ISPAPI registrar module. So that our module will be able to auto-update such problematic domain contact data using client data. Unfortunately, we do not have an ETA on it.

Until then, you can update the contact data via the control panel:
try the following command:

     command=modifydomain
     domain=test.net
     OWNERCONTACT0=<your contact handle>
     ADMINCONTACT0=<your contact handle>
     TECHCONTACT0=<your contact handle>
     BILLINGCONTACT0=<your contact handle>

The command can be inserted here: "Dashboard -> "API Access"

In case of admin, tech or billing contact are not the same, please create a new contact handle for these contacts first and update the handle number in the command.
