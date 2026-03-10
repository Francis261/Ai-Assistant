# String.prototype.italics()

Source: https://devdocs.io/javascript/global_objects/string/italics

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The italics() method of String values creates a string that embeds this string in an <i> element (<i>str</i>), which causes this string to be displayed as italic.

Note: All HTML wrapper methods are deprecated and only standardized for compatibility purposes. Use DOM APIs such as document.createElement() instead.

## Syntax

```
italics()
```

### Parameters

None.

### Return value

A string beginning with an <i> start tag, then the text str, and then an </i> end tag.

## Examples

### Using italics()

The code below creates an HTML string and then replaces the document's body with it:

```
const contentString = "Hello, world";

document.body.innerHTML = contentString.italics();
```

This will create the following HTML:

```
<i>Hello, world</i>
```

Instead of using italics() and creating HTML text directly, you should use DOM APIs such as document.createElement(). For example:

```
const contentString = "Hello, world";
const elem = document.createElement("i");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Specifications

## Browser compatibility

## See also

- Polyfill of String.prototype.italics in core-js
- es-shims polyfill of String.prototype.italics
- HTML wrapper methods
- <i>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/italics
