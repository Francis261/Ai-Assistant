# DOMNamedNodeMap::getNamedItemNS

Source: https://devdocs.io/php/domnamednodemap.getnameditemns

(PHP 5, PHP 7, PHP 8)

DOMNamedNodeMap::getNamedItemNS — Retrieves a node specified by local name and namespace URI

### Description

```
public DOMNamedNodeMap::getNamedItemNS(?string $namespace, string $localName): ?DOMNode
```

Retrieves a node specified by localName and namespace.

### Parameters

The namespace URI of the node to retrieve.

The local name of the node to retrieve.

### Return Values

A node (of any type) with the specified local name and namespace URI, or null if no node is found.

### See Also

- DOMNamedNodeMap::getNamedItem() - Retrieves a node specified by name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domnamednodemap.getnameditemns.php
