# ArrayIterator::next

Source: https://devdocs.io/php/arrayiterator.next

(PHP 5, PHP 7, PHP 8)

ArrayIterator::next — Move to next entry

### Description

```
public ArrayIterator::next(): void
```

The iterator to the next entry.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 ArrayIterator::next() example

```
<?php
$arrayobject = new ArrayObject();

$arrayobject[] = 'zero';
$arrayobject[] = 'one';

$iterator = $arrayobject->getIterator();

while($iterator->valid()) {
    echo $iterator->key() . ' => ' . $iterator->current() . "\n";

    $iterator->next();
}
?>
```

The above example will output:

```
0 => zero
1 => one
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayiterator.next.php
