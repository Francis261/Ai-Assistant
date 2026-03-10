# CSP: style-src-attr

Source: https://devdocs.io/http/headers/content-security-policy/style-src-attr

# CSP: style-src-attr

The HTTP Content-Security-Policy (CSP) style-src-attr directive specifies valid sources for inline styles applied to individual DOM elements.

The directive does not set valid sources for <style> elements and <link> elements with rel="stylesheet". These are set using style-src-elem (and valid sources for all styles may be set with style-src).

Yes. If this directive is absent, the user agent will look for the style-src directive, and if both of them are absent, fallback to default-src directive.

## Syntax

One or more sources can be allowed for the style-src-attr policy:

```
Content-Security-Policy: style-src-attr <source>;
Content-Security-Policy: style-src-attr <source> <source>;
```

style-src-attr can be used in conjunction with style-src:

```
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src-attr <source>;
```

### Sources

<source> can be any one of the values listed in CSP Source Values.

Note that this same set of values can be used in all fetch directives (and a number of other directives).

## Examples

### Violation cases

Given this CSP header:

```
Content-Security-Policy: script-src-attr 'none'
```

…the inline style applied to the element below not be applied:

```
<div style="display:none">Foo</div>
```

The policy would also block any styles applied in JavaScript by setting the style attribute directly, or by setting cssText:

```
document.querySelector('div').setAttribute('style', 'display:none;');
document.querySelector('div').style.cssText = 'display:none;';
```

Style properties that are set directly on the element's style property will not be blocked, allowing users to safely manipulate styles via JavaScript:

```
document.querySelector('div').style.display = 'none';
```

Note that using JavaScript might independently be blocked using the script-src CSP directive.

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- style-src
- style-src-elem
- Link header
- <style>, <link>
- @import
- CSSStyleSheet.insertRule()
- CSSGroupingRule.insertRule()
- CSSStyleDeclaration.cssText

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src-attr
