# 204 No Content

Source: https://devdocs.io/http/status/204

# 204 No Content

The HTTP 204 No Content success status response code indicates that a request has succeeded, but that the client doesn't need to navigate away from its current page.

This might be used, for example, when implementing "save and continue editing" functionality for a wiki site. In this case a PUT request would be used to save the page, and the 204 No Content response would be sent to indicate that the editor should not be replaced by some other page.

A 204 response is cacheable by default (an ETag header is included in such a response).

## Status

```
204 No Content
```

## Specifications

## Browser compatibility

### Compatibility notes

- Although this status code is intended to describe a response with no body, servers may erroneously include data following the headers. The protocol allows user agents to vary in how they process such responses (discussion regarding this specification text can be found here). This is observable in persistent connections, where the invalid body may include a distinct response to a subsequent request. Apple Safari rejects any such data. Google Chrome and Microsoft Edge discard up to four invalid bytes preceding a valid response. Firefox tolerates in excess of a kilobyte of invalid data preceding a valid response.

## See also

- HTTP request methods

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204
