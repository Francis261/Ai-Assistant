# If-Range

Source: https://devdocs.io/http/headers/if-range

# If-Range

The If-Range HTTP request header makes a range request conditional: if the condition is fulfilled, the range request is issued, and the server sends back a 206 Partial Content answer with the appropriate body. If the condition is not fulfilled, the full resource is sent back with a 200 OK status.

This header can be used either with the Last-Modified validator or with ETag, but not with both.

The most common use case is to resume a download, to guarantee that the stored resource has not been modified since the last fragment has been received.

## Syntax

```
If-Range: <day-name>, <day> <month> <year> <hour>:<minute>:<second> GMT
If-Range: <etag>
```

## Directives

An entity tag uniquely representing the requested resource. It is a string of ASCII characters placed between double quotes (Like "675af34563dc-tr34"). A weak entity tag (one prefixed by W/) must not be used in this header.

One of "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", or "Sun" (case-sensitive).

2 digit day number, e.g. "04" or "23".

One of "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" (case-sensitive).

4 digit year number, e.g. "1990" or "2016".

2 digit hour number, e.g. "09" or "23".

2 digit minute number, e.g. "04" or "59".

2 digit second number, e.g. "04" or "59".

Greenwich Mean Time. HTTP dates are always expressed in GMT, never in local time.

## Examples

```
If-Range: Wed, 21 Oct 2015 07:28:00 GMT
```

## Specifications

## Browser compatibility

## See also

- ETag
- Last-Modified
- If-Modified-Since
- If-Unmodified-Since
- If-Match
- If-None-Match
- 206 Partial Content
- HTTP Conditional Requests

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Range
