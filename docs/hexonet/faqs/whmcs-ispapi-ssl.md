---
layout: default
title: WHMCS - SSL Certs
parent: FAQs
grand_parent: HEXONET
nav_order: 3
showtoc: 1
---

# FAQs

### 1. Missing .key and .ca files for SSL installation

Please login to the control panel and execute the following command under 'API' :

    COMMAND = StatusSSLCert
    SSLCERTID = <ID>

In the response, the parameter "PEM" value is the private key and "CACRT" value is the ca
You can copy "PEM" value to .key file and "CACRT" to .ca file.
This information can also be accessed in your WHMCS client area, product management page.
