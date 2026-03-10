# The DOMNamedNodeMap class

Source: https://devdocs.io/php/class.domnamednodemap

## Class synopsis

(PHP 5, PHP 7, PHP 8)

```
public count(): int
```

```
public getIterator(): Iterator
```

```
public getNamedItem(string $qualifiedName): ?DOMNode
```

```
public getNamedItemNS(?string $namespace, string $localName): ?DOMNode
```

```
public item(int $index): ?DOMNode
```

## Properties

The number of nodes in the map. The range of valid child node indices is 0 to length - 1 inclusive.

## Changelog

## Notes

Note: Nodes in the map can be accessed by array syntax.

## Table of Contents

- DOMNamedNodeMap::count — Get number of nodes in the map
- DOMNamedNodeMap::getIterator — Retrieve an external iterator
- DOMNamedNodeMap::getNamedItem — Retrieves a node specified by name
- DOMNamedNodeMap::getNamedItemNS — Retrieves a node specified by local name and namespace URI
- DOMNamedNodeMap::item — Retrieves a node specified by index

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.domnamednodemap.php
