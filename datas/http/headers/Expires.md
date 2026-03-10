# Expires

Source: https://devdocs.io/http/headers/expires

# Expires

The Expires HTTP header contains the date/time after which the response is considered expired.

Invalid expiration dates with value 0 represent a date in the past and mean that the resource is already expired.

Note: If there is a Cache-Control header with the max-age or s-maxage directive in the response, the Expires header is ignored.

## Syntax

```
Expires: <http-date>
```

## Directives

An HTTP-date timestamp.

## Examples

```
Expires: Wed, 21 Oct 2015 07:28:00 GMT
```

## Specifications

## Browser compatibility

## See also

- Cache-Control
- Age

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expires
