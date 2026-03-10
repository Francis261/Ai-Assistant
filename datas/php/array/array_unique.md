# array_unique

Source: https://devdocs.io/php/function.array-unique

(PHP 4 >= 4.0.1, PHP 5, PHP 7, PHP 8)

array_unique — Removes duplicate values from an array

### Description

```
array_unique(array $array, int $flags = SORT_STRING): array
```

Takes an input array and returns a new array without duplicate values.

Note that keys are preserved. If multiple elements compare equal under the given flags, then the key and value of the first equal element will be retained.

Note: Two elements are considered equal if and only if (string) $elem1 === (string) $elem2, i.e. when the string representation is the same, the first element will be used.

### Parameters

The input array.

The optional second parameter flags may be used to modify the comparison behavior using these values:

Comparison type flags:

- SORT_REGULAR - compare items normally (don't change types)
- SORT_NUMERIC - compare items numerically
- SORT_STRING - compare items as strings
- SORT_LOCALE_STRING - compare items as strings, based on the current locale.

### Return Values

Returns the filtered array.

### Changelog

### Examples

Example #1 array_unique() example

```
<?php

$input = ["a" => "green", "red", "b" => "green", "blue", "red"];
$result = array_unique($input);
print_r($result);

?>
```

The above example will output:

```
Array
(
    [a] => green
    [0] => red
    [1] => blue
)
```

Example #2 array_unique() and types

```
<?php

$input = [4, "4", "3", 4, 3, "3"];
$result = array_unique($input);
var_dump($result);

?>
```

The above example will output:

```
array(2) {
  [0] => int(4)
  [2] => string(1) "3"
}
```

### Notes

Note: Note that array_unique() is not intended to work on multi dimensional arrays.

### See Also

- array_count_values() - Counts the occurrences of each distinct value in an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-unique.php
