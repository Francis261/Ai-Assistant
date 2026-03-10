# DOMParentNode::prepend

Source: https://devdocs.io/php/domparentnode.prepend

(PHP 8)

DOMParentNode::prepend — Prepends nodes before the first child node

### Description

```
public DOMParentNode::prepend(DOMNode|string ...$nodes): void
```

Prepends one or many nodes to the list of children before the first child node.

### Parameters

The nodes to prepend. Strings are automatically converted to text nodes.

### Return Values

No value is returned.

### Errors/Exceptions

Raised if this node is of a type that does not allow children of the type of one of the passed nodes, or if the node to put in is one of this node's ancestors or this node itself.

Raised if one of the passed nodes was created from a different document than the one that created this node.

### Changelog

### See Also

- DOMParentNode::append() - Appends nodes after the last child node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domparentnode.prepend.php
