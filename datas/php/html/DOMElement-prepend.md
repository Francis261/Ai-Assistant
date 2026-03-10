# DOMElement::prepend

Source: https://devdocs.io/php/domelement.prepend

(PHP 8)

DOMElement::prepend — Prepends nodes before the first child node

### Description

```
public DOMElement::prepend(DOMNode|string ...$nodes): void
```

Prepends one or many nodes to the list of children before the first child node.

### Parameters

The nodes to prepend. Strings are automatically converted to text nodes.

### Return Values

No value is returned.

### Errors/Exceptions

Raised if this node is of a type that does not allow children of the type of one of the passed nodes, or if the node to put in is one of this node's ancestors or this node itself.

Raised if one of the passed nodes was created from a different document than the one that created this node.

### Changelog

### Examples

Example #1 DOMElement::prepend() example

Prepends nodes in the container element.

```
<?php
$doc = new DOMDocument;
$doc->loadXML("<container> world</container>");
$world = $doc->documentElement;

$world->prepend($doc->createElement("hello"), "beautiful");

echo $doc->saveXML();
?>
```

The above example will output:

```
<?xml version="1.0"?>
<container><hello/>beautiful world</container>
```

### See Also

- DOMParentNode::prepend() - Prepends nodes before the first child node
- DOMElement::append() - Appends nodes after the last child node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domelement.prepend.php
