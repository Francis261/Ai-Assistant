# DOMElement::__construct

Source: https://devdocs.io/php/domelement.construct

(PHP 5, PHP 7, PHP 8)

DOMElement::__construct — Creates a new DOMElement object

### Description

Creates a new DOMElement object. This object is read only. It may be appended to a document, but additional nodes may not be appended to this node until the node is associated with a document. To create a writeable node, use DOMDocument::createElement or DOMDocument::createElementNS.

### Parameters

The tag name of the element. When also passing in namespaceURI, the element name may take a prefix to be associated with the URI.

The value of the element.

A namespace URI to create the element within a specific namespace.

### Examples

Example #1 Creating a new DOMElement

```
<?php

$dom = new DOMDocument('1.0', 'iso-8859-1');
$element = $dom->appendChild(new DOMElement('root'));
$element_ns = new DOMElement('pr:node1', 'thisvalue', 'http://xyz');
$element->appendChild($element_ns);
echo $dom->saveXML(); /* <?xml version="1.0" encoding="utf-8"?>
<root><pr:node1 xmlns:pr="http://xyz">thisvalue</pr:node1></root> */

?>
```

### See Also

- DOMDocument::createElement() - Create new element node
- DOMDocument::createElementNS() - Create new element node with an associated namespace

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domelement.construct.php
