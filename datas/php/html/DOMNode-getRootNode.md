# DOMNode::getRootNode

Source: https://devdocs.io/php/domnode.getrootnode

(PHP 8 >= 8.3.0)

DOMNode::getRootNode — Get root node

### Description

```
public DOMNode::getRootNode(?array $options = null): DOMNode
```

Get root node.

### Parameters

This parameter has no effect yet.

### Return Values

Returns the root node.

### Examples

Example #1 DOMNode::getRootNode() example

```
<?php

$dom = new DOMDocument();
$dom->loadXML('<?xml version="1.0"?><html><body/></html>');

var_dump($dom->documentElement->firstElementChild->getRootNode() === $dom);
?>
```

The above example will output:

```
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domnode.getrootnode.php
