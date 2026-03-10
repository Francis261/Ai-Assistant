# DOMElement::toggleAttribute

Source: https://devdocs.io/php/domelement.toggleattribute

(PHP 8 >= 8.3.0)

DOMElement::toggleAttribute — Toggle attribute

### Description

```
public DOMElement::toggleAttribute(string $qualifiedName, ?bool $force = null): bool
```

Toggle the attribute.

### Parameters

The qualified name of the attribute.

- if null, the function will toggle the attribute.
- if true, the function adds the attribute.
- if false, the function removes the attribute.

### Return Values

Returns true if the attribute is present after finishing the call, false otherwise.

### Examples

Example #1 DOMElement::toggleAttribute() example

```
<?php

$dom = new DOMDocument();
$dom->loadXML("<?xml version='1.0'?><container selected=\"\"/>");

var_dump($dom->documentElement->toggleAttribute('selected'));
echo $dom->saveXML() . PHP_EOL;

var_dump($dom->documentElement->toggleAttribute('selected'));
echo $dom->saveXML();
?>
```

The above example will output:

```
bool(false)
<?xml version="1.0"?>
<container/>

bool(true)
<?xml version="1.0"?>
<container selected=""/>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/domelement.toggleattribute.php
