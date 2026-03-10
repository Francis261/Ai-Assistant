# CSP: style-src-elem

Source: https://devdocs.io/http/headers/content-security-policy/style-src-elem

# CSP: style-src-elem

The HTTP Content-Security-Policy (CSP) style-src-elem directive specifies valid sources for stylesheet <style> elements and <link> elements with rel="stylesheet".

The directive does not set valid sources for inline style attributes; these are set using style-src-attr (and valid sources for all styles may be set with style-src).

Yes. If this directive is absent, the user agent will look for the style-src directive, and if both of them are absent, fall back to default-src directive.

## Syntax

One or more sources can be allowed for the style-src-elem policy:

```
Content-Security-Policy: style-src-elem <source>;
Content-Security-Policy: style-src-elem <source> <source>;
```

style-src-elem can be used in conjunction with style-src:

```
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src-elem <source>;
```

### Sources

<source> can be any one of the values listed in CSP Source Values.

Note that this same set of values can be used in all fetch directives (and a number of other directives).

## Examples

### Violation cases

Given this CSP header:

```
Content-Security-Policy: style-src-elem https://example.com/
```

…the following stylesheets are blocked and won't load:

```
<link href="https://not-example.com/styles/main.css" rel="stylesheet" />

<style>
  #inline-style {
    background: red;
  }
</style>

<style>
  @import url("https://not-example.com/styles/print.css") print;
</style>
```

…as well as styles loaded using the Link header:

```
Link: <https://not-example.com/styles/stylesheet.css>;rel=stylesheet
```

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- style-src
- style-src-attr
- Link header
- <style>, <link>
- @import
- CSSStyleSheet.insertRule()
- CSSGroupingRule.insertRule()
- CSSStyleDeclaration.cssText

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src-elem
