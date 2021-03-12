---
layout: default
title: Migration Tool
parent: WHMCS
grand_parent: All Brands
nav_order: 1
showtoc: 1
---

# Migration Tool

WHMCS-based automatic Domain Migration and Consolidation Tool.
We cover the development over a private github repository and the download is therefore not (yet) available in public.
Get in touch with us, if you are interested in this Tool to get your Domain Portfolio migrated over.

## Changelog

* [TLDList](#configure-list-of-tlds-to-migrate) @ 13th October 2020
* [renewIfExpired](#configure-renew-if-expired) @ 13th October 2020
* [templates](#configure-mail-out-and-email-templates) @ 23rd October 2020
* [adminMail](#configure-mail-out-and-email-templates) @ 21th October 2020
* [sendMails](#configure-de-activate-mail-out) @ 27th October 2020
* [logCustom](#custom-Log) @ 11th November 2020
* [Blacklisting for TLDList](#configure-list-of-tlds-to-migrate) @ 12th January 2021

NOTE: we changed the client email template's name to start with `MIGRATION_FIXED_` as the initial module version had been buggy in regards to client mail-out.

## Introduction

This tool is made for migrations at point of domain renewal to minimize costs and for optional customer communication within the migration process to avoid transfer rejections. Here a high-level process flow diagram on how it works:

![processflow]({{site.baseurl}}/assets/images/whmcs/migration/processflow.png)

## Some Impressions

Error output in Domain Details in Admin Area:

![adminareaerror]({{site.baseurl}}/assets/images/whmcs/migration/domain_renewal_message.png)

Entries in the System Activity log:

![activitylog]({{site.baseurl}}/assets/images/whmcs/migration/activity_log.png)

## How does it exactly work

It cancels the domain renewal and instead initiates the Migration / Transfer. Still, the domain renewal order itself is left in WHMCS and is used for invoicing the transfer. **Only Domains in Status `Active`, `Expired` and `Grace Period (Expired)` are considered by the migration tool.** For all other cases the renewal will be processed. You can  [configure](#configure-renew-if-expired) if you want to migrate or to renew domains with status `Expired` and `Grace Period (Expired)`.

Our Migration Tool will load the EPP / Authorization Code from db table `mig_domains` with fallback to the losing registrar's module. Lookup from DB Table is useful in case a losing registrar doesn't provide it in real time over `GetEPPCode` method e.g. Enom. So, for such registrars ensure that this table exists and is prefilled with EPP Codes accordingly, see [this section](#configure-epp-authorization-codes).
Last step is to initiate the transfer using the gaining registrar's module.
In addition this tool can care about informing your clients by mail about the process, see below. If a domain is locked, it will be unlocked for the transfer process automatically.

## Features

* Using default WHMCS logging mechanisms
* Fully customizable logging mechanism (e.g. Snapchat, IRC or anything else)
* Customizable Email Notifications to your WHMCS Administrators (or custom email address) about the migration process
* Migrate from different registrars to one or multiple registrar brands of the CentralNic Group PLC (HEXONET, RRPproxy, TPP Wholesale, internet.bs) in parallel
* Migrate all TLDs or just a subset of TLDs per losing registrar
* Saving costs: Migrate at the point of domain renewal and instead of the domain renewal
* Fully automated, you just need to spent time on installation, configuration and checking logs
* Fully customizable Customer Notification over Email - language and tld-specific Email-Templates supported!
* Configurable Option: Renew expired domains at the current registrar instead of migrating them
* Customizable error / success messages

Ideas that may get added:

* A graphical user interface for the configuration. This might come in future, overhead right now as of our work load.
* Overview of Domains where initiating the Transfer failed (risk to expire) - This can be done by selecting all domains in `tbldomains` with `additionalnotes` set to `INIT_TRANSFER_FAIL`. Details on that error can be found in domain details in admin area (see below on how to interpret the error message), in the Module Logs or even in Activity Log or in your Custom Log - if configured.

## Known Problems

Find here some cases brought up to our hands that are known to be not working, but are out of our hands as being an issue of WHMCS Core or the underlying losing registrar's module:

* `ERR4: Request is not available; DOMAIN TRANSFER IS PROHIBITED BY WRONG AUTH`. Looks like there's an issue when dealing with Authorization/EPP Codes that contain special characters like < > & \` \#. Our modules have been checked and we ensure we submit all EPP Codes correctly. This issue has to be seen somewhere in WHMCS Core or in the losing registrar's module. Nothing we can do on our end to get this fixed. Workaround: Add such epp codes to the DB as described [here](#configure-epp-authorization-codes) or change such codes at the losing registrar in advance. Reported for the following modules: resellerclubcrm, opensrs.
* Some domains require additional domain fields to get the transfer process initiated. This is not yet covered. This might affect the following TLDs: .ca, .cat, .pt. If you need such domains also to be migrated in bulk, let us know.
* Some TLDs like .es, .qa, .ae etc. can be migrated for free at any point of time as they support a 0Y transfer period. Right now, the migration tool covers the migration always at the point of the domain renewal. We have to find better possibilities for exactly these TLDs.
* **resellerclubcrm** module ending in an PHP Error - backtrace is pointing to language files.
  Even though this got escalated to the Module Devs, they just provided a workaround and not a new release. So fyi:
  Edit the file /home/pjs32/public_html/modules/addons/resellerclubmods_core/modlang/English_admin_lcdrm.php and insert above the line 25 the below code:

    ```php
    $_ADMINLANG = array();
    ```

  Such manual changes will be lost when upgrading your resellerclub core parts.  

## Migration Best Practices

Customer Communication in advance is the key and better than using our migration tool client mail-out functionality. Get in touch with your clients directly and inform them about the provider change. Our tool would inform them where the migration happens - at the expiration date of the domain name. This doesn't leave you much time for communication and fixing transfer issues - That's the reason why we suggest to inform your customers earlier. The losing registrar will send an email per domain transfer to your customer allowing to accept or reject it. Important is that your customers are informed so that the risk of rejected transfers are minimized.

Automatic unlocking of domain names right before initiating the migration / transfer doesn't work for some registrars. Find known cases documented [here](#known-problems). We suggest to unlock domains then manually if this issue case applies to your situation.

A good idea might be to configure the due date for renewals to give a customer enough time for paying the renewal invoice. Our tool will only be invoked at expiration date in case the invoice is (marked as) paid. That's basically how WHMCS Core behaves - a Renewal will just be forwarded to the underlying registrar if paid. We intercept at that point and reject the renewal in favour of a migration/transfer in case your custom configuration of our migration tool identifies the appropriate domain name / TLD as a migration case.

Best case would be to have a development / QA system that is connected to the OT&E environment of the losing registrar and the gaining registrar to test how our tool works. This allows you to identify in advance upcoming issue or in general topics that might need your attention. Still, you can skip that part if not available on your side or one of the registrars does not offer an OT&E environment.

Premium Domains: As of a bug WHMCS solved with v7.8, any premium domain registered before v7.8 has incomplete data in the database and therefore a renewal won't be working. This also applies when trying to transfer. Please get in touch with us.

## Preparations

**Don't touch files where the filename starts with `dist.*`. That are default files and templates, partially used as fallback or within automated tests. Follow the below instructions to get this tool correctly up and running.**

### Re-Configure WHMCS

Re-Configure WHMCS in direction of the gaining registrar:

* ensure the gaining registrar's registrar module is installed, activated, configured and working!
* ensure the Configuration in Domain Pricing Section is already re-configured in direction of the gaining registrar. Ensure ALL TLDs that are assigned to the losing registrar and [whitelisted for migration](#configure-list-of-tlds-to-migrate) are reassigned to the gaining registrar!

### Installation / Upgrade

Copy the file `hooks.php` and the folder `migration` into **one** of your **active** registrar modules' folder. In case a `hooks.php` exists there already, just rename our file to `hooks_migration.php` and load it in the `hooks.php` by include statement:

```php
$path = implode(DIRECTORY_SEPARATOR, [__DIR__, "hooks_migration.php"]);
if (file_exists($path)) {
    include $path;
}
```

FYI: HEXONET's ISPAPI registrar module will load an existing file `hooks_migration.php` automatically in its `hooks.php`. No need to add an include statement there.

### Your configuration file

By default we ship a default configuration template through file `migration/dist.configuration.json`.

If you're not yet having a configuration file, save a copy of that file as `migration/configuration.json` and continue with the configuration steps below.

When Upgrading, check if there are new configuration settings in file `migration/dist.configuration.json` that you have not yet in use and follow the configuration steps below. Also check if some configuration settings are no longer part of the default configuration template or have obviously changed. Review your own configuration file then accordingly.

Open your configuration file `migration/configuration.json` and apply your custom settings - find explanations below.

## Logging

### System Activity Log

Logging to WHMCS' System Activity Log is by default activated. You can turn it off by setting `logActivity` to `false`.

```json
{
    "logActivity": true
}
```

### Your WHMCS System ID

If you're having multiple WHMCS Instances running in parallel (QA, Production, Dev, ...), it might be of interest to know which one sent out a specific message. Therefore we introduced the configuration setting `whmcsSystemId`.

This setting is of interest when using `logCustom` to log messages into a 3rd-party software - like Slack, IRC or anything else - to identify the appropriate WHMCS Instance e.g.

```json
{
    "whmcsSystemId": "PRD",
}
```

This can be any custom identifier.

### Custom Log

You can provide a function name as string in setting `logCustom`. We are invoking that function when logging.
In that function, you have full access to the configuration object and the message.

```json
{
    "logCustom": "myCustomLogFn"
}
```

Just ensure that this method is available at runtime. You can do that by including it in the `migration/functions.php` as we will automatically include that file if present.
This is a great base and allows to customize the logging mechanism as necessary for you. NOTE: this file is not part of our archive, you to create it manually first.
Do not apply changes to `migration/dist.functions.php` as this file will be overwritten by future upgrades!

How should a custom log function look like? Check this function blue print:

```php
/**
 * My custom log function
 * @param array $cfg Configuration Object (your configuration file)
 * @param String $message Message to Log
 * @param array [$data] Additional Data (domain and process data) NEW!!!
 */
function myCustomLogFn($cfg, $message, $data = null)
{
    // your implementation here
}
```

## Your Reseller Data

Customize this configuration section with your correct data.

```json
{
    "reseller": {
        "id": "thereseller.com",
        "contact": {
            "url": "https://www.thereseller.com",
            "email": "support@thereseller.com"
        }
    }
}
```

These are forwarded to the Customer Notification Email Templates to make them as flexible as possible.

## Error Messages

### Transfer not initiated

Whenever our Migration Tool is running into an error, it still aborts the renewal. Still the transfer is then not initiated as of the error occurred. This will be shown to your clients when it comes to the Domain Synchronization Mail.

The below configuration allows you to configure a basic error message to use:

```json
{
    "defaultErrorMsg": "Domain Migration to the new subcontractor open. Don't renew the domain.",
}
```

The migration tool will append an error identifier to make it more transparent which kind of error might have happened. e.g. `Domain Migration to the new subcontractor. Don't renew the domain.[ERR0]`.

* `[ERR0:...some reason...]`: Configuration file `migration/configuration.json` couldn't be loaded (missing or invalid json). Further Details provided.
* `[ERR1]`: Domain Data couldn't be loaded over WHMCS - should never happen
* `[ERR2:...some reason...]`: Getting the EPP/Authorization code of the domain did not work. Further Details provided.
* `[ERR3]`: Loading the gaining registrar's registrar module failed or the module is not activated or not integrating the `TransferDomain` method
* `[ERR4:...some reason...]`: Initiating the Transfer failed. Further Details provided.
* `[ERR5]`: Initiating the Transfer succeeded.

### Transfer initiated

Whenever our Migration Tool was able to initiate a Transfer in direction of the gaining Registrar, it will still abort the Renewal as this is the idea behind the migration approach. The below allows you to customize the message used to cancel the Renewal in WHMCS and to display in Domain Synchronization Report.

```json
{
    "defaultSuccessMsg": "Domain Migration to the new subcontractor initiated. Don't renew the domain.",
}
```

Even though we are talking about a success message here, it will still be displayed as an Error Result by WHMCS. We can't change this.

## Mail-out and Templates

### (De-)Activate Mail-out

This migration tool also takes care about sending emails to your clients explaining them what is going on to avoid domain transfer rejections as far as possible.
This is by default turned off to leave you the possibility to reach out to your customers using a different way.
Still, you can turn that on to let this migration tool do that work. This can be done by setting `sendMails` property `client` to `true`.

```json
{
    "sendMails": {
        "admin": true,
        "client": false
    }
}
```

By default this tool is also sending mails to you, the reseller, to allow a bit of monitoring. This can also be turned off over `sendMails` `admin` setting.
If you want to turn both parts off, reconfigure `sendMails` like this or leave it completely out:

```json
{
    "sendMails": false
}
```

The below allows for specifying an email address explicitely as recipient address for admin mail-out. This is not supported for the client part.
In case an email address is configured, php mail function will be used instead of WHMCS' localAPI command SendAdminMail for admin mail-out.

```json
{
    "sendMails": {
        "admin": "support@mydomain.dom",
        "client": false
    }
}
```

### Prepare Email Templates

Add customized messages to the `migration/templates` folder by creating a copy of the dist files files and provide the appropriate filename over configuration setting `file` accordingly.

What does that mean? Navigate to folder `migration/templates` and create a copy of each standard file e.g.

* `dist.tpl_admin_default.tpl ----> tpl_admin_default.tpl`
* `dist.tpl_admin_err0.tpl ----> tpl_admin_err0.tpl`
* ...
* `dist.tpl_client_default_english.tpl ----> tpl_client_default_english.tpl`
* etc.

This is to avoid upgrade issues in future as upgrading will just overwrite the `dist.*` files and not your custom files.
In the `file` configuration settings, do not provide a path - just the filename.

### Admin Email Templates

Configure your customized email templates that will be send out to the WHMCS administrators in error case. Apply your custom changes to your created `tpl_admin_*.tpl` file copies (read above), if necessary. There's no possibility to keep the admin email templates language dependent. See the [above section](#configure-renewal-error-message-transfer-not-initiated) for more information about the error cases.

Apply your changes just to "subject" and "file" (and the contents of your provided file). The file and its contents represent the message body.

```json
"adminMail": {
    "ERR0": {
        "subject": "{$domain}: Domain Migration failed",
        "file": "tpl_admin_err0.tpl"
    },
    "ERR1": {
        "subject": "{$domain}: Domain Migration failed",
        "file": "tpl_admin_err1.tpl"
    },
    "ERR2": {
        "subject": "{$domain}: Domain Migration failed",
        "file": "tpl_admin_err2.tpl"
    },
    "ERR3": {
        "subject": "{$domain}: Domain Migration failed",
        "file": "tpl_admin_err3.tpl"
    },
    "ERR4": {
        "subject": "{$domain}: Domain Migration skipped",
        "file": "tpl_admin_err4.tpl"
    },
    "ERR5": {
        "subject": "{$domain}: Domain Migration initiated",
        "file": "tpl_admin_err5.tpl"
    },
    "REN0": {
        "subject": "{$domain}: Domain Migration skipped",
        "file": "tpl_admin_ren0.tpl"
    },
    "REN1": {
        "subject": "{$domain}: Domain Migration skipped",
        "file": "tpl_admin_ren1.tpl"
    },
    "REN2": {
        "subject": "{$domain}: Domain Migration skipped",
        "file": "tpl_admin_ren2.tpl"
    },
    "default": {
        "subject": "{$domain}: Domain Migration failed",
        "file": "tpl_admin_default.tpl"
    }
}
```

These templates are Smarty Templates and allow therefore the use of variables. This follows the principles of Smarty Syntax to use e.g. `{$someVariable}`. If you're not familiar with Smarty, find their documentation [here](https://www.smarty.net/).

The following variable names are available for the client email templates:

* `{$params}`: [module parameters](https://developers.whmcs.com/domain-registrars/module-parameters/)
* `{$domain}`: the domain name (IDN),
* `{$isTransferInitiated}`: if transfer initiated successfully or not
* `{$cfg}`: The JSON configuration settings (your configuration file)
* `{$domainData}`: Data related to the processed domain name e.g.
  * `{$domainData.xxx}`: where xxx is any column name related to tbldomains e.g. `{$domainData.status}`
* `{$reason}`: Just available in certain cases; Contains further error details
* `{$losingRegistrarId}`: losing registrar's internal ID in WHMCS
* `{$losingRegistrarLabel}`: losing registrar's label
* `{$gainingRegistrarId}`: gaining registrar's internal ID in WHMCS
* `{$gainingRegistrarLabel}`: gaining registrar's label

NOTE: The availability of some of the above variables depends on the process status. Exceptional Availability list:

* `{$cfg}`: not available in ERR0 as loading the configuration file failed.
* `{$domainData}`: not available in ERR0, ERR1
* `{$reason}`: not available in ERR1, ERR3, ERR5, REN0, REN1, REN2
* `{$losingRegistrarLabel}`: losing registrar label
* `{$gainingRegistrarLabel}`: not available in ERR0, ERR1, REN0, REN1, REN2

### Client Email Templates

This migration tool comes with a `default` email template in english that will be used for mail-out to **your clients**. You can define there more languages, customized subjects and messages. Later, you can check the `System Email Message Log` in WHMCS for mails sent to your clients and view them.

**DEPRECATED & Buggy**. Language dependent Admin templates have been deprecated as of the complexity and amount of error templates per language. Migrate the below example ...

```json
{
    "templates": {
        "admin": {
            "english": {
                "subject": "Transfer Domain to {$gainingRegistrarLabel}",
                "file": "mail_admin_english.html"
            }
        },
        "client": {
            "english": {
                "subject": "Change of domain provider for your domain {$domain_name}",
                "file": "mail_client_english.html"
            },
            "french": {
                "subject": "Changement de fournisseur de domaine pour votre domaine {$domain_name}",
                "file": "mail_client_french.html"
            }
        }
    }
}
```

... to this is the below configuration example. The example shows how to add the french language to the list of email templates available. WHMCS will auto-select the right one based on the client's configured WHMCS language. Also note the change of file name and file extension!

```json
{
    "templates": {
        "default": {
            "": { // <-- NEW! this one is important, just reuse the english template
                "subject": "Change of domain provider for your domain {$domain_name}",
                "file": "tpl_client_default_english.tpl"
            },
            "english": {
                "subject": "Change of domain provider for your domain {$domain_name}",
                "file": "tpl_client_default_english.tpl"
            },
            "french": {
                "subject": "Changement de fournisseur de domaine pour votre domaine {$domain_name}",
                "file": "tpl_client_default_french.tpl"
            }
        },
        ".com": {
            "": { // <-- NEW! this one is important, just reuse the english template
                "subject": "Change of domain provider for your domain {$domain_name}",
                "file": "tpl_client_com_english.tpl"
            },
            "english": {
                "subject": "Changement de fournisseur de domaine pour votre domaine {$domain_name}",
                "file": "tpl_client_com_english.tpl"
            },
            "french": {
                "subject": "Changement de fournisseur de domaine pour votre domaine {$domain_name}",
                "file": "tpl_client_com_french.tpl"
            }
        }
    }
}
```

**NEW**: As you see in the previous example TLD-specific email templates are now available. Configure 3rd-level TLDs explicitely. The `default` configuration entry is always used as fallback, see below. **Important is to have that empty string array key entry which represents the case "no language set"**. Without this entry the email template won't work in WHMCS as WHMCS by default selects email templates using language filter set to empty string.

```json
{
    "templates": {
        "default": { // <-- the default configuration entry
            "": { // <-- NEW! this one is important, just reuse the english template
                "subject": "Change of domain provider for your domain {$domain_name}",
                "file": "tpl_client_default_english.tpl"
            },
            "english": {
                "subject": "Change of domain provider for your domain {$domain_name}",
                "file": "tpl_client_default_english.tpl"
            }
        },
        "at": {
            "": { // <-- NEW! this one is important, just reuse the english template
                "subject": "Change of domain provider for your domain {$domain_name}",
                "file": "tpl_client_at_english.tpl"
            },
            "english": {
                "subject": "Change of domain provider for your domain {$domain_name}",
                "file": "tpl_client_at_english.tpl"
            }
        },
        "co.at": {
            "": { // <-- NEW! this one is important, just reuse the english template
                "subject": "Change of domain provider for your domain {$domain_name}",
                "file": "tpl_client_co_at_english.tpl"
            },
            "english": {
                "subject": "Change of domain provider for your domain {$domain_name}",
                "file": "tpl_client_co_at_english.tpl"
            }
        }
    }
}
```

NOTE: There's no need to provide a full HTML template structure including head and body in the template files, just the HTML code part you need.

Even though the templates are HTML files, they are finally processed in WHMCS as Smarty templates and allow therefore the use of variables. This follows the principles of Smarty Syntax to use e.g. `{$someVariable}`.

The following variable names are available for the client email templates:

* `{$id}`: The internal ID of your domain in WHMCS (indexed no.)
* `{$domain_name}`: The Internationalized Domain Name
* `{$gainingRegistrarLabel}`: A speaking label of the gaining registrar
* `{$losingRegistrarLabel}`: A speaking label of the gaining registrar
* `{$resellerLabel}`: Your/Reseller's Label e.g. Reseller Pty Ltd
* `{$resellerContactEmail}`: Your/Reseller's contact email address
* `{$resellerContactURL}`: Your/Reseller's web page URL for a contact form or similar
* `{$client_name}`: Name of your client
* `{$signature}`: Your/Reseller's signature

If you need something in addition, let us know.

## Renew expired Domains

If you prefer renewing already expired domain names at the current registrar instead of migrating it to the new registrar, set the configuration key `renewIfExpired` to `true`.
This covers expired domain names where the status still allows a renewal (`Expired` and `Grace Period (Expired)`). See this diagram that explains it the best:

!['gtld lifecycle']({{site.baseurl}}/assets/images/whmcs/migration/gtld-lifecycle.jpg)

```json
{
    "renewIfExpired": true
}
```

When set to false, expired domains will be migrated. This is the default.

```json
{
    "renewIfExpired": false
}
```

## EPP/Authorization Codes

As you've already read, we use the `GetEPPCode` method of the losing registrar's registrar module to get the valid code to initiate the Transfer. But for some registrars, this doesn't work as they are then returning an error to WHMCS, but still they send the code out to the current registrant's email address.
So, not reliable for real-time processing. A good example is Registrar Enom.

As workaround, create a table `mig_domains` in your WHMCS database using the SQL Statement provided in file `createtbl.sql`.

In there, provide the list of authorization/epp codes. Just ensure that the data that you provide in column `id` really matches the appropriate value of the matching record in table `tbldomains`.

## Registrar Labels

If you're not lucky with the Registrar Label used within the client emails, you can overwrite them by configuration. This is an optional step!

By default we use the `DisplayName` or `FriendlyName` of the appropriate Registrar Module e.g. `HEXONET`, `TPP Wholesale`, `Enom`, `GoDaddy` or `ResellerClub`. If you prefer to have the full company name like `HEXONET GmbH`, `TPP Wholesale Pty Ltd` and so on, you can do that by using the configuration setting `registrarLabels`.

Important is just to know the appropriate WHMCS registrar id. You can get such a registrar id by using the folder name of the registrar module, e.g.:

* your gaining registrar's registrar module is located in `/modules/registrars/hexonet`, then the registrar id will be `hexonet`.
* your gaining registrar's registrar module is located in `/modules/registrars/ispapi`, then the registrar id will be `ispapi`.
* your losing registrar's registrar module is located in `/modules/registrars/resellerclub`, then the registrar id will be `resellerclub`.

How to use this configuration setting:

```json
{
    "registrarLabels": {
        "hexonet": "HEXONET GmbH",
        "ispapi": "HEXONET GmbH",
        "tppwregistrar": "TPP Wholesale Pty Ltd"
    }
}
```

## List of TLDs to migrate

Maybe you just want to migrate single TLD or a list of TLDs. By default, the migration tool is configured to migrate **all** TLDs:

```json
{
    "TLDList": "*"
}
```

Change that configuration setting as follows to just migrate a single TLD:

```json
{
    "TLDList": {
        "enom": [
            ".com"
        ]
    }
}
```

Change that configuration setting as follows to migrate multiple TLDs:

```json
{
    "TLDList": {
        "enom": [
            ".com",
            ".net"
        ]
    }
}
```

**Configure related 3rd level TLDs explicitely, otherwise they won't be migrated!** e.g.

```json
{
    "TLDList": {
        "enom": [
            ".at",
            ".co.at",
            ".or.at"
        ]
    }
}
```

Our configuration allows also to migrate everything from one registrar and just partially from another registrar e.g.

```json
{
    "TLDList": {
        "enom": "*",
        "resellerclub": [
            ".at",
            ".co.at",
            ".or.at"
        ]
    }
}
```

**Keep in mind to configure here the full list of TLDs per registrar!** e.g.

```json
{
    "TLDList": {
        "enom": [
            ".at",
            ".co.at",
            ".or.at",
            ".com",
            ".net"
        ],
        "resellerclub": [
            ".com",
            ".net"
        ]
    }
}
```

**Blacklisting for more flexibility** e.g.

The below means: Migrate .co.at and .or.at away from enom and all TLDs except .com from resellerclub.

NOTE: When using Blacklisting, keep in mind to specify a list of TLDs to migrate or to use the asterisk `"*"` as placeholder for all in addition.

```json
{
    "TLDList": {
        "enom": [
            "!.at",
            ".co.at",
            ".or.at"
        ],
        "resellerclub": [
            "!.com",
            "*"
        ]
    }
}
```

**NOTE:**
**We introduced this configuration setting at a later point. For backward compatibility we support also leaving it out. Leaving it out corresponds to the default setting: Migrate everything of the registrars that you marked for migration (see below)!**

## Activate Migrations

**NOTE:**
**Ensure that everything else has been prepared as this is the final step and saving this configuration setting, will activate the migration process.**

Check file `migration/configuration.json` again. You'll find there a key called `migrationMap` which is by default empty.

```json
"migrationMap": {}
```

Add in there a mapping of WHMCS' internal used losing registrar's id to the WHMCS' internal used gaining registrar's id. How to find that id out is described before. e.g.

```json
"migrationMap": {
    "enom": "ispapi",
    "resellerclub": "ispapi"
}
```

The above example will enable migrations from Enom to HEXONET and from ResellerClub to HEXONET.

In general the below is also allowed, but as we do not have test cases for every registrar, it might run into issues for corner cases. It activates migrations from any registrar to the desired gaining registrar:

```json
"migrationMap": {
    "*": "ispapi"
}
```

## Config Validation

We have worked on a JSON Schema that is used for validation at runtime. Whenever a domain renewal reaches our migration tool, `migration/configuration.json` is being validated. If invalid, you'll see the appropriate error output in domain details.

## After Migration Steps

After Migration has finished - this might take a while of course, cleanup as follows:

* Remove the `hooks.php` (or however you installed our file) and the migration folder.
* [Optional] Cleanup table `tblemailtemplates`. Check for entries where `name` is starting with `MIGRATION_` and being flagged as `custom` (value `1`) and being of `type` `domain`. You can also delete them over WHMCS' "Email Templates" Interface.

... et voila!
