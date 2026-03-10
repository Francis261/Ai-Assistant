# DOMParentNode::append

Source: https://devdocs.io/php/domparentnode.append

(PHP 8)

DOMParentNode::append — Appends nodes after the last child node

### Description

```
public DOMParentNode::append(DOMNode|string ...$nodes): void
```

Appends one or many nodes to the list of children after the last child node.

### Parameters

The nodes to append. Strings are automatically converted to text nodes.

### Return Values

No value is returned.

### Errors/Exceptions

Raised if this node is of a type that does not allow children of the type of one of the passed nodes, or if the node to put in is one of this node's ancestors or this node itself.

Raised if one of the passed nodes was created from a different document than the one that created this node.

### Changelog

### See Also

- DOMParentNode::prepend() - Prepends nodes before the first child node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domparentnode.append.php
