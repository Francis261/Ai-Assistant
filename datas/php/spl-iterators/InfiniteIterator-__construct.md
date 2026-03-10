# InfiniteIterator::__construct

Source: https://devdocs.io/php/infiniteiterator.construct

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

InfiniteIterator::__construct — Constructs an InfiniteIterator

### Description

Constructs an InfiniteIterator from an Iterator.

### Parameters

The iterator to infinitely iterate over.

### Examples

Example #1 InfiniteIterator::__construct() example

```
<?php
$arrayit  = new ArrayIterator(array('cat','dog'));
$infinite = new InfiniteIterator($arrayit);
$limit    = new LimitIterator($infinite, 0, 7);
foreach($limit as $value)
{
    echo "$value\n";
}
?>
```

The above example will output:

```
cat
dog
cat
dog
cat
dog
cat
```

### See Also

- InfiniteIterator::next() - Moves the inner Iterator forward or rewinds it

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/infiniteiterator.construct.php
