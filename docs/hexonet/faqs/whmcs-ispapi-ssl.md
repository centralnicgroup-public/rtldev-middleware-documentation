---
layout: default
title: WHMCS - SSL Certs
parent: FAQs
grand_parent: HEXONET
nav_order: 3
showtoc: 1
---

# FAQs

### 1. Setting up SSL certificate throws an error in the client area: Object not found: ORDERID. How can I solve this issue?

The CSR maybe has already been provided to the certificate. You can use the already provided CSR or reissue the certificate with the new CSR you want to use.
In order to use already provided CSR, you just need to simply validate the email you received at validation email you provided during the setup of SSL.

### 2. How can I reissue a new CSR for an inactive certificate?

You can reissue cert with the new csr using the following command (if you leave out csr#, the system should automatically generate a csr)

       [COMMAND]
       command = ReissueSSLCert
       sslcertid = <SSLCERTID>
       csr# = <TEXT>
       EOF

All info available at https://wiki.hexonet.net/wiki/SSL#tab=Other_commands__28API_29


### 3. The files .key and .ca are missing to install SSL. How can I obtain them?

Please login to the control panel and execute the following command under 'API' :
 
    COMMAND = StatusSSLCert
    SSLCERTID = <ID>

In the response, the parameter "PEM" value is the private key and "CACRT" value is the ca
You can copy "PEM" value to .key file and "CACRT" to .ca file.
This information can also be accessed in your WHMCS client area, product management page.

### 4. I placed an order at HEXONET and I want to initiate the configuration process from WHMCS under my clients account. How can I import this order from control panel to WHMCS?

Unfortunately, there is no possibility to import an order from control panel to WHMCS.
I would recommend that you buy and initiate the configuration of the certificate from WHMCS itself.

I also suggest that you wait for your current order to automatically be canceled and triggered refund process. It will take at least 2 weeks of time(its normal procedure when the certificate is not activated with in two weeks time period). Your order is not submitted(not activated). Therefore immediate cancellation is not possible.


