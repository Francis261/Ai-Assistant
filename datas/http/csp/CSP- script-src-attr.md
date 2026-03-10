# CSP: script-src-attr

Source: https://devdocs.io/http/headers/content-security-policy/script-src-attr

# CSP: script-src-attr

The HTTP Content-Security-Policy (CSP) script-src-attr directive specifies valid sources for JavaScript inline event handlers.

This directive only specifies valid sources for inline script event handlers like onclick. It does not apply to other JavaScript sources that can trigger script execution, such as URLs loaded directly into <script> elements and XSLT stylesheets. (Valid sources can be specified for all JavaScript script sources using script-src, or just for <script> elements using script-src-elem.)

## Syntax

One or more sources can be allowed for the script-src-attr policy:

```
Content-Security-Policy: script-src-attr <source>;
Content-Security-Policy: script-src-attr <source> <source>;
```

script-src-attr can be used in conjunction with script-src, and will override that directive for checks on inline handlers:

```
Content-Security-Policy: script-src <source>;
Content-Security-Policy: script-src-attr <source>;
```

### Sources

<source> can be any one of the values listed in CSP Source Values.

Note that this same set of values can be used in all fetch directives (and a number of other directives).

## Examples

### Violation case

Given this CSP header:

```
Content-Security-Policy: script-src-attr 'none'
```

…the following inline event handler is blocked and won't be loaded or executed:

```
<button id="btn" onclick="doSomething()"></button>
```

Note that generally you should replace inline event handlers with addEventListener calls:

```
document.getElementById("btn").addEventListener("click", doSomething);
```

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- <script>
- script-src
- script-src-elem

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/script-src-attr
