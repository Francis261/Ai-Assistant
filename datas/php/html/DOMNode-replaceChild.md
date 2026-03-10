# DOMNode::replaceChild

Source: https://devdocs.io/php/domnode.replacechild

(PHP 5, PHP 7, PHP 8)

DOMNode::replaceChild — Replaces a child

### Description

```
public DOMNode::replaceChild(DOMNode $node, DOMNode $child): DOMNode|false
```

This function replaces the child child with the passed new node. If the node is already a child it will not be added a second time. If the replacement succeeds the old node is returned.

### Parameters

The new node. It must be a member of the target document, i.e. created by one of the DOMDocument->createXXX() methods or imported in the document by DOMDocument::importNode.

The old node.

### Return Values

The old node or false if an error occur.

### Errors/Exceptions

Raised if this node is readonly or if the previous parent of the node being inserted is readonly.

Raised if this node is of a type that does not allow children of the type of the node node, or if the node to put in is one of this node's ancestors or this node itself.

Raised if node was created from a different document than the one that created this node.

Raised if child is not a child of this node.

### See Also

- DOMChildNode::replaceWith() - Replaces the node with new nodes
- DOMNode::appendChild() - Adds new child at the end of the children
- DOMNode::removeChild() - Removes child from list of children

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domnode.replacechild.php
