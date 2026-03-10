# array_is_list

Source: https://devdocs.io/php/function.array-is-list

(PHP 8 >= 8.1.0)

array_is_list — Checks whether a given array is a list

### Description

```
array_is_list(array $array): bool
```

Determines if the given array is a list. An array is considered a list if its keys consist of consecutive numbers from 0 to count($array)-1.

### Parameters

The array being evaluated.

### Return Values

Returns true if array is a list, false otherwise.

### Examples

Example #1 array_is_list() example

```
<?php
var_dump(array_is_list([])); // true
var_dump(array_is_list(['apple', 2, 3])); // true
var_dump(array_is_list([0 => 'apple', 'orange'])); // true

// The array does not start at 0
var_dump(array_is_list([1 => 'apple', 'orange'])); // false

// The keys are not in the correct order
var_dump(array_is_list([1 => 'apple', 0 => 'orange'])); // false

// Non-integer keys
var_dump(array_is_list([0 => 'apple', 'foo' => 'bar'])); // false

// Non-consecutive keys
var_dump(array_is_list([0 => 'apple', 2 => 'bar'])); // false
?>
```

### Notes

Note:

This function returns true on empty arrays.

### See Also

- array_values() - Return all the values of an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-is-list.php
