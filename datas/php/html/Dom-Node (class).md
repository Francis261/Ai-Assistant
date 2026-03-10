# The Dom\Node class

Source: https://devdocs.io/php/class.dom-node

## Introduction

(PHP 8 >= 8.4.0)

This is the modern, spec-compliant equivalent of DOMNode.

## Class synopsis

## Predefined Constants

## Properties

Gets the type of the node. One of the predefined XML_*_NODE constants

- For elements, this is the HTML-uppercased qualified name.
- For attributes, this is the qualified name.
- For processing instructions, this is the target.
- For document type nodes, this is the name.

The absolute base URI of this node or null if the implementation wasn't able to obtain an absolute URI.

Whether the node is connected to a document

The parent of this node. If there is no such node, this returns null.

The parent element of this element. If there is no such element, this returns null.

The first child of this node. If there is no such node, this returns null.

The last child of this node. If there is no such node, this returns null.

The node immediately preceding this node. If there is no such node, this returns null.

The node immediately following this node. If there is no such node, this returns null.

The text content of this node and its descendants.

## Notes

Note: The DOM extension uses UTF-8 encoding when working with methods or properties. The parser methods auto-detect the encoding or allow the caller to specify an encoding.

## See Also

- » WHATWG specification of Node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.dom-node.php
