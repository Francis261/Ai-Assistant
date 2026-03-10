# Errors: CORSMIssingAllowCredentials

Source: https://devdocs.io/http/cors/errors/corsmissingallowcredentials

# Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'

## Reason

```
Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'
```

## What went wrong?

The CORS request requires that the server permit the use of credentials, but the server's Access-Control-Allow-Credentials header's value isn't set to true to enable their use.

To fix this problem on the client side, revise the code to not request the use of credentials.

- If the request is being issued using XMLHttpRequest, make sure you're not setting withCredentials to true.
- If using Server-sent events, make sure EventSource.withCredentials is false (it's the default value).
- If using the Fetch API, make sure Request.credentials is "omit".

To eliminate this error by changing the server's configuration, adjust the server's configuration to set the Access-Control-Allow-Credentials header's value to true.

## See also

- CORS errors
- Glossary: CORS
- CORS introduction

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSMIssingAllowCredentials
