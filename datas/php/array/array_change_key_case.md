# array_change_key_case

Source: https://devdocs.io/php/function.array-change-key-case

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

array_change_key_case — Changes the case of all keys in an array

### Description

```
array_change_key_case(array $array, int $case = CASE_LOWER): array
```

Returns an array with all keys from array lowercased or uppercased. Numbered indices are left as is.

### Parameters

The array to work on

Either CASE_UPPER or CASE_LOWER (default)

### Return Values

Returns an array with its keys lower or uppercased.

### Examples

Example #1 array_change_key_case() example

```
<?php
$input_array = array("FirSt" => 1, "SecOnd" => 4);
print_r(array_change_key_case($input_array, CASE_UPPER));
?>
```

The above example will output:

```
Array
(
    [FIRST] => 1
    [SECOND] => 4
)
```

### Notes

Note:

If an array has indices that will be the same once run through this function (e.g. "keY" and "kEY"), the value that is later in the array will override other indices.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-change-key-case.php
