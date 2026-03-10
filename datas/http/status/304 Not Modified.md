# 304 Not Modified

Source: https://devdocs.io/http/status/304

# 304 Not Modified

The HTTP 304 Not Modified client redirection response code indicates that there is no need to retransmit the requested resources. It is an implicit redirection to a cached resource. This happens when the request method is a safe method, such as GET or HEAD, or when the request is conditional and uses an If-None-Match or an If-Modified-Since header.

The equivalent 200 OK response would have included the headers Cache-Control, Content-Location, Date, ETag, Expires, and Vary.

Note: Many developer tools' network panels of browsers create extraneous requests leading to 304 responses, so that access to the local cache is visible to developers.

## Status

```
304 Not Modified
```

## Specifications

## Browser compatibility

### Compatibility notes

- Browser behavior differs if this response erroneously includes a body on persistent connections See 204 No Content for more detail.

## See also

- If-Modified-Since
- If-None-Match

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304
