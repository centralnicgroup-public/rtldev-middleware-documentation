---
layout: default
title: Go SDK
parent: SDKs
grand_parent: HEXONET
nav_order: 5
showtoc: 1
---

# Go SDK

aka. **github.com/hexonet/go-sdk**

[![License: MIT]({{ 'assets/images/License-MIT-blue.svg' | relative_url }})](//opensource.org/licenses/MIT)
[![GoDoc](//godoc.org/github.com/hexonet/go-sdk?status.svg)](//godoc.org/github.com/hexonet/go-sdk)
[![Go Report Card](//goreportcard.com/badge/github.com/hexonet/go-sdk)](//goreportcard.com/report/github.com/hexonet/go-sdk)

This module is a connector library for the insanely fast HEXONET Backend API. For further informations visit our [homepage](//hexonet.net) and do not hesitate to [contact us](//www.hexonet.net/contact).

## Resources

Our Classes provide further useful Methods for getting the connection configured and response data accessed. Have an eye on the Class Documentation and the UML Diagram for further insights. The below Usage Examples show just a subset of possibilities.

* [UML Diagram]({{ 'docs/hexonet/sdks#uml-diagram' | relative_url }})
* [Class Documenation](//godoc.org/github.com/hexonet/go-sdk)
* [API Documentation]({{ 'docs/hexonet/api-documentation/' | relative_path }})

## Requirements

* Installed [GO/GOLANG](//golang.org/doc/install). Restart your machine after installing GO.

NOTE: Make sure you add the go binary path to your PATH environment variable. Add the below lines for a standard installation into your profile configuration file (~/.profile).

```bash
export GOPATH=$HOME/go
export PATH=$PATH:$GOPATH/bin
```

Then reload the profile configuration by `source ~/.profile`.

## Usage Instructions

We have also a demo app available showing how to integrate and use our SDK. See [here](//github.com/hexonet/go-sdk-demo). This module can be installed as a Go Module.

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

```go
package main

import (
    "fmt"

    CL "github.com/hexonet/go-sdk/apiclient"
)

func main() {
    cl := CL.NewAPIClient()
    //Default Connection Setup would be used otherwise by default
    cl.UseHighPerformanceConnectionSetup()
    //LIVE System would be used otherwise by default
    cl.UseOTESystem()
    cl.SetCredentials("test.user", "test.passw0rd")

    r := cl.Request(map[string]interface{}{
        "COMMAND": "StatusAccount"
    })
}
```

So, what happens in code behind the scenes? We communicate with localhost (so our proxy setup) that passes the requests to the HEXONET API.
Of course we can't activate this setup by default as it is based on Steps 1 and 2. Otherwise connecting to our API wouldn't work.

Just in case the above port or ip address can't be used, use function setURL instead to set a different URL / Port.
`http://127.0.0.1/api/call.cgi` is the default URL for the High Performance Proxy Setup.
e.g. `$cl->setURL("http://127.0.0.1:8765/api/call.cgi");` would change the port. Configure that port also in the Apache Configuration (-> Step 2)!

Don't use `https` for that setup as it leads to slowing things down as of the https `overhead` of securing the connection. In this setup we just connect to localhost, so no direct outgoing network traffic using `http`. The apache configuration finally takes care passing it to `https` for the final communication to the HEXONET API.

## Customize Logging / Outputs

When having the debug mode activated `github.com/hexonet/logger` will be used for doing outputs.
Of course it could be of interest for integrators to look for a way of getting this replaced by a custom mechanism like forwarding things to a 3rd-party software, logging into file or whatever.

```php
package main

import (
    "fmt"

    CL "github.com/hexonet/go-sdk/apiclient"
    LG "github.com/myspace/customlogger"
)

func main() {
    cl := CL.NewAPIClient()
    cl.SetCredentials("test.user", "test.passw0rd")//username, password
    cl.UseOTESystem()//LIVE System would be used otherwise by default
    cl.enableDebugMode()//activate debug outputs / logging
    cl.setCustomLogger(new LG.NewCustomerLogger())//set your custom mechanism for debug outputs/logging

    r := cl.Request(map[string]interface{}{
        "COMMAND": "StatusAccount"
    })
}
```

NOTE: Find an example for a custom logger class implementation in `customlogger/customlogger.go`. If you have questions, feel free to open a github issue. Follow the interface `ILogger` defined in `logger/logger.go`.

## Usage Examples

Please have an eye on our [API documentation]({{ 'docs/hexonet/api-documentation/' | relative_url }}). Here you can find information on available Commands and their response data.

### API Communication, Session

```go
package main

import (
    "fmt"

    CL "github.com/hexonet/go-sdk/apiclient"
)

func main() {
    cl := CL.NewAPIClient()
    cl.SetCredentials("test.user", "test.passw0rd")//username, password
    // or cl.SetRoleCredentials("test.user", "testrole", "test.passw0rd")
    // for role user credentials
    cl.UseOTESystem()

    // use this to provide your outgoing ip address for api communication
    // to be used in case you have ip filter settings active
    cl.SetRemoteIPAddress("1.2.3.4");

    // cl.EnableDebugMode() // to activate debug outputs of the API communication
    r := cl.Login()
    // or r := cl.Login("12345678") // provide here your 2FA otp code
    if r.IsSuccess() {
        fmt.Println("Login succeeded.")
        r = cl.Request(map[string]interface{}{
            "COMMAND": "StatusAccount"
        })
        if r.IsSuccess() {
            fmt.Println("Command succeeded.")
            r = cl.Logout()
            if r.IsSuccess() {
                fmt.Println("Logout succeeded.")
            } else {
                fmt.Println("Logout failed.")
            }
        } else {
            fmt.Println("Command failed.")
        }
    } else {
        fmt.Println("Login failed.")
    }
}
```

### API Communication, ~~Session~~

```go
package main

import (
    "fmt"

    CL "github.com/hexonet/go-sdk/apiclient"
)

func main() {
    cl := CL.NewAPIClient()
    cl.SetCredentials("test.user", "test.passw0rd")
    cl.SetRemoteIPAddress("1.2.3.4")
    //cl.SetOTP("12345678") to provide your 2FA otp code
    cl.UseOTESystem()
    r := cl.Request(map[string]interface{}{
        "COMMAND": "StatusAccount"
    })
    if r.IsSuccess() {
        fmt.Println("Command succeeded.")
    } else {
        fmt.Println("Command failed.")
    }
}
```

### API Command: Nested Arrays

Of course, you could do the following:

```go
package main

import (
    "fmt"

    CL "github.com/hexonet/go-sdk/apiclient"
)

func main() {
    cl := CL.NewAPIClient()
    cl.SetCredentials("test.user", "test.passw0rd")
    cl.SetRemoteIPAddress("1.2.3.4")
    cl.UseOTESystem()
    r := cl.Request(map[string]interface{}{
        "COMMAND": "QueryDomainOptions",
        "DOMAIN0": "example1.com";
        "DOMAIN1": "example2.com";
    })
    if r.IsSuccess() {
        fmt.Println("Command succeeded.")
    } else {
        fmt.Println("Command failed.")
    }
}
```

but probably better:

```go
package main

import (
    "fmt"

    CL "github.com/hexonet/go-sdk/apiclient"
)

func main() {
    cl := CL.NewAPIClient()
    cl.SetCredentials("test.user", "test.passw0rd")
    cl.SetRemoteIPAddress("1.2.3.4")
    cl.UseOTESystem()
    r := cl.Request(map[string]interface{}{
        "COMMAND": "QueryDomainOptions",
        "DOMAIN": []string{
            "example1.com",
            "example2.com"
        }
    })
    if r.IsSuccess() {
        fmt.Println("Command succeeded.")
    } else {
        fmt.Println("Command failed.")
    }
}
```
