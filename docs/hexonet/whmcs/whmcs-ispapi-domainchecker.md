---
layout: default
title: Domain Search
parent: WHMCS
grand_parent: HEXONET
nav_order: 3
showtoc: 1
---

# ISPAPI Domain Search

This Documentation covers the "ISPAPI" Domain Search Add-On for WHMCS.

## Introduction

The ISPAPI DomainChecker Addon module provides your customer with a new simple and user-friendly interface to check the availability of domains.

With our module, you will be able to support **Premium Domains** (Aftermarket and Registry Premium Domains) in just one click.

A **domain name suggestion engine** has been integrated into the module to provide suggestions to the search.
The module connects to the configured ISPAPI registrar module to provide **high-speed API availability checks**. This module is also able to connect to our ISPAPI Backorder module (if installed) to display backorders in the search results.

For better performance, the module uses an Ajax-driven search and the search can be filtered by categories, available domain names and premium domain names. The search can also be triggered directly by the URL, which is particularly useful when you want to create landing pages.

![intro]({{ 'assets/images/whmcs/ispapi-domainchecker/hx_search_800px_lossy.gif' | relative_url }})

## Supported Features

The ISPAPI DomainChecker addon supports the following functions and features:

* **NEW** Support WHMCS' TLD Group Labels `hot`, `new` and `sale`
* **NEW** Supports several filters
* **NEW** Administrative Interface now allows managing of categories by drag'n'drop and provides access to all useful configurations
* **UPDATE** Search trigger over URL (helpful for landing pages, [Details](#search-by-get-request))
* High-performance Domain Availability Checks using our registrar API
* Support of Premium Domains (Aftermarket and Registry Premium Domains)
* Domain Name Suggestion Engine integrated
* Categorization of the TLDs for an improved user experience
  * **NEW** WHMCS' default categories can be imported
  * Search results based on the category selection
* Backorder button in the search results (when having also our [whmcs backorder module]({{ 'docs/hexonet/whmcs/whmcs-ispapi-backorder' | relative_url }}) installed)
  * Add or Remove backorders instantly in the search results
* WHOIS information for taken domains
* Featuring each domain with availability and type of premium domain name
* Featuring prices of domains
  * Registration and renewal prices
  * Premium domains with markup prices
* Add or Remove domains to the cart instantly in the search results
* Supports multiple currencies
* **UPDATE** Language Support for: Arabic, English, German, Portuguese. (If any other language is required, let us know)
* Ajax driven search (no page reload)
* Easy to install and use

... and MORE!

## Requirements

In order to run the ISPAPI DomainChecker Add-On, your WHMCS installation must meet the following requirements:

* **WHMCS version 7.2.0** or higher must be installed. (We recommend always using the latest version of WHMCS)
* **ISPAPI Registrar Module** This module can be downloaded [here](//github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/raw/main/whmcs-cnic-bundle.zip). Our Domain Search Addon does not support the WHMCS built-in HEXONET provider module!
* **HEXONET Live or Test Account** must be configured in the ISPAPI Registrar Module. Account creation is always free:
  * [OT&E (Test System) Account](//www.hexonet.net/signup-ote)
  * [LIVE (Real World System) Account](//www.hexonet.net/cart?signup=true)
* having URL Rewrite enabled in the web server and one of the url rewrite solutions applied (see section 3 e)
* **ISPAPI Domainchecker Add-On**: downloadable [here](//github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/raw/main/whmcs-cnic-bundle.zip).

| Domainchecker version | ISPAPI Registrar Module version | WHMCS version |
|-----------------------|---------------------------------|---------------|
| >= 12.0.0             | >= 3.0.0                        | >= 7.8.x      |
| >= 11.0.0             | >= 1.8.1                        | >= 7.8.x      |
| >= 10.0.0             | >= 1.8.1                        | >= 7.2.x      |
| >= 9.0.0 < 10.0.0     | >= 1.7.1                        |               |
| >= 8.3.0 < 9.0.0      | >= 1.0.53                       |               |

Compatibility with older WHMCS versions - is a matter of trial and error.
We started gathering this information starting with v10.0.0 of the domainchecker addon.

## Installation / Upgrade

**For a new installation**, unzip the downloaded file and upload the content of the “install” folder to your WHMCS root directory.  

### Upgrading

{% include whmcs-bundle-upgrade.md %}

**NOTE**: The WHMCS root directory is the folder which contains the “configuration.php” file.

## Configuration

### Addon Activation

- **For users with WHMCS version 8.0+**, Navigate to `WHMCS Admin Area` > `System Settings` > `Addon Modules`

- **For users with WHMCS version 7.3+**, In the WHMCS Admin area, go to `Setup` > `Addon Modules`

![configuration]({{ 'assets/images/whmcs/ispapi-domainchecker/configuration.png' | relative_url }})

Activate the ISPAPI DomainChecker Addon, give the module “Full Administrator” Access Control right.

### Regular Domain Pricing

Under `Setup > Products/Services > Domain Pricing`, you will be able to configure and select the registrar for all the TLDs you want to sell.

Be aware that high-performance domain availability checks using our registrar API will only be provided with the “Ispapi” registrar. Just in case we do not support a certain TLD, we fallback to the WHMCS' WHOIS Lookup.

Use the `Registrar TLD Sync` Feature to import our TLDs and Prices which is available since WHMCS v7.10.

![domainpricing]({{ 'assets/images/whmcs/ispapi-domainchecker/regular_domain_pricing.png' | relative_url }})

### Manage your Settings

In order to apply your default configuration settings that will be the initial settings for your clients, go to `Addons > ISPAPI HP DomainChecker`.

This means that the client can of course temporarily change some of the settings again in the client area.

Here you configure:

* the TLD categories that are active by default
* the visibility of taken domain names
* the visibility of premium domain names and the markup you want to apply
* the lookup provider
* switch the domainchecker mode (regular mode and domain name suggestions mode)

The module provides domain search results based on two different modes

1. **Regular**: regular search with the configured TLDs (default)
2. **Suggestions**: domain name suggestions provided by our API

![settings-overview]({{ 'assets/images/whmcs/ispapi-domainchecker/aa.png' | relative_url }})

### Manage your Categories

In order to configure your Categories, go to `Addons > ISPAPI HP DomainChecker`
**For new installations**, click on “Import Default Categories“ button.

**For updates**, your previous configuration should be working. Still, you can import the default categories by clicking the “Import Default Categories” button. (Your current configuration will be overwritten!)

This Import use the prices configured in the "Domain Pricing" page as base and considers the categories defined by WHMCS and also the configured order of the domain extensions. If you did not know about it: You can drag'n'drop the rows of the "Domain Pricing" page. Remember to configure each currency accordingly.
Also note that IDN extensions have to be configured there in IDN format, not in punycode.

If you want to customize the WHMCS default categories, read [this](//docs.whmcs.com/Domain_Categories).

![backend-overview]({{ 'assets/images/whmcs/ispapi-domainchecker/aa_categories_800px_lossy.gif' | relative_url }})

In that overview you can:

* reorder a TLD by drag'n'drop
* move a TLD from one category to another one by drag'n'drop
* add a new category
* delete a category
* see TLDs that are not assigned to a category

#### Translations

Translate your TLD Categories by:

* Add the respective language file under `/lang/overrides`. Well described [here](//developers.whmcs.com/languages/overrides/).
* Add your translation per Category

e.g. for file `/lang/overrides/german.php`

```php
$_LANG['domainTldCategory']['Popular'] = "Beliebt";
$_LANG['domainTldCategory']['Arts and Entertainment'] = "Kunst und Unterhaltung";
```

### Redirect the WHMCS Search

For getting the native WHMCS Domain Search replaced with our Module, there are two solutions available, please select one. For both of them, ensure your web server has url rewrite enabled (-> Apache: mod_rewrite).

```bash
#cd /etc/apache2/sites-available/
> a2enmod rewrite
# Enabling module rewrite. To activate, run now:
> service apache2 restart
```

NOTE: With Apache 2.4 things have changed. Please check [the Apache2 Upgrade Guide](//httpd.apache.org/docs/current/upgrading.html) for differences between 2.2 and 2.4++ configurations and how to review / clean them up.

#### By Apache Configuration

To redirect the WHMCS domainchecker.php to mydomainchecker.php, add the following Apache configuration into your `<VirtualHost>` section:  

```apache
RewriteEngine on 
RewriteRule /domainchecker.php /mydomainchecker.php
```

#### By .htaccess File

This solution should work in any web server, be it apache or nginx.
Create an “.htaccess” file in your WHMCS installation root directory with the following content:

```apache
RewriteEngine on 
RewriteRule ^domainchecker.php$ mydomainchecker.php
```

Note: Make sure your web server is configured to consider .htaccess files. Hint for Apache: "AllowOverride FileInfo". In the past we pointed on "AllowOverride All", but that is said to come with security issues.

### Enable WHMCS Module Log

We recommend enabling the Module Log. The module will log all important API commands sent. In case of issues, HEXONET will be able to analyze the case.

Go to `Utilities > Logs > Module Log` and click the ”Enable Debug Logging” button.

## Test your installation

Go to your homepage, fill the search field with a domain and click the “Go” button. If the result looks like the following screen-shot, your installation is a success and you are now ready to start selling domains with your new ISPAPI DomainChecker Addon.

![testinstallation]({{ 'assets/images/whmcs/ispapi-domainchecker/ca_800px_lossy.gif' | relative_url }})

## Search by GET Request

In some cases, you may want to trigger a search over URL / GET Request. Our module supports exactly that. This is useful in case you decided to create a landing page for a special TLD or if you want to integrate your WHMCS-based Domain Search in another Web Page or Portal.

**Example:**

URL: `www.yoursite.com/domainchecker.php?search=test.com&cat=5`
This call will start a search of “test.com” and only display the TLDs configured in the category with ID=5.

You can also provide a list of categories by:
URL: `www.yoursite.com/domainchecker.php?search=test.com&cat=5,6,7,8`

### GET Parameters

| Parameter   | Values    | Description                                 | Mode                    |
|-------------|-----------|---------------------------------------------|-------------------------|
| search      | any       | provide your search string                  | All Modes               |
| cat         | any       | category id or multiple ones coma separated | All Modes               |
| ip          | 0 or 1    | Consider your ip address                    | Domain Name Suggestions |
| lang        | ISO 639-1 | two character language codes, lowercase     | Domain Name Suggestions |
| showtaken   | 0 or 1    | visibility of taken domain names            | All Modes               |
| showpremium | 0 or 1    | visibility of premium domains names         | All Modes               |
