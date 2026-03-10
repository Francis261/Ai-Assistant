# DOMElement::after

Source: https://devdocs.io/php/domelement.after

(PHP 8)

DOMElement::after — Adds nodes after the element

### Description

```
public DOMElement::after(DOMNode|string ...$nodes): void
```

Adds the passed nodes after the element.

### Parameters

Nodes to be added after the node. Strings are automatically converted to text nodes.

### Return Values

No value is returned.

### Errors/Exceptions

Raised if the parent is of a type that does not allow children of the type of one of the passed nodes, or if the node to put in is one of this node's ancestors or this node itself.

Raised if one of the passed nodes was created from a different document than the one that created this node.

### Changelog

### Examples

Example #1 DOMElement::after() example

Adds nodes after the hello element.

```
<?php
$doc = new DOMDocument;
$doc->loadXML("<hello/>");
$container = $doc->documentElement;

$container->after("beautiful", $doc->createElement("world"));

echo $doc->saveXML();
?>
```

The above example will output:

```
<?xml version="1.0"?>
<hello/>
beautiful
<world/>
```

### See Also

- DOMChildNode::after() - Adds nodes after the node
- DOMElement::before() - Adds nodes before the element

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domelement.after.php
