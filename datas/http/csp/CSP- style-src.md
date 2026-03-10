# CSP: style-src

Source: https://devdocs.io/http/headers/content-security-policy/style-src

# CSP: style-src

The HTTP Content-Security-Policy (CSP) style-src directive specifies valid sources for stylesheets.

## Syntax

One or more sources can be allowed for the style-src policy:

```
Content-Security-Policy: style-src <source>;
Content-Security-Policy: style-src <source> <source>;
```

### Sources

<source> can be any one of the values listed in CSP Source Values.

Note that this same set of values can be used in all fetch directives (and a number of other directives).

## Examples

### Violation cases

Given this CSP header:

```
Content-Security-Policy: style-src https://example.com/
```

the following stylesheets are blocked and won't load:

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

as well as styles loaded using the Link header:

```
Link: <https://not-example.com/styles/stylesheet.css>;rel=stylesheet
```

Inline style attributes are also blocked:

```
<div style="display:none">Foo</div>
```

As well as styles that are applied in JavaScript by setting the style attribute directly, or by setting cssText:

```
document.querySelector('div').setAttribute('style', 'display:none;');
document.querySelector('div').style.cssText = 'display:none;';
```

However, styles properties that are set directly on the element's style property will not be blocked, allowing users to safely manipulate styles via JavaScript:

```
document.querySelector('div').style.display = 'none';
```

These types of manipulations can be prevented by disallowing JavaScript via the script-src CSP directive.

### Unsafe inline styles

Note: Disallowing inline styles and inline scripts is one of the biggest security wins CSP provides. However, if you absolutely have to use it, there are a few mechanisms that will allow them.

To allow inline styles, 'unsafe-inline', a nonce-source or a hash-source that matches the inline block can be specified.

```
Content-Security-Policy: style-src 'unsafe-inline';
```

The above Content Security Policy will allow inline styles like the <style> element, and the style attribute on any element:

```
<style>
  #inline-style {
    background: red;
  }
</style>

<div style="display:none">Foo</div>
```

You can use a nonce-source to only allow specific inline style blocks:

```
Content-Security-Policy: style-src 'nonce-2726c7f26c'
```

You will have to set the same nonce on the <style> element:

```
<style nonce="2726c7f26c">
  #inline-style {
    background: red;
  }
</style>
```

Alternatively, you can create hashes from your inline styles. CSP supports sha256, sha384 and sha512. The binary form of the hash has to be encoded with base64. You can obtain the hash of a string on the command line via the openssl program:

```
echo -n "#inline-style { background: red; }" | openssl dgst -sha256 -binary | openssl enc -base64
```

You can use a hash-source to only allow specific inline style blocks:

```
Content-Security-Policy: style-src 'sha256-ozBpjL6dxO8fsS4u6fwG1dFDACYvpNxYeBA6tzR+FY8='
```

When generating the hash, don't include the <style> tags and note that capitalization and whitespace matter, including leading or trailing whitespace.

```
<style>
  #inline-style {
    background: red;
  }
</style>
```

### Unsafe style expressions

The 'unsafe-eval' source expression controls several style methods that create style declarations from strings. If 'unsafe-eval' isn't specified with the style-src directive, the following methods are blocked and won't have any effect:

- CSSStyleSheet.insertRule()
- CSSGroupingRule.insertRule()
- CSSStyleDeclaration.cssText

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- style-src-elem
- style-src-attr
- Link header
- <style>, <link>
- @import
- CSSStyleSheet.insertRule()
- CSSGroupingRule.insertRule()
- CSSStyleDeclaration.cssText

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/style-src
