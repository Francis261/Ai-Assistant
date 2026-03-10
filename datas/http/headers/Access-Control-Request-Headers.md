# Access-Control-Request-Headers

Source: https://devdocs.io/http/headers/access-control-request-headers

# Access-Control-Request-Headers

The Access-Control-Request-Headers request header is used by browsers when issuing a preflight request to let the server know which HTTP headers the client might send when the actual request is made (such as with setRequestHeader()). The complementary server-side header of Access-Control-Allow-Headers will answer this browser-side header.

## Syntax

```
Access-Control-Request-Headers: <header-name>, <header-name>, …
```

## Directives

A comma-delimited list of HTTP headers that are included in the request.

## Examples

```
Access-Control-Request-Headers: X-PINGOTHER, Content-Type
```

## Specifications

## Browser compatibility

## See also

- Access-Control-Request-Method

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Headers
