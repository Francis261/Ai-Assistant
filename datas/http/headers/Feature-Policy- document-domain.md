# Feature-Policy: document-domain

Source: https://devdocs.io/http/headers/feature-policy/document-domain

# Feature-Policy: document-domain

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The HTTP Feature-Policy header document-domain directive controls whether the current document is allowed to set document.domain. When this policy is disabled, attempting to set document.domain will fail and cause a SecurityError DOMException to be thrown.

## Syntax

```
Feature-Policy: document-domain <allowlist>;
```

A list of origins for which the feature is allowed. See Feature-Policy.

## Default policy

Default allow list for document-domain is *.

## Specifications

## Browser compatibility

## See also

- Feature-Policy header
- Feature Policy
- Using Feature Policy

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy/document-domain
