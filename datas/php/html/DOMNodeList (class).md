# The DOMNodeList class

Source: https://devdocs.io/php/class.domnodelist

## Introduction

(PHP 5, PHP 7, PHP 8)

Represents a live list of nodes.

## Class synopsis

```
public count(): int
```

```
public getIterator(): Iterator
```

```
public item(int $index): DOMElement|DOMNode|DOMNameSpaceNode|null
```

## Properties

The number of nodes in the list. The range of valid child node indices is 0 to length - 1 inclusive.

## Changelog

## Notes

Note: Nodes in the list can be accessed by array syntax.

## See Also

- » W3C specification of NodeList

## Table of Contents

- DOMNodeList::count — Get number of nodes in the list
- DOMNodeList::getIterator — Retrieve an external iterator
- DOMNodeList::item — Retrieves a node specified by index

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.domnodelist.php
