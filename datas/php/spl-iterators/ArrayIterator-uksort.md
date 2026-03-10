# ArrayIterator::uksort

Source: https://devdocs.io/php/arrayiterator.uksort

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

ArrayIterator::uksort — Sort by keys using a user-defined comparison function

### Description

```
public ArrayIterator::uksort(callable $callback): true
```

This method sorts the elements by keys using a user-supplied comparison function.

Note:

If two members compare as equal, they retain their original order. Prior to PHP 8.0.0, their relative order in the sorted array was undefined.

### Parameters

The comparison function must return an integer less than, equal to, or greater than zero if the first argument is considered to be respectively less than, equal to, or greater than the second.

```
callback(mixed $a, mixed $b): int
```

Returning non-integer values from the comparison function, such as float, will result in an internal cast to int of the callback's return value. So values such as 0.99 and 0.1 will both be cast to an integer value of 0, which will compare such values as equal.

### Return Values

Always returns true.

### Changelog

### See Also

- ArrayIterator::asort() - Sort entries by values
- ArrayIterator::ksort() - Sort entries by keys
- ArrayIterator::natcasesort() - Sort entries naturally, case insensitive
- ArrayIterator::natsort() - Sort entries naturally
- ArrayIterator::uasort() - Sort with a user-defined comparison function and maintain index association
- uksort() - Sort an array by keys using a user-defined comparison function

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayiterator.uksort.php
