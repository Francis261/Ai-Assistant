# Dom\ParentNode::append

Source: https://devdocs.io/php/dom-parentnode.append

(PHP 8 >= 8.4.0)

Dom\ParentNode::append — Appends nodes after the last child node

### Description

```
public Dom\ParentNode::append(Dom\Node|string ...$nodes): void
```

Appends one or many nodes to the list of children after the last child node.

### Parameters

The nodes to append. Strings are automatically converted to text nodes.

### Return Values

No value is returned.

### Errors/Exceptions

Raised if this node is of a type that does not allow children of the type of one of the passed nodes, or if the node to put in is one of this node's ancestors or this node itself.

Raised if one of the passed nodes was created from a different document than the one that created this node.

### See Also

- Dom\ParentNode::prepend() - Prepends nodes before the first child node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/dom-parentnode.append.php
