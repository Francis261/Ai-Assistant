# 429 Too Many Requests

Source: https://devdocs.io/http/status/429

# 429 Too Many Requests

The HTTP 429 Too Many Requests response status code indicates the user has sent too many requests in a given amount of time ("rate limiting").

A Retry-After header might be included to this response indicating how long to wait before making a new request.

## Status

```
429 Too Many Requests
```

## Example

```
HTTP/1.1 429 Too Many Requests
Content-Type: text/html
Retry-After: 3600
```

## Specifications

## See also

- Retry-After
- HTTP/1.1: Status Code Definitions
- Python solution: How to avoid HTTP error 429 python

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429
