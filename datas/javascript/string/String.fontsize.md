# String.prototype.fontsize()

Source: https://devdocs.io/javascript/global_objects/string/fontsize

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The fontsize() method of String values creates a string that embeds this string in a <font> element (<font size="...">str</font>), which causes this string to be displayed in the specified font size.

Note: All HTML wrapper methods are deprecated and only standardized for compatibility purposes. For the case of fontsize(), the <font> element itself has been removed from the HTML specification and shouldn't be used anymore. Web developers should use CSS properties instead.

## Syntax

```
fontsize(size)
```

### Parameters

An integer between 1 and 7, or a string representing a signed integer between 1 and 7.

### Return value

A string beginning with a <font size="size"> start tag (double quotes in size are replaced with &quot;), then the text str, and then a </font> end tag.

## Description

The fontsize() method itself simply joins the string parts together without any validation or normalization. However, to create valid <font> elements, When you specify size as an integer, you set the font size of str to one of the 7 defined sizes. You can specify size as a string such as "-2" or "+3" to adjust the font size of str relative to 3, the default value.

## Examples

### Using fontsize()

The code below creates an HTML string and then replaces the document's body with it:

```
const contentString = "Hello, world";

document.body.innerHTML = contentString.fontsize(7);
```

This will create the following HTML:

```
<font size="7">Hello, world</font>
```

Warning: This markup is invalid, because font is no longer a valid element.

Instead of using fontsize() and creating HTML text directly, you should use CSS to manipulate fonts. For example, you can manipulate font-size through the element.style attribute:

```
document.getElementById("yourElemId").style.fontSize = "7pt";
```

## Specifications

## Browser compatibility

## See also

- Polyfill of String.prototype.fontsize in core-js
- es-shims polyfill of String.prototype.fontsize
- HTML wrapper methods
- <font>

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fontsize
