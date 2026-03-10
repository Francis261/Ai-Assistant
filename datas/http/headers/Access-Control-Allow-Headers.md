# Access-Control-Allow-Headers

Source: https://devdocs.io/http/headers/access-control-allow-headers

# Access-Control-Allow-Headers

The Access-Control-Allow-Headers response header is used in response to a preflight request which includes the Access-Control-Request-Headers to indicate which HTTP headers can be used during the actual request.

This header is required if the request has an Access-Control-Request-Headers header.

Note: CORS-safelisted request headers are always allowed and usually aren't listed in Access-Control-Allow-Headers (unless there is a need to circumvent the safelist additional restrictions).

## Syntax

```
Access-Control-Allow-Headers: [<header-name>[, <header-name>]*]
Access-Control-Allow-Headers: *
```

## Directives

The name of a supported request header. The header may list any number of headers, separated by commas.

The value "*" only counts as a special wildcard value for requests without credentials (requests without HTTP cookies or HTTP authentication information). In requests with credentials, it is treated as the literal header name "*" without special semantics. Note that the Authorization header can't be wildcarded and always needs to be listed explicitly.

## Examples

### A custom header

Here's an example of what an Access-Control-Allow-Headers header might look like. It indicates that a custom header named X-Custom-Header is supported by CORS requests to the server (in addition to the CORS-safelisted request headers).

```
Access-Control-Allow-Headers: X-Custom-Header
```

### Multiple headers

This example shows Access-Control-Allow-Headers when it specifies support for multiple headers.

```
Access-Control-Allow-Headers: X-Custom-Header, Upgrade-Insecure-Requests
```

### Bypassing additional restrictions

Although CORS-safelisted request headers are always allowed and don't usually need to be listed in Access-Control-Allow-Headers, listing them anyway will circumvent the additional restrictions that apply.

```
Access-Control-Allow-Headers: Accept
```

### Example preflight request

Let's look at an example of a preflight request involving Access-Control-Allow-Headers.

#### Request

First, the request. The preflight request is an OPTIONS request that includes some combination of the three preflight request headers: Access-Control-Request-Method, Access-Control-Request-Headers, and Origin.

The preflight request below tells the server that we want to send a CORS GET request with the headers listed in Access-Control-Request-Headers (Content-Type and x-requested-with).

```
OPTIONS /resource/foo
Access-Control-Request-Method: GET
Access-Control-Request-Headers: Content-Type, x-requested-with
Origin: https://foo.bar.org
```

#### Response

If the CORS request indicated by the preflight request is authorized, the server will respond to the preflight request with a message that indicates the allowed origin, methods, and headers. Below we see that Access-Control-Allow-Headers includes the headers that were requested.

```
HTTP/1.1 200 OK
Content-Length: 0
Connection: keep-alive
Access-Control-Allow-Origin: https://foo.bar.org
Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE
Access-Control-Allow-Headers: Content-Type, x-requested-with
Access-Control-Max-Age: 86400
```

If the requested method isn't supported, the server will respond with an error.

## Specifications

## Browser compatibility

## See also

- Access-Control-Allow-Origin
- Access-Control-Expose-Headers
- Access-Control-Allow-Methods
- Access-Control-Request-Headers

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers
