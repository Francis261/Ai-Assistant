# ECT

Source: https://devdocs.io/http/headers/ect

# ECT

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The ECT Client hint request header field indicates the effective connection type: slow-2g, 2g, 3g, 4g.

The value represents the "network profile" that best matches the connection's latency and bandwidth, rather than the actual mechanisms used for transferring the data. For example, 2g might be used to represent a slow Wi-Fi connection with high latency and low bandwidth, while 4g might be used to represent a fast fibre-based broadband network.

The hint allows a server to choose what information is sent based on the broad characteristics of the network. For example, a server might choose to send smaller versions of images and other resources on less capable connections. The value might also be used as a starting point for determining what information is sent, which is further refined using information in RTT and Downlink hints.

Note: A server that specifies ECT in Accept-CH may also specify it in Vary to indicate that responses should be cached for different ECT values.

## Syntax

```
ECT: <value>
```

## Directives

A value indicating effective connection type. This is one of: slow-2g, 2g, 3g, or 4g.

## Examples

A server first needs to opt in to receive the ECT header by sending the Accept-CH response header containing ECT.

```
Accept-CH: ECT
```

Then on subsequent requests the client might send an ECT header back:

```
ECT: 2g
```

## Specifications

## Browser compatibility

## See also

- Improving user privacy and developer experience with User-Agent Client Hints (web.dev)
- Network client hints
  - Downlink
  - RTT
  - Save-Data
- Accept-CH
- HTTP Caching > Varying responses and Vary
- NetworkInformation.effectiveType

- Downlink
- RTT
- Save-Data

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ECT
