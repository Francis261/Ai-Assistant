# DPR

Source: https://devdocs.io/http/headers/dpr

# DPR

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.

Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

The DPR device client hint request header provides the client device pixel ratio. This ratio is the number of physical device pixels corresponding to every CSS pixel.

The hint is useful when selecting image sources that best correspond to a screen's pixel density. This is similar to the role played by x descriptors in the <img> srcset attribute to allow user agents to select a preferred image.

If a server uses the DPR hint to choose which resource is sent in a response, the response must include the Content-DPR header. The client must use the value in Content-DPR for layout if it differs from the value in the request's DPR header.

If the DPR header appears more than once in a message the last occurrence is used.

Note:

- Client Hints are accessible only on secure origins (via TLS).
- A server has to opt in to receive the DPR header from the client, by sending the Accept-CH response header.
- Servers that opt in to the DPR client hint will typically also specify it in the Vary header. This informs caches that the server may send different responses based on the header value in a request.
- DPR was removed from the client hints specification in draft-ietf-httpbis-client-hints-07. The proposed replacement is Sec-CH-DPR (Responsive Image Client Hints).

## Syntax

```
DPR: <number>
```

## Directives

The client device pixel ratio.

## Examples

A server must first opt in to receive the DPR header by sending the response header Accept-CH containing the directive DPR.

```
Accept-CH: DPR
```

Then on subsequent requests the client might send DPR header to the server:

```
DPR: 2.0
```

If a request with the DPR header (as shown above) is for an image resource, then the server response must include the Content-DPR header:

```
Content-DPR: 2.0
```

## Browser compatibility

## See also

- Improving user privacy and developer experience with User-Agent Client Hints (web.dev)
- Device client hints
  - Content-DPR
  - Device-Memory
  - Viewport-Width
  - Width
- Accept-CH
- HTTP Caching > Varying responses and Vary

- Content-DPR
- Device-Memory
- Viewport-Width
- Width

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DPR
