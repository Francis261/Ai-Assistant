# 414 URI Too Long

Source: https://devdocs.io/http/status/414

# 414 URI Too Long

The HTTP 414 URI Too Long response status code indicates that the URI requested by the client is longer than the server is willing to interpret.

There are a few rare conditions when this might occur:

- when a client has improperly converted a POST request to a GET request with long query information,
- when the client has descended into a loop of redirection (for example, a redirected URI prefix that points to a suffix of itself),
- or when the server is under attack by a client attempting to exploit potential security holes.

## Status

```
414 URI Too Long
```

## Specifications

## See also

- URI

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414
