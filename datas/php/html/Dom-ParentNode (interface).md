# The Dom\ParentNode interface

Source: https://devdocs.io/php/class.dom-parentnode

## Introduction

(PHP 8 >= 8.4.0)

This is the modern, spec-compliant equivalent of DOMParentNode.

## Interface synopsis

```
public append(Dom\Node|string ...$nodes): void
```

```
public prepend(Dom\Node|string ...$nodes): void
```

```
public querySelector(string $selectors): ?Dom\Element
```

```
public querySelectorAll(string $selectors): Dom\NodeList
```

```
public replaceChildren(Dom\Node|string ...$nodes): void
```

## Table of Contents

- Dom\ParentNode::append — Appends nodes after the last child node
- Dom\ParentNode::prepend — Prepends nodes before the first child node
- Dom\ParentNode::querySelector — Returns the first element that matches the CSS selectors
- Dom\ParentNode::querySelectorAll — Returns a collection of elements that match the CSS selectors
- Dom\ParentNode::replaceChildren — Replace children in node

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.dom-parentnode.php
