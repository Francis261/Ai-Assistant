# Access-Control-Allow-Methods

Source: https://devdocs.io/http/headers/access-control-allow-methods

# Access-Control-Allow-Methods

The Access-Control-Allow-Methods response header specifies one or more methods allowed when accessing a resource in response to a preflight request.

## Syntax

```
Access-Control-Allow-Methods: <method>, <method>, …
Access-Control-Allow-Methods: *
```

## Directives

A comma-delimited list of the allowed HTTP request methods.

The value "*" only counts as a special wildcard value for requests without credentials (requests without HTTP cookies or HTTP authentication information). In requests with credentials, it is treated as the literal method name "*" without special semantics.

## Examples

```
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Methods: *
```

## Specifications

## Browser compatibility

## See also

- Access-Control-Allow-Origin
- Access-Control-Expose-Headers
- Access-Control-Allow-Headers
- Access-Control-Request-Method

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods
