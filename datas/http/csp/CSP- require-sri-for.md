# CSP: require-sri-for

Source: https://devdocs.io/http/headers/content-security-policy/require-sri-for

# CSP: require-sri-for

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

The HTTP Content-Security-Policy require-sri-for directive instructs the client to require the use of Subresource Integrity for scripts or styles on the page.

## Syntax

```
Content-Security-Policy: require-sri-for script;
Content-Security-Policy: require-sri-for style;
Content-Security-Policy: require-sri-for script style;
```

Requires SRI for scripts.

Requires SRI for style sheets.

Requires SRI for both, scripts and style sheets.

## Examples

If you set your site to require SRI for script and styles using this directive:

```
Content-Security-Policy: require-sri-for script style
```

<script> elements like the following will be loaded as they use a valid integrity attribute.

```
<script
  src="https://code.jquery.com/jquery-3.1.1.slim.js"
  integrity="sha256-5i/mQ300M779N2OVDrl16lbohwXNUdzL/R2aVUXyXWA="
  crossorigin="anonymous"></script>
```

However, scripts without integrity won't load anymore:

```
<script src="https://code.jquery.com/jquery-3.1.1.slim.js"></script>
```

## Browser compatibility

## See also

- Content-Security-Policy
- Subresource Integrity

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/require-sri-for
