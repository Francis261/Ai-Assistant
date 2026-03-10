# ArrayIterator::natcasesort

Source: https://devdocs.io/php/arrayiterator.natcasesort

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

ArrayIterator::natcasesort — Sort entries naturally, case insensitive

### Description

```
public ArrayIterator::natcasesort(): true
```

Sort the entries by values using a case insensitive "natural order" algorithm.

Note:

If two members compare as equal, they retain their original order. Prior to PHP 8.0.0, their relative order in the sorted array was undefined.

### Parameters

This function has no parameters.

### Return Values

Always returns true.

### Changelog

### See Also

- ArrayIterator::asort() - Sort entries by values
- ArrayIterator::ksort() - Sort entries by keys
- ArrayIterator::natsort() - Sort entries naturally
- ArrayIterator::uasort() - Sort with a user-defined comparison function and maintain index association
- ArrayIterator::uksort() - Sort by keys using a user-defined comparison function
- natcasesort() - Sort an array using a case insensitive "natural order" algorithm

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayiterator.natcasesort.php
