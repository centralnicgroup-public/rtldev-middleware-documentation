---
layout: default
title: FAQ
parent: WHMCS
grand_parent: CentralNic Reseller
nav_order: 1
showtoc: 1
---

# WHMCS FAQ

## Connectivity Issues

If you need assistance finding the reason out why your login fails, please reach out. We can look this up in ease and provide help. Still, find below a whole chapter for reference guiding you through the issue.

### Upgrade your Module

To ensure you're not affected by a bug that got recently patched, please upgrade the registrar module. Find the upgrade steps documented in the Registrar Module Guide.

### Working Ping

Ensure a ping is going through - otherwise, there’s a network or setup error (firewall etc.). Please execute this via command line on your WHMCS Server:

```text
ping api.rrpproxy.net
ping api-ote.rrpproxy.net
```

### Ports

We in general communicate base on HTTPS protocol - port 443 though.
Ensure that such communication is allowed in your firewall.

### Required Dependencies

Ensure to have the Requirements of our Module fulfilled:

* curl,
* php-curl 

... have to be installed and working.

#### curl

You can test curl with the following shell command:

```bash
# test with your OT&E credentials (OT&E System)
curl -k -d 's_login=<your username>&s_pw=<your password>&command=statusaccount' https://api-ote.rrpproxy.net/api/call.cgi

# test with your LIVE credentials (LIVE System)
curl -k -d 's_login=<your username>&s_pw=<your password>&command=statusaccount' https://api.rrpproxy.net/api/call.cgi
```

You should get something like:

```text
[RESPONSE]
code = 200
description = Command completed successfully
runtime = 0.003
queuetime = 0
property[amount][0] = 37071.82
property[credit][0] = 0.00
property[credit threshold][0] = 0.00
property[currency][0] = GBP
property[registrar][0] = <your username>
EOF
```

#### php-curl

Find a test script [here](https://raw.githubusercontent.com/centralnicgroup-opensource/rtldev-middleware-whmcs/archive/cnic/test.curl.php). Download and execute it via command line:

```bash
# Test Connectivity with OTE System
php test.curl.php OTE "<your username>" "<your password>"
# e.g.
# php test.curl.php OTE "testuser" "gre§$Tgagr"

# Test Connectivity with LIVE System
php test.curl.php LIVE "<your username>" "<your password>"
# e.g.
# php test.curl.php LIVE "testuser" "gre§$Tgagr"
```

If this works, you should see a similar response as shown in the previous point.

### Other Reasons

* check if `TestMode` is turned on in the registrar module settings and if this is desired. If so, you're connecting to the OT&E system, otherwise to the Live System. Ensure to enter your credentials also in the right fields as we offer totally separated password fields for the LIVE System and OT&E System.

* You configured IP Whitelist is not including the ip address(es) of your WHMCS Server. This only applies in case such an IP Whitelisting is in place.

Again, please reach out to us via Support Ticket if you need further assistance.