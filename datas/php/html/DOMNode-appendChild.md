# DOMNode::appendChild

Source: https://devdocs.io/php/domnode.appendchild

(PHP 5, PHP 7, PHP 8)

DOMNode::appendChild — Adds new child at the end of the children

### Description

```
public DOMNode::appendChild(DOMNode $node): DOMNode|false
```

This function appends a child to an existing list of children or creates a new list of children. The child can be created with e.g. DOMDocument::createElement(), DOMDocument::createTextNode() etc. or simply by using any other node.

When using an existing node it will be moved.

### Parameters

The appended child.

### Return Values

The node added or false on error.

### Errors/Exceptions

Raised if this node is readonly or if the previous parent of the node being inserted is readonly.

Raised if this node is of a type that does not allow children of the type of the node node, or if the node to append is one of this node's ancestors or this node itself.

Raised if node was created from a different document than the one that created this node.

### Examples

The following example will add a new element node to a fresh document.

Example #1 Adding a child

```
<?php

$doc = new DOMDocument;

$node = $doc->createElement("para");
$newnode = $doc->appendChild($node);

echo $doc->saveXML();
?>
```

Example #2 Nested children

```
<?php

$doc = new DOMDocument;

$headNode = $doc->createElement("head");
$doc->appendChild($headNode);

$titleNode = $doc->createElement("title");
$headNode->appendChild($titleNode);

echo $doc->saveXML();
?>
```

### See Also

- DOMChildNode::after() - Adds nodes after the node
- DOMNode::insertBefore() - Adds a new child before a reference node
- DOMNode::removeChild() - Removes child from list of children
- DOMNode::replaceChild() - Replaces a child

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domnode.appendchild.php
