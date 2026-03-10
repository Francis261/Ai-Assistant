# 412 Precondition Failed

Source: https://devdocs.io/http/status/412

# 412 Precondition Failed

The HyperText Transfer Protocol (HTTP) 412 Precondition Failed client error response code indicates that access to the target resource has been denied. This happens with conditional requests on methods other than GET or HEAD when the condition defined by the If-Unmodified-Since or If-None-Match headers is not fulfilled. In that case, the request, usually an upload or a modification of a resource, cannot be made and this error response is sent back.

## Status

```
412 Precondition Failed
```

## Examples

```
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Avoiding mid-air collisions

With the help of the ETag and the If-Match headers, you can detect mid-air edit collisions.

For example, when editing MDN, the current wiki content is hashed and put into an Etag in the response:

```
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

When saving changes to a wiki page (posting data), the POST request will contain the If-Match header containing the ETag values to check freshness against.

```
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

If the hashes don't match, it means that the document has been edited in-between and a 412 Precondition Failed error is thrown.

## Specifications

## Browser compatibility

The information below has been pulled from MDN's GitHub (https://github.com/mdn/browser-compat-data).

## See also

- 304
- If-Unmodified-Since
- If-None-Match
- 428

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412
