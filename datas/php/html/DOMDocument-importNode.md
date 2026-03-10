# DOMDocument::importNode

Source: https://devdocs.io/php/domdocument.importnode

(PHP 5, PHP 7, PHP 8)

DOMDocument::importNode — Import node into current document

### Description

```
public DOMDocument::importNode(DOMNode $node, bool $deep = false): DOMNode|false
```

This function returns a copy of the node to import and associates it with the current document.

### Parameters

The node to import.

If set to true, this method will recursively import the subtree under the node.

Note:

To copy the nodes attributes deep needs to be set to true

### Return Values

The copied node or false, if it cannot be copied.

### Errors/Exceptions

DOMException is thrown if node cannot be imported.

### Examples

Example #1 DOMDocument::importNode() example

Copying nodes between documents.

```
<?php

$orgdoc = new DOMDocument;
$orgdoc->loadXML("<root><element><child>text in child</child></element></root>");

// The node we want to import to a new document
$node = $orgdoc->getElementsByTagName("element")->item(0);

// Create a new document
$newdoc = new DOMDocument;
$newdoc->formatOutput = true;

// Add some markup
$newdoc->loadXML("<root><someelement>text in some element</someelement></root>");

echo "The 'new document' before copying nodes into it:\n";
echo $newdoc->saveXML();

// Import the node, and all its children, to the document
$node = $newdoc->importNode($node, true);
// And then append it to the "<root>" node
$newdoc->documentElement->appendChild($node);

echo "\nThe 'new document' after copying the nodes into it:\n";
echo $newdoc->saveXML();
?>
```

The above example will output:

```
The 'new document' before copying nodes into it:
<?xml version="1.0"?>
<root>
  <someelement>text in some element</someelement>
</root>

The 'new document' after copying the nodes into it:
<?xml version="1.0"?>
<root>
  <someelement>text in some element</someelement>
  <element>
    <child>text in child</child>
  </element>
</root>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domdocument.importnode.php
