---
layout: default
title: WHMCS - Domain Search
parent: FAQs
grand_parent: HEXONET
nav_order: 2
showtoc: 1
---

# FAQs

### 1. I would like to use WHMCS whois service to check if a domain is premium or not. How I can use this service?

It is not possible to get the information whether a domain is a premium or not via the WHOIS servers. Only a domainchecker connected to a registrar API is able to know if a domain is a premium or not.
We are providing a High-Performance Domainchecker module that would do exactly what you need and much faster than the WHOIS. You can download it from the WHMCS Marketplace [here](https://marketplace.whmcs.com/product/1654)

### 2. Why are there search filters (`Available Only`, `No Premium`) on frontend-side that allow to change their configured settings on backend-side?

Well, our main target is to make the domain search as flexible as possible. We provided that filter on backend-side so that the reseller can apply defaults for the initial search. His customers can of course again decide if they want to change this **temporarily** or not. With that approach and flexibility we want to improve domain selling of our resellers.

### 3. The order of the availability check results does not follow my expectations!

You can re-order your TLDs in the built-in `Domain Pricing` section in your WHMCS backend. One of the icons allows for drag'n'drop. The order that you can apply by drag'n'drop in the `Categories` tab of our Domainchecker Addon doesn't influence the result order.

UPDATE: Since v11.2.0 of our domainchecker the TLDs in the categories are auto-sorted by their priority in `Domain Pricing` section. This is also directly considered for drag'n'drop. Simply drag your desired TLD over the desired category and release the mouse button. It will be placed automatically to its calculated place which as said depends on the priority configured in the `Domain Pricing` section.

### 4. I have the domain name suggestions activated. Why I am getting so many .com / .net results

In our suggestion engine (our API) .com and .net have by default a high weight. If you want to get other results, we suggest to create a custom category with the TLDs you want to see (without .com/.net). Mark that category as active by default and any other category as inactive. This can be done by using the domainchecker addon backend. In addition the client can use two further settings to influence the results: `Use my IP Address` and `Use language`. These can be accessed over the Settings icon located in the search label input field.

In the lookup provider settings and on client-side of our addon, we also provide a setting for suppressing .com / .net as workaround.

### 5. How to use this module together with the Module "Geolocation Hook for WHMCS"

This is a module developed by ModulesGarden that is using a Geo-IP-DB for visitor localization to automatically switch the active currency to the configured/matching one for that region even though another currency is configured as default currency in WHMCS.
The only thing you need to care about is to add the domainchecker.php and/or mydomainchecker.php to the allowed scripts configuration.
Read [here](https://www.docs.modulesgarden.com/Geolocation_Hook_For_WHMCS), section `Configuration`, Head Line `5. Selecting Pages`.

### 6. Your availability Check is slow!

We can ensure it is not! There are several things you can review in your WHMCS Instance where we know such issues have their origin in:

a) Deinstall / Disable all Add-Ons in WHMCS you really don't need! Your general page load / response increases with each installed addon.
b) Network / Firewall issue - check how long it takes to ping "api.ispapi.net". One known customer issue related to hardware firewall appliances and Linux (e.g CentOs/CloudLinux):

_single-request (since glibc 2.10)_

Sets RES_SNGLKUP in _res.options.  By default, glibc performs IPv4 and IPv6 lookups in parallel since version 2.9.  Some appliance DNS servers cannot handle these queries properly and make the requests time out. This option disables the behavior and makes glibc perform the IPv6 and IPv4 requests sequentially (at the cost of some slowdown of the resolving process).

_Solution_

Add this to the /etc/resolv.conf file:

`options single-request`

c) If you have a lot currencies defined - this might be a historical reason related to our Pricing Importer Add-On, check if you can remove some of them. Hint: WHMCS >= 7.10 comes with a new feature, the so-called ["Registrar TLD Sync"](https://docs.whmcs.com/Registrar_TLD_Sync). Check our documentation [here]({{ 'docs/hexonet/whmcs/whmcs-ispapi-registrar/#importing-prices' | relative_url }}) and the linked FAQ Entries.

Page load shouldn't take longer than 1s average. The most pages are even faster: about 500 to 800 ms. Give the guide ["Maximising_Performance"](https://docs.whmcs.com/Maximising_Performance) a detailed read. Used Hard- and Software is definitely affecting performance. MySQL vs. Maria DB, Apache vs. Nginx.

d) Check the High-Performance Proxy Setup Feature of our ISPAPI Registrar Module, in case you're using Apache as Webserver. This can lead to a huge improvement for HTTP Communication. Find it in the registrar module settings. Ensure to read the there linked documentation before activating the setting.