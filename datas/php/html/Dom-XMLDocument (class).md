# The Dom\XMLDocument class

Source: https://devdocs.io/php/class.dom-xmldocument

## Introduction

(PHP 8 >= 8.4.0)

Represents an XML document.

## Class synopsis

## Properties

Note: While the DOMDocument class allows setting certain properties to influence parser behaviour, this class only uses the LIBXML_* constants to configure the parser.

An attribute specifying, as part of the XML declaration, the encoding of this document. This is null when unspecified or when it is not known, such as when the Document was created in memory.

An attribute specifying, as part of the XML declaration, whether this document is standalone. This is false when unspecified. A standalone document is one where there are no external markup declarations. An example of such a markup declaration is when the DTD declares an attribute with a default value.

An attribute specifying, as part of the XML declaration, the version number of this document. If there is no declaration and if this document supports the "XML" feature, the value is "1.0".

## Notes

Note: The DOM extension uses UTF-8 encoding when working with methods or properties. The parser methods auto-detect the encoding or allow the caller to specify an encoding.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.dom-xmldocument.php
