# DOMChildNode::before

Source: https://devdocs.io/php/domchildnode.before

(PHP 8)

DOMChildNode::before — Adds nodes before the node

### Description

```
public DOMChildNode::before(DOMNode|string ...$nodes): void
```

Adds the passed nodes before the node.

### Parameters

Nodes to be added before the node. Strings are automatically converted to text nodes.

### Return Values

No value is returned.

### Errors/Exceptions

Raised if the parent is of a type that does not allow children of the type of one of the passed nodes, or if the node to put in is one of this node's ancestors or this node itself.

Raised if one of the passed nodes was created from a different document than the one that created this node.

### Changelog

### See Also

- DOMChildNode::after() - Adds nodes after the node
- DOMChildNode::remove() - Removes the node
- DOMChildNode::replaceWith() - Replaces the node with new nodes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domchildnode.before.php
