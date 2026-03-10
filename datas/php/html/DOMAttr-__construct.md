# DOMAttr::__construct

Source: https://devdocs.io/php/domattr.construct

(PHP 5, PHP 7, PHP 8)

DOMAttr::__construct — Creates a new DOMAttr object

### Description

Creates a new DOMAttr object. This object is read only. It may be appended to a document, but additional nodes may not be appended to this node until the node is associated with a document. To create a writable node, use DOMDocument::createAttribute.

### Parameters

The tag name of the attribute.

The value of the attribute.

### Examples

Example #1 Creating a new DOMAttr object

```
<?php

$dom = new DOMDocument('1.0', 'utf-8');
$element = $dom->appendChild(new DOMElement('root'));
$attr = $element->setAttributeNode(new DOMAttr('attr', 'attrvalue'));
echo $dom->saveXML(); 

?>
```

The above example will output:

```
<?xml version="1.0" encoding="utf-8"?>
<root attr="attrvalue"/>
```

### See Also

- DOMDocument::createAttribute() - Create new attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domattr.construct.php
