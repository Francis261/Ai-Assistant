# HEAD

Source: https://devdocs.io/http/methods/head

# HEAD

The HEAD requests the headers that would be returned if the HEAD request's URL was instead requested with the HTTP GET method. For example, if a URL might produce a large download, a HEAD request could read its Content-Length header to check the filesize without actually downloading the file.

Warning: A response to a HEAD method should not have a body. If it has one anyway, that body must be ignored: any representation headers that might describe the erroneous body are instead assumed to describe the response which a similar GET request would have received.

If the response to a HEAD request shows that a cached URL response is now outdated, the cached copy is invalidated even if no GET request was made.

## Syntax

```
HEAD /index.html
```

## Specifications

## Browser compatibility

## See also

- GET

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/HEAD
