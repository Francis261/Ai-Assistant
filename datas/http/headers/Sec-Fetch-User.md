# Sec-Fetch-User

Source: https://devdocs.io/http/headers/sec-fetch-user

# Sec-Fetch-User

The Sec-Fetch-User fetch metadata request header is only sent for requests initiated by user activation, and its value will always be ?1.

A server can use this header to identify whether a navigation request from a document, iframe, etc., was originated by the user.

## Syntax

```
Sec-Fetch-User: ?1
```

## Directives

The value will always be ?1. When a request is triggered by something other than a user activation, the spec requires browsers to omit the header completely.

## Examples

If a user clicks on a page link to another page on the same origin, the resulting request would have the following headers:

```
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1
```

## Specifications

## Browser compatibility

## See also

- Related headers
  - Sec-Fetch-Dest
  - Sec-Fetch-Mode
  - Sec-Fetch-Site
- Protect your resources from web attacks with Fetch Metadata (web.dev)
- Fetch Metadata Request Headers playground (secmetadata.appspot.com)

- Sec-Fetch-Dest
- Sec-Fetch-Mode
- Sec-Fetch-Site

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-Fetch-User
