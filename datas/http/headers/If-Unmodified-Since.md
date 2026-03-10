# If-Unmodified-Since

Source: https://devdocs.io/http/headers/if-unmodified-since

# If-Unmodified-Since

The HyperText Transfer Protocol (HTTP) If-Unmodified-Since request header makes the request for the resource conditional: the server will send the requested resource or accept it in the case of a POST or another non-safe method only if the resource has not been modified after the date specified by this HTTP header. If the resource has been modified after the specified date, the response will be a 412 Precondition Failed error.

The If-Unmodified-Since HTTP header is commonly used in the following situations:

- In conjunction with non-safe methods, like POST, this header can be used to implement an optimistic concurrency control, as is done by some wikis: editions are rejected if the stored document has been modified since the original was retrieved.
- In conjunction with a range request using the Range header, this header can be used to ensure that the new fragment requested comes from an unmodified document.

## Syntax

```
If-Unmodified-Since: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
```

## Directives

A 3-letter description of the day of the week. One of "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", or "Sun" (case-sensitive).

A 2-digit day number of the month. Examples: "04", "23".

A 3-letter description of the month. One of "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" (case-sensitive).

A 4-digit year number. Examples: "1990", "2016".

A 2-digit hour number based on a 24-hour system. Examples: "09", "23".

A 2-digit minute number. Examples: "04", "59".

A 2-digit second number. Examples: "04", "59".

Greenwich Mean Time. HTTP dates are always expressed in GMT, never in local time.

## Examples

```
If-Unmodified-Since: Wed, 21 Oct 2015 07:28:00 GMT
```

## Specifications

## Browser compatibility

## See also

- Last-Modified
- If-Modified-Since
- If-Match
- If-None-Match
- Range
- 412 Precondition Failed

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Unmodified-Since
