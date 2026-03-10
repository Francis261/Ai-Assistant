# Upgrade

Source: https://devdocs.io/http/headers/upgrade

# Upgrade

The HTTP 1.1 (only) Upgrade header can be used to upgrade an already established client/server connection to a different protocol (over the same transport protocol). For example, it can be used by a client to upgrade a connection from HTTP 1.1 to HTTP 2.0, or an HTTP or HTTPS connection into a WebSocket.

Warning: HTTP/2 explicitly disallows the use of this mechanism/header; it is specific to HTTP/1.1.

## Overview

The Upgrade header field may be used by clients to invite a server to switch to one (or more) of the listed protocols, in descending preference order.

For example, the client might send a GET request as shown, listing the preferred protocols to switch to (in this case "example/1" and "foo/2"):

```
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

Note: Connection: upgrade must be set whenever Upgrade is sent.

The server can choose to ignore the request, for any reason, in which case it should just respond as though the Upgrade header had not been sent (for example, with a 200 OK).

If the server decides to upgrade the connection, it must:

1. Send back a 101 Switching Protocols response status with an Upgrade header that specifies the protocol(s) being switched to. For example: HTTP/1.1 101 Switching Protocols
Upgrade: foo/2
Connection: Upgrade
2. Send a response to the original request using the new protocol (the server may only switch to a protocol with which it can complete the original request).

```
HTTP/1.1 101 Switching Protocols
Upgrade: foo/2
Connection: Upgrade
```

A server may also send the header as part of a 426 Upgrade Required response, to indicate that the server won't perform the request using the current protocol, but might do so if the protocol is changed. The client can then request a protocol change using the process above.

More detail and examples are provided in the topic Protocol upgrade mechanism.

## Syntax

```
Connection: upgrade
Upgrade: protocol_name[/protocol_version]
```

Notes:

- The Connection header with type upgrade must always be sent with the Upgrade header (as shown above).
- Protocols are listed, comma-separated, in order of descending preference. Protocol version is optional. For example:

```
Connection: upgrade
Upgrade: a_protocol/1, example, another_protocol/2.2
```

## Directives

One or more protocol names with optional version ("/" separated). The protocols are listed in order of descending preference.

## Examples

```
Connection: upgrade
Upgrade: HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11
```

```
Connection: Upgrade
Upgrade: websocket
```

## Specifications

## Browser compatibility

## See also

- Protocol upgrade mechanism
- 101 Switching Protocol
- 426 Upgrade Required
- Connection

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade
