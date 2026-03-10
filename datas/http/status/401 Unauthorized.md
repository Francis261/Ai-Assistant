# 401 Unauthorized

Source: https://devdocs.io/http/status/401

# 401 Unauthorized

The HyperText Transfer Protocol (HTTP) 401 Unauthorized response status code indicates that the client request has not been completed because it lacks valid authentication credentials for the requested resource.

This status code is sent with an HTTP WWW-Authenticate response header that contains information on how the client can request for the resource again after prompting the user for authentication credentials.

This status code is similar to the 403 Forbidden status code, except that in situations resulting in this status code, user authentication can allow access to the resource.

## Status

```
401 Unauthorized
```

## Example response

```
HTTP/1.1 401 Unauthorized
Date: Wed, 21 Oct 2015 07:28:00 GMT
WWW-Authenticate: Basic realm="Access to staging site"
```

## Specifications

## Browser compatibility

## See also

- HTTP authentication
- WWW-Authenticate
- Authorization
- Proxy-Authorization
- Proxy-Authenticate
- 403, 407

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
