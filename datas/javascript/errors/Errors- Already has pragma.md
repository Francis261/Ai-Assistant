# Warning: -file- is being assigned a //# sourceMappingURL, but already has one

Source: https://devdocs.io/javascript/errors/already_has_pragma

The JavaScript warning "-file- is being assigned a //# sourceMappingURL, but already has one." occurs when a source map has been specified more than once for a given JavaScript source.

## Message

```
Warning: -file- is being assigned a //# sourceMappingURL, but already has one.
```

## Error type

A warning. JavaScript execution won't be halted.

## What went wrong?

A source map has been specified more than once for a given JavaScript source.

JavaScript sources are often combined and minified to make delivering them from the server more efficient. With source maps, the debugger can map the code being executed to the original source files. There are two ways to assign a source map, either by using a comment or by setting a header to the JavaScript file.

## Examples

### Setting source maps

Setting a source map by using a comment in the file:

```
//# sourceMappingURL=http://example.com/path/to/your/sourcemap.map
```

Or, alternatively, you can set a header to your JavaScript file:

```
X-SourceMap: /path/to/file.js.map
```

## See also

- Use a source map in the Firefox source docs
- Introduction to JavaScript source maps on developer.chrome.com (2012)

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Already_has_pragma
