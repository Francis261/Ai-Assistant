# Sec-WebSocket-Accept

Source: https://devdocs.io/http/headers/sec-websocket-accept

# Sec-WebSocket-Accept

The Sec-WebSocket-Accept header is used in the websocket opening handshake. It would appear in the response headers. That is, this is header is sent from server to client to inform that server is willing to initiate a websocket connection.

## Syntax

```
Sec-WebSocket-Accept: <hashed key>
```

## Directives

The server takes the value of the Sec-WebSocket-Key sent in the handshake request, appends 258EAFA5-E914-47DA-95CA-C5AB0DC85B11, takes SHA-1 of the new value, and is then base64 encoded.

## Examples

```
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

## Specifications

No specification data found for http.headers.Sec-WebSocket-Accept.Check for problems with this page or contribute a missing spec_url to mdn/browser-compat-data. Also make sure the specification is included in w3c/browser-specs.

## See also

- Sec-WebSocket-Key

## Browser compatibility

No compatibility data found for http.headers.Sec-WebSocket-Accept.Check for problems with this page or contribute missing data to mdn/browser-compat-data.

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-WebSocket-Accept
