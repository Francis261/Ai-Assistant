# AppendIterator::getIteratorIndex

Source: https://devdocs.io/php/appenditerator.getiteratorindex

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

AppendIterator::getIteratorIndex — Gets an index of iterators

### Description

```
public AppendIterator::getIteratorIndex(): ?int
```

Gets the index of the current inner iterator.

### Parameters

This function has no parameters.

### Return Values

Returns the zero-based, integer index of the current inner iterator if it exists, or null otherwise.

### Examples

Example #1 AppendIterator.getIteratorIndex() basic example

```
<?php
$array_a = new ArrayIterator(array('a' => 'aardwolf', 'b' => 'bear', 'c' => 'capybara'));
$array_b = new ArrayIterator(array('apple', 'orange', 'lemon'));

$iterator = new AppendIterator;
$iterator->append($array_a);
$iterator->append($array_b);

foreach ($iterator as $key => $current) {
    echo $iterator->getIteratorIndex() . '  ' . $key . ' ' . $current . PHP_EOL;
}
?>
```

The above example will output:

```
0  a aardwolf
0  b bear
0  c capybara
1  0 apple
1  1 orange
1  2 lemon
```

### See Also

- AppendIterator::getInnerIterator()
- AppendIterator::getArrayIterator() - Gets the ArrayIterator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/appenditerator.getiteratorindex.php
