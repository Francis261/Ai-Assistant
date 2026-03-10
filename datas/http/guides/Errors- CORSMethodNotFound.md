# Errors: CORSMethodNotFound

Source: https://devdocs.io/http/cors/errors/corsmethodnotfound

# Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'

## Reason

```
Reason: Did not find method in CORS header 'Access-Control-Allow-Methods'
```

## What went wrong?

The HTTP method being used by the CORS request is not included in the list of methods specified by the response's Access-Control-Allow-Methods header. This header specifies a comma-delineated list of the HTTP methods which may be used when using CORS to access the URL specified in the request; if the request is using any other method, this error occurs.

For example, if the response includes:

```
Access-Control-Allow-Methods: GET,HEAD,POST
```

Trying to use a PUT request will fail with this error.

Make sure your code only uses the permitted HTTP methods when accessing the service.

Note: If the server includes any unrecognized or undefined method names in its Access-Control-Allow-methods header, a different error occurs: Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'.

## See also

- CORS errors
- Glossary: CORS
- CORS introduction
- HTTP request methods

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSMethodNotFound
