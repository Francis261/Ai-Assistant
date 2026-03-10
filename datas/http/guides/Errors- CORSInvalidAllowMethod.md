# Errors: CORSInvalidAllowMethod

Source: https://devdocs.io/http/cors/errors/corsinvalidallowmethod

# Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'

## Reason

```
Reason: invalid token 'xyz' in CORS header 'Access-Control-Allow-Methods'
```

## What went wrong?

The response to the CORS request that was sent by the server includes an Access-Control-Allow-Methods header which includes at least one invalid method name.

The Access-Control-Allow-Methods header is sent by the server to let the client know what HTTP request methods it supports for CORS requests. The header's value is a comma-delineated string of HTTP method names, such as GET, POST, or HEAD. If any of the specified values are not recognized by the client user agent, this error occurs.

This is a problem that most likely can only be fixed on the server side, by modifying the server's configuration to no longer send the invalid or unknown method name with the Access-Control-Allow-Methods header. It may also be worth checking to ensure that the user agent or HTTP library you're using on the client is up-to-date.

## See also

- CORS errors
- Glossary: CORS
- CORS introduction
- HTTP request methods

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSInvalidAllowMethod
