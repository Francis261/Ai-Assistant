# ArrayIterator::valid

Source: https://devdocs.io/php/arrayiterator.valid

(PHP 5, PHP 7, PHP 8)

ArrayIterator::valid — Check whether array contains more entries

### Description

```
public ArrayIterator::valid(): bool
```

Checks if the array contains any more entries.

### Parameters

This function has no parameters.

### Return Values

Returns true if the iterator is valid, otherwise false

### Examples

Example #1 ArrayIterator::valid() example

```
<?php
$array = array('1' => 'one');

$arrayobject = new ArrayObject($array);
$iterator = $arrayobject->getIterator();

var_dump($iterator->valid()); //bool(true)

$iterator->next(); // advance to the next item

//bool(false) because there is only one array element
var_dump($iterator->valid());
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayiterator.valid.php
