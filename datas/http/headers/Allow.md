# Allow

Source: https://devdocs.io/http/headers/allow

# Allow

The Allow header lists the set of methods supported by a resource.

This header must be sent if the server responds with a 405 Method Not Allowed status code to indicate which request methods can be used. An empty Allow header indicates that the resource allows no request methods, which might occur temporarily for a given resource, for example.

## Syntax

```
Allow: <http-methods>
```

## Directives

The comma-separated list of allowed HTTP request methods.

## Examples

```
Allow: GET, POST, HEAD
```

## Specifications

## See also

- 405
- Server

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Allow
