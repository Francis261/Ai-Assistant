# Device-Memory

Source: https://devdocs.io/http/headers/device-memory

# Device-Memory

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.

The Device-Memory device client hint request header field indicates the approximate amount of available RAM on the client device. The header is part of the Device Memory API.

Note:

- Client Hints are accessible only on secure origins (via TLS).
- A server has to opt in to receive the Device-Memory header from the client, by sending the Accept-CH response header.
- Servers that opt in to the Device-Memory client hint will typically also specify it in the Vary header. This informs caches that the server may send different responses based on the header value in a request.

## Syntax

```
Device-Memory: <number>
```

## Directives

The approximate amount of device RAM. Possible values are: 0.25, 0.5, 1, 2, 4, 8.

The amount of device RAM can be used as a fingerprinting variable, so values for the header are intentionally coarse to reduce the potential for its misuse.

## Examples

The server first needs to opt in to receive Device-Memory header by sending the response headers Accept-CH containing Device-Memory.

```
Accept-CH: Device-Memory
```

Then on subsequent requests the client might send Device-Memory header back:

```
Device-Memory: 1
```

## Specifications

## Browser compatibility

## See also

- Improving user privacy and developer experience with User-Agent Client Hints (web.dev)
- Device Memory API
- Navigator.deviceMemory
- Device client hints
  - Content-DPR
  - DPR
  - Viewport-Width
  - Width
- Accept-CH
- HTTP Caching > Varying responses and Vary

- Content-DPR
- DPR
- Viewport-Width
- Width

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Device-Memory
