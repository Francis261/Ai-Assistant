# CSP: font-src

Source: https://devdocs.io/http/headers/content-security-policy/font-src

# CSP: font-src

The HTTP Content-Security-Policy (CSP) font-src directive specifies valid sources for fonts loaded using @font-face.

## Syntax

One or more sources can be allowed for the font-src policy:

```
Content-Security-Policy: font-src <source>;
Content-Security-Policy: font-src <source> <source>;
```

### Sources

<source> can be any one of the values listed in CSP Source Values.

Note that this same set of values can be used in all fetch directives (and a number of other directives).

## Examples

### Violation cases

Given this CSP header:

```
Content-Security-Policy: font-src https://example.com/
```

The following font resource loading is blocked and won't load:

```
<style>
  @font-face {
    font-family: "MyFont";
    src: url("https://not-example.com/font");
  }
  body {
    font-family: "MyFont";
  }
</style>
```

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- @font-face

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/font-src
