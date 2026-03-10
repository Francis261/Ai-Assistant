# X-Forwarded-Host

Source: https://devdocs.io/http/headers/x-forwarded-host

# X-Forwarded-Host

The X-Forwarded-Host (XFH) header is a de-facto standard header for identifying the original host requested by the client in the Host HTTP request header.

Host names and ports of reverse proxies (load balancers, CDNs) may differ from the origin server handling the request, in that case the X-Forwarded-Host header is useful to determine which Host was originally used.

This header is used for debugging, statistics, and generating location-dependent content and by design it exposes privacy sensitive information, such as the IP address of the client. Therefore the user's privacy must be kept in mind when deploying this header.

A standardized version of this header is the HTTP Forwarded header.

## Syntax

```
X-Forwarded-Host: <host>
```

## Directives

The domain name of the forwarded server.

## Examples

```
X-Forwarded-Host: id42.example-cdn.com
```

## Specifications

Not part of any current specification. The standardized version of this header is Forwarded.

## See also

- Host
- Forwarded
- X-Forwarded-For
- X-Forwarded-Proto

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-Host
