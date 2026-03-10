# SimpleXMLElement::valid

Source: https://devdocs.io/php/simplexmlelement.valid

(PHP 8)

SimpleXMLElement::valid — Check whether the current element is valid

### Description

```
public SimpleXMLElement::valid(): bool
```

Prior to PHP 8.0, SimpleXMLElement::valid() was only declared on the subclass SimpleXMLIterator.

This method checks if the current element is valid after calls to SimpleXMLElement::rewind() or SimpleXMLElement::next().

### Parameters

This function has no parameters.

### Return Values

Returns true if the current element is valid, otherwise false

### Examples

Example #1 Check whether the current element is valid

```
<?php
$xmlElement = new SimpleXMLElement('<books><book>SQL Basics</book></books>');

$xmlElement->rewind(); // rewind to the first element
echo var_dump($xmlElement->valid()); // bool(true)

$xmlElement->next(); // advance to the next element
echo var_dump($xmlElement->valid()); // bool(false) because there is only one element
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/simplexmlelement.valid.php
