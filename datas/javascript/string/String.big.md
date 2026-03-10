# String.prototype.big()

Source: https://devdocs.io/javascript/global_objects/string/big

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The big() method of String values creates a string that embeds this string in a <big> element (<big>str</big>), which causes this string to be displayed in a big font.

Note: All HTML wrapper methods are deprecated and only standardized for compatibility purposes. For the case of big(), the <big> element itself has been removed from the HTML specification and shouldn't be used anymore. Web developers should use CSS properties instead.

## Syntax

```
big()
```

### Parameters

None.

### Return value

A string beginning with a <big> start tag, then the text str, and then a </big> end tag.

## Examples

### Using big()

The code below creates an HTML string and then replaces the document's body with it:

```
const contentString = "Hello, world";

document.body.innerHTML = contentString.big();
```

This will create the following HTML:

```
<big>Hello, world</big>
```

Warning: This markup is invalid, because big is no longer a valid element.

Instead of using big() and creating HTML text directly, you should use CSS to manipulate fonts. For example, you can manipulate font-size through the element.style attribute:

```
document.getElementById("yourElemId").style.fontSize = "2em";
```

## Specifications

## Browser compatibility

## See also

- Polyfill of String.prototype.big in core-js
- es-shims polyfill of String.prototype.big
- HTML wrapper methods
- <big>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/big
