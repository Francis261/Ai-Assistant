# DOMNode::compareDocumentPosition

Source: https://devdocs.io/php/domnode.comparedocumentposition

(PHP 8 >= 8.4.0)

DOMNode::compareDocumentPosition — Compares the position of two nodes

### Description

```
public DOMNode::compareDocumentPosition(DOMNode $other): int
```

Compares the position of the other node relative to this node.

### Parameters

The node for which the position should be compared for, relative to this node.

### Return Values

A bitmask of the DOMNode::DOCUMENT_POSITION_* constants.

### Examples

Example #1 DOMNode::compareDocumentPosition() example

```
<?php
$xml = <<<XML
<root>
    <child1/>
    <child2/>
</root>
XML;

$dom = new DOMDocument();
$dom->loadXML($xml);

$root = $dom->documentElement;
$child1 = $root->firstElementChild;
$child2 = $child1->nextElementSibling;

var_dump($root->compareDocumentPosition($child1));
var_dump($child2->compareDocumentPosition($child1));
?>
```

The above example will output:

```
int(20) // This is DOMNode::DOCUMENT_POSITION_CONTAINED_BY | DOMNode::DOCUMENT_POSITION_FOLLOWING
int(2)  // This is DOMNode::DOCUMENT_POSITION_PRECEDING
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domnode.comparedocumentposition.php
