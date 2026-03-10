# 416 Range Not Satisfiable

Source: https://devdocs.io/http/status/416

# 416 Range Not Satisfiable

The HyperText Transfer Protocol (HTTP) 416 Range Not Satisfiable error response code indicates that a server cannot serve the requested ranges. The most likely reason is that the document doesn't contain such ranges, or that the Range header value, though syntactically correct, doesn't make sense.

The 416 response message contains a Content-Range indicating an unsatisfied range (that is a '*') followed by a '/' and the current length of the resource. E.g. Content-Range: bytes */12777

Faced with this error, browsers usually either abort the operation (for example, a download will be considered as non-resumable) or ask for the whole document again.

## Status

```
416 Range Not Satisfiable
```

## Specifications

## Browser compatibility

## See also

- 206 Partial Content
- Content-Range
- Range

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416
