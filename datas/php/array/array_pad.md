# array_pad

Source: https://devdocs.io/php/function.array-pad

(PHP 4, PHP 5, PHP 7, PHP 8)

array_pad — Pad array to the specified length with a value

### Description

```
array_pad(array $array, int $length, mixed $value): array
```

array_pad() returns a copy of the array padded to size specified by length with value value. If length is positive then the array is padded on the right, if it's negative then on the left. If the absolute value of length is less than or equal to the length of the array then no padding takes place.

### Parameters

Initial array of values to pad.

New size of the array.

Value to pad if array is less than length.

### Return Values

Returns a copy of the array padded to size specified by length with value value. If length is positive then the array is padded on the right, if it's negative then on the left. If the absolute value of length is less than or equal to the length of the array then no padding takes place.

### Changelog

### Examples

Example #1 array_pad() example

```
<?php
$input = array(12, 10, 9);

$result = array_pad($input, 5, 0);
// result is array(12, 10, 9, 0, 0)
echo join(', ', $result), PHP_EOL;

$result = array_pad($input, -7, -1);
// result is array(-1, -1, -1, -1, 12, 10, 9)
echo join(', ', $result), PHP_EOL;

$result = array_pad($input, 2, "noop");
// not padded
echo join(', ', $result), PHP_EOL;
?>
```

### See Also

- array_fill() - Fill an array with values
- range() - Create an array containing a range of elements

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-pad.php
