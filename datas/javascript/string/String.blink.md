# String.prototype.blink()

Source: https://devdocs.io/javascript/global_objects/string/blink

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The blink() method of String values creates a string that embeds this string in a <blink> element (<blink>str</blink>), which used to cause a string to blink in old browsers.

Note: All HTML wrapper methods are deprecated and only standardized for compatibility purposes. For the case of blink(), the <blink> element itself is removed from modern browsers, and blinking text is frowned upon by several accessibility standards. Avoid using the element in any way.

## Syntax

```
blink()
```

### Parameters

None.

### Return value

A string beginning with a <blink> start tag, then the text str, and then a </blink> end tag.

## Examples

### Using blink()

The code below creates an HTML string and then replaces the document's body with it:

```
const contentString = "Hello, world";

document.body.innerHTML = contentString.blink();
```

This will create the following HTML:

```
<blink>Hello, world</blink>
```

Warning: This markup is invalid, because blink is no longer a valid element.

You should avoid blinking elements altogether.

## Specifications

## Browser compatibility

## See also

- Polyfill of String.prototype.blink in core-js
- es-shims polyfill of String.prototype.blink
- HTML wrapper methods

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/blink
