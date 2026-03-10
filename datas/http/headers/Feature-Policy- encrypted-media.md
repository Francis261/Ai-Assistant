# Feature-Policy: encrypted-media

Source: https://devdocs.io/http/headers/feature-policy/encrypted-media

# Feature-Policy: encrypted-media

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The HTTP Feature-Policy header encrypted-media directive controls whether the current document is allowed to use the Encrypted Media Extensions API (EME). When this policy is enabled, the Promise returned by Navigator.requestMediaKeySystemAccess() will reject with a DOMException.

## Syntax

```
Feature-Policy: encrypted-media <allowlist>;
```

A list of origins for which the feature is allowed. See Feature-Policy.

## Default policy

Default allow list for encrypted-media is 'self'.

## Specifications

## Browser compatibility

## See also

- Feature-Policy header
- Feature Policy
- Using Feature Policy

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy/encrypted-media
