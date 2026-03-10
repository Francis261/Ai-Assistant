# 406 Not Acceptable

Source: https://devdocs.io/http/status/406

# 406 Not Acceptable

The HyperText Transfer Protocol (HTTP) 406 Not Acceptable client error response code indicates that the server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers, and that the server is unwilling to supply a default representation.

Proactive content negotiation headers include:

- Accept
- Accept-Encoding
- Accept-Language

In practice, this error is very rarely used. Instead of responding using this error code, which would be cryptic for the end user and difficult to fix, servers ignore the relevant header and serve an actual page to the user. It is assumed that even if the user won't be completely happy, they will prefer this to an error code.

If a server returns such an error status, the body of the message should contain the list of the available representations of the resources, allowing the user to choose among them.

## Status

```
406 Not Acceptable
```

## Specifications

## Browser compatibility

## See also

- Accept
- Accept-Encoding
- Accept-Language
- HTTP content negotiation

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406
