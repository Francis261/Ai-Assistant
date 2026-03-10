# Width

Source: https://devdocs.io/http/headers/width

# Width

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.

Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

The Width device client hint request header field indicates the desired resource width in physical pixels — the intrinsic size of an image. The provided pixel value is a number rounded to the smallest following integer (i.e. ceiling value).

The hint is particularly useful because it allows the client to request a resource that is optimal for both the screen and the layout: taking into account both the density-corrected width of the screen and the image's extrinsic size within the layout.

If the desired resource width is not known at the time of the request or the resource does not have a display width, the Width header field can be omitted.

If the Width header appears more than once in a message the last occurrence is used.

Note:

- Client Hints are accessible only on secure origins (via TLS).
- A server has to opt in to receive the Width header from the client, by sending the Accept-CH response header.
- Servers that opt in to the Width client hint will typically also specify it in the Vary header. This informs caches that the server may send different responses based on the header value in a request.
- Width was removed from the client hints specification in draft-ietf-httpbis-client-hints-07. The proposed replacement is Sec-CH-Width (Responsive Image Client Hints).

## Syntax

```
Width: <number>
```

## Directives

The width of the resource in physical pixels, rounded up to the nearest integer.

## Examples

The server first needs to opt in to receive the Width header by sending the response headers Accept-CH containing Width.

```
Accept-CH: Width
```

Then on subsequent requests the client might send Width header back:

```
Width: 1920
```

## Browser compatibility

## See also

- Improving user privacy and developer experience with User-Agent Client Hints (web.dev)
- Device client hints
  - Content-DPR
  - Device-Memory
  - DPR
  - Viewport-Width
- Accept-CH
- HTTP Caching > Varying responses and Vary

- Content-DPR
- Device-Memory
- DPR
- Viewport-Width

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Width
