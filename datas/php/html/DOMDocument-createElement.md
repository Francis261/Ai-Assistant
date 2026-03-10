# DOMDocument::createElement

Source: https://devdocs.io/php/domdocument.createelement

(PHP 5, PHP 7, PHP 8)

DOMDocument::createElement — Create new element node

### Description

```
public DOMDocument::createElement(string $localName, string $value = ""): DOMElement|false
```

This function creates a new instance of class DOMElement. This node will not show up in the document unless it is inserted with (e.g.) DOMNode::appendChild().

### Parameters

The tag name of the element.

The value of the element. By default, an empty element will be created. The value can also be set later with DOMElement::$nodeValue.

The value is used verbatim except that the < and > entity references will escaped. Note that & has to be manually escaped; otherwise it is regarded as starting an entity reference. Also " won't be escaped.

### Return Values

Returns a new instance of class DOMElement or false if an error occurred.

### Errors/Exceptions

Raised if localName contains an invalid character.

### Examples

Example #1 Creating a new element and inserting it as root

```
<?php

$dom = new DOMDocument('1.0', 'utf-8');

$element = $dom->createElement('test', 'This is the root element!');

// We insert the new element as root (child of the document)
$dom->appendChild($element);

echo $dom->saveXML();
?>
```

The above example will output:

```
<?xml version="1.0" encoding="utf-8"?>
<test>This is the root element!</test>
```

Example #2 Passing text containing an unescaped & as value

```
<?php
$dom = new DOMDocument('1.0', 'utf-8');
$element = $dom->createElement('foo', 'me & you');
$dom->appendChild($element);
echo $dom->saveXML();
?>
```

The above example will output something similar to:

```
Warning: DOMDocument::createElement(): unterminated entity reference             you in /in/BjTCg on line 4
<?xml version="1.0" encoding="utf-8"?>
<foo/>
```

### Notes

Note:

The value will not be escaped. Use DOMDocument::createTextNode() to create a text node with escaping support.

### See Also

- DOMNode::appendChild() - Adds new child at the end of the children
- DOMDocument::createAttribute() - Create new attribute
- DOMDocument::createAttributeNS() - Create new attribute node with an associated namespace
- DOMDocument::createCDATASection() - Create new cdata node
- DOMDocument::createComment() - Create new comment node
- DOMDocument::createDocumentFragment() - Create new document fragment
- DOMDocument::createElementNS() - Create new element node with an associated namespace
- DOMDocument::createEntityReference() - Create new entity reference node
- DOMDocument::createProcessingInstruction() - Creates new PI node
- DOMDocument::createTextNode() - Create new text node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domdocument.createelement.php
