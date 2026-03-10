# The DOMNode class

Source: https://devdocs.io/php/class.domnode

## Class synopsis

(PHP 5, PHP 7, PHP 8)

```
public appendChild(DOMNode $node): DOMNode|false
```

```
public C14N(
 bool $exclusive = false,
 bool $withComments = false,
 ?array $xpath = null,
 ?array $nsPrefixes = null
): string|false
```

```
public C14NFile(
 string $uri,
 bool $exclusive = false,
 bool $withComments = false,
 ?array $xpath = null,
 ?array $nsPrefixes = null
): int|false
```

```
public cloneNode(bool $deep = false): DOMNode|false
```

```
public compareDocumentPosition(DOMNode $other): int
```

```
public contains(DOMNode|DOMNameSpaceNode|null $other): bool
```

```
public getLineNo(): int
```

```
public getNodePath(): ?string
```

```
public getRootNode(?array $options = null): DOMNode
```

```
public hasAttributes(): bool
```

```
public hasChildNodes(): bool
```

```
public insertBefore(DOMNode $node, ?DOMNode $child = null): DOMNode|false
```

```
public isDefaultNamespace(string $namespace): bool
```

```
public isEqualNode(?DOMNode $otherNode): bool
```

```
public isSameNode(DOMNode $otherNode): bool
```

```
public isSupported(string $feature, string $version): bool
```

```
public lookupNamespaceURI(?string $prefix): ?string
```

```
public lookupPrefix(string $namespace): ?string
```

```
public normalize(): void
```

```
public removeChild(DOMNode $child): DOMNode|false
```

```
public replaceChild(DOMNode $node, DOMNode $child): DOMNode|false
```

```
public __sleep(): array
```

```
public __wakeup(): void
```

## Predefined Constants

## Properties

Returns the most accurate name for the current node type

The value of this node, depending on its type. Contrary to the W3C specification, the node value of DOMElement nodes is equal to DOMNode::textContent instead of null.

Gets the type of the node. One of the predefined XML_*_NODE constants

The parent of this node. If there is no such node, this returns null.

The parent element of this element. If there is no such element, this returns null.

A DOMNodeList that contains all children of this node. If there are no children, this is an empty DOMNodeList.

The first child of this node. If there is no such node, this returns null.

The last child of this node. If there is no such node, this returns null.

The node immediately preceding this node. If there is no such node, this returns null.

The node immediately following this node. If there is no such node, this returns null.

A DOMNamedNodeMap containing the attributes of this node (if it is a DOMElement) or null otherwise.

Whether the node is connected to a document

The DOMDocument object associated with this node, or null if this node does not have an associated document (e.g. if it is detached, or if it is a DOMDocument).

The namespace URI of this node, or null if it is unspecified.

The namespace prefix of this node.

Returns the local part of the qualified name of this node.

The absolute base URI of this node or null if the implementation wasn't able to obtain an absolute URI.

The text content of this node and its descendants.

## Changelog

## Notes

Note:

The DOM extension uses UTF-8 encoding. Use mb_convert_encoding(), UConverter::transcode(), or iconv() to handle other encodings.

## See Also

- » W3C specification of Node

## Table of Contents

- DOMNode::appendChild — Adds new child at the end of the children
- DOMNode::C14N — Canonicalize nodes to a string
- DOMNode::C14NFile — Canonicalize nodes to a file
- DOMNode::cloneNode — Clones a node
- DOMNode::compareDocumentPosition — Compares the position of two nodes
- DOMNode::contains — Checks if node contains other node
- DOMNode::getLineNo — Get line number for a node
- DOMNode::getNodePath — Get an XPath for a node
- DOMNode::getRootNode — Get root node
- DOMNode::hasAttributes — Checks if node has attributes
- DOMNode::hasChildNodes — Checks if node has children
- DOMNode::insertBefore — Adds a new child before a reference node
- DOMNode::isDefaultNamespace — Checks if the specified namespaceURI is the default namespace or not
- DOMNode::isEqualNode — Checks that both nodes are equal
- DOMNode::isSameNode — Indicates if two nodes are the same node
- DOMNode::isSupported — Checks if feature is supported for specified version
- DOMNode::lookupNamespaceURI — Gets the namespace URI of the node based on the prefix
- DOMNode::lookupPrefix — Gets the namespace prefix of the node based on the namespace URI
- DOMNode::normalize — Normalizes the node
- DOMNode::removeChild — Removes child from list of children
- DOMNode::replaceChild — Replaces a child
- DOMNode::__sleep — Forbids serialization unless serialization methods are implemented in a subclass
- DOMNode::__wakeup — Forbids unserialization unless unserialization methods are implemented in a subclass

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.domnode.php
