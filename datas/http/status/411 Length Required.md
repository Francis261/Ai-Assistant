# 411 Length Required

Source: https://devdocs.io/http/status/411

# 411 Length Required

The HyperText Transfer Protocol (HTTP) 411 Length Required client error response code indicates that the server refuses to accept the request without a defined Content-Length header.

Note: by specification, when sending data in a series of chunks, the Content-Length header is omitted and at the beginning of each chunk you need to add the length of the current chunk in hexadecimal format. See Transfer-Encoding for more details.

## Status

```
411 Length Required
```

## Specifications

## See also

- Content-Length
- Transfer-Encoding

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411
