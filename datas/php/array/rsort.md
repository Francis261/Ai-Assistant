# rsort

Source: https://devdocs.io/php/function.rsort

(PHP 4, PHP 5, PHP 7, PHP 8)

rsort — Sort an array in descending order

### Description

```
rsort(array &$array, int $flags = SORT_REGULAR): true
```

Sorts array in place by values in descending order.

Note:

If two members compare as equal, they retain their original order. Prior to PHP 8.0.0, their relative order in the sorted array was undefined.

Note: This function assigns new keys to the elements in array. It will remove any existing keys that may have been assigned, rather than just reordering the keys.

Note:

Resets array's internal pointer to the first element.

### Parameters

The input array.

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

### Examples

Example #1 rsort() example

```
<?php
$fruits = array("lemon", "orange", "banana", "apple");
rsort($fruits);
foreach ($fruits as $key => $val) {
    echo "$key = $val\n";
}
?>
```

The above example will output:

```
0 = orange
1 = lemon
2 = banana
3 = apple
```

The fruits have been sorted in reverse alphabetical order.

### See Also

- sort() - Sort an array in ascending order
- arsort() - Sort an array in descending order and maintain index association
- krsort() - Sort an array by key in descending order
- The comparison of array sorting functions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.rsort.php
