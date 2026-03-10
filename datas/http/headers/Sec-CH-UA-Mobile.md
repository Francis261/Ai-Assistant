# Sec-CH-UA-Mobile

Source: https://devdocs.io/http/headers/sec-ch-ua-mobile

# Sec-CH-UA-Mobile

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.

The Sec-CH-UA-Mobile user agent client hint request header indicates whether the browser is on a mobile device. It can also be used by a desktop browser to indicate a preference for a "mobile" user experience.

Sec-CH-UA-Mobile is a low entropy hint. Unless blocked by a user agent permission policy, it is sent by default, without the server opting in by sending Accept-CH.

## Syntax

```
Sec-CH-UA-Mobile: <boolean>
```

### Directives

?1 indicates that the user-agent prefers a mobile experience (true). ?0 indicates that user-agent does not prefer a mobile experience (false).

## Examples

As Sec-CH-UA-Mobile is a low entropy hint it is typically sent in all requests.

A desktop browser would usually send requests with the following header:

```
Sec-CH-UA-Mobile: ?0
```

A browser on a mobile device would usually send requests with the following header:

```
Sec-CH-UA-Mobile: ?1
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
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-UA-Mobile
