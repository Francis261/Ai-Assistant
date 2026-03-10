# DOMChildNode::replaceWith

Source: https://devdocs.io/php/domchildnode.replacewith

(PHP 8)

DOMChildNode::replaceWith — Replaces the node with new nodes

### Description

```
public DOMChildNode::replaceWith(DOMNode|string ...$nodes): void
```

Replaces the node with new nodes.

### Parameters

The replacement nodes. Strings are automatically converted to text nodes.

### Return Values

No value is returned.

### Errors/Exceptions

Raised if the parent is of a type that does not allow children of the type of one of the passed nodes, or if the node to put in is one of this node's ancestors or this node itself.

Raised if one of the passed nodes was created from a different document than the one that created this node.

### Changelog

### See Also

- DOMChildNode::after() - Adds nodes after the node
- DOMChildNode::before() - Adds nodes before the node
- DOMChildNode::remove() - Removes the node
- DOMNode::replaceChild() - Replaces a child

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domchildnode.replacewith.php
