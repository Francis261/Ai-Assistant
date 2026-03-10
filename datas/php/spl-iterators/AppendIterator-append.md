# AppendIterator::append

Source: https://devdocs.io/php/appenditerator.append

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

AppendIterator::append — Appends an iterator

### Description

```
public AppendIterator::append(Iterator $iterator): void
```

Appends an iterator.

### Parameters

The iterator to append.

### Return Values

No value is returned.

### Examples

Example #1 AppendIterator::append() example

```
<?php
$array_a = new ArrayIterator(array('a', 'b', 'c'));
$array_b = new ArrayIterator(array('d', 'e', 'f'));

$iterator = new AppendIterator;
$iterator->append($array_a);
$iterator->append($array_b);

foreach ($iterator as $current) {
    echo $current;
}
?>
```

The above example will output:

```
abcdef
```

### See Also

- AppendIterator::__construct() - Constructs an AppendIterator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/appenditerator.append.php
