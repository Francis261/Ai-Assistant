# DOMNamedNodeMap::getNamedItem

Source: https://devdocs.io/php/domnamednodemap.getnameditem

(PHP 5, PHP 7, PHP 8)

DOMNamedNodeMap::getNamedItem — Retrieves a node specified by name

### Description

```
public DOMNamedNodeMap::getNamedItem(string $qualifiedName): ?DOMNode
```

Retrieves a node specified by its nodeName.

### Parameters

The nodeName of the node to retrieve.

### Return Values

A node (of any type) with the specified nodeName, or null if no node is found.

### Examples

Example #1 Getting an attribute on a node

```
<?php
$doc = new DOMDocument;
$doc->load('examples/book.xml');

$id = $doc->firstChild->nextSibling->nextSibling->firstChild->nextSibling->attributes->getNamedItem('id');
?>
```

Example #2 Accessing attribute with array syntax

```
<?php
$doc = new DOMDocument;
$doc->load('examples/book.xml');

$id = $doc->firstChild->nextSibling->nextSibling->firstChild->nextSibling->attributes['id'];
?>
```

### See Also

- DOMNamedNodeMap::getNamedItemNS() - Retrieves a node specified by local name and namespace URI

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domnamednodemap.getnameditem.php
