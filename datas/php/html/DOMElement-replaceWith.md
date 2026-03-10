# DOMElement::replaceWith

Source: https://devdocs.io/php/domelement.replacewith

(PHP 8)

DOMElement::replaceWith — Replaces the element with new nodes

### Description

```
public DOMElement::replaceWith(DOMNode|string ...$nodes): void
```

Replaces the element with new nodes.

### Parameters

The replacement nodes. Strings are automatically converted to text nodes.

### Return Values

No value is returned.

### Errors/Exceptions

Raised if the parent is of a type that does not allow children of the type of one of the passed nodes, or if the node to put in is one of this node's ancestors or this node itself.

Raised if one of the passed nodes was created from a different document than the one that created this node.

### Changelog

### Examples

Example #1 DOMElement::replaceWith() example

Replaces the element with new nodes.

```
<?php
$doc = new DOMDocument;
$doc->loadXML("<container><hello/></container>");
$cdata = $doc->documentElement->firstChild;

$cdata->replaceWith("beautiful", $doc->createElement("world"));

echo $doc->saveXML();
?>
```

The above example will output:

```
<?xml version="1.0"?>
<container>beautiful<world/></container>
```

### See Also

- DOMChildNode::replaceWith() - Replaces the node with new nodes
- DOMElement::replaceChildren() - Replace children in element
- DOMElement::after() - Adds nodes after the element
- DOMElement::before() - Adds nodes before the element
- DOMElement::remove() - Removes the element

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domelement.replacewith.php
