---
layout: default
title: Node.js SDK
parent: SDKs
grand_parent: HEXONET
nav_order: 1
showtoc: 1
---

# Node.js SDK

aka. [**@hexonet/ispapi-apiconnector**](//www.npmjs.com/package/@hexonet/ispapi-apiconnector)

[![License: MIT]({{ 'assets/images/License-MIT-blue.svg' | relative_url }})](//opensource.org/licenses/MIT)
[![node](//img.shields.io/node/v/@hexonet/ispapi-apiconnector.svg)](//www.npmjs.com/package/@hexonet/ispapi-apiconnector)
[![npm version](//img.shields.io/npm/v/@hexonet/ispapi-apiconnector.svg?style=flat)](//www.npmjs.com/package/@hexonet/ispapi-apiconnector)

This module is a connector library for the insanely fast HEXONET Backend API. For further informations visit our [homepage](//www.hexonet.net) and do not hesitate to [contact us](//www.hexonet.net/contact).

## Resources

Our Classes provide further useful Methods for getting the connection configured and response data accessed. Have an eye on the Class Documentation and the UML Diagram for further insights. The below Usage Examples show just a subset of possibilities.

* [UML Diagram]({{ 'docs/hexonet/sdks#uml-diagram' | relative_url }})
* [SDK Documenation](//rawgit.com/hexonet/node-sdk/master/docs/typedoc/index.html)
* [API Documentation]({{ 'docs/hexonet/api-documentation/' | relative_url }})

## Requirements

* NodeJS >= 9.x. We suggest using [nvm](//github.com/creationix/nvm).

## Usage Instructions

Use the following command to get our Module installed:

```bash
    npm i @hexonet/ispapi-apiconnector@latest --save
```

We have also a demo app available showing how to integrate and use our SDK. See [here](//github.com/hexonet/node-sdk-demo). Always ensure to have the latest release version in use.

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

```js
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
async function main () {
  const apiconnector = require('@hexonet/ispapi-apiconnector')
  const cl = new apiconnector.APIClient()
  cl.useHighPerformanceConnectionSetup()
    .useOTESystem()
    .setCredentials('test.user', 'test.passw0rd')
    .setRemoteIPAddress('1.2.3.4:80')
  const r = await cl.request({ COMMAND: 'StatusAccount' })
  console.log(r.getPlain())
}
main()
```

So, what happens in code behind the scenes? We communicate with localhost (so our proxy setup) that passes the requests to the HEXONET API.
Of course we can't activate this setup by default as it is based on Steps 1 and 2. Otherwise connecting to our API wouldn't work.

Just in case the above port or ip address can't be used, use function setURL instead to set a different URL / Port.
`http://127.0.0.1/api/call.cgi` is the default URL for the High Performance Proxy Setup.
e.g. `$cl->setURL("http://127.0.0.1:8765/api/call.cgi");` would change the port. Configure that port also in the Apache Configuration (-> Step 2)!

Don't use `https` for that setup as it leads to slowing things down as of the https `overhead` of securing the connection. In this setup we just connect to localhost, so no direct outgoing network traffic using `http`. The apache configuration finally takes care passing it to `https` for the final communication to the HEXONET API.

## Customize Logging / Outputs

When having the debug mode activated \HEXONET\Logger will be used for doing outputs.
Of course it could be of interest for integrators to look for a way of getting this replaced by a custom mechanism like forwarding things to a 3rd-party software, logging into file or whatever.

```js
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
async function main () {
  const logger = require('mycustomlogger') // has to extend our logger
  const apiconnector = require('@hexonet/ispapi-apiconnector')
  const cl = new apiconnector.APIClient()
  cl.useOTESystem()
    .setCredentials('test.user', 'test.passw0rd')
    .setRemoteIPAddress('1.2.3.4:80')
    .enableDebugMode()
    .setCustomLogger(new logger.MyCustomLogger())
  await cl.request({ COMMAND: 'StatusAccount' })
}
main()
```

NOTE: Find an example for a custom logger class implementation in `src/customlogger.ts`. If you have questions, feel free to open a github issue.

## Usage Examples

We provide only documentation and examples for the latest release.

### API response format

If you got the API communication working, you will notice that we provide two response formats via this library.
a) Plain Format
b) Hash Format
c) ListHash Format

The different response formats can be accessed through the Response object itself that is returned by login, logout and request method:

```js
// console.log(r.getPlain())
// console.log(r.getHash())
// console.log(l.getListHash())
```

The plain format represents the API plain response.
The hash format represents the API response parsed into a js object.
The list format makes sense, if you're working with table libraries based on our list commands and need the hash format parsed into a list format.

Still, and that's the good thing: No need to 

### API response codes

The API response (a JSON object) provides always two keys: CODE and DESCRIPTION.
CODE represents a return code which indicates the following cases:
"200" -> The command has been processed successfully by the API
"4xx" -> A temporary API error occured, retry later
"5xx" -> An API error occured

In case of a (temporary) error the DESCRIPTION may provide more details on the reason.

The hash format provides a PROPERTY key that covers potential data.
The list format provides a LIST key that covers potential data.

### API Communication, Session

This example is thought for anyone who builds up his own frontend including user login and logout functionality.
See how login and logout works and how the request method depends on the login mechanism!
The logout can be done at any time separetely triggered. After logout no further requests reusing the by login returned socketcfg are possible.
Note: you have to first finish your requests before doing logout. Running queued requests may fail after logout.

```js
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
async function main () {
  const apiconnector = require('@hexonet/ispapi-apiconnector')
  const cl = new apiconnector.APIClient()
  // Use OT&E system, omitting this points by default to the LIVE system
  cl.useOTESystem()
  // Set your user id, here: the OT&E demo user
    .setCredentials('test.user', 'test.passw0rd')
  // Set Remote IP Address (in case of IP Filter setting)
    .setRemoteIPAddress('1.2.3.4:80')
  // Set a subuser view
  // cl.setUserView('hexotestman.com');

  console.log('login ...')
  let r = await cl.login()
  // Provide an one time password (active 2FA)
  // const r = await cl.login('12345678');
  if (r.getCode() !== 200) { // login failed
    console.log(`LOGIN FAILED -> ${r.getCode()} ${r.getDescription()}`)
    return
  }
  console.log('LOGIN SUCCEEDED')

  console.log('request further commands ...')
  r = await cl.request({
    COMMAND: 'StatusUser'
  })
  console.log(`RESPONSE -> ${r.getCode()} ${r.getDescription()}`)

  console.log('logout ...')
  r = await cl.logout()
  if (r.getCode() !== '200') { // login failed
    console.log(`LOGOUT FAILED -> ${r.getCode()} ${r.getDescription()}`)
    return
  }
  console.log('LOGOUT SUCCEEDED')
}
main()
```

**Your Frontend build on top of our SDK**:

If you want to create your own frontend application based on our SDK, you will have to know how you can
save APIClient's session configuration data to the nodejs session and how to rebuild a new APIClient
instance out of it on next incoming request.

After successful login, use `cl.saveSession(req.session)` to save APIClient's session into the nodejs one.
This snippet is an example for the expressjs framework where `req` is the incoming ClientRequest and
`req.session` the expressjs session instance.

In your generic route for making API calls use `cl.reuseSession(req.session)` to rebuild APIClient's session
out of the previously saved data.

We cannot provide integration examples for part depends on your app itself and your own needs.
Still feel free to contact us in case you're stuck.

### API Communication, ~~Session~~

In the below example no login / logout procedure is required.
This is thought for cases where a user session is not of interest.
But in that case you always have to provide user and password accordingly.
If you want to build your frontend based on this library, we suggest to base it on the above example.

```js
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
async function main () {
  const apiconnector = require('@hexonet/ispapi-apiconnector')
  const cl = new apiconnector.APIClient()
  // Use OT&E system, omitting this points by default to the LIVE system
  cl.useOTESystem()
  // Set your user id, here: the OT&E demo user
    .setCredentials('test.user', 'test.passw0rd')
  // Set Remote IP Address (in case of IP Filter setting)
    .setRemoteIPAddress('1.2.3.4:80')
  // Set a subuser view
  // .setUserView('hexotestman.com')
  // Set a one time password (active 2FA)
  // .setOTP('12345678')

  const r = cl.request({
    COMMAND: 'StatusUser'
  })
  console.log(r.getPlain())
}
main()
```

### Promise based

No need to play with async / await.

```js
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const apiconnector = require('@hexonet/ispapi-apiconnector')
const cl = new apiconnector.APIClient()
// Use OT&E system, omitting this points by default to the LIVE system
cl.useOTESystem()
// Set your user id, here: the OT&E demo user
cl.setCredentials('test.user', 'test.passw0rd')
// Set Remote IP Address (in case of IP Filter setting)
cl.setRemoteIPAddress('1.2.3.4:80')
// Set a subuser view
// cl.setUserView('hexotestman.com');
// Set a one time password (active 2FA)
// cl.setOTP('12345678');

cl.request({
  COMMAND: 'StatusUser'
}).then((r) => {
  console.log(r.getPlain())
})
```

### Method Chaining

Shorten your code by using method chaining

```js
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const apiconnector = require('@hexonet/ispapi-apiconnector')
const cl = new apiconnector.APIClient()
cl.useOTESystem()
  .setCredentials('test.user', 'test.passw0rd')
  .setRemoteIPAddress('1.2.3.4:80')
// .setUserView('hexotestman.com');
// .setOTP('12345678');

cl.request({
  COMMAND: 'StatusUser'
}).then((r) => {
  console.log(r.getPlain())
})
```

### API Command: Nested Arrays

Improve your code by using the below

```js
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const apiconnector = require('@hexonet/ispapi-apiconnector')
const cl = new apiconnector.APIClient()
cl.useOTESystem()
  .setCredentials('test.user', 'test.passw0rd')
  .setRemoteIPAddress('1.2.3.4:80')
// .setUserView('hexotestman.com');
// .setOTP('12345678');

cl.request({
  COMMAND: 'QueryDomainOptions',
  DOMAIN: ['example1.com', 'example2.com']
}).then((r) => {
  console.log(r.getPlain())
})
```

instead of

```js
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const apiconnector = require('@hexonet/ispapi-apiconnector')
const cl = new apiconnector.APIClient()
cl.useOTESystem()
  .setCredentials('test.user', 'test.passw0rd')
  .setRemoteIPAddress('1.2.3.4:80')
// .setUserView('hexotestman.com');
// .setOTP('12345678');

cl.request({
  COMMAND: 'QueryDomainOptions',
  DOMAIN0: 'example1.com',
  DOMAIN1: 'example2.com'
}).then((r) => {
  console.log(r.getPlain())
})
```

The SDK itself will flatten the nested array correctly into expected plain text format before sending it to our API.
