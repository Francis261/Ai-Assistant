# DOMElement::getAttributeNames

Source: https://devdocs.io/php/domelement.getattributenames

(PHP 8 >= 8.3.0)

DOMElement::getAttributeNames — Get attribute names

### Description

```
public DOMElement::getAttributeNames(): array
```

Get attribute names.

### Parameters

This function has no parameters.

### Return Values

Return attribute names.

### Examples

Example #1 DOMElement::getAttributeNames() example

```
<?php

$dom = new DOMDocument();
$dom->loadXML('<html xmlns:some="some:ns" some:test="a" test2="b"/>');
var_dump($dom->documentElement->getAttributeNames());
?>
```

The above example will output:

```
array(3) {
 [0]=>
 string(10) "xmlns:some"
 [1]=>
 string(9) "some:test"
 [2]=>
 string(5) "test2"
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domelement.getattributenames.php
