---
layout: default
title: WHMCS - Premium DNS
parent: FAQs
grand_parent: HEXONET
nav_order: 7
showtoc: 1
---

# FAQs

#### 1. What are the advantages of using the Premium DNS Service?

Today's standard of faster speed, tighter security, and websites that are always accessible makes Premium DNS a must-have for anyone with a personal website, business, e-commerce, or online presence. Make sure you stand out by providing Premium DNS! 

##### SPEED

Smart traffic routing system to speed up DNS resolution, leading to faster website performance for your global audience.

##### SECURITY | DNSSEC

HEXONET makes it easier for you to authenticate DNS responses in order to prevent cache poisoning.
With a single click, DNSSEC will automatically sign and manage zones using the best practices for key
rollovers. This includes:
* Automate Zone-Signing-Key (ZSK) Rollover on a bi-weekly basis
* Automate DNSSEC updates at all registries and regular updates on Key-Signing-Key (KSK) Rollover.
 This action is possible only for domain registrars, giving HEXONET the upper hand over non-registrar
 DNS providers

##### SECURITY | DDOS Protection

HEXONET's DDoS protection can quickly identify attacks and defend your DNS zone against these attacks
so that your uptime and availability aren't compromised. Our DDoS protection works in three layers. When
an attack occurs, it attempts to:

* Locate the source network of the attack and blocks it, otherwise
* Locate the target domain of the attack and blocks it, otherwise
* Block the target IP address of the attack 

##### RELIABILITY

Around-the-clock monitoring of DNS traffic, DNSSEC support and analytics dashboard showing valuable insights on your DNS traffic.

#### 2. Why would it be better to have both managed by HEXONET, Domain and DNS Zone?
DNS Zones for domains managed by HEXONET our free of charge. We just charge for the Premium DNS Service.

#### 3. When a customer orders the service, will the customer need to make any manual changes to their DNS settings?

No, not required any manual changes.
Please see here for more information: https://github.com/hexonet/whmcs-ispapi-premiumdns/wiki/Usage-Guide

#### 4. Will the customer need to keep NS records as set by HEXONET, or will they be able to change them to their hosting provider?

If you use premium DNS on our side, you cannot change the NS records as the config will be broken. NS records need to be the same as the nameservers that are set on a domain name. If you use own hostnames (with our nameservers behind) you can list your hostnames in the zone and assign them to the domain name.

#### 5. We have an existing client who is on premium DNS before we installed this module. How can we enable premium DNS analytics for them in WHMCS using this module?

To see the analytics for existing premium DNS zone in WHMCS, manual configuration required. Please navigate to clients profile > Add New Order > under Products/Sevice > select the premium plan (with which the zone exists) > enter DNS Zone > check 'Do not apply any credit from...' > Submit Order.
Now go to your clients profile > Products/Services > select Status as 'Active' > adjust other information such as Next Due Date, Registration Date > Save Changes.
You will be able to see now on the client area the analytics and other information of the DNS zone.
Please make sure that the domain name exists on your WHMCS. Example, if you are buying a premium DNS plan for DNS Zone "test.com.", the domain "test.com" should exist in your WHMCS.

#### 6. Is it possible to use the Premium DNS Service also for Domains that are not managed by HEXONET?

Yes, this is certainly an option.

Any domain can use our Premium DNS service. You can create a premium dns zone in your account and then change the nameservers for your domain at the current registrar to our nameservers and it will start working.

#### 7. How to use my company labeled Nameservers together with the Premium DNS Service?

You can set up A records and Host/GLUE records for NS1, NS2, NS3 on your company domain name pointing to the three IP addresses provided below and then use your company domain name as the nameserver addresses for your clients:
* 194.50.187.192
* 194.0.182.180
* 193.227.117.162

#### 8. If there domain is already hosted by Hexonet/<user-company>, after placing the order for PremiumDNS, will they need to change any DNS records/settings manually?

If the domain is already using Hexonet nameservers, it is not necessary to make any changes. If the domain is with Hexonet but not using our nameservers, you will need to update the nameservers on the domain.

#### 9. What if their domain is hosted by GoDaddy, and they want PremiumDNS from Hexonet/<user-company>, how would it work? Will they need to change settings at GoDaddy's end? If yes, what are the settings?

 Yes, if the domain is not using Hexonet nameserver, you will need to change the nameservers via GoDaddy's system.

#### 10. What happens when a client buys Premium DNS in WHMCS? + Does the GUI change and disable the Basic DNS?

The following document gives a general idea about upgrading from Basic DNS to Premium DNS - https://wiki.hexonet.net/wiki/Premium_DNS#Upgrade_from_Basic_DNS_to_Premium_DNS

With our module, you will only be able to buy premium DNS if the domain exists in your WHMCS. For example: if you have a `test.com` domain in your WHMCS, then only you will be able to buy `test.com.` premium DNS zone. This is because in WHMCS there is no possibility to provide an option to upgrade from Basic to Premium DNS as our control panel does.
Once you buy premium DNS in WHMCS, you will be able to manage it in the client area. More info can be found on the module's 'Usage guide'.

#### 11. We have a client who has not renewed his Premium DNS subscription. What happens when his Premium DNS subscription expires? Does it stop working automatically, and his email and website stop working too?

Either one of the 2 will happen if the user does not renew the Premium DNS zone.
* If it's an internal zone (domain is with Hexonet), the user's email and website will continue to work as normal (as non-premium DNS zone).
     * There's also a 500k QPM limit for the non-Premium DNS zone. If the user exceeds this, the DNS zone will be suspended.
* If it's an external zone, the domain will stop resolving and so the email and website will not work.

#### 12. The client's Premium DNS module dashboard shows two graphs in WHMCS. One shows errors and other successes. What are the errors?

Errors happen when the DNS lookup returns NXDOMAIN response

#### 13. Downgrading existing Premium DNS zone to Basic DNS

Not supported (@our system and in WHMCS, Premium DNS module). The customer must wait till Premium DNS expires for an automated downgrade to Basic DNS, granted that its an internal DNS zone (zone managed at HEXONET).

#### 14. How to cancel a Premium DNS plan?

It's not possible to cancel a Premium DNS plan(@our system and in WHMCS, Premium DNS module).
Plus -> See Q#13
