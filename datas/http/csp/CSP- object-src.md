# CSP: object-src

Source: https://devdocs.io/http/headers/content-security-policy/object-src

# CSP: object-src

The HTTP Content-Security-Policy object-src directive specifies valid sources for the <object>, <embed>, and <applet> elements.

To set allowed types for <object>, <embed>, and <applet> elements, use the plugin-types directive.

Note: Elements controlled by object-src are perhaps coincidentally considered legacy HTML elements and aren't receiving new standardized features (such as the security attributes sandbox or allow for <iframe>). Therefore it is recommended to restrict this fetch-directive (e.g. explicitly set object-src 'none' if possible).

## Syntax

One or more sources can be allowed for the object-src policy:

```
Content-Security-Policy: object-src <source>;
Content-Security-Policy: object-src <source> <source>;
```

### Sources

<source> can be any one of the values listed in CSP Source Values.

Note that this same set of values can be used in all fetch directives (and a number of other directives).

## Examples

### Violation cases

Given this CSP header:

```
Content-Security-Policy: object-src https://example.com/
```

The following <object>, <embed>, and <applet> elements are blocked and won't load:

```
<embed src="https://not-example.com/flash"></embed>
<object data="https://not-example.com/plugin"></object>
<applet archive="https://not-example.com/java"></applet>
```

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- <object>, <embed>, and <applet>
- plugin-types

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/object-src
