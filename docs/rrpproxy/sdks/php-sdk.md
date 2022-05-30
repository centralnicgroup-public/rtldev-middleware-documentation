---
layout: default
title: PHP SDK
parent: SDKs
grand_parent: RRPproxy
nav_order: 2
showtoc: 1
---

# PHP SDK

aka. [**centralnic-reseller/php-sdk**](//packagist.org/packages/centralnic-reseller/php-sdk)

[![License: MIT]({{ 'assets/images/License-MIT-blue.svg' | relative_url }})](//opensource.org/licenses/MIT)
[![PHP from Packagist](//img.shields.io/packagist/php-v/centralnic-reseller/php-sdk.svg)](//packagist.org/packages/centralnic-reseller/php-sdk)
[![Packagist](//img.shields.io/packagist/v/centralnic-reseller/php-sdk.svg)](//packagist.org/packages/centralnic-reseller/php-sdk)

This module is a connector library for the insanely fast HEXONET and RRPproxy Backend API. Do not hesitate to reach out.

## Resources

Our Classes provide further useful Methods for getting the connection configured and response data accessed. Have an eye on the Class Documentation and the UML Diagram for further insights. The below Usage Examples show just a subset of possibilities.

- [UML Diagram]({{ 'docs/rrpproxy/sdks#uml-diagram' | relative_url }})
- [Class Documenation](//centralnic-reseller.github.io/php-sdk/)
- [API Documentation]({{ 'docs/rrpproxy/api-documentation' | relative_url }})

## Requirements

- Installed php (>= v7.4.0) and php-curl
- Installed [composer](//getcomposer.org/download/).

## Usage Instructions

We have also a demo app available showing how to integrate and use our SDK. See [here](//github.com/centralnic-reseller/php-sdk-demo).

This module is available on the [PHP Package Registry](//packagist.org/packages/centralnic-reseller/php-sdk).

Run `composer require "centralnic-reseller/php-sdk"` to get the latest version downloaded and added to composer.json.
In your script simply use `require 'vendor/autoload.php';` or `require 'vendor/centralnic-reseller/php-sdk';`

### OT&E System

OT&E Sytem stands for Operational Test & Evaluation System. No costs, just for playing around with things. This system can be seen as a kind of sandbox system that allows to test your integration first before going live with it. This system and the use of our products and services is completely free of charge. To use this system, use APIClient’s method `useOTESystem`. Otherwise Live System will be used by default.

### LIVE System

The real world system - This system and the use our services and products can lead to real costs depending on what you’re exactly doing. Live System will be used by default, but you can also use APIClient’s method `useLIVESystem` to add it in source code for reference.

## High Performance Proxy Setup

Long distances to our main data center in Germany may result in high network latencies. If you encounter such problems, we highly recommend to use this setup, as it uses persistent connections to our API server and the overhead for connection establishments is omitted.

### 1 - Apache Modules

_At least Apache version 2.2.9_ is required.

The following Apache2 modules must be installed and activated:

```bash
sudo a2enmod http_proxy ssl
sudo service apache2 restart
```

### 2 - Apache Configuration

An example Apache configuration with binding to localhost,  example for **RRPproxy**:

```bash
<VirtualHost 127.0.0.1:80>
    ServerAdmin webmaster@localhost

    ServerSignature Off

    SSLProxyEngine on
    ProxyPass /api/call.cgi https://api.rrpproxy.net/api/call.cgi min=1 max=2
    <Proxy *>
        Order Deny,Allow
        Deny from none
        Allow from all
    </Proxy>
</VirtualHost>
```

Example for **HEXONET**:

```bash
<VirtualHost 127.0.0.1:80>
    ServerAdmin webmaster@localhost

    ServerSignature Off

    SSLProxyEngine on
    ProxyPass /api/call.cgi https://api.ispapi.net/api/call.cgi min=1 max=2
    <Proxy *>
        Order Deny,Allow
        Deny from none
        Allow from all
    </Proxy>
</VirtualHost>
```

After saving your configuration changes please restart the Apache webserver.
If you want to connect to the OT&E System, please use the below URLs

- RRPproxy: "https://api-ote.rrpproxy.net/api/call.cgi"
- HEXONET: "https://api-ote.ispapi.net/api/call.cgi"

respectively.

### 3 - Implementation

In the below example, please specify your registrar of interest.
Actually supported: RRPproxy, HEXONET

```php
$cl = CF::getClient([
    "registrar" => "RRPproxy"
]);
$cl->useOTESystem()//LIVE System would be used otherwise by default
   ->useHighPerformanceConnectionSetup()//Default Connection Setup would be used otherwise by default
   ->setCredentials("<your account id>", "<your password>");
$r = $cl->request(["COMMAND" => "StatusAccount"]);
```

So, what happens in code behind the scenes? We communicate with localhost (so our proxy setup) that passes the requests to the RRPproxy API.
Of course we can't activate this setup by default as it is based on Steps 1 and 2. Otherwise connecting to our API wouldn't work.

Just in case the above port or ip address can't be used, use function setURL instead to set a different URL / Port.
`http://127.0.0.1/api/call.cgi` is the default URL for the High Performance Proxy Setup.
e.g. `$cl->setURL("http://127.0.0.1:8765/api/call.cgi");` would change the port. Configure that port also in the Apache Configuration (-> Step 2)!

Don't use `https` for that setup as it leads to slowing things down as of the https `overhead` of securing the connection. In this setup we just connect to localhost, so no direct outgoing network traffic using `http`. The apache configuration finally takes care passing it to `https` for the final communication to the RRPproxy API.

## Customize Logging / Outputs

When having the debug mode activated \CNIC\RRPproxy\Logger will be used for doing outputs.
Of course it could be of interest for integrators to look for a way of getting this replaced by a custom mechanism like forwarding things to a 3rd-party software, logging into file or whatever.

```php
$cl = CF::getClient([
    "registrar" => "RRPproxy"
]);
$cl->useOTESystem()//LIVE System would be used otherwise by default
   ->enableDebugMode()//activate debug outputs
   ->setCustomLogger(new MyCustomerLogger())//provide your mechanism here
   ->setCredentials("<your account id>", "<your password>");
$r = $cl->request(["COMMAND" => "StatusAccount"]);
```

NOTE: Find an interface for your custom logger class implementation under `\CNIC\LoggerInterface.php`. If you have questions, feel free to open a github issue.

## Usage Examples

Please have an eye on our [API documentation]({{ 'docs/rrpproxy/api-documentation/' | relative_url }}). Here you can find information on available Commands and their response data.

### API Communication, Session

Available since version 4.x! Actually not working for RRPproxy!

```php
$cl = CF::getClient([
    "registrar" => "RRPproxy"
]);
$cl->useOTESystem()//LIVE System would be used otherwise by default
   ->setCredentials("<your account id>", "<your password>");
$r = $cl->login();
// or this line for using 2FA
// $r = $cl->login('.. here your otp code ...');
if ($r->isSuccess()){
    echo "LOGIN SUCCEEDED.<br/>";

    // Now reuse the created API session for further request
    // You don't have to care about anything!
    $r = $cl->request(array(
        "COMMAND" => "StatusAccount"
    ));
    echo "<pre>" . htmlspecialchars(print_r($r->getHash(), true)) . "</pre>";

    // Perform session close and logout
    $r = $cl->logout();
    if ($r->isSuccess()){
        echo "LOGOUT SUCCEEDED.<br/>";
    } else {
        echo "LOGOUT FAILED.<br/>";
    }
}
else {
    echo "LOGIN FAILED.<br/>";
}
```

**Save session configuration into PHP Session**:

If you're realizing your own frontend on top, you need a solution to keep the Backend API Session that the PHP-SDK wraps internally to be reusable in further page loads. This can be achieved by

```php
// right after successful login
$cl->saveSession($_SESSION);
```

and

```php
// for every further request
$cl->reuseSession($_SESSION);
```

### API Communication, ~~Session~~

```php
require __DIR__ . '/vendor/autoload.php';

// --- SESSIONLESS API COMMUNICATION ---
$cl = CF::getClient([
    "registrar" => "RRPproxy"
]);
$cl->useOTESystem()//LIVE System would be used otherwise by default
   // ->setRemoteIPAddress("1.2.3.4:80"); // provide ip address used for active ip filter
   ->setCredentials("<your account id>", "<your password>");
$r = $cl->request(array(
    "COMMAND" => "StatusAccount"
));
echo "<pre>" . htmlspecialchars(print_r($r->getHash(), true)) . "</pre>";
```

### API Command: Nested Arrays

Use the below to improve code a bit:

```php
require __DIR__ . '/vendor/autoload.php';

$cl = CF::getClient([
    "registrar" => "RRPproxy"
]);
$cl->useOTESystem()
   ->setCredentials("<your account id>", "<your password>");
$r = $cl->request([
    "command" => "CheckDomains"
    "domain" => ["example1.com", "example2.com"]
]);
echo "<pre>" . htmlspecialchars(print_r($r->getHash(), true)) . "</pre>";
```

instead of:

```php
require __DIR__ . '/vendor/autoload.php';

$cl = CF::getClient([
    "registrar" => "RRPproxy"
]);
$cl->useOTESystem()
   ->setCredentials("<your account id>", "<your password>");
$r = $cl->request([
    "command" => "CheckDomains"
    "domain0" => "example1.com",
    "domain1" => "example2.com"
]);
echo "<pre>" . htmlspecialchars(print_r($r->getHash(), true)) . "</pre>";
```
