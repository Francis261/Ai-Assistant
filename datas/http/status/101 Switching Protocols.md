# 101 Switching Protocols

Source: https://devdocs.io/http/status/101

# 101 Switching Protocols

The HTTP 101 Switching Protocols response code indicates a protocol to which the server switches. The protocol is specified in the Upgrade request header received from a client.

The server includes in this response an Upgrade response header to indicate the protocol it switched to. The process is described in the following article: Protocol upgrade mechanism.

## Status

```
101 Switching Protocols
```

## Examples

Switching protocols might be used with WebSockets.

```
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

## Specifications

## See also

- Protocol upgrade mechanism
- WebSockets
- Upgrade
- 426 Upgrade Required

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101
