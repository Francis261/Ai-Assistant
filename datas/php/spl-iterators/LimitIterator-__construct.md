# LimitIterator::__construct

Source: https://devdocs.io/php/limititerator.construct

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

LimitIterator::__construct — Construct a LimitIterator

### Description

Constructs a new LimitIterator from an iterator with a given starting offset and maximum limit.

### Parameters

The Iterator to limit.

Optional offset of the limit.

Optional count of the limit.

### Errors/Exceptions

Throws a ValueError if the offset is less than 0 or the limit is less than -1.

### Changelog

### Examples

Example #1 LimitIterator::__construct() example

```
<?php
$ait = new ArrayIterator(array('a', 'b', 'c', 'd', 'e'));
$lit = new LimitIterator($ait, 1, 3);
foreach ($lit as $value) {
    echo $value . "\n";
}
?>
```

The above example will output:

```
b
c
d
```

### See Also

- LimitIterator examples

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/limititerator.construct.php
