---
layout: default
title: WHMCS - Drop-Catching
parent: FAQs
grand_parent: HEXONET
nav_order: 5
showtoc: 1
---

# FAQs

### 1. **I have initiated a domain backorder using the backorder module. The backorder status is set from ACTIVE to PROCESSING. While this is the case, I am still able to search for the backordered domain and register it. Therefore this domain is available for registration. Does the module fail to catch my domain? What went wrong, can you please explain?**

The backorder fails due to insufficient funds in your HEXONET account. When a backorder domain status set from ACTIVE to PROCESSING, our system tries to catch the domain provided enough funds available in your account.
If the backorder is successful, the status is set to 'SUCCESSFUl'. 
For more information about the process, have a look here: https://github.com/hexonet/whmcs-ispapi-backorder/wiki/Usage-Guide#1-functioning

### 2. **" Server time should be set to UTC" - is this a must? We are set to UTC+4? Perhaps, in this case, I can adapt the cron job times +4 hours to adjust for this difference?**

The ISPAPI Backorder module only running with the server set to UTC. Cronjobs must be set with the time as specified in the documentation.
We have noted and added to our wishlist your request. We will review the module to run with different timezones in the future.
The current version of the module - 2.2.5

### 3. **What is the consequence of not running it at UTC? I mean I added +4 hours to adjust for it anyway, so why this does not solve the problem?**

Initially, the module is developed to work with UTC timezone setup. You can try using the module with your setup UTC+4. But unfortunately, we cannot guarantee the module will work properly without setting that to UTC. In order to observe the behavior of the module with different timezones, we need to review it completely. We added to our wishlist to review the module.

### 4. **I am using CentOS and my cronjobs are not running properly. How can I fix the issue?**
(20190525-00115)

looks like CentOS doesn't provide the PHP superglobal `$_SERVER` when starting a script from command line/crontab. Under Ubuntu / Debian this works fine.

A workaround for you could be to change the crontab entries as shown in the below example. Instead of calling the script from the command line-side, we use curl to make an Http request. This ensures that the `$_SERVER` superglobal is available:

Example: (this is linked with the question number 3 -> added 4h to UTC)

```
1 4,14 * * * curl https://your_whmcs/modules/addons/ispapibackorder/crons/daily_import_pendingdomainlist.php
```

### 4. **I have just installed your backorder module (lastest version), and when I go to admin configuration page I get a warning popup:**
DataTables warning: table id=backorderlist - Ajax error. For more information about this error, please see http://datatables.net/tn/7

* One of the reasons could be that you have not installed our ISPAPI Registrar Module. Therefore, backorder module is unable to connect with our API.
