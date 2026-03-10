# LimitIterator::getPosition

Source: https://devdocs.io/php/limititerator.getposition

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

LimitIterator::getPosition — Return the current position

### Description

```
public LimitIterator::getPosition(): int
```

Gets the current zero-based position of the inner Iterator.

### Parameters

This function has no parameters.

### Return Values

The current position.

### Examples

Example #1 LimitIterator::getPosition() example

```
<?php
$fruits = array(
    'a' => 'apple',
    'b' => 'banana',
    'c' => 'cherry',
    'd' => 'damson',
    'e' => 'elderberry'
);
$array_it = new ArrayIterator($fruits);
$limit_it = new LimitIterator($array_it, 2, 3);
foreach ($limit_it as $item) {
    echo $limit_it->getPosition() . ' ' . $item . "\n";
}
?>
```

The above example will output:

```
2 cherry
3 damson
4 elderberry
```

### See Also

- FilterIterator::key() - Get the current key

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/limititerator.getposition.php
