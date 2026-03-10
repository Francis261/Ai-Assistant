# DOMDocument::createElementNS

Source: https://devdocs.io/php/domdocument.createelementns

(PHP 5, PHP 7, PHP 8)

DOMDocument::createElementNS — Create new element node with an associated namespace

### Description

```
public DOMDocument::createElementNS(?string $namespace, string $qualifiedName, string $value = ""): DOMElement|false
```

This function creates a new element node with an associated namespace. This node will not show up in the document unless it is inserted with (e.g.) DOMNode::appendChild().

### Parameters

The URI of the namespace.

The qualified name of the element, as prefix:tagname.

The value of the element. By default, an empty element will be created. You can also set the value later with DOMElement::$nodeValue.

### Return Values

The new DOMElement or false if an error occurred.

### Errors/Exceptions

Raised if qualifiedName contains an invalid character.

Raised if qualifiedName is a malformed qualified name.

### Examples

Example #1 Creating a new element and inserting it as root

```
<?php

$dom = new DOMDocument('1.0', 'utf-8');

$element = $dom->createElementNS('http://www.example.com/XFoo', 'xfoo:test', 'This is the root element!');

// We insert the new element as root (child of the document)
$dom->appendChild($element);

echo $dom->saveXML();
?>
```

The above example will output:

```
<?xml version="1.0" encoding="utf-8"?>
<xfoo:test xmlns:xfoo="http://www.example.com/XFoo">This is the root element!</xfoo:test>
```

Example #2 A namespace prefix example

```
<?php
$doc  = new DOMDocument('1.0', 'utf-8');
$doc->formatOutput = true;
$root = $doc->createElementNS('http://www.w3.org/2005/Atom', 'element');
$doc->appendChild($root);
$root->setAttributeNS('http://www.w3.org/2000/xmlns/' ,'xmlns:g', 'http://base.google.com/ns/1.0');
$item = $doc->createElementNS('http://base.google.com/ns/1.0', 'g:item_type', 'house');
$root->appendChild($item);

echo $doc->saveXML(), "\n";

echo $item->namespaceURI, "\n"; // Outputs: http://base.google.com/ns/1.0
echo $item->prefix, "\n";       // Outputs: g
echo $item->localName, "\n";    // Outputs: item_type
?>
```

The above example will output:

```
<?xml version="1.0" encoding="utf-8"?>
<element xmlns="http://www.w3.org/2005/Atom" xmlns:g="http://base.google.com/ns/1.0">
  <g:item_type>house</g:item_type>
</element>

http://base.google.com/ns/1.0
g
item_type
```

### See Also

- DOMNode::appendChild() - Adds new child at the end of the children
- DOMDocument::createAttribute() - Create new attribute
- DOMDocument::createAttributeNS() - Create new attribute node with an associated namespace
- DOMDocument::createCDATASection() - Create new cdata node
- DOMDocument::createComment() - Create new comment node
- DOMDocument::createDocumentFragment() - Create new document fragment
- DOMDocument::createElement() - Create new element node
- DOMDocument::createEntityReference() - Create new entity reference node
- DOMDocument::createProcessingInstruction() - Creates new PI node
- DOMDocument::createTextNode() - Create new text node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domdocument.createelementns.php
