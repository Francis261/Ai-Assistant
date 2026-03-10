# <script> type attribute

Source: https://devdocs.io/html/reference/elements/script/type

The type attribute of the <script> element indicates the type of script represented by the element: a classic script, an import map, a JavaScript module, speculation rules, or a data block.

## Value

The value of this attribute indicates the type of data represented by the script, and will be one of the following:

Indicates that the script is a "classic script", containing JavaScript code. Authors are encouraged to omit the attribute if the script refers to JavaScript code rather than specify a MIME type. JavaScript MIME types are listed in the IANA media types specification.

This value indicates that the body of the element contains an import map. The import map is a JSON object that developers can use to control how the browser resolves module specifiers when importing JavaScript modules.

This value causes the code to be treated as a JavaScript module. The processing of the script contents is deferred. The charset and defer attributes have no effect. For information on using module, see our JavaScript modules guide. Unlike classic scripts, module scripts require the use of the CORS protocol for cross-origin fetching.

This value indicates that the body of the element contains speculation rules. Speculation rules take the form of a JSON object that determine what resources should be prefetched or prerendered by the browser. This is part of the Speculation Rules API.

The embedded content is treated as a data block, and won't be processed by the browser. Developers must use a valid MIME type that is not a JavaScript MIME type to denote data blocks. All of the other attributes will be ignored, including the src attribute.

Note: In earlier browsers, the type identified the scripting language of the embedded or imported (via the src attribute) code.

## Specifications

## Browser compatibility

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/script/type
