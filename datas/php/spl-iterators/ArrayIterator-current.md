# ArrayIterator::current

Source: https://devdocs.io/php/arrayiterator.current

(PHP 5, PHP 7, PHP 8)

ArrayIterator::current — Return current array entry

### Description

```
public ArrayIterator::current(): mixed
```

Get the current array entry.

### Parameters

This function has no parameters.

### Return Values

The current array entry.

### Examples

Example #1 ArrayIterator::current() example

```
<?php
$array = array('1' => 'one',
               '2' => 'two',
               '3' => 'three');

$arrayobject = new ArrayObject($array);

for($iterator = $arrayobject->getIterator();
    $iterator->valid();
    $iterator->next()) {

    echo $iterator->key() . ' => ' . $iterator->current() . "\n";
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
 https://www.php.net/manual/en/arrayiterator.current.php
