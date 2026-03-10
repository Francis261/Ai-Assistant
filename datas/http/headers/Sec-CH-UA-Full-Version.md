# Sec-CH-UA-Full-Version

Source: https://devdocs.io/http/headers/sec-ch-ua-full-version

# Sec-CH-UA-Full-Version

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.

Note: This is being replaced by the Sec-CH-UA-Full-Version-List.

The Sec-CH-UA-Full-Version user agent client hint request header provides the user-agent's full version string.

## Syntax

```
Sec-CH-UA-Full-Version: <version>
```

### Directives

A string containing the full version number, like "96.0.4664.93".

## Examples

A server requests the Sec-CH-UA-Full-Version header by including the Accept-CH in a response to any request from the client, using the name of the desired header as a token:

```
HTTP/1.1 200 OK
Accept-CH: Sec-CH-UA-Full-Version
```

The client may choose to provide the hint, and add the Sec-CH-UA-Full-Version header to subsequent requests. For example, the client might add the header as shown:

```
GET /GET /my/page HTTP/1.1
Host: example.site

Sec-CH-UA: " Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"
Sec-CH-UA-Mobile: ?0
Sec-CH-UA-Full-Version: "96.0.4664.110"
Sec-CH-UA-Platform: "Windows"
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
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Full-Version
