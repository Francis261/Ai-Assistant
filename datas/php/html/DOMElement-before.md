# DOMElement::before

Source: https://devdocs.io/php/domelement.before

(PHP 8)

DOMElement::before — Adds nodes before the element

### Description

```
public DOMElement::before(DOMNode|string ...$nodes): void
```

Adds the passed nodes before the element.

### Parameters

Nodes to be added before the node. Strings are automatically converted to text nodes.

### Return Values

No value is returned.

### Errors/Exceptions

Raised if the parent is of a type that does not allow children of the type of one of the passed nodes, or if the node to put in is one of this node's ancestors or this node itself.

Raised if one of the passed nodes was created from a different document than the one that created this node.

### Changelog

### Examples

Example #1 DOMElement::before() example

Adds nodes before the hello element.

```
<?php
$doc = new DOMDocument;
$doc->loadXML("<world/>");
$world = $doc->documentElement;

$world->before("hello", $doc->createElement("beautiful"));

echo $doc->saveXML();
?>
```

The above example will output:

```
hello
<beautiful/>
<world/>
```

### See Also

- DOMChildNode::before() - Adds nodes before the node
- DOMElement::after() - Adds nodes after the element

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domelement.before.php
