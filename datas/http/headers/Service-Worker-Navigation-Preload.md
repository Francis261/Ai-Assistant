# Service-Worker-Navigation-Preload

Source: https://devdocs.io/http/headers/service-worker-navigation-preload

# Service-Worker-Navigation-Preload

The Service-Worker-Navigation-Preload request header indicates that the request was the result of a fetch() operation made during service worker navigation preloading. It allows a server to respond with a different resource than for a normal fetch().

If a different response may result from setting this header, the server must set Vary: Service-Worker-Navigation-Preload to ensure that the different responses are cached.

For more information see NavigationPreloadManager.setHeaderValue() (and NavigationPreloadManager).

## Syntax

```
Service-Worker-Navigation-Preload: <value>
```

## Directives

An arbitrary value that indicates what data should be sent in the response to the preload request. This defaults to true. It maybe set to any other string value in the service worker, using NavigationPreloadManager.setHeaderValue().

## Examples

The header below is sent by default.

```
Service-Worker-Navigation-Preload: true
```

The service worker can set a different header value using NavigationPreloadManager.setHeaderValue(). For example, in order to request that a fragment of the requested resource be returned in JSON format, the value could be set with the string json_fragment1.

```
Service-Worker-Navigation-Preload: json_fragment1
```

## Specifications

## Browser compatibility

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Service-Worker-Navigation-Preload
