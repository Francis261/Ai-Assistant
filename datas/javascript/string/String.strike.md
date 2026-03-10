# String.prototype.strike()

Source: https://devdocs.io/javascript/global_objects/string/strike

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The strike() method of String values creates a string that embeds this string in a <strike> element (<strike>str</strike>), which causes this string to be displayed as struck-out text.

Note: All HTML wrapper methods are deprecated and only standardized for compatibility purposes. For the case of strike(), the <strike> element itself has been removed from the HTML specification and shouldn't be used anymore. Web developers should use the <del> for deleted content or the <s> for content that is no longer accurate or no longer relevant instead.

## Syntax

```
strike()
```

### Parameters

None.

### Return value

A string beginning with a <strike> start tag, then the text str, and then a </strike> end tag.

## Examples

### Using strike()

The code below creates an HTML string and then replaces the document's body with it:

```
const contentString = "Hello, world";

document.body.innerHTML = contentString.strike();
```

This will create the following HTML:

```
<strike>Hello, world</strike>
```

Warning: This markup is invalid, because strike is no longer a valid element.

Instead of using strike() and creating HTML text directly, you should use DOM APIs such as document.createElement(). For example:

```
const contentString = "Hello, world";
const elem = document.createElement("s");
elem.innerText = contentString;
document.body.appendChild(elem);
```

## Specifications

## Browser compatibility

## See also

- Polyfill of String.prototype.strike in core-js
- es-shims polyfill of String.prototype.strike
- HTML wrapper methods
- <strike>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/strike
