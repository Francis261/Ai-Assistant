# CSP: prefetch-src

Source: https://devdocs.io/http/headers/content-security-policy/prefetch-src

# CSP: prefetch-src

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The HTTP Content-Security-Policy (CSP) prefetch-src directive specifies valid resources that may be prefetched or prerendered.

## Syntax

One or more sources can be allowed for the prefetch-src policy:

```
Content-Security-Policy: prefetch-src <source>;
Content-Security-Policy: prefetch-src <source> <source>;
```

### Sources

<source> can be any one of the values listed in CSP Source Values.

Note that this same set of values can be used in all fetch directives (and a number of other directives).

## Example

### Prefetch resources do not match header

Given a page with the following Content Security Policy:

```
Content-Security-Policy: prefetch-src https://example.com/
```

Fetches for the following code will return network errors, as the URLs provided do not match prefetch-src's source list:

```
    <link rel="prefetch" href="https://example.org/" />
    <link rel="prerender" href="https://example.org/" />
```

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/prefetch-src
