# AppendIterator::key

Source: https://devdocs.io/php/appenditerator.key

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

AppendIterator::key — Gets the current key

### Description

```
public AppendIterator::key(): scalar
```

Get the current key.

### Parameters

This function has no parameters.

### Return Values

The current key if it is valid or null otherwise.

### Examples

Example #1 AppendIterator::key() basic example

```
<?php
$array_a = new ArrayIterator(array('a' => 'aardwolf', 'b' => 'bear', 'c' => 'capybara'));
$array_b = new ArrayIterator(array('apple', 'orange', 'lemon'));

$iterator = new AppendIterator;
$iterator->append($array_a);
$iterator->append($array_b);

// Manual iteration
$iterator->rewind();
while ($iterator->valid()) {
    echo $iterator->key() . ' ' . $iterator->current() . PHP_EOL;
    $iterator->next();
}

echo PHP_EOL;

// With foreach
foreach ($iterator as $key => $current) {
    echo $key . ' ' . $current . PHP_EOL;
}
?>
```

The above example will output:

```
a aardwolf
b bear
c capybara
0 apple
1 orange
2 lemon

a aardwolf
b bear
c capybara
0 apple
1 orange
2 lemon
```

### See Also

- Iterator::key() - Return the key of the current element
- AppendIterator::current() - Gets the current value
- AppendIterator::valid() - Checks validity of the current element
- AppendIterator::next() - Moves to the next element
- AppendIterator::rewind() - Rewinds the Iterator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/appenditerator.key.php
