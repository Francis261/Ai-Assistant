# CSP: img-src

Source: https://devdocs.io/http/headers/content-security-policy/img-src

# CSP: img-src

The HTTP Content-Security-Policy img-src directive specifies valid sources of images and favicons.

## Syntax

One or more sources can be allowed for the img-src policy:

```
Content-Security-Policy: img-src <source>;
Content-Security-Policy: img-src <source> <source>;
```

### Sources

<source> can be any one of the values listed in CSP Source Values.

Note that this same set of values can be used in all fetch directives (and a number of other directives).

## Examples

### Violation cases

Given this CSP header:

```
Content-Security-Policy: img-src https://example.com/
```

The following <img> is blocked and won't load:

```
<img src="https://not-example.com/foo.jpg" alt="example picture" />
```

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- <img>

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/img-src
