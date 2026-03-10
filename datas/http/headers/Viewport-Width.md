# Viewport-Width

Source: https://devdocs.io/http/headers/viewport-width

# Viewport-Width

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.

Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

The Viewport-Width device client hint request header provides the client's layout viewport width in CSS pixels. The value is rounded up to the smallest following integer (i.e. ceiling value).

The hint can be used with other screen-specific hints to deliver images optimized for a specific screen size, or to omit resources that are not needed for a particular screen width.

If the Viewport-Width header appears more than once in a message the last occurrence is used.

Note:

- Client Hints are accessible only on secure origins (via TLS).
- A server has to opt in to receive the Viewport-Width header from the client, by sending the Accept-CH response header.
- Servers that opt in to the Viewport-Width client hint will typically also specify it in the Vary header. This informs caches that the server may send different responses based on the header value in a request.
- Viewport-Width was removed from the original client hints specification in draft-ietf-httpbis-client-hints-07. The proposed replacement is Sec-CH-Viewport-Width (Responsive Image Client Hints).

## Syntax

```
Viewport-Width: <number>
```

## Directives

The width of the user's viewport in CSS pixels, rounded up to the nearest integer.

## Examples

A server must first opt in to receive the Viewport-Width header by sending the response header Accept-CH containing the directive Viewport-Width.

```
Accept-CH: Viewport-Width
```

Then on subsequent requests the client might send Viewport-Width header back:

```
Viewport-Width: 320
```

## Browser compatibility

## See also

- Improving user privacy and developer experience with User-Agent Client Hints (web.dev)
- Device client hints
  - Content-DPR
  - Device-Memory
  - DPR
  - Width
- Accept-CH
- HTTP Caching > Varying responses and Vary

- Content-DPR
- Device-Memory
- DPR
- Width

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Viewport-Width
