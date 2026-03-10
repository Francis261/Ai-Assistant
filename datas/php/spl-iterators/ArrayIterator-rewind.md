# ArrayIterator::rewind

Source: https://devdocs.io/php/arrayiterator.rewind

(PHP 5, PHP 7, PHP 8)

ArrayIterator::rewind — Rewind array back to the start

### Description

```
public ArrayIterator::rewind(): void
```

This rewinds the iterator to the beginning.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 ArrayIterator::rewind() example

```
<?php
$arrayobject = new ArrayObject();

$arrayobject[] = 'zero';
$arrayobject[] = 'one';
$arrayobject[] = 'two';

$iterator = $arrayobject->getIterator();

$iterator->next();
echo $iterator->key(); //1

$iterator->rewind(); //rewinding to the beginning
echo $iterator->key(); //0
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayiterator.rewind.php
