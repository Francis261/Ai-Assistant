# Last-Modified

Source: https://devdocs.io/http/headers/last-modified

# Last-Modified

The Last-Modified response HTTP header contains a date and time when the origin server believes the resource was last modified. It is used as a validator to determine if the resource is the same as the previously stored one. Less accurate than an ETag header, it is a fallback mechanism. Conditional requests containing If-Modified-Since or If-Unmodified-Since headers make use of this field.

## Syntax

```
Last-Modified: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
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
Last-Modified: Wed, 21 Oct 2015 07:28:00 GMT
```

## Specifications

## Browser compatibility

## See also

- If-Modified-Since
- If-Unmodified-Since
- Etag

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified
