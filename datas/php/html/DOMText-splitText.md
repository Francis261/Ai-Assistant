# DOMText::splitText

Source: https://devdocs.io/php/domtext.splittext

(PHP 5, PHP 7, PHP 8)

DOMText::splitText — Breaks this node into two nodes at the specified offset

### Description

```
public DOMText::splitText(int $offset): DOMText|false
```

Breaks this node into two nodes at the specified offset, keeping both in the tree as siblings.

After being split, this node will contain all the content up to the offset. If the original node had a parent node, the new node is inserted as the next sibling of the original node. When the offset is equal to the length of this node, the new node has no data.

### Parameters

The offset at which to split, starting from 0.

### Return Values

The new node of the same type, which contains all the content at and after the offset.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domtext.splittext.php
