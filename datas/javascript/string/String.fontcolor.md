# String.prototype.fontcolor()

Source: https://devdocs.io/javascript/global_objects/string/fontcolor

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The fontcolor() method of String values creates a string that embeds this string in a <font> element (<font color="...">str</font>), which causes this string to be displayed in the specified font color.

Note: All HTML wrapper methods are deprecated and only standardized for compatibility purposes. For the case of fontcolor(), the <font> element itself has been removed from the HTML specification and shouldn't be used anymore. Web developers should use CSS properties instead.

## Syntax

```
fontcolor(color)
```

### Parameters

A string expressing the color as a hexadecimal RGB triplet or as a string literal. String literals for color names are listed in the CSS color reference.

### Return value

A string beginning with a <font color="color"> start tag (double quotes in color are replaced with &quot;), then the text str, and then a </font> end tag.

## Description

The fontcolor() method itself simply joins the string parts together without any validation or normalization. However, to create valid <font> elements, if you express color as a hexadecimal RGB triplet, you must use the format rrggbb. For example, the hexadecimal RGB values for salmon are red=FA, green=80, and blue=72, so the RGB triplet for salmon is "FA8072".

## Examples

### Using fontcolor()

The code below creates an HTML string and then replaces the document's body with it:

```
const contentString = "Hello, world";

document.body.innerHTML = contentString.fontcolor("red");
```

This will create the following HTML:

```
<font color="red">Hello, world</font>
```

Warning: This markup is invalid, because font is no longer a valid element.

Instead of using fontcolor() and creating HTML text directly, you should use CSS to manipulate fonts. For example, you can manipulate color through the element.style attribute:

```
document.getElementById("yourElemId").style.color = "red";
```

## Specifications

## Browser compatibility

## See also

- Polyfill of String.prototype.fontcolor in core-js
- es-shims polyfill of String.prototype.fontcolor
- HTML wrapper methods
- <font>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fontcolor
