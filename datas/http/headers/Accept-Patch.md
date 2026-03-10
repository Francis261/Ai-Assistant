# Accept-Patch

Source: https://devdocs.io/http/headers/accept-patch

# Accept-Patch

The Accept-Patch response HTTP header advertises which media-type the server is able to understand in a PATCH request.

Accept-Patch in response to any method means that PATCH is allowed on the resource identified by the Request-URI. Two common cases lead to this:

A server receiving a PATCH request with an unsupported media type could reply with 415 Unsupported Media Type and an Accept-Patch header referencing one or more supported media types.

Note:

- An IANA registry maintains a complete list of official content encodings.
- Two others content encoding, bzip and bzip2, are sometimes used, though not standard. They implement the algorithm used by these two UNIX programs. Note that the first one was discontinued due to patent licensing problems.

## Syntax

```
Accept-Patch: application/example, text/example
Accept-Patch: text/example;charset=utf-8
Accept-Patch: application/merge-patch+json
```

## Directives

None

## Examples

```
Accept-Patch: application/example, text/example

Accept-Patch: text/example;charset=utf-8

Accept-Patch: application/merge-patch+json
```

## Specifications

## Browser compatibility

## See also

- Http method PATCH
- HTTP Semantic and context RFC 7231, section 4.3.4: PUT

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Patch
