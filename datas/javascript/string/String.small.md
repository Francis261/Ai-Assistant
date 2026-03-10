# String.prototype.small()

Source: https://devdocs.io/javascript/global_objects/string/small

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The small() method of String values creates a string that embeds this string in a <small> element (<small>str</small>), which causes this string to be displayed in a small font.

Note: All HTML wrapper methods are deprecated and only standardized for compatibility purposes. Use DOM APIs such as document.createElement() instead.

## Syntax

```
small()
```

### Parameters

None.

### Return value

A string beginning with a <small> start tag, then the text str, and then a </small> end tag.

## Examples

### Using small()

The code below creates an HTML string and then replaces the document's body with it:

```
const contentString = "Hello, world";

document.body.innerHTML = contentString.small();
```

This will create the following HTML:

```
<small>Hello, world</small>
```

Instead of using small() and creating HTML text directly, you should use DOM APIs such as document.createElement(). For example:

```
const contentString = "Hello, world";
const elem = document.createElement("small");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Specifications

## Browser compatibility

## See also

- Polyfill of String.prototype.small in core-js
- es-shims polyfill of String.prototype.small
- HTML wrapper methods
- <small>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/small
