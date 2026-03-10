# CSP: block-all-mixed-content

Source: https://devdocs.io/http/headers/content-security-policy/block-all-mixed-content

# CSP: block-all-mixed-content

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

Warning: This directive is marked as obsolete in the specification: all mixed content is now blocked if it can't be autoupgraded.

The HTTP Content-Security-Policy (CSP) block-all-mixed-content directive prevents loading any assets over HTTP when the page uses HTTPS.

All mixed content resource requests are blocked, including both active and passive mixed content. This also applies to <iframe> documents, ensuring the entire page is mixed content-free.

Note: The upgrade-insecure-requests directive is evaluated before block-all-mixed-content. If the former is set, the latter does nothing, so set one directive or the other – not both, unless you want to force HTTPS on older browsers that do not force it after a redirect to HTTP.

## Syntax

```
Content-Security-Policy: block-all-mixed-content;
```

## Examples

```
Content-Security-Policy: block-all-mixed-content;

<meta http-equiv="Content-Security-Policy" content="block-all-mixed-content">
```

To disallow http assets on a more granular level, you can also set individual directives to https:. For example, to disallow insecure HTTP images:

```
Content-Security-Policy: img-src https:
```

## Specifications

Not part of any current specification. Used to be defined in the outdated Mixed Content Level 1 specification.

## Browser compatibility

## See also

- Content-Security-Policy
- upgrade-insecure-requests
- Mixed content

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content
