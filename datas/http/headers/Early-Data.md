# Early-Data

Source: https://devdocs.io/http/headers/early-data

# Early-Data

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The Early-Data header is set by an intermediary to indicate that the request has been conveyed in TLS early data, and also indicates that the intermediary understands the 425 (Too Early) status code.

The Early-Data header is not set by the originator of the request (i.e., a browser).

## Syntax

```
Early-Data: 1
```

## Examples

```
GET /resource HTTP/1.0
Host: example.com
Early-Data: 1
```

## Specifications

## Browser compatibility

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Early-Data
