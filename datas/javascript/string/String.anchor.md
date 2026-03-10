# String.prototype.anchor()

Source: https://devdocs.io/javascript/global_objects/string/anchor

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The anchor() method of String values creates a string that embeds this string in an <a> element with a name (<a name="...">str</a>).

Note: All HTML wrapper methods are deprecated and only standardized for compatibility purposes. Use DOM APIs such as document.createElement() instead.

The HTML specification no longer allows the <a> element to have a name attribute, so this method doesn't even create valid markup.

## Syntax

```
anchor(name)
```

### Parameters

A string representing a name value to put into the generated <a name="..."> start tag.

### Return value

A string beginning with an <a name="name"> start tag (double quotes in name are replaced with &quot;), then the text str, and then an </a> end tag.

## Examples

### Using anchor()

The code below creates an HTML string and then replaces the document's body with it:

```
const contentString = "Hello, world";

document.body.innerHTML = contentString.anchor("hello");
```

This will create the following HTML:

```
<a name="hello">Hello, world</a>
```

Warning: This markup is invalid, because name is no longer a valid attribute of the <a> element.

Instead of using anchor() and creating HTML text directly, you should use DOM APIs such as document.createElement(). For example:

```
const contentString = "Hello, world";
const elem = document.createElement("a");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Specifications

## Browser compatibility

## See also

- Polyfill of String.prototype.anchor in core-js
- es-shims polyfill of String.prototype.anchor
- HTML wrapper methods
- <a>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/anchor
