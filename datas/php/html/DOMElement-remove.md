# DOMElement::remove

Source: https://devdocs.io/php/domelement.remove

(PHP 8)

DOMElement::remove — Removes the element

### Description

```
public DOMElement::remove(): void
```

Removes the element.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 DOMElement::remove() example

Removes the element.

```
<?php
$doc = new DOMDocument;
$doc->loadXML("<container><hello/><world/></container>");
$hello = $doc->documentElement->firstChild;

$hello->remove();

echo $doc->saveXML();
?>
```

The above example will output:

```
<?xml version="1.0"?>
<container><world/></container>
```

### See Also

- DOMElement::after() - Adds nodes after the element
- DOMElement::before() - Adds nodes before the element
- DOMElement::replaceWith() - Replaces the element with new nodes
- DOMNode::removeChild() - Removes child from list of children

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domelement.remove.php
