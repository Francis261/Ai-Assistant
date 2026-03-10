# 408 Request Timeout

Source: https://devdocs.io/http/status/408

# 408 Request Timeout

The HyperText Transfer Protocol (HTTP) 408 Request Timeout response status code means that the server would like to shut down this unused connection. It is sent on an idle connection by some servers, even without any previous request by the client.

A server should send the "close" Connection header field in the response, since 408 implies that the server has decided to close the connection rather than continue waiting.

This response is used much more since some browsers, like Chrome, Firefox 27+, and IE9, use HTTP pre-connection mechanisms to speed up surfing.

Note: some servers merely shut down the connection without sending this message.

## Status

```
408 Request Timeout
```

## Specifications

## See also

- Connection
- X-DNS-Prefetch-Control

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408
