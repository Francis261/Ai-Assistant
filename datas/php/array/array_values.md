# array_values

Source: https://devdocs.io/php/function.array-values

(PHP 4, PHP 5, PHP 7, PHP 8)

array_values — Return all the values of an array

### Description

```
array_values(array $array): array
```

array_values() returns all the values from the array and indexes the array numerically.

### Parameters

The array.

### Return Values

Returns an indexed array of values.

### Examples

Example #1 array_values() example

```
<?php
$array = array("size" => "XL", "color" => "gold");
print_r(array_values($array));
?>
```

The above example will output:

```
Array
(
    [0] => XL
    [1] => gold
)
```

### See Also

- array_keys() - Return all the keys or a subset of the keys of an array
- array_combine() - Creates an array by using one array for keys and another for its values

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-values.php
