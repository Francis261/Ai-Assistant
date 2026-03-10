# SourceMap

Source: https://devdocs.io/http/headers/sourcemap

# SourceMap

The SourceMap HTTP response header links generated code to a source map, enabling the browser to reconstruct the original source and present the reconstructed original in the debugger.

## Syntax

```
SourceMap: <url>
X-SourceMap: <url> (deprecated)
```

### Directives

A relative (to the request URL) or absolute URL pointing to a source map file.

## Examples

```
SourceMap: /path/to/file.js.map
```

## Specifications

## Browser compatibility

## See also

- Firefox Developer Tools: using a source map

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/SourceMap
