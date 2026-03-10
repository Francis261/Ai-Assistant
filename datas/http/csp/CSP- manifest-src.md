# CSP: manifest-src

Source: https://devdocs.io/http/headers/content-security-policy/manifest-src

# CSP: manifest-src

The HTTP Content-Security-Policy: manifest-src directive specifies which manifest can be applied to the resource.

## Syntax

One or more sources can be allowed for the manifest-src policy:

```
Content-Security-Policy: manifest-src <source>;
Content-Security-Policy: manifest-src <source> <source>;
```

### Sources

<source> can be any one of the values listed in CSP Source Values.

Note that this same set of values can be used in all fetch directives (and a number of other directives).

## Examples

### Violation cases

Given this CSP header:

```
Content-Security-Policy: manifest-src https://example.com/
```

The following <link> is blocked and won't load:

```
<link rel="manifest" href="https://not-example.com/manifest" />
```

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- Web app manifest
- <link>

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/manifest-src
