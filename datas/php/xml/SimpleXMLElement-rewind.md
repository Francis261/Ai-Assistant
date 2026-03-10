# SimpleXMLElement::rewind

Source: https://devdocs.io/php/simplexmlelement.rewind

(PHP 8)

SimpleXMLElement::rewind — Rewind to the first element

### Description

```
public SimpleXMLElement::rewind(): void
```

Prior to PHP 8.0, SimpleXMLElement::rewind() was only declared on the subclass SimpleXMLIterator.

This method rewinds the SimpleXMLElement to the first element.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 Rewind to the first element

```
<?php
$xmlElement = new SimpleXMLElement('<books><book>PHP Basics</book><book>XML Basics</book></books>');
$xmlElement->rewind();

var_dump($xmlElement->current());
?>
```

The above example will output:

```
object(SimpleXMLElement)#2 (1) {
  [0]=>
  string(10) "PHP Basics"
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/simplexmlelement.rewind.php
