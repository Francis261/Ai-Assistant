# The tidyNode class

Source: https://devdocs.io/php/class.tidynode

## Introduction

(PHP 5, PHP 7, PHP 8)

An HTML node in an HTML file, as detected by tidy.

## Class synopsis

```
public getNextSibling(): ?tidyNode
```

```
public getParent(): ?tidyNode
```

```
public getPreviousSibling(): ?tidyNode
```

```
public hasChildren(): bool
```

```
public hasSiblings(): bool
```

```
public isAsp(): bool
```

```
public isComment(): bool
```

```
public isHtml(): bool
```

```
public isJste(): bool
```

```
public isPhp(): bool
```

```
public isText(): bool
```

## Properties

The HTML representation of the node, including the surrounding tags.

The name of the HTML node

The type of the node (one of the nodetype constants, e.g. TIDY_NODETYPE_PHP)

The line number at which the tags is located in the file

The column number at which the tags is located in the file

Indicates if the node is a proprietary tag

The ID of the node (one of the tag constants, e.g. TIDY_TAG_FRAME)

An array of string, representing the attributes names (as keys) of the current node.

An array of tidyNode, representing the children of the current node.

## Table of Contents

- tidyNode::__construct — Private constructor to disallow direct instantiation
- tidyNode::getNextSibling — Returns the next sibling node of the current node
- tidyNode::getParent — Returns the parent node of the current node
- tidyNode::getPreviousSibling — Returns the previous sibling node of the current node
- tidyNode::hasChildren — Checks if a node has children
- tidyNode::hasSiblings — Checks if a node has siblings
- tidyNode::isAsp — Checks if this node is ASP
- tidyNode::isComment — Checks if a node represents a comment
- tidyNode::isHtml — Checks if a node is an element node
- tidyNode::isJste — Checks if this node is JSTE
- tidyNode::isPhp — Checks if a node is PHP
- tidyNode::isText — Checks if a node represents text (no markup)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.tidynode.php
