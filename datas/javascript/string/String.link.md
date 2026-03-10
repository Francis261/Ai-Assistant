# String.prototype.link()

Source: https://devdocs.io/javascript/global_objects/string/link

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The link() method of String values creates a string that embeds this string in an <a> element (<a href="...">str</a>), to be used as a hypertext link to another URL.

Note: All HTML wrapper methods are deprecated and only standardized for compatibility purposes. Use DOM APIs such as document.createElement() instead.

## Syntax

```
link(url)
```

### Parameters

Any string that specifies the href attribute of the <a> element; it should be a valid URL (relative or absolute), with any & characters escaped as &amp;.

### Return value

A string beginning with an <a href="url"> start tag (double quotes in url are replaced with &quot;), then the text str, and then an </a> end tag.

## Examples

### Using link()

The code below creates an HTML string and then replaces the document's body with it:

```
const contentString = "MDN Web Docs";

document.body.innerHTML = contentString.link("https://developer.mozilla.org/");
```

This will create the following HTML:

```
<a href="https://developer.mozilla.org/">MDN Web Docs</a>
```

Instead of using link() and creating HTML text directly, you should use DOM APIs such as document.createElement(). For example:

```
const contentString = "MDN Web Docs";
const elem = document.createElement("a");
elem.href = "https://developer.mozilla.org/";
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Specifications

## Browser compatibility

## See also

- Polyfill of String.prototype.link in core-js
- es-shims polyfill of String.prototype.link
- HTML wrapper methods
- <a>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/link
