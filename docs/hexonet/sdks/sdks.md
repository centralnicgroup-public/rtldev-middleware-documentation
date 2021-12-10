---
layout: default
title: SDKs
parent: HEXONET
nav_order: 5
has_children: true
permalink: /docs/hexonet/sdks/
showtoc: 0
---

# Our SDKs

Here you'll find further information about our realized SDKs and their usage. They cover the API Communication Best Practives and easy ways to request and access data.

Our Java/Node.js/PHP SDKs cover right now the most current and planned future structure. UML Diagram will be reviewed when ALL the SDKs are following that new approach. Reason for the changes are know programming language differences that lead to writing workarounds to support the below shown version of the UML diagram.

## FWIW

[![SDK]({{ 'assets/images/sdks/sdk.png' | relative_url }})]({{ 'assets/images/sdks/sdk.png' | relative_url }})

## Features

- Automatic IDN Domain name conversion to punycode (our API accepts only punycode format in commands)
- Allows Nested Arrays in API Commands to improve in direction of Bulk Parameters
- Connecting and communication with our API
- Possibility to use a custom mechanism for debug mode
- Several ways to access and deal with response data
- Getting the command again returned together with the response
- Sensible Data (e.g. Password) is hidden in Debug Output and Data Access Methods for Security Reasons
- Sessionless Communication
- Session based Communication
- Possibility to save API session identifier in session
- Configure a Proxy for API communication
- Configure a Referer for API communication
- High Performance Proxy Setup

## UML Diagram

[![SDK]({{ 'assets/images/sdks/uml.png' | relative_url }})]({{ 'assets/images/sdks/uml.png' | relative_url }})

{: .fs-6 .fw-300 }
