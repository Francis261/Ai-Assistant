# SimpleXMLElement::next

Source: https://devdocs.io/php/simplexmlelement.next

(PHP 8)

SimpleXMLElement::next — Move to next element

### Description

```
public SimpleXMLElement::next(): void
```

Prior to PHP 8.0, SimpleXMLElement::next() was only declared on the subclass SimpleXMLIterator.

This method moves the SimpleXMLElement to the next element.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 Move to the next element

```
<?php
$xmlElement = new SimpleXMLElement('<books><book>PHP Basics</book><book>XML basics</book></books>');
$xmlElement->rewind(); // rewind to the first element
$xmlElement->next();

var_dump($xmlElement->current());
?>
```

The above example will output:

```
object(SimpleXMLElement)#2 (1) {
  [0]=>
  string(10) "XML basics"
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/simplexmlelement.next.php
