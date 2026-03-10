# Errors: CORSPreflightDidNotSucceed

Source: https://devdocs.io/http/cors/errors/corspreflightdidnotsucceed

# Reason: CORS preflight channel did not succeed

## Reason

```
Reason: CORS preflight channel did not succeed
```

## What went wrong?

The CORS request requires preflight, preflighting could not be performed. There are a couple of reasons why preflighting might fail:

- A cross-site request has previously been performed that already did a preflight, and doing the preflight again is not permitted. Make sure your code only preflights once per connection.
- The preflight request suffered any kind of networking error that might ordinarily occur.

## See also

- CORS errors
- Glossary: CORS
- CORS introduction

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSPreflightDidNotSucceed
