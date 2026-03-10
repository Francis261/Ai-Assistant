# Content-DPR

Source: https://devdocs.io/http/headers/content-dpr

# Content-DPR

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.

Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

The Content-DPR response header is used to confirm the image device to pixel ratio in requests where the screen DPR client hint was used to select an image resource.

If the DPR client hint is used to select an image the server must specify Content-DPR in the response. If the value in Content-DPR is different from the DPR value in the request (i.e. image DPR is not the same as screen DPR) then the client must use the Content-DPR for determining intrinsic image size and scaling the image.

If the Content-DPR header appears more than once in a message the last occurrence is used.

Note:

- Content-DPR was removed from the client hints specification in draft-ietf-httpbis-client-hints-07. The Responsive Image Client Hints spec proposes to replace this header by specifying intrinsic resolution/dimensions in EXIF metadata.

## Syntax

```
Content-DPR: <number>
```

## Directives

The image device pixel ratio, calculated according to the following formula: Content-DPR = Selected image resource size / (Width / DPR)

## Examples

See the DPR header example.

## Browser compatibility

## See also

- Improving user privacy and developer experience with User-Agent Client Hints (web.dev)
- Device client hints
  - Device-Memory
  - DPR
  - Viewport-Width
  - Width
- Accept-CH
- HTTP Caching > Varying responses and Vary

- Device-Memory
- DPR
- Viewport-Width
- Width

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-DPR
