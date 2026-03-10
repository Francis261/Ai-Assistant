# The DOMNameSpaceNode class

Source: https://devdocs.io/php/class.domnamespacenode

## Class synopsis

(PHP 5, PHP 7, PHP 8)

```
public __sleep(): array
```

```
public __wakeup(): void
```

## Properties

The qualified name of this node.

The namespace URI declared by this node, or null if the empty namespace.

The type of the node. In this case it returns XML_NAMESPACE_DECL_NODE .

The namespace prefix declared by this node.

The local part of the qualified name of this node.

The namespace URI declared by this node, or null if it is unspecified.

Whether the node is connected to a document.

The DOMDocument object associated with this node, or null if this node is a DOMDocument

The parent of this node. If there is no such node, this returns null.

The parent element of this node. If there is no such element, this returns null.

## Changelog

## Table of Contents

- DOMNameSpaceNode::__sleep — Forbids serialization unless serialization methods are implemented in a subclass
- DOMNameSpaceNode::__wakeup — Forbids unserialization unless unserialization methods are implemented in a subclass

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.domnamespacenode.php
