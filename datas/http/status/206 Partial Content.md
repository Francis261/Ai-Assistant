# 206 Partial Content

Source: https://devdocs.io/http/status/206

# 206 Partial Content

The HTTP 206 Partial Content success status response code indicates that the request has succeeded and the body contains the requested ranges of data, as described in the Range header of the request.

If there is only one range, the Content-Type of the whole response is set to the type of the document, and a Content-Range is provided.

If several ranges are sent back, the Content-Type is set to multipart/byteranges and each fragment covers one range, with Content-Range and Content-Type describing it.

## Status

```
206 Partial Content
```

## Examples

A response containing one single range:

```
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Range: bytes 21010-47021/47022
Content-Length: 26012
Content-Type: image/gif

# 26012 bytes of partial image data…
```

A response containing several ranges:

```
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Length: 1741
Content-Type: multipart/byteranges; boundary=String_separator

--String_separator
Content-Type: application/pdf
Content-Range: bytes 234-639/8000

# the first range
--String_separator
Content-Type: application/pdf
Content-Range: bytes 4590-7999/8000

# the second range
--String_separator--
```

## Specifications

## Browser compatibility

## See also

- If-Range
- Range
- Content-Range
- Content-Type

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206
