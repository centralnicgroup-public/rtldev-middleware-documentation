---
layout: default
title: ~~Pricing Import~~
parent: WHMCS
grand_parent: HEXONET
nav_order: 10
showtoc: 1
---

# ISPAPI Pricing Importer

[![License: MIT]({{site.baseurl}}/assets/images/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> **DEPRECATION NOTICE: As of our Integration of the [`TLD & Pricing Sync`](https://github.com/hexonet/whmcs-ispapi-registrar/wiki/FAQs#55-do-you-support-tld--pricing-sync-mechanism-shipped-with-whmcs-710) Feature available since WHMCS 7.10, this project will no longer be maintained. Download the new version of our Registrar Module [here](https://github.com/hexonet/whmcs-ispapi-registrar/raw/master/whmcs-ispapi-registrar-latest.zip) to benefit of that new Feature.**

This Repository covers the WHMCS Pricing Importer Add-on of HEXONET. It provides the following features in WHMCS:

## Supported Features

* Load TLDs with prices through three possible ways
  * HEXONET costs
  * HEXONET Price Classes
  * Custom CSV file
* Update existing extensions
* Flexible performance of step-wise pricing imports
* Support for different currencies
* Bulk price update by using a factor or a fixed amount
* Edition of prices individually
* Supported fields:
  * TLD
  * Register/Transfer/Renew pricing
  * DNS Management
  * Email Forwarding
  * ID Protection
  * EPP Code
  * Currency

... and MORE!

## Requirements

* WHMCS version 7.0 or higher
* Latest **ISPAPI Registrar Module**. This module can be downloaded [here](https://github.com/hexonet/whmcs-ispapi-registrar/raw/master/whmcs-ispapi-registrar-latest.zip). Our Importer Module does not support the WHMCS built-in HEXONET provider module!
* **HEXONET Live or Test Account** must be configured in the ISPAPI Registrar Module. Account creation is always free:
  * [OT&E (Test System) Account](https://www.hexonet.net/signup-ote)
  * [LIVE (Real World System) Account](https://www.hexonet.net/cart?signup=true)

For the latest WHMCS minimum system requirements, please refer to the WHMCS System Requirements Documentation, [here](https://docs.whmcs.com/System_Requirements).

## Installation / Upgrade

Download the ZIP archive including the latest release version [here](https://github.com/hexonet/whmcs-ispapi-pricingimporter/raw/master/whmcs-ispapi-pricingimporter-latest.zip).

Copy all files from the `install/` subdirectory to your WHMCS installation root directory ($YOUR_WHMCS_ROOT), while keeping the folder structure intact.

e.g.

`install/modules/addons/ispapidpi/ispapidpi.php` => `$YOUR_WHMCS_ROOT/modules/addons/ispapidpi/ispapidpi.php`

Deactivate and activate the module after upgrading to the new version in your WHMCS.

## Setting max_input_vars

The pricing importer module sends a huge POST payload including a lot of field names. This will exceed the default value of `max_input_vars`. Therefore, make sure the value of the variable `max_input_vars` is higher in your php.ini file. We recommend at least 4000 as a value. So, having an entry in php.ini like `max_input_vars = 4000` should help. Dependent, on the PHP release you are running, it might also be necessary to set the following lines in addition:

```bash
suhosin.get.max_vars = 4000
suhosin.post.max_vars = 4000
suhosin.request.max_vars = 4000
```

Alternatively, you can create a `.htaccess` file in the pricing importer module folder, with the appropriate settings contents, e.g.:

```bash
php_value max_input_vars 4000
php_value suhosin.get.max_vars 4000
php_value suhosin.post.max_vars 4000
php_value suhosin.request.max_vars 4000
```

NOTE: For the .htaccess approach, you need to allow overriding in the Apache2 site configuration e.g.

```bash
<Directory /var/www/whmcs/>
   # ... further configs ...
   AllowOverride All
</Directory>
```

... and do not forget about restarting Apache2.

In `case max_input_vars` is set too low, we will display an error message. Nothing will be imported.

## Configuration

### Addon activation

Within the WHMCS Admin area, go to

`Setup > Addon Modules`

![configuration]({{site.baseurl}}/assets/images/whmcs/ispapi-pricingimporter/configuration.png)

Activate the ISPAPI Pricing Importer Addon, fill your admin username and give the module “Full Administrator” Access Control right.

### Addon configuration

Within the WHMCS Admin area, go to

`Addons > ISPAPI Pricing Importer`

**You are now ready to quickly update your pricing list.**

![pricinglistready]({{site.baseurl}}/assets/images/whmcs/ispapi-pricingimporter/pricing_list_ready.png)

## How can I update my prices?

Note: To create your own price class, navigate on Control Panel > Bottom left ""Reseller Controls" > "Reseller Settings" > "Price Plan". Now click on the bottom at top right "New Plan".

In order to load and update your prices, simply follow the next steps:

### Step 1 – Load prices

* Load your own HEXONET costs or a HEXONET price class or upload a CSV file
  * If you choose to upload a CSV file, you can download a sample CSV file.
  * Edit the generated CSV file by adding new TLDs with your new prices.

![step01]({{site.baseurl}}/assets/images/whmcs/ispapi-pricingimporter/step1.png)

In the above screenshot, a price class is selected to load TLDs and prices of it.

### Step 2 – Update prices

The following screenshot shows loaded TLDs and prices from a price class.

![step2]({{site.baseurl}}/assets/images/whmcs/ispapi-pricingimporter/step2.png)

* You can now select TLDs that you wish to upload

![step2-02]({{site.baseurl}}/assets/images/whmcs/ispapi-pricingimporter/step2-02.png)

### Step 3 – Import Prices

![step3]({{site.baseurl}}/assets/images/whmcs/ispapi-pricingimporter/step3.png)

* In this step, actual costs and selling costs of each TLDs are dispalyed.
* You can update the prices in bulk by using a factor or a fixed amount.
  * Or you can edit sale prices individually.
* Additionally, you can select currency with which you would like to sell each TLD.
* Furthermore, you can select domain addons.
* If you wish to change your selection of TLDs, the module allows you to go back to previous steps and make a new selection.

![step3-02]({{site.baseurl}}/assets/images/whmcs/ispapi-pricingimporter/step3-02.png)

![step3-03]({{site.baseurl}}/assets/images/whmcs/ispapi-pricingimporter/step3-03.png)

* Finally, import the updated pricing list. You're now done.

![step3-04]({{site.baseurl}}/assets/images/whmcs/ispapi-pricingimporter/step3-04.png)

## Process Flow Diagram

![Process Flow Diagram]({{site.baseurl}}/assets/images/whmcs/ispapi-pricingimporter/processflow.png)
