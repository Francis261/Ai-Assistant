# DOMNode::contains

Source: https://devdocs.io/php/domnode.contains

(PHP 8 >= 8.3.0)

DOMNode::contains — Checks if node contains other node

### Description

```
public DOMNode::contains(DOMNode|DOMNameSpaceNode|null $other): bool
```

Checks if node contains other node.

### Parameters

Node to be checked.

### Return Values

Returns true if node contains other node, false otherwise.

### Examples

Example #1 DOMNode::contains() example

```
<?php

$dom = new DOMDocument();
$dom->loadXML(<<<XML
<!DOCTYPE HTML>
<html>
   <body>
       <main>
           <p>Hello, world!</p>
       </main>
   </body>
</html>
XML);

$xpath = new DOMXPath($dom);
$main = $xpath->query("//main")[0];

var_dump($dom->documentElement->contains($main));
?>
```

The above example will output:

```
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domnode.contains.php
