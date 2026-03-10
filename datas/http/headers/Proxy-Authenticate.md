# Proxy-Authenticate

Source: https://devdocs.io/http/headers/proxy-authenticate

# Proxy-Authenticate

The HTTP Proxy-Authenticate response header defines the authentication method that should be used to gain access to a resource behind a proxy server. It authenticates the request to the proxy server, allowing it to transmit the request further.

The Proxy-Authenticate header is sent along with a 407 Proxy Authentication Required.

## Syntax

```
Proxy-Authenticate: <type> realm=<realm>
```

## Directives

Authentication type. A common type is "Basic". IANA maintains a list of authentication schemes.

A description of the protected area, the realm. If no realm is specified, clients often display a formatted host name instead.

## Examples

```
Proxy-Authenticate: Basic

Proxy-Authenticate: Basic realm="Access to the internal site"
```

## Specifications

## Browser compatibility

## See also

- HTTP authentication
- Authorization
- Proxy-Authorization
- WWW-Authenticate
- 401, 403, 407

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Proxy-Authenticate
