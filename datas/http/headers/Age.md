# Age

Source: https://devdocs.io/http/headers/age

# Age

The Age header contains the time in seconds the object was in a proxy cache.

The Age header is usually close to zero. If it is Age: 0, it was probably fetched from the origin server; otherwise, it was usually calculated as a difference between the proxy's current date and the Date general header included in the HTTP response.

## Syntax

```
Age: <delta-seconds>
```

## Directives

A non-negative integer that is time in seconds the object was in a proxy cache.

## Examples

```
Age: 24
```

## Specifications

## Browser compatibility

## See also

- Cache-Control
- Expires

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Age
