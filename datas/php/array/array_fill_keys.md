# array_fill_keys

Source: https://devdocs.io/php/function.array-fill-keys

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

array_fill_keys — Fill an array with values, specifying keys

### Description

```
array_fill_keys(array $keys, mixed $value): array
```

Fills an array with the value of the value parameter, using the values of the keys array as keys.

### Parameters

Array of values that will be used as keys. Illegal values for key will be converted to string.

Value to use for filling

### Return Values

Returns the filled array

### Examples

Example #1 array_fill_keys() example

```
<?php
$keys = array('foo', 5, 10, 'bar');
$a = array_fill_keys($keys, 'banana');
print_r($a);
?>
```

The above example will output:

```
Array
(
    [foo] => banana
    [5] => banana
    [10] => banana
    [bar] => banana
)
```

### See Also

- array_fill() - Fill an array with values
- array_combine() - Creates an array by using one array for keys and another for its values

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-fill-keys.php
