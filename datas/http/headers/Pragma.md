# Pragma

Source: https://devdocs.io/http/headers/pragma

# Pragma

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The Pragma HTTP/1.0 general header is an implementation-specific header that may have various effects along the request-response chain. This header serves for backwards compatibility with the HTTP/1.0 caches that do not have a Cache-Control HTTP/1.1 header.

Note: Pragma is not specified for HTTP responses and is therefore not a reliable replacement for the general HTTP/1.1 Cache-Control header, although its behavior is the same as Cache-Control: no-cache if the Cache-Control header field is omitted in a request. Use Pragma only for backwards compatibility with HTTP/1.0 clients.

## Syntax

```
Pragma: no-cache
```

## Directives

Same as Cache-Control: no-cache. Forces caches to submit the request to the origin server for validation before a cached copy is released.

## Examples

```
Pragma: no-cache
```

## Specifications

## Browser compatibility

## See also

- Cache-Control
- Expires

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Pragma
