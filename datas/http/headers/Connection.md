# Connection

Source: https://devdocs.io/http/headers/connection

# Connection

The Connection general header controls whether the network connection stays open after the current transaction finishes. If the value sent is keep-alive, the connection is persistent and not closed, allowing for subsequent requests to the same server to be done.

Warning: Connection-specific header fields such as Connection and Keep-Alive are prohibited in HTTP/2 and HTTP/3. Chrome and Firefox ignore them in HTTP/2 responses, but Safari conforms to the HTTP/2 spec requirements and does not load any response that contains them.

Except for the standard hop-by-hop headers (Keep-Alive, Transfer-Encoding, TE, Connection, Trailer, Upgrade, Proxy-Authorization and Proxy-Authenticate), any hop-by-hop headers used by the message must be listed in the Connection header, so that the first proxy knows it has to consume them and not forward them further. Standard hop-by-hop headers are also required to be listed.

## Syntax

```
Connection: keep-alive
Connection: close
```

## Directives

Indicates that either the client or the server would like to close the connection. This is the default on HTTP/1.0 requests.

Indicates that the client would like to keep the connection open. Keeping a connection open is the default on HTTP/1.1 requests. The list of headers are the name of the header to be removed by the first non-transparent proxy or cache in-between: these headers define the connection between the emitter and the first entity, not the destination node.

## Specifications

## Browser compatibility

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Connection
