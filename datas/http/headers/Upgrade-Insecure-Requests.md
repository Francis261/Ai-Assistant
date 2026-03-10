# Upgrade-Insecure-Requests

Source: https://devdocs.io/http/headers/upgrade-insecure-requests

# Upgrade-Insecure-Requests

The HTTP Upgrade-Insecure-Requests request header sends a signal to the server expressing the client's preference for an encrypted and authenticated response, and that it can successfully handle the upgrade-insecure-requests CSP directive.

## Syntax

```
Upgrade-Insecure-Requests: 1
```

## Examples

A client's request signals to the server that it supports the upgrade mechanisms of upgrade-insecure-requests:

```
GET / HTTP/1.1
Host: example.com
Upgrade-Insecure-Requests: 1
```

The server can now redirect to a secure version of the site. A Vary header can be used so that the site isn't served by caches to clients that don't support the upgrade mechanism.

```
Location: https://example.com/
Vary: Upgrade-Insecure-Requests
```

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- CSP upgrade-insecure-requests directive

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade-Insecure-Requests
