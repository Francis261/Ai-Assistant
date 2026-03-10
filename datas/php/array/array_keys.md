# array_keys

Source: https://devdocs.io/php/function.array-keys

(PHP 4, PHP 5, PHP 7, PHP 8)

array_keys — Return all the keys or a subset of the keys of an array

### Description

```
array_keys(array $array): array
```

```
array_keys(array $array, mixed $filter_value, bool $strict = false): array
```

array_keys() returns the keys, numeric and string, from the array.

If a filter_value is specified, then only the keys for that value are returned. Otherwise, all the keys from the array are returned.

### Parameters

An array containing keys to return.

If specified, then only keys containing this value are returned.

Determines if strict comparison (===) should be used during the search.

### Return Values

Returns an array of all the keys in array.

### Examples

Example #1 array_keys() example

```
<?php
$array = array(0 => 100, "color" => "red");
print_r(array_keys($array));

$array = array("blue", "red", "green", "blue", "blue");
print_r(array_keys($array, "blue"));

$array = array("color" => array("blue", "red", "green"),
               "size"  => array("small", "medium", "large"));
print_r(array_keys($array));
?>
```

The above example will output:

```
Array
(
    [0] => 0
    [1] => color
)
Array
(
    [0] => 0
    [1] => 3
    [2] => 4
)
Array
(
    [0] => color
    [1] => size
)
```

### See Also

- array_values() - Return all the values of an array
- array_combine() - Creates an array by using one array for keys and another for its values
- array_key_exists() - Checks if the given key or index exists in the array
- array_search() - Searches the array for a given value and returns the first corresponding key if successful

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-keys.php
