# Sec-CH-UA-Platform-Version

Source: https://devdocs.io/http/headers/sec-ch-ua-platform-version

# Sec-CH-UA-Platform-Version

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.

The Sec-CH-UA-Platform-Version user agent client hint request header provides the version of the operating system on which the user agent is running.

## Syntax

```
Sec-CH-UA-Platform-Version: <version>
```

### Directives

The version string typically contains the operating system version in a string, consisting of dot-separated major, minor and patch version numbers. For example, "11.0.0"

The version string on Linux is always empty.

## Examples

A server requests the Sec-CH-UA-Platform-Version header by including the Accept-CH in a response to any request from the client, using the name of the desired header as a token:

```
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Platform-Version
```

The client may choose to provide the hint, and add the Sec-CH-UA-Platform-Version header to subsequent requests. For example, the following request headers might be sent from a browser running on Windows 10.

```
GET /GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Platform: "Windows"
Sec-CH-UA-Platform-Version: "10.0.0"
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
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Platform-Version
