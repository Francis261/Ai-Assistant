# DOMNode::removeChild

Source: https://devdocs.io/php/domnode.removechild

(PHP 5, PHP 7, PHP 8)

DOMNode::removeChild — Removes child from list of children

### Description

```
public DOMNode::removeChild(DOMNode $child): DOMNode|false
```

This functions removes a child from a list of children.

### Parameters

The removed child.

### Return Values

If the child could be removed the function returns the old child or false on error.

### Errors/Exceptions

Raised if this node is readonly.

Raised if child is not a child of this node.

### Examples

The following example will delete the chapter element of our XML document.

Example #1 Removing a child

```
<?php

$doc = new DOMDocument;
$doc->load('examples/book-docbook.xml');

$book = $doc->documentElement;

// we retrieve the chapter and remove it from the book
$chapter = $book->getElementsByTagName('chapter')->item(0);
$oldchapter = $book->removeChild($chapter);

echo $doc->saveXML();
?>
```

The above example will output:

```
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE book PUBLIC "-//OASIS//DTD DocBook XML V4.1.2//EN" 
          "http://www.oasis-open.org/docbook/xml/4.1.2/docbookx.dtd">
<book id="listing">
 <title>My lists</title>
 
</book>
```

### See Also

- DOMChildNode::remove() - Removes the node
- DOMNode::appendChild() - Adds new child at the end of the children
- DOMNode::replaceChild() - Replaces a child

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domnode.removechild.php
