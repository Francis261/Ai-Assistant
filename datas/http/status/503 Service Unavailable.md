# 503 Service Unavailable

Source: https://devdocs.io/http/status/503

# 503 Service Unavailable

The HyperText Transfer Protocol (HTTP) 503 Service Unavailable server error response code indicates that the server is not ready to handle the request.

Common causes are a server that is down for maintenance or that is overloaded. This response should be used for temporary conditions and the Retry-After HTTP header should, if possible, contain the estimated time for the recovery of the service.

Note: together with this response, a user-friendly page explaining the problem should be sent.

Caching-related headers that are sent along with this response should be taken care of, as a 503 status is often a temporary condition and responses shouldn't usually be cached.

## Status

```
503 Service Unavailable
```

## Specifications

## Browser compatibility

## See also

- Retry-After
- HTTP/1.1: Status Code Definitions

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503
