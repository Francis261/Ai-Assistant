# Errors: CORSMultipleAllowOriginNotAllowed

Source: https://devdocs.io/http/cors/errors/corsmultiplealloworiginnotallowed

# Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed

## Reason

```
Reason: Multiple CORS header 'Access-Control-Allow-Origin' not allowed
```

## What went wrong?

More than one Access-Control-Allow-Origin header was sent by the server. This isn't allowed.

If you have access to the server you can change your implementation to echo back an origin in the Access-Control-Allow-Origin header. You cannot send back a list of origins, because browsers only accept a value that is either a single origin or null

## See also

- CORS errors
- Glossary: CORS
- CORS introduction
- Enable CORS: I want to add CORS support to my server

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSMultipleAllowOriginNotAllowed
