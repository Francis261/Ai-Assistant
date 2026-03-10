# Accept-CH-Lifetime

Source: https://devdocs.io/http/headers/accept-ch-lifetime

# Accept-CH-Lifetime

Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

Warning: The header was removed from the specification in draft 8.

The Accept-CH-Lifetime header is set by the server to specify the persistence of the client hint headers it specified using Accept-CH, that the client should include in subsequent requests.

Note: Client Hints are accessible only on secure origins (via TLS). Accept-CH and Accept-CH-Lifetime headers should be persisted for all secure requests to ensure Client Hints are sent reliably.

## Syntax

```
Accept-CH-Lifetime: <age>
```

## Examples

```
Accept-CH: Viewport-Width
Accept-CH-Lifetime: 86400
```

## Browser compatibility

## See also

- Accept-CH
- Vary

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-CH-Lifetime
