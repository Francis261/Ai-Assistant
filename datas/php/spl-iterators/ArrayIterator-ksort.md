# ArrayIterator::ksort

Source: https://devdocs.io/php/arrayiterator.ksort

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

ArrayIterator::ksort — Sort entries by keys

### Description

```
public ArrayIterator::ksort(int $flags = SORT_REGULAR): true
```

Sorts entries by their keys.

Note:

If two members compare as equal, they retain their original order. Prior to PHP 8.0.0, their relative order in the sorted array was undefined.

### Parameters

The optional second parameter flags may be used to modify the sorting behavior using these values:

Sorting type flags:

- SORT_REGULAR - compare items normally; the details are described in the comparison operators section
- SORT_NUMERIC - compare items numerically
- SORT_STRING - compare items as strings
- SORT_LOCALE_STRING - compare items as strings, based on the current locale. It uses the locale, which can be changed using setlocale()
- SORT_NATURAL - compare items as strings using "natural ordering" like natsort()
- SORT_FLAG_CASE - can be combined (bitwise OR) with SORT_STRING or SORT_NATURAL to sort strings case-insensitively

### Return Values

Always returns true.

### Changelog

### See Also

- ArrayIterator::asort() - Sort entries by values
- ArrayIterator::natcasesort() - Sort entries naturally, case insensitive
- ArrayIterator::natsort() - Sort entries naturally
- ArrayIterator::uasort() - Sort with a user-defined comparison function and maintain index association
- ArrayIterator::uksort() - Sort by keys using a user-defined comparison function
- ksort() - Sort an array by key in ascending order

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/arrayiterator.ksort.php
