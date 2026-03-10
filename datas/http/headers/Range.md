# Range

Source: https://devdocs.io/http/headers/range

# Range

The Range HTTP request header indicates the part of a document that the server should return. Several parts can be requested with one Range header at once, and the server may send back these ranges in a multipart document. If the server sends back ranges, it uses the 206 Partial Content for the response. If the ranges are invalid, the server returns the 416 Range Not Satisfiable error. The server can also ignore the Range header and return the whole document with a 200 status code.

## Syntax

```
Range: <unit>=<range-start>-
Range: <unit>=<range-start>-<range-end>
Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>
Range: <unit>=<range-start>-<range-end>, <range-start>-<range-end>, <range-start>-<range-end>
Range: <unit>=-<suffix-length>
```

## Directives

The unit in which ranges are specified. This is usually bytes.

An integer in the given unit indicating the beginning of the request range.

An integer in the given unit indicating the end of the requested range. This value is optional and, if omitted, the end of the document is taken as the end of the range.

An integer in the given unit indicating the number of units at the end of the file to return.

## Examples

Requesting three ranges from the file.

```
Range: bytes=200-1000, 2000-6576, 19000-
```

The ranges-specifier value 19000- specifies 19000 as the first position, and omits any last position — in order to indicate that all bytes from 19000 onward are part of the third range.

Requesting the first 500 and last 500 bytes of the file. The request may be rejected by the server if the ranges overlap.

```
Range: bytes=0-499, -500
```

## Specifications

## Browser compatibility

## See also

- If-Range
- Content-Range
- Content-Type
- 206 Partial Content
- 416 Range Not Satisfiable

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range
