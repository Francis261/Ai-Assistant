# ArrayObject::getIterator

Source: https://devdocs.io/php/arrayobject.getiterator

(PHP 5, PHP 7, PHP 8)

ArrayObject::getIterator — Create a new iterator from an ArrayObject instance

### Description

```
public ArrayObject::getIterator(): Iterator
```

Create a new Iterator (default is ArrayIterator) from an ArrayObject instance.

### Parameters

This function has no parameters.

### Return Values

An iterator from an ArrayObject.

### Examples

Example #1 ArrayObject::getIterator() example

```
<?php

$array = [
    '1' => 'one',
    '2' => 'two',
    '3' => 'three',
];

$arrayobject = new ArrayObject($array);

$iterator = $arrayobject->getIterator();

while ($iterator->valid()) {
    echo $iterator->key() . ' => ' . $iterator->current() . "\n";

    $iterator->next();
}

?>
```

The above example will output:

```
1 => one
2 => two
3 => three
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayobject.getiterator.php
