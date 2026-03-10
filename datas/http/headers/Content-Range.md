# Content-Range

Source: https://devdocs.io/http/headers/content-range

# Content-Range

The Content-Range response HTTP header indicates where in a full body message a partial message belongs.

## Syntax

```
Content-Range: <unit> <range-start>-<range-end>/<size>
Content-Range: <unit> <range-start>-<range-end>/*
Content-Range: <unit> */<size>
```

## Directives

The unit in which ranges are specified. This is usually bytes.

An integer in the given unit indicating the start position (zero-indexed & inclusive) of the request range.

An integer in the given unit indicating the end position (zero-indexed & inclusive) of the requested range.

The total length of the document (or '*' if unknown).

## Examples

```
Content-Range: bytes 200-1000/67589
```

## Specifications

## Browser compatibility

## See also

- If-Range
- Range
- Content-Type
- 206 Partial Content
- 416 Range Not Satisfiable

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range
