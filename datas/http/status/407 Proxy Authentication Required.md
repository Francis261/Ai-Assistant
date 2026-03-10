# 407 Proxy Authentication Required

Source: https://devdocs.io/http/status/407

# 407 Proxy Authentication Required

The HTTP 407 Proxy Authentication Required client error status response code indicates that the request has not been applied because it lacks valid authentication credentials for a proxy server that is between the browser and the server that can access the requested resource.

This status is sent with a Proxy-Authenticate header that contains information on how to authorize correctly.

## Status

```
407 Proxy Authentication Required
```

## Example response

```
HTTP/1.1 407 Proxy Authentication Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
Proxy-Authenticate: Basic realm="Access to internal site"
```

## Specifications

## Browser compatibility

## See also

- HTTP authentication
- WWW-Authenticate
- Authorization
- Proxy-Authorization
- Proxy-Authenticate
- 401, 403

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407
