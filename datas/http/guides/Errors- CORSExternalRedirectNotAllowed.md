# Errors: CORSExternalRedirectNotAllowed

Source: https://devdocs.io/http/cors/errors/corsexternalredirectnotallowed

# Reason: CORS request external redirect not allowed

## Reason

```
Reason: CORS request external redirect not allowed
```

## What went wrong?

The CORS request was responded to by the server with an HTTP redirect to a URL on a different origin than the original request, which is not permitted during CORS requests.

For example, if the page https://service.tld/fetchdata were requested, and the HTTP response is "301 Moved Permanently", "307 Temporary Redirect", or "308 Permanent Redirect" with a Location of https://anotherservice.net/getdata, the CORS request will fail in this manner.

To fix the problem, update your code to use the new URL as reported by the redirect, thereby avoiding the redirect.

## See also

- CORS errors
- Glossary: CORS
- CORS introduction

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSExternalRedirectNotAllowed
