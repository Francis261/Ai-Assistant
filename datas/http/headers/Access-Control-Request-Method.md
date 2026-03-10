# Access-Control-Request-Method

Source: https://devdocs.io/http/headers/access-control-request-method

# Access-Control-Request-Method

The Access-Control-Request-Method request header is used by browsers when issuing a preflight request, to let the server know which HTTP method will be used when the actual request is made. This header is necessary as the preflight request is always an OPTIONS and doesn't use the same method as the actual request.

## Syntax

```
Access-Control-Request-Method: <method>
```

## Directives

One of the HTTP request methods, for example GET, POST, or DELETE.

## Examples

```
Access-Control-Request-Method: POST
```

## Specifications

## Browser compatibility

## See also

- Access-Control-Request-Headers

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Method
