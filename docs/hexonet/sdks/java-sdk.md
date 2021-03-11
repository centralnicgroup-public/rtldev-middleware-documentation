---
layout: default
title: Java SDK
parent: SDKs
grand_parent: HEXONET
nav_order: 4
showtoc: 1
---

# Java SDK

aka. [**net.hexonet.apiconnector/java-sdk**](https://search.maven.org/search?q=g:net.hexonet.apiconnector)

[![License: MIT]({{site.baseurl}}/assets/images/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Maven metadata URI](https://img.shields.io/maven-metadata/v/http/central.maven.org/maven2/net/hexonet/apiconnector/java-sdk/maven-metadata.xml.svg)
[![Release](https://jitpack.io/v/hexonet/java-sdk.svg)](https://jitpack.io/#hexonet/java-sdk)

This module is a connector library for the insanely fast HEXONET Backend API. For further informations visit our [homepage](http://hexonet.net) and do not hesitate to [contact us](https://www.hexonet.net/contact).

## Resources

Our Classes provide further useful Methods for getting the connection configured and response data accessed. Have an eye on the Class Documentation and the UML Diagram for further insights. The below Usage Examples show just a subset of possibilities.

* [UML Diagram]({{site.baseurl}}/docs/sdks/)
* [SDK Documenation](https://hexonet.github.io/java-sdk/target/apidocs/net/hexonet/apiconnector/package-summary.html)
* [API Documentation]({{site.baseurl}}/docs/api-documentation.md)

## Requirements

* JDK installed e.g. OpenJDK
* Having [Maven](https://maven.apache.org) up and running. e.g.
  
  ```bash
  sudo apt install maven
  ```

  If you have trouble with JAVA_HOME variable when using Maven, create ~/.mavenrc with the following contents:

  ```bash
  export JAVA_HOME=<path to your java installation>
  #e.g. export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
  ```

Note: Maven simplifies things, instead you can also manually download our Module from the [Maven Central Registry](https://search.maven.org/search?q=g:net.hexonet.apiconnector) (OSSRH) to use it in your Project.

## Usage Instructions

We have also a demo app available showing how to integrate and use our SDK. See [here](https://github.com/hexonet/java-sdk-demo).

### OT&E System

OT&E Sytem stands for Operational Test & Evaluation System. No costs, just for playing around with things. This system can be seen as a kind of sandbox system that allows to test your integration first before going live with it. This system and the use of our products and services is completely free of charge. To use this system, use APIClient’s method `useOTESystem`. Otherwise Live System will be used by default.

### LIVE System

The real world system - This system and the use our services and products can lead to real costs depending on what you’re exactly doing. Live System will be used by default, but you can also use APIClient’s method `useLIVESystem` to add it in source code for reference.

### Maven

As our package is available on the OSSRH as mentioned above, simply use:

```xml
<dependencies>
  <dependency>
    <groupId>net.hexonet.apiconnector</groupId>
    <artifactId>java-sdk</artifactId>
    <version>4.0.4</version>
  </dependency>
</dependencies>
```

### Maven + jitpack.io

Standard way based on [jitpack.io](http://jitpack.io).
Add the following lines to your maven project's pom.xml:

```xml
<repositories>
    <repository>
        <id>jitpack.io</id>
        <url>https://jitpack.io</url>
    </repository>
</repositories>

 <dependencies>
    <dependency>
        <groupId>com.github.hexonet</groupId>
        <artifactId>java-sdk</artifactId>
        <version>4.0.4</version>
      </dependency>
  </dependencies>
```

Now `mvn install` will produce that package version and will make it available within your project.

## High Performance Proxy Setup

Long distances to our main data center in Germany may result in high network latencies. If you encounter such problems, we highly recommend to use this setup, as it uses persistent connections to our API server and the overhead for connection establishments is omitted.

### 1 - Apache2 Modules

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

```java
    import net.hexonet.apiconnector.APIClient;
    import net.hexonet.apiconnector.Response;
    import java.util.HashMap;
    import java.util.Map;

    public static void main(String[] args) {
        APIClient cl = new APIClient();
        cl.useOTESystem()//LIVE System would be used otherwise by default
          .useHighPerformanceConnectionSetup()//Default Connection Setup would be used otherwise by default
          .setCredentials("test.user", "test.passw0rd");

        Map<String, Object> cmd = new HashMap<String, String>();
        cmd.put("COMMAND", "StatusAccount");
        Response r = cl.request(cmd);
    }
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

```java
    import net.hexonet.apiconnector.APIClient;
    import net.hexonet.apiconnector.Response;
    import java.util.HashMap;
    import java.util.Map;

    public static void main(String[] args) {
        APIClient cl = new APIClient();
        cl.useOTESystem()
          .enableDebugMode() // activate debug outputs
          .setCustomLogger(new MyCustomerLogger()) // provide your mechanism here
          .setCredentials("test.user", "test.passw0rd");
        Map<String, Object> cmd = new HashMap<String, String>();
        cmd.put("COMMAND", "StatusAccount");
        Response r = cl.request(cmd);
    }
```

NOTE: Find an example for a custom logger class implementation in `src/main/java/net/hexonet/apiconnector/CustomLogger.java`. If you have questions, feel free to open a github issue.

## Usage Examples

Please have an eye on our [HEXONET Backend API documentation](https://github.com/hexonet/hexonet-api-documentation/tree/master/API). Here you can find information on available Commands and their response data.

### API Communication, Session

```java
    import net.hexonet.apiconnector.APIClient;
    import net.hexonet.apiconnector.Response;
    import java.util.HashMap;
    import java.util.Map;

    public static void main(String[] args) {
        // perform an api login and create an api session
        APIClient cl = new APIClient();
        cl.useOTESystem()
          .setCredentials("test.user", "test.passw0rd")
        // --- use this if you have active ip filter settings ---
          .setRemoteIPAddress("1.2.3.4");
        // ------------------------------------------------------

        Response r = cl.login();
        // --- use this for 2-Factor Auth ---
        // Response r = cl.login("... provide otp code here ...");
        // ----------------------------------

        if (r.isSuccess()){
            System.out.println("Login succeeded.");
            // perform further api request reusing the generated api session
            Map<String, Object> cmd = new HashMap<String, String>();
            cmd.put("COMMAND", "StatusAccount");
            r = cl.request(cmd);
            if (r.isSuccess()){
                System.out.println("Command succeeded.");
            }
            else {
                System.out.println("Command failed.");
            }
            // perform api logout and destroy api session
            r = cl.logout();
            if (r.isSuccess()){
                System.out.println("Logout succeeded.");
            }
            else {
                System.out.println("Logout failed.");
            }
        }
        else {
            System.out.println("Login failed.");
        }
    }
```

### API Communication, ~~Session~~

```java
    import net.hexonet.apiconnector.APIClient;
    import net.hexonet.apiconnector.Response;
    import java.util.HashMap;
    import java.util.Map;

    public static void main(String[] args) {
        // perform an api login and create an api session
        APIClient cl = new APIClient();
        cl.useOTESystem()
          .setCredentials("test.user", "test.passw0rd")
        // --- use this if you have active ip filter settings ---
          .setRemoteIPAddress("1.2.3.4");
        // ------------------------------------------------------

        Map<String, Object> cmd = new HashMap<String, String>();
        cmd.put("COMMAND", "StatusAccount");
        Response r = cl.request(cmd);
        if (r.isSuccess()){
            System.out.println("Command succeeded.");
        }
        else {
            System.out.println("Command failed.");
        }
    }
```
