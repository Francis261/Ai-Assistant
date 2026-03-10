# Access-Control-Max-Age

Source: https://devdocs.io/http/headers/access-control-max-age

# Access-Control-Max-Age

The Access-Control-Max-Age response header indicates how long the results of a preflight request (that is the information contained in the Access-Control-Allow-Methods and Access-Control-Allow-Headers headers) can be cached.

## Syntax

```
Access-Control-Max-Age: <delta-seconds>
```

## Directives

Maximum number of seconds the results can be cached, as an unsigned non-negative integer. Firefox caps this at 24 hours (86400 seconds). Chromium (prior to v76) caps at 10 minutes (600 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.

## Examples

Cache results of a preflight request for 10 minutes:

```
Access-Control-Max-Age: 600
```

## Specifications

## Browser compatibility

## See also

- Access-Control-Allow-Headers
- Access-Control-Allow-Methods

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age
