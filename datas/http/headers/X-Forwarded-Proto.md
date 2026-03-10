# X-Forwarded-Proto

Source: https://devdocs.io/http/headers/x-forwarded-proto

# X-Forwarded-Proto

The X-Forwarded-Proto (XFP) header is a de-facto standard header for identifying the protocol (HTTP or HTTPS) that a client used to connect to your proxy or load balancer. Your server access logs contain the protocol used between the server and the load balancer, but not the protocol used between the client and the load balancer. To determine the protocol used between the client and the load balancer, the X-Forwarded-Proto request header can be used.

A standardized version of this header is the HTTP Forwarded header.

## Syntax

```
X-Forwarded-Proto: <protocol>
```

## Directives

The forwarded protocol (http or https).

## Examples

```
X-Forwarded-Proto: https
```

Other non-standard forms:

```
# Microsoft
Front-End-Https: on

X-Forwarded-Protocol: https
X-Forwarded-Ssl: on
X-Url-Scheme: https
```

## Specifications

Not part of any current specification. The standardized version of this header is Forwarded.

## See also

- Forwarded
- X-Forwarded-For
- X-Forwarded-Host

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Proto
