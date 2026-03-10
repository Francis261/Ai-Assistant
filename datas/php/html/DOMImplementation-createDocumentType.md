# DOMImplementation::createDocumentType

Source: https://devdocs.io/php/domimplementation.createdocumenttype

(PHP 5, PHP 7, PHP 8)

DOMImplementation::createDocumentType — Creates an empty DOMDocumentType object

### Description

```
public DOMImplementation::createDocumentType(string $qualifiedName, string $publicId = "", string $systemId = ""): DOMDocumentType|false
```

Creates an empty DOMDocumentType object. Entity declarations and notations are not made available. Entity reference expansions and default attribute additions do not occur.

### Parameters

The qualified name of the document type to create.

The external subset public identifier.

The external subset system identifier.

### Return Values

A new DOMDocumentType node with its ownerDocument set to null or false on error.

### Errors/Exceptions

Raised if there is an error with the namespace, as determined by qualifiedName.

### Changelog

### Examples

Example #1 Creating a document with an attached DTD

```
<?php

// Creates an instance of the DOMImplementation class
$imp = new DOMImplementation;

// Creates a DOMDocumentType instance
$dtd = $imp->createDocumentType('graph', '', 'graph.dtd');

// Creates a DOMDocument instance
$dom = $imp->createDocument("", "", $dtd);

// Set other properties
$dom->encoding = 'UTF-8';
$dom->standalone = false;

// Create an empty element
$element = $dom->createElement('graph');

// Append the element
$dom->appendChild($element);

// Retrieve and print the document
echo $dom->saveXML();

?>
```

The above example will output:

```
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE graph SYSTEM "graph.dtd">
<graph/>
```

### See Also

- DOMImplementation::createDocument() - Creates a DOMDocument object of the specified type with its document element

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domimplementation.createdocumenttype.php
