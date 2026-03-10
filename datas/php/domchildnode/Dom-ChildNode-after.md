# Dom\ChildNode::after

Source: https://devdocs.io/php/dom-childnode.after

(PHP 8 >= 8.4.0)

Dom\ChildNode::after — Adds nodes after the node

### Description

```
public Dom\ChildNode::after(Dom\Node|string ...$nodes): void
```

Adds the passed nodes after the node.

### Parameters

Nodes to be added after the node. Strings are automatically converted to text nodes.

### Return Values

No value is returned.

### Errors/Exceptions

Raised if the parent is of a type that does not allow children of the type of one of the passed nodes, or if the node to put in is one of this node's ancestors or this node itself.

Raised if one of the passed nodes was created from a different document than the one that created this node.

### See Also

- Dom\ChildNode::before() - Adds nodes before the node
- Dom\ChildNode::remove() - Removes the node
- Dom\ChildNode::replaceWith() - Replaces the node with new nodes
- Dom\Node::appendChild()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-childnode.after.php
