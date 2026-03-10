# Sec-CH-UA-Model

Source: https://devdocs.io/http/headers/sec-ch-ua-model

# Sec-CH-UA-Model

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.

The Sec-CH-UA-Model user agent client hint request header indicates the device model on which the browser is running.

## Syntax

```
Sec-CH-UA-Model: <device-version>
```

### Directives

A string containing the device version. For example "Pixel 3".

## Examples

A server requests the Sec-CH-UA-Model header by including the Accept-CH in a response to any request from the client, using the name of the desired header as a token:

```
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Model
```

The client may choose to provide the hint, and add the Sec-CH-UA-Model header to subsequent requests. For example, on mobile phone the client might add the header as shown:

```
GET /GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?1
Sec-CH-UA-Platform: "Android"
Sec-CH-UA-Bitness: "64"
Sec-CH-UA-Model: "Pixel 3 XL"
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
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Model
