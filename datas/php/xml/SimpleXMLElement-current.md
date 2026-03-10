# SimpleXMLElement::current

Source: https://devdocs.io/php/simplexmlelement.current

(PHP 8)

SimpleXMLElement::current — Returns the current element

### Description

```
public SimpleXMLElement::current(): SimpleXMLElement
```

Prior to PHP 8.0, SimpleXMLElement::current() was only declared on the subclass SimpleXMLIterator.

This method returns the current element as a SimpleXMLElement object.

### Parameters

This function has no parameters.

### Return Values

Returns the current element as a SimpleXMLElement object.

### Errors/Exceptions

Throws an Error on failure.

### Changelog

### Examples

Example #1 Return the current element

```
<?php
$xmlElement = new SimpleXMLElement('<books><book>PHP basics</book><book>XML basics</book></books>');

$xmlElement->rewind(); // rewind to first element, otherwise current() won't work
var_dump($xmlElement->current());
?>
```

The above example will output:

```
object(SimpleXMLElement)#2 (1) {
  [0]=>
  string(10) "PHP basics"
}
```

### See Also

- SimpleXMLElement::key() - Return current key
- SimpleXMLElement::next() - Move to next element
- SimpleXMLElement::rewind() - Rewind to the first element
- SimpleXMLElement::valid() - Check whether the current element is valid
- SimpleXMLElement

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/simplexmlelement.current.php
