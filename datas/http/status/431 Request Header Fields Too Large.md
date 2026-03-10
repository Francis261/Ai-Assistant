# 431 Request Header Fields Too Large

Source: https://devdocs.io/http/status/431

# 431 Request Header Fields Too Large

The HTTP 431 Request Header Fields Too Large response status code indicates that the server refuses to process the request because the request's HTTP headers are too long. The request may be resubmitted after reducing the size of the request headers.

431 can be used when the total size of request headers is too large, or when a single header field is too large. To help those running into this error, indicate which of the two is the problem in the response body — ideally, also include which headers are too large. This lets users attempt to fix the problem, such as by clearing their cookies.

Servers will often produce this status if:

- The Referer URL is too long
- There are too many Cookies sent in the request

## Status

```
431 Request Header Fields Too Large
```

## Specifications

## See also

- 414 URI Too Long
- Request header

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431
