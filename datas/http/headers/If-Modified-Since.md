# If-Modified-Since

Source: https://devdocs.io/http/headers/if-modified-since

# If-Modified-Since

The If-Modified-Since request HTTP header makes the request conditional: the server sends back the requested resource, with a 200 status, only if it has been last modified after the given date. If the resource has not been modified since, the response is a 304 without any body; the Last-Modified response header of a previous request contains the date of last modification. Unlike If-Unmodified-Since, If-Modified-Since can only be used with a GET or HEAD.

When used in combination with If-None-Match, it is ignored, unless the server doesn't support If-None-Match.

The most common use case is to update a cached entity that has no associated ETag.

## Syntax

```
If-Modified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Directives

One of "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", or "Sun" (case-sensitive).

2 digit day number, e.g. "04" or "23".

One of "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" (case sensitive).

4 digit year number, e.g. "1990" or "2016".

2 digit hour number, e.g. "09" or "23".

2 digit minute number, e.g. "04" or "59".

2 digit second number, e.g. "04" or "59".

Greenwich Mean Time. HTTP dates are always expressed in GMT, never in local time.

## Examples

```
If-Modified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## Specifications

## Browser compatibility

## See also

- ETag
- If-Unmodified-since
- If-Match
- If-None-Match
- 304 Not Modified

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since
