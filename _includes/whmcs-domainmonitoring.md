
# CNIC Domain Monitoring Addon

This addon enhances your WHMCS experience by facilitating domain management through both HEXONET (ISPAPI) and CentralNic Reseller (CNR) APIs.

## What Does This Addon Do?

This addon ensures seamless operation between your WHMCS system and domain services. It primarily focuses on:

1. **Managing Premium Renewal and Transfer Costs**:
   If you're using WHMCS version 7.8 or earlier, this addon is essential.

2. **Proactively Handling Premium Status Changes**:
   If a domain's status changes from standard to premium and it fails to renew or transfer, this addon creates a to-do item in WHMCS. You can then use our monitoring addon to review the new price and update the status, providing a better experience for resellers.

**Instructions for Accurate Billing:**

![Domain Registrations]({{ 'assets/images/whmcs/cnic-domainmonitoring/domain-reg-1.png' | relative_url }})

To ensure accurate billing, follow these steps: Navigate to Domain Registrations > mydomain.com. Set "Recalculate on Save" to "Yes", then click "Save" to apply the changes and recalculate the prices. If needed, cancel and refund the original Invoice & Order. Finally, initiate the renewal/transfer again via Client Area.

![Recalculate Pricing On Save]({{ 'assets/images/whmcs/cnic-domainmonitoring/domain-reg-2.png' | relative_url }})

Additionally, be aware that the domain may have either been upgraded to premium status and/or the renewal/transfer pricing may have been adjusted. It's essential to carefully review and update the billing to maintain accurate records and prevent any discrepancies between your reseller cost and the customer's initial payment. If a discrepancy occurs, you may need to cover the difference instead of the customer.

These features work together to simplify domain management.

If you think something is missing or have suggestions, let us know and we'll work on it.

## Requirements

To use this addon effectively, make sure you have:

* JavaScript enabled in your browser.
* WHMCS version 7.0 or higher.
* The latest **ISPAPI Registrar Module** or **CNR Registrar Module**. You can download them [here](https://github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/raw/main/whmcs-cnic-bundle.zip). Note: This addon doesn't work with the built-in HEXONET and CentralNic Reseller provider module!

You'll also need live or test accounts for:

* [HEXONET OT&E (Test System) Account](https://www.hexonet.net/signup-ote)
* [HEXONET LIVE (Real World System) Account](https://www.hexonet.net/cart?signup=true)
* [CNR OT&E (Test System) Account](https://account-ote.centralnicreseller.com/)
* [CNR LIVE (Real World System) Account](https://www.centralnicreseller.com/en/sign-up)

For the latest WHMCS system requirements, check the [WHMCS System Requirements Documentation](https://docs.whmcs.com/System_Requirements).

## Installation / Upgrade

To install or upgrade, follow these steps:

1. Download the latest version [here](https://github.com/centralnicgroup-opensource/rtldev-middleware-whmcs/raw/main/whmcs-cnic-bundle.zip).
2. Unzip the file and locate the folder named `cnicdomainmonitoring` within the `/modules/addons/` directory. Then, move this folder into the `/modules/addons/` folder in your WHMCS installation.

After unzipping, follow these steps to activate the CNIC Domain Monitoring addon:

1. Navigate to `System Settings` in your WHMCS dashboard.
2. Click on `Addon Modules`.
3. Find `CNIC Domain Monitoring` and activate it.
4. Proceed to configure it. Ensure to grant the addon `Full Administrator` Access Control rights.

## How to Use

**When Everything's Fine:**

![All Fine]({{ 'assets/images/whmcs/cnic-domainmonitoring/no-issues.png' | relative_url }})

**In Case of Issues:**

You'll see a list of cases with a step-by-step guide to help you fix them.

![To-do Item]({{ 'assets/images/whmcs/cnic-domainmonitoring/to-do.png' | relative_url }})
![Domain with Issues]({{ 'assets/images/whmcs/cnic-domainmonitoring/issues.png' | relative_url }})

**More Information:**

Click on `Fix Now` button to get more information and fix the issue.

![Issue 1]({{ 'assets/images/whmcs/cnic-domainmonitoring/issue1.png' | relative_url }})
![Issue 2]({{ 'assets/images/whmcs/cnic-domainmonitoring/issue2.png' | relative_url }})