---
layout: default
title: Python SDK
parent: SDKs
grand_parent: HEXONET
nav_order: 2
showtoc: 1
---

# Python SDK

aka. [**hexonet.apiconnector**](//pypi.org/project/hexonet.apiconnector/)

[![License: MIT]({{ 'assets/images/License-MIT-blue.svg' | relative_url }})](//opensource.org/licenses/MIT)
[![PyPI - Python Version](//img.shields.io/pypi/pyversions/hexonet.apiconnector.svg)](//www.python.org/)
[![PyPI](//img.shields.io/pypi/v/hexonet.apiconnector.svg)](//pypi.org/project/hexonet.apiconnector/)

This module is a connector library for the insanely fast HEXONET Backend API. For further informations visit our [homepage](//hexonet.net) and do not hesitate to [contact us](//www.hexonet.net/contact).

## Resources

* [UML Diagram]({{ 'docs/sdks/' | relative_url }})
* [Class Documentation](//hexonet-python-sdk.readthedocs.io/en/latest/#sdk-documentation)
* [API Documentation]({{ 'docs/hexonet/api-documentation/' | relative_url }})

## Requirements

* Python 3

## Usage Instructions

Use the following command to get our Module installed:

```bash
pip install hexonet.apiconnector
```

The connector library is now installed.

We have also a demo app available showing how to integrate and use our SDK. See [here](//github.com/hexonet/python-sdk-demo). Always ensure to have the latest release version in use.

### OT&E System

OT&E Sytem stands for Operational Test & Evaluation System. No costs, just for playing around with things. This system can be seen as a kind of sandbox system that allows to test your integration first before going live with it. This system and the use of our products and services is completely free of charge. To use this system, use APIClient’s method `useOTESystem`. Otherwise Live System will be used by default.

### LIVE System

The real world system - This system and the use our services and products can lead to real costs depending on what you’re exactly doing. Live System will be used by default, but you can also use APIClient’s method `useLIVESystem` to add it in source code for reference.

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

```python
from hexonet.apiconnector.apiclient import APIClient as AC

cl = AC()
cl.useOTESystem()
cl.useHighPerformanceConnectionSetup() # Default Connection Setup would be used otherwise by default
cl.setCredentials('test.user', 'test.passw0rd')
r = cl.request({"COMMAND" => "StatusAccount"})
```

So, what happens in code behind the scenes? We communicate with localhost (so our proxy setup) that passes the requests to the HEXONET API.
Of course we can't activate this setup by default as it is based on Steps 1 and 2. Otherwise connecting to our API wouldn't work.

Just in case the above port or ip address can't be used, use function setURL instead to set a different URL / Port.
`http://127.0.0.1/api/call.cgi` is the default URL for the High Performance Proxy Setup.
e.g. `$cl->setURL("http://127.0.0.1:8765/api/call.cgi");` would change the port. Configure that port also in the Apache Configuration (-> Step 2)!

Don't use `https` for that setup as it leads to slowing things down as of the https `overhead` of securing the connection. In this setup we just connect to localhost, so no direct outgoing network traffic using `http`. The apache configuration finally takes care passing it to `https` for the final communication to the HEXONET API.

## Customize Logging / Outputs

When having the debug mode activated hexonet.apiconnector.logger will be used for doing outputs by default.
Of course it could be of interest for integrators to look for a way of getting this replaced by a custom mechanism like forwarding things to a 3rd-party software, logging into file or whatever.

```python
from hexonet.apiconnector.apiclient import APIClient as AC
# import your module from your custom namespace of course
from hexonet.apiconnector.customlogger import CustomLogger as CL

cl = AC()
# LIVE System would be used otherwise by default
cl.useOTESystem()
# enable debug output (inactive by default)
cl.enableDebugMode()
# provide your custom logger mechanism
cl.setCustomLogger(CL())
cl.setCredentials("test.user", "test.passw0rd")
r = cl.request({"COMMAND" => "StatusAccount"})
```

NOTE: Find an example for a custom logger class implementation in `hexonet/apiconnector/customlogger.py`. If you have questions, feel free to open a github issue.

## Usage Examples

All you need to know, can be found [here](//hexonet-python-sdk.readthedocs.io/en/latest/#usage-guide).
