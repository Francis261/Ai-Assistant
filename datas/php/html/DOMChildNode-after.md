# DOMChildNode::after

Source: https://devdocs.io/php/domchildnode.after

(PHP 8)

DOMChildNode::after — Adds nodes after the node

### Description

```
public DOMChildNode::after(DOMNode|string ...$nodes): void
```

Adds the passed nodes after the node.

### Parameters

Nodes to be added after the node. Strings are automatically converted to text nodes.

### Return Values

No value is returned.

### Errors/Exceptions

Raised if the parent is of a type that does not allow children of the type of one of the passed nodes, or if the node to put in is one of this node's ancestors or this node itself.

Raised if one of the passed nodes was created from a different document than the one that created this node.

### Changelog

### See Also

- DOMChildNode::before() - Adds nodes before the node
- DOMChildNode::remove() - Removes the node
- DOMChildNode::replaceWith() - Replaces the node with new nodes
- DOMNode::appendChild() - Adds new child at the end of the children

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domchildnode.after.php
