---
layout: default
title: Perl SDK
parent: SDKs
grand_parent: HEXONET
nav_order: 6
showtoc: 1
---

# Perl SDK

aka. [**WebService::Hexonet::Connector**](//metacpan.org/release/HEXONET/WebService-Hexonet-Connector-v2.10.2)

[![License: MIT]({{ 'assets/images/License-MIT-blue.svg' | relative_url }})](//opensource.org/licenses/MIT)

This module is a connector library for the insanely fast HEXONET Backend API. For further informations visit our [homepage](//hexonet.net) and do not hesitate to [contact us](//www.hexonet.net/contact).

## Resources

Our Classes provide further useful Methods for getting the connection configured and response data accessed. Have an eye on the Class Documentation and the UML Diagram for further insights. The below Usage Examples show just a subset of possibilities.

* [UML Diagram]({{ 'docs/hexonet/sdks#uml-diagram' | relative_url }})
* [Class Documenation](//rawgit.com/hexonet/perl-sdk/master/docs/hexonet.html)
* [API Documentation]({{ 'docs/hexonet/api-documentation/' | relative_url }})

## Requirements

* Installed latest version of perl 5
* Installed cpanm (App::cpanminus) as suggested alternative for cpan command

## Usage Instructions

We have also a demo app available showing how to integrate and use our SDK. See [here](//github.com/hexonet/perl-sdk-demo).

### OT&E System

OT&E Sytem stands for Operational Test & Evaluation System. No costs, just for playing around with things. This system can be seen as a kind of sandbox system that allows to test your integration first before going live with it. This system and the use of our products and services is completely free of charge. To use this system, use APIClient’s method `useOTESystem`. Otherwise Live System will be used by default.

### LIVE System

The real world system - This system and the use our services and products can lead to real costs depending on what you’re exactly doing. Live System will be used by default, but you can also use APIClient’s method `useLIVESystem` to add it in source code for reference.

### Install from CPAN

```bash
# by Module ID (suggested!)
cpanm WebService::Hexonet::Connector~2.0000

# or by filename
cpanm HEXONET/WebSservice-Hexonet-Connector-v2.0.0.tar.gz
```

NOTE: I got this only working by sudo'ing these commands.
In case you install by filename, please check the [release overview](//github.com/hexonet/perl-sdk/releases) for the most current release and use that version instead.

## High Performance Proxy Setup

Long distances to our main data center in Germany may result in high network latencies. If you encounter such problems, we highly recommend to use this setup, as it uses persistent connections to our API server and the overhead for connection establishments is omitted.

### 1 - Apache Modules

*At least Apache version 2.2.9* is required.

The following Apache2 modules must be installed and activated:

```bash
proxy.conf
proxy.load
proxy_http.load
ssl.conf # for HTTPs connection to our API server
ssl.load # for HTTPs connection to our API server
```

### 2 - Apache Configuration

An example Apache configuration with binding to localhost:

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

### 3 - Implementation

```perl
use 5.030;
use strict;
use warnings;
use WebService::Hexonet::Connector;

my $cl = WebService::Hexonet::Connector::APIClient->new();
$cl->useOTESystem();# LIVE System would be used otherwise by default
$cl->useHighPerformanceConnectionSetup();# Default Connection Setup would be used otherwise by default
$cl->setCredentials('test.user', 'test.passw0rd');
my $response = $cl->request({ COMMAND => "StatusAccount" });
```

So, what happens in code behind the scenes? We communicate with localhost (so our proxy setup) that passes the requests to the HEXONET API.
Of course we can't activate this setup by default as it is based on Steps 1 and 2. Otherwise connecting to our API wouldn't work.

Just in case the above port or ip address can't be used, use function setURL instead to set a different URL / Port.
`http://127.0.0.1/api/call.cgi` is the default URL for the High Performance Proxy Setup.
e.g. `$cl->setURL('http://127.0.0.1:8765/api/call.cgi');` would change the port. Configure that port also in the Apache Configuration (-> Step 2)!

Don't use `https` for that setup as it leads to slowing things down as of the https `overhead` of securing the connection. In this setup we just connect to localhost, so no direct outgoing network traffic using `http`. The apache configuration finally takes care passing it to `https` for the final communication to the HEXONET API.

## Customize Logging / Outputs

When having the debug mode activated `WebService::Hexonet::Connector::Logger` will be internally used for doing outputs.
Of course it could be of interest for integrators to look for a way of getting this replaced by a custom mechanism like forwarding things to a 3rd-party software, logging into file or whatever.

```perl
use 5.030;
use strict;
use warnings;
use WebService::Hexonet::Connector;
use MyCustomLogger::Logger;

my $cl = WebService::Hexonet::Connector::APIClient->new();
$cl->enableDebugMode() # activate debug outputs/logging
$cl->setCustomLogger(MyCustomLogger::Logger->new()) # set your own mechanism by providing your own class
$cl->setCredentials('test.user', 'test.passw0rd');
my $response = $cl->request({ COMMAND => "StatusAccount" });
```

NOTE: Find an example for a logger class implementation plus POD documentation in `lib/WebService/Hexonet/Connector/Logger.pm`. If you have questions, feel free to open a github issue.

## Usage Examples

Please have an eye on our [API documentation]({{ 'docs/hexonet/api-documentation/' | relative_url }}). Here you can find information on available Commands and their response data.

### API Communication, Session

```perl
use 5.030;
use strict;
use warnings;
use WebService::Hexonet::Connector;

my $cl = WebService::Hexonet::Connector::APIClient->new();
$cl->useOTESystem();
$cl->setCredentials('test.user', 'test.passw0rd');
$cl->setRemoteIPAddress('1.2.3.4');

my $response = $cl->login();
# in case of 2FA use:
# my $response = $cl->login("12345678");

if ($response->isSuccess()) {
    # now the session will be used for communication in background
    # instead of the provided credentials
    # if you need something to rebuild connection on next page visit,
    # so in a frontend-session based environment, please consider
    # saveSession and reuseSession methods

    # Call a command
    my $response = $cl->request(
        {
            COMMAND => 'QueryDomainList',
            LIMIT => 5
        }
    );

    # get the result in the format you want
    my $res;
    $res = $response->getListHash();
    $res = $response->getHash();
    $res = $response->getPlain();

    # get the response code and the response description
    my $code = $response->getCode();
    my $description = $response->getDescription();

    print "$code $description";

    # close Backend API Session
    # you may verify the result of the logout procedure
    # like for the login procedure above
    $cl->logout();
}
```

### API Communication, ~~Session~~

```perl
use 5.030;
use strict;
use warnings;
use WebService::Hexonet::Connector;

my $cl = WebService::Hexonet::Connector::APIClient->new();
$cl->useOTESystem();
$cl->setCredentials('test.user', 'test.passw0rd');
$cl->setRemoteIPAddress('1.2.3.4');
# in case of 2FA use:
# $cl->setOTP("12345678")

# Call a command
my $response = $cl->request(
    {
        COMMAND => 'QueryDomainList',
        LIMIT => 5
    }
);

# get the result in the format you want
my $res;
$res = $response->getListHash();
$res = $response->getHash();
$res = $response->getPlain();

# get the response code and the response description
my $code = $response->getCode();
my $description = $response->getDescription();

print "$code $description";
```

### API Command: Nested Arrays

Using the below is supported to improve using commands. It will automatically be converted to parameters `DOMAIN0` and `DOMAIN1` accordingly.
This of course works for all commands and all such parameters.

```perl
use 5.030;
use strict;
use warnings;
use WebService::Hexonet::Connector;

my $cl = WebService::Hexonet::Connector::APIClient->new();
$cl->useOTESystem();
$cl->setCredentials('test.user', 'test.passw0rd');
$cl->setRemoteIPAddress('1.2.3.4');
# in case of 2FA use:
# $cl->setOTP("12345678")

# Call a command
my $response = $cl->request(
    {
        COMMAND => 'QueryDomainOptions',
        DOMAIN => ['example1.com', 'example2.com']
    }
);

# get the response code and the response description
my $code = $response->getCode();
my $description = $response->getDescription();

print "$code $description";
```
