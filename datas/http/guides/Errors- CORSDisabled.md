# Errors: CORSDisabled

Source: https://devdocs.io/http/cors/errors/corsdisabled

# Reason: CORS disabled

## Reason

```
Reason: CORS disabled
```

## What went wrong?

A request that needs to use CORS was attempted, but CORS is disabled in the user's browser. When this happens, the user needs to turn CORS back on in their browser.

In Firefox, the preference that disables CORS is content.cors.disable. Setting this to true disables CORS, so whenever that's the case, CORS requests will always fail with this error.

## See also

- CORS errors
- Glossary: CORS
- CORS introduction

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSDisabled
