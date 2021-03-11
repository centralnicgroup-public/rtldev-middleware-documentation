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
We are providing a High-Performance Domainchecker module that would do exactly what you need and much faster than the WHOIS. You can download it from the WHMCS Marketplace: https://marketplace.whmcs.com/product/1654

### 2. Why are there search filters (`Available Only`, `No Premium`) on frontend-side that allow to change their configured settings on backend-side?

Well, our main target is to make the domain search as flexible as possible. We provided that filter on backend-side so that the reseller can apply defaults for the initial search. His customers can of course again decide if they want to change this **temporarily** or not. With that approach and flexibility we want to improve domain selling of our resellers.

### 3. The order of the availability check results does not follow my expectations!

You can re-order your TLDs in the built-in `Domain Pricing` section in your WHMCS backend. One of the icons allows for drag'n'drop. The order that you can apply by drag'n'drop in the `Categories` tab of our Domainchecker Addon doesn't influence the result order.

UPDATE: Since v11.2.0 of our domainchecker the TLDs in the categories are auto-sorted by their priority in `Domain Pricing` section. This is also directly considered for drag'n'drop. Simply drag your desired TLD over the desired category and release the mouse button. It will be placed automatically to its calculated place which as said depends on the priority configured in the `Domain Pricing` section.

### 4. I have the domain name suggestions activated. Why I am getting so many .com / .net results

In our suggestion engine (our API) .com and .net have by default a high weight. If you want to get other results, we suggest to create a custom category with the TLDs you want to see (without .com/.net). Mark that category as active by default and any other category as inactive. This can be done by using the domainchecker addon backend. In addition the client can use two further settings to influence the results: `Use my IP Address` and `Use language`. These can be accessed over the Settings icon located in the search label input field.

### 5. Some Icons and Texts are not displayed on frontend-side - is that a bug?

Please verify that you have the Six template in use (or at least one that is 100% compatible with it). Our modules are 100% compatible with the default WHMCS templates. This might be an issue of your template that you need to review.

### 6. How to use this module together with the Module "Geolocation Hook for WHMCS"

This is a module developed by ModulesGarden that is using a Geo-IP-DB for visitor localization to automatically switch the active currency to the configured/matching one for that region even though another currency is configured as default currency in WHMCS.
The only thing you need to care about is to add the domainchecker.php and/or mydomainchecker.php to the allowed scripts configuration.
Read [here](https://www.docs.modulesgarden.com/Geolocation_Hook_For_WHMCS), section `Configuration`, Head Line `5. Selecting Pages`.

### 7. Your availability Check is slow!

We can ensure it is not! There are several things you can review in your WHMCS Instance where we know such issues have their origin in:
a) Deinstall / Disable all Add-Ons in WHMCS you really don't need! Your general page load / response increases with each installed addon.
b) Network / Firewall issue - check how long it takes to ping "api.ispapi.net". One known customer issue related to hardware firewall appliances and Linux (e.g CentOs/CloudLinux):

_single-request (since glibc 2.10)_

Sets RES_SNGLKUP in _res.options.  By default, glibc performs IPv4 and IPv6 lookups in parallel since version 2.9.  Some appliance DNS servers cannot handle these queries properly and make the requests time out. This option disables the behavior and makes glibc perform the IPv6 and IPv4 requests sequentially (at the cost of some slowdown of the resolving process).

_Solution_

Add this to the /etc/resolv.conf file:

`options single-request`

c) If you have a lot currencies defined - this might be a historical reason related to our Pricing Importer Add-On, check if you can remove some of them. Hint: WHMCS >= 7.10 comes with a new feature, the so-called ["Registrar TLD Sync"](https://docs.whmcs.com/Registrar_TLD_Sync). Check our documentation [here](https://github.com/hexonet/whmcs-ispapi-registrar/wiki/Start-selling-domains-with-HEXONET-&-WHMCS#importing-prices) and the linked FAQ Entries.

Page load shouldn't take longer than 1s average. The most pages are even faster: about 500 to 800 ms. Give the guide ["Maximising_Performance"](https://docs.whmcs.com/Maximising_Performance) a detailed read. Used Hard- and Software is definitely affecting performance. MySQL vs. Maria DB, Apache vs. Nginx.

### 8. Why is Premium Renewal Cost Price shown as 0.00

This had been a bug in WHMCS Core until they fixed it around v7.8. You can fix it by inserting "registrarRenewalCostPrice" for your domain name into table tbldomain_extra with the cost you would have to pay at HEXONET. You can find it out in our [Control Panel](https://account.hexonet.net) by navigating to "API Access" which is listed on your Dashboard. There just paste the below command for your domain name and execute it:

```
COMMAND = QueryDomainList
VERSION = 2
DOMAIN = awesome.build
PROPERTIES = price
NOTOTAL = 1
```

This will return the below - column RENEWALGROSSPRICE covers what you need. As we provide the registrar premium prices to WHMCS' order process in the currency set in your API account, you don't have to worry about a recalculating it at this point. Just use the price returned.

```
{
    "PROPERTY": {
        "VAT": [
            "19.00"
        ],
        "RENEWALGROSSPRICE": [
            "1955.25"
        ],
        "RENEWALPRICE": [
            "1643.07"
        ],
        "CURRENCY": [
            "EUR"
        ],
        "SUBCLASS": [
            "PREMIUM_BUILD_B"
        ],
        "REPOSITORY": [
            "ARI-OTE-1API1"
        ],
        "FIRST": [
            "0"
        ],
        "OBJECTID": [
            "awesome.build"
        ],
        "DESCRIPTION": [
            "awesome.build"
        ],
        "COUNT": [
            "1"
        ],
        "LAST": [
            "0"
        ],
        "OBJECTCLASS": [
            "DOMAIN"
        ],
        "LIMIT": [
            "10000"
        ]
    },
    "DESCRIPTION": "Command completed successfully",
    "CODE": "200",
    "QUEUETIME": "0",
    "RUNTIME": "0.014"
}
```

We will check if we can provide you some tooling for this, but until now - please use this approach. If you need further assistance to this, just ask, we are always open to help.

Related WHMCS Bugs: v7.8 #CORE-12479, #CORE-13117
