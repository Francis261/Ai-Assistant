# Sec-CH-UA-Platform

Source: https://devdocs.io/http/headers/sec-ch-ua-platform

# Sec-CH-UA-Platform

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.

The Sec-CH-UA-Platform user agent client hint request header provides the platform or operating system on which the user agent is running. For example: "Windows" or "Android".

Sec-CH-UA-Platform is a low entropy hint. Unless blocked by a user agent permission policy, it is sent by default (without the server opting in by sending Accept-CH).

## Syntax

```
Sec-CH-UA-Platform: <platform>
```

### Directives

One of the following strings: "Android", "Chrome OS", "Chromium OS", "iOS", "Linux", "macOS", "Windows", or "Unknown".

## Examples

As Sec-CH-UA-Platform is a low entropy hint it is typically sent in all requests.

A browser running on a macOS computer might add the following header to all requests.

```
Sec-CH-UA-Platform: "macOS"
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
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Platform
