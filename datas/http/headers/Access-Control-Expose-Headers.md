# Access-Control-Expose-Headers

Source: https://devdocs.io/http/headers/access-control-expose-headers

# Access-Control-Expose-Headers

The Access-Control-Expose-Headers response header allows a server to indicate which response headers should be made available to scripts running in the browser, in response to a cross-origin request.

Only the CORS-safelisted response headers are exposed by default. For clients to be able to access other headers, the server must list them using the Access-Control-Expose-Headers header.

## Syntax

```
Access-Control-Expose-Headers: [<header-name>[, <header-name>]*]
Access-Control-Expose-Headers: *
```

## Directives

A list of zero or more comma-separated header names that clients are allowed to access from a response. These are in addition to the CORS-safelisted response headers.

The value "*" only counts as a special wildcard value for requests without credentials (requests without HTTP cookies or HTTP authentication information). In requests with credentials, it is treated as the literal header name "*" without special semantics.

## Examples

The CORS-safelisted response headers are: Cache-Control, Content-Language, Content-Length, Content-Type, Expires, Last-Modified, Pragma. To expose a non-CORS-safelisted response header, you can specify:

```
Access-Control-Expose-Headers: Content-Encoding
```

To additionally expose a custom header, like Kuma-Revision, you can specify multiple headers separated by a comma:

```
Access-Control-Expose-Headers: Content-Encoding, Kuma-Revision
```

For requests without credentials, a server can also respond with a wildcard value:

```
Access-Control-Expose-Headers: *
```

However, this won't wildcard the Authorization header, so if you need to expose that, you will need to list it explicitly:

```
Access-Control-Expose-Headers: *, Authorization
```

## Specifications

## Browser compatibility

## See also

- Access-Control-Allow-Headers
- Access-Control-Allow-Origin

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers
