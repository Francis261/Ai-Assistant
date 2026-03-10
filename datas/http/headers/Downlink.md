# Downlink

Source: https://devdocs.io/http/headers/downlink

# Downlink

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The Downlink Client hint request header field provides the approximate bandwidth of the client's connection to the server, in Mbps.

The Downlink value is given in Mbps and rounded to the nearest 25 kilobits per second to prevent fingerprinting; There are many other mechanisms an attacker might use to obtain similar information.

The hint allows a server to choose what information is sent based on the network bandwidth. For example, a server might choose to send smaller versions of images and other resources on low bandwidth networks.

Note: The Vary header is used in responses to indicate that a different resource is sent for every different value of the header (see HTTP Caching > Varying responses). Even if Downlink is used to configure what resources are sent, consider omitting it in the Vary header — it is likely to change often, which effectively makes the resource uncacheable.

## Syntax

```
Downlink: <number>
```

## Directives

The downlink rate in Mbps, rounded to the nearest 25 kilobits.

## Examples

A server first needs to opt in to receive the Downlink header by sending the Accept-CH response header containing Downlink.

```
Accept-CH: Downlink
```

Then on subsequent requests the client might send a Downlink header back:

```
Downlink: 1.7
```

## Specifications

## Browser compatibility

## See also

- Improving user privacy and developer experience with User-Agent Client Hints (web.dev)
- Network client hints
  - RTT
  - ECT
  - Save-Data
- Accept-CH
- HTTP Caching > Varying responses and Vary
- NetworkInformation.effectiveType

- RTT
- ECT
- Save-Data

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Downlink
