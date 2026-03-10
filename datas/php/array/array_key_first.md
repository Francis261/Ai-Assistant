# array_key_first

Source: https://devdocs.io/php/function.array-key-first

(PHP 7 >= 7.3.0, PHP 8)

array_key_first — Gets the first key of an array

### Description

```
array_key_first(array $array): int|string|null
```

Get the first key of the given array without affecting the internal array pointer.

### Parameters

An array.

### Return Values

Returns the first key of array if the array is not empty; null otherwise.

### Examples

Example #1 Basic array_key_first() Usage

```
<?php
$array = ['a' => 1, 'b' => 2, 'c' => 3];

$firstKey = array_key_first($array);

var_dump($firstKey);
?>
```

The above example will output:

```
string(1) "a"
```

### Notes

There are several ways to provide this functionality for versions prior to PHP 7.3.0. It is possible to use array_keys(), but that may be rather inefficient. It is also possible to use reset() and key(), but that may change the internal array pointer. An efficient solution, which does not change the internal array pointer, written as polyfill:

```
<?php
if (!function_exists('array_key_first')) {
    function array_key_first(array $arr) {
        foreach($arr as $key => $unused) {
            return $key;
        }
        return NULL;
    }
}
?>
```

### See Also

- array_first() - Gets the first value of an array
- array_key_last() - Gets the last key of an array
- reset() - Set the internal pointer of an array to its first element

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-key-first.php
