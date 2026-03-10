# SimpleXMLElement::key

Source: https://devdocs.io/php/simplexmlelement.key

(PHP 8)

SimpleXMLElement::key — Return current key

### Description

```
public SimpleXMLElement::key(): string
```

Prior to PHP 8.0, SimpleXMLElement::key() was only declared on the subclass SimpleXMLIterator.

This method gets the XML tag name of the current element.

### Parameters

This function has no parameters.

### Return Values

Returns the XML tag name of the element referenced by the current SimpleXMLElement object.

### Errors/Exceptions

Throws an Error on failure.

### Changelog

### Examples

Example #1 Get the current XML tag key

```
<?php
$xmlElement = new SimpleXMLElement('<books><book>PHP basics</book><book>XML basics</book></books>');

try {
    echo var_dump($xmlElement->key());
} catch (Error $e) {
    echo $e->getMessage(), "\n";
}

$xmlElement->rewind(); // rewind to the first element
echo var_dump($xmlElement->key());

?>
```

The above example will output:

```
Iterator not initialized or already consumed
string(4) "book"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/simplexmlelement.key.php
