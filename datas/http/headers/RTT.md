# RTT

Source: https://devdocs.io/http/headers/rtt

# RTT

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The RTT Client hint request header field provides the approximate round trip time on the application layer, in milliseconds. The RTT hint, unlike transport layer RTT, includes server processing time.

The RTT value is rounded to the nearest 25 milliseconds to prevent fingerprinting; There are many other mechanisms an attacker might use to obtain similar round-trip information.

The hint allows a server to choose what information is sent based on the network responsiveness/latency. For example, it might choose to send fewer resources.

Note: The Vary header is used in responses to indicate that a different resource is sent for every different value of the header (see HTTP Caching > Varying responses). Even if RTT is used to configure what resources are sent consider omitting it in the Vary header — it is likely to change often, which effectively makes the resource uncacheable.

## Syntax

```
RTT: <number>
```

## Directives

The approximate round trip time in milliseconds, rounded to the nearest 25 milliseconds.

## Examples

A server first needs to opt in to receive the RTT header by sending the Accept-CH response header containing RTT.

```
Accept-CH: RTT
```

Then on subsequent requests the client might send an RTT header back:

```
RTT: 125
```

## Specifications

## Browser compatibility

## See also

- Improving user privacy and developer experience with User-Agent Client Hints (web.dev)
- Network client hints
  - Downlink
  - ECT
  - Save-Data
- Accept-CH
- HTTP Caching > Varying responses and Vary
- NetworkInformation.effectiveType

- Downlink
- ECT
- Save-Data

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/RTT
