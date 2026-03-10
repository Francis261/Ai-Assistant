# Keep-Alive

Source: https://devdocs.io/http/headers/keep-alive

# Keep-Alive

The Keep-Alive general header allows the sender to hint about how the connection may be used to set a timeout and a maximum amount of requests.

Note: Set the Connection header to "keep-alive" for this header to have any effect.

Warning: Connection-specific header fields such as Connection and Keep-Alive are prohibited in HTTP/2 and HTTP/3. Chrome and Firefox ignore them in HTTP/2 responses, but Safari conforms to the HTTP/2 specification requirements and does not load any response that contains them.

## Syntax

```
Keep-Alive: parameters
```

## Directives

A comma-separated list of parameters, each consisting of an identifier and a value separated by the equal sign ('='). The following identifiers are possible:

- timeout: An integer that is the time in seconds that the host will allow an idle connection to remain open before it is closed. A connection is idle if no data is sent or received by a host. A host may keep an idle connection open for longer than timeout seconds, but the host should attempt to retain a connection for at least timeout seconds.
- max: An integer that is the maximum number of requests that can be sent on this connection before closing it. Unless 0, this value is ignored for non-pipelined connections as another request will be sent in the next response. An HTTP pipeline can use it to limit the pipelining.

## Examples

A response containing a Keep-Alive header:

```
HTTP/1.1 200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Thu, 11 Aug 2016 15:23:13 GMT
Keep-Alive: timeout=5, max=1000
Last-Modified: Mon, 25 Jul 2016 04:32:39 GMT
Server: Apache

(body)
```

## Specifications

## Browser compatibility

## See also

- Connection
- Connection management in HTTP/1.x
- Keep-Alive Header IETF Internet Draft

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Keep-Alive
