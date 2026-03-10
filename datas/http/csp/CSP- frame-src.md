# CSP: frame-src

Source: https://devdocs.io/http/headers/content-security-policy/frame-src

# CSP: frame-src

The HTTP Content-Security-Policy (CSP) frame-src directive specifies valid sources for nested browsing contexts loading using elements such as <frame> and <iframe>.

Note: frame-src allows you to specify where iframes in a page may be loaded from. This differs from frame-ancestors, which allows you to specify what parent source may embed a page.

## Syntax

One or more sources can be allowed for the frame-src policy:

```
Content-Security-Policy: frame-src <source>;
Content-Security-Policy: frame-src <source> <source>;
```

### Sources

<source> can be any one of the values listed in CSP Source Values.

Note that this same set of values can be used in all fetch directives (and a number of other directives).

## Examples

### Violation cases

Given this CSP header:

```
Content-Security-Policy: frame-src https://example.com/
```

The following <iframe> is blocked and won't load:

```
<iframe src="https://not-example.com/"></iframe>
```

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- <frame> and <iframe>
- frame-ancestors

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-src
