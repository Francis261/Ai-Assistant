# 428 Precondition Required

Source: https://devdocs.io/http/status/428

# 428 Precondition Required

The HTTP 428 Precondition Required response status code indicates that the server requires the request to be conditional.

Typically, this means that a required precondition header, such as If-Match, is missing.

When a precondition header is not matching the server side state, the response should be 412 Precondition Failed.

## Status

```
428 Precondition Required
```

## Specifications

## See also

- HTTP conditional requests
- If-Match
- 412

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428
