# DOMNode::isEqualNode

Source: https://devdocs.io/php/domnode.isequalnode

(PHP 8 >= 8.3.0)

DOMNode::isEqualNode — Checks that both nodes are equal

### Description

```
public DOMNode::isEqualNode(?DOMNode $otherNode): bool
```

Checks that both nodes are equal.

### Parameters

The node.

### Return Values

Returns true if both nodes are equal, false otherwise.

### Examples

Example #1 DOMNode::isEqualNode() example

```
<?php

$dom1 = (new DOMDocument())->createElement('h1', 'Hello World!');
$dom2 = (new DOMDocument())->createElement('h1', 'Hello World!');

var_dump($dom1->isEqualNode($dom2));
?>
```

The above example will output:

```
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domnode.isequalnode.php
