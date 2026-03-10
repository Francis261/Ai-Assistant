# 426 Upgrade Required

Source: https://devdocs.io/http/status/426

# 426 Upgrade Required

The HTTP 426 Upgrade Required client error response code indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.

The server sends an Upgrade header with this response to indicate the required protocol(s).

## Status

```
426 Upgrade Required
```

## Examples

```
HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/2.0
Connection: Upgrade
Content-Length: 53
Content-Type: text/plain

This service requires use of the HTTP/2.0 protocol
```

## Specifications

## See also

- Upgrade
- 101 Switching Protocols

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426
