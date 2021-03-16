---
layout: default
title: WHMCS - Domain Import
parent: FAQs
grand_parent: HEXONET
nav_order: 4
showtoc: 1
---

# FAQs

1. **I am using a restrictive role user. Which commands do I have to whitelist?**

Find all such commands listed [here]({{ 'docs/hexonet/whmcs/whmcs-ispapi-registrar/#create-a-role-user' | relative_url }}) per module.

2. **Pricing importer does not upload TLDs over 3000. How can I fix this issue?**

Please have look [here]({{ 'docs/hexonet/whmcs/whmcs-ispapi-pricingimporter/#setting-max_input_vars' | relative_url }}).
A lower value of max_input_vars is the issue.

3. **How can I import pricing for more than one year registration period?**

Unfortunately, our ISPAPI pricing importer module supports only annual price import.
You need to manually update prices for registration periods for more than one year.
We have this feature on our list to implement. But there is no ETA at the moment.

4. **I am not able to upload a CSV file. It always gives the following error message:**

       ERROR!
       Please upload only one CSV file

The sample file used is also the files of the specified format. It always gives the same error message

      OS: Windows
      Browser : all Browser ( chrom firefox .. )
      WHMCS Version 7 - 7.8.3
      PHP Version 5.6 - 7.3
      ISPAPI Pricing Importer Module Version 4.0.4

Unfortunately, uploading a CSV file using Windows do not work properly. We have this issue on our wish list to provide a fix.
