# CSP: script-src-elem

Source: https://devdocs.io/http/headers/content-security-policy/script-src-elem

# CSP: script-src-elem

The HTTP Content-Security-Policy (CSP) script-src-elem directive specifies valid sources for JavaScript <script> elements.

This directive only specifies valid sources in <script> elements (both script requests and blocks). It does not apply to other JavaScript sources that can trigger script execution, such as inline script event handlers (onclick), script execution methods gated on the "unsafe-eval" check, and XSLT stylesheets. (Valid sources can be specified for all JavaScript script sources using script-src, or just for inline script handlers using script-src-attr.)

## Syntax

One or more sources can be allowed for the script-src-elem policy:

```
Content-Security-Policy: script-src-elem <source>;
Content-Security-Policy: script-src-elem <source> <source>;
```

script-src-elem can be used in conjunction with script-src:

```
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-elem <source>;
```

### Sources

<source> can be any one of the values listed in CSP Source Values.

Note that this same set of values can be used in all fetch directives (and a number of other directives).

## Examples

### Violation case

Given this CSP header:

```
Content-Security-Policy: script-src-elem https://example.com/
```

…the following script is blocked and won't be loaded or executed:

```
<script src="https://not-example.com/js/library.js"></script>
```

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- <script>
- script-src
- script-src-attr

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src-elem
