# Errors: CORSOriginHeaderNotAdded

Source: https://devdocs.io/http/cors/errors/corsoriginheadernotadded

# Reason: CORS header 'Origin' cannot be added

## Reason

```
Reason: CORS header 'Origin' cannot be added
```

## What went wrong?

The user agent was unable to add the required Origin header to the HTTP request. All CORS requests must have an Origin header.

This can happen if the JavaScript code is running with enhanced privileges allowing it access to multiple domains' content, for example.

## See also

- CORS errors
- Glossary: CORS
- CORS introduction

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSOriginHeaderNotAdded
