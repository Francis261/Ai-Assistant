# DOMElement::append

Source: https://devdocs.io/php/domelement.append

(PHP 8)

DOMElement::append — Appends nodes after the last child node

### Description

```
public DOMElement::append(DOMNode|string ...$nodes): void
```

Appends one or many nodes to the list of children after the last child node.

### Parameters

The nodes to append. Strings are automatically converted to text nodes.

### Return Values

No value is returned.

### Errors/Exceptions

Raised if this node is of a type that does not allow children of the type of one of the passed nodes, or if the node to put in is one of this node's ancestors or this node itself.

Raised if one of the passed nodes was created from a different document than the one that created this node.

### Changelog

### Examples

Example #1 DOMElement::append() example

Appends nodes in the container element.

```
<?php
$doc = new DOMDocument;
$doc->loadXML("<container>hello </container>");
$world = $doc->documentElement;

$world->append("beautiful", $doc->createElement("world"));

echo $doc->saveXML();
?>
```

The above example will output:

```
<?xml version="1.0"?>
<container>hello beautiful<world/></container>
```

### See Also

- DOMParentNode::append() - Appends nodes after the last child node
- DOMElement::prepend() - Prepends nodes before the first child node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domelement.append.php
