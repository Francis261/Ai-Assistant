# Accept-CH

Source: https://devdocs.io/http/headers/accept-ch

# Accept-CH

Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.

The Accept-CH header may be set by a server to specify which client hints headers a client should include in subsequent requests.

Note: Client hints are accessible only on secure origins (via TLS). Accept-CH (and Accept-CH-Lifetime) headers should be persisted for all secure requests to ensure client hints are sent reliably.

## Syntax

```
Accept-CH: <comma separated list of client hint headers>
```

## Examples

```
Accept-CH: Viewport-Width, Width
Vary: Viewport-Width, Width
```

Note: Remember to vary the response based on the accepted client hints.

## Specifications

## Browser compatibility

## See also

- Vary

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-CH
