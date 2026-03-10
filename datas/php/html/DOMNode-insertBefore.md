# DOMNode::insertBefore

Source: https://devdocs.io/php/domnode.insertbefore

(PHP 5, PHP 7, PHP 8)

DOMNode::insertBefore — Adds a new child before a reference node

### Description

```
public DOMNode::insertBefore(DOMNode $node, ?DOMNode $child = null): DOMNode|false
```

This function inserts a new node right before the reference node. If you plan to do further modifications on the appended child you must use the returned node.

When using an existing node it will be moved.

### Parameters

The new node.

The reference node. If not supplied, node is appended to the children.

### Return Values

The inserted node or false on error.

### Errors/Exceptions

Raised if this node is readonly or if the previous parent of the node being inserted is readonly.

Raised if this node is of a type that does not allow children of the type of the node node, or if the node to append is one of this node's ancestors or this node itself.

Raised if node was created from a different document than the one that created this node.

Raised if child is not a child of this node.

### See Also

- DOMNode::appendChild() - Adds new child at the end of the children

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domnode.insertbefore.php
