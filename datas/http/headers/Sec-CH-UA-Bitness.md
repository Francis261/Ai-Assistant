# Sec-CH-UA-Bitness

Source: https://devdocs.io/http/headers/sec-ch-ua-bitness

# Sec-CH-UA-Bitness

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.

The Sec-CH-UA-Bitness user agent client hint request header provides the "bitness" of the user-agent's underlying CPU architecture. This is the size in bits of an integer or memory address—typically 64 or 32 bits.

This might be used by a server, for example, to select and offer the correct binary format of an executable for a user to download.

## Syntax

```
Sec-CH-UA-Bitness: <bitness>
```

## Directives

A string indicating the underlying platform architecture bitness, such as: "64", "32".

## Examples

A server requests the Sec-CH-UA-Bitness header by including the Accept-CH in a response to any request from the client, using the name of the desired header as a token:

```
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Bitness
```

The client may choose to provide the hint, and add the Sec-CH-UA-Bitness header to subsequent requests. For example, on a Windows based 64-bit computer, the client might add the header as shown:

```
GET /GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Bitness: "64"
```

## Specifications

## Browser compatibility

## See also

- Client hints
- User-Agent Client Hints API
- Improving user privacy and developer experience with User-Agent Client Hints (web.dev)
- Accept-CH
- HTTP Caching > Varying responses and Vary

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Bitness
