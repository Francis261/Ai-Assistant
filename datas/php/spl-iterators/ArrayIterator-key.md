# ArrayIterator::key

Source: https://devdocs.io/php/arrayiterator.key

(PHP 5, PHP 7, PHP 8)

ArrayIterator::key — Return current array key

### Description

```
public ArrayIterator::key(): string|int|null
```

This function returns the current array key

### Parameters

This function has no parameters.

### Return Values

The current array key.

### Examples

Example #1 ArrayIterator::key() example

```
<?php
$array = array('key' => 'value');

$arrayobject = new ArrayObject($array);
$iterator = $arrayobject->getIterator();

echo $iterator->key(); //key
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayiterator.key.php
