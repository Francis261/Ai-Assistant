# array_chunk

Source: https://devdocs.io/php/function.array-chunk

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

array_chunk — Split an array into chunks

### Description

```
array_chunk(array $array, int $length, bool $preserve_keys = false): array
```

Chunks an array into arrays with length elements. The last chunk may contain less than length elements.

### Parameters

The array to work on

The size of each chunk

When set to true keys will be preserved. Default is false which will reindex the chunk numerically

### Return Values

Returns a multidimensional numerically indexed array, starting with zero, with each dimension containing length elements.

### Errors/Exceptions

If length is less than 1, a ValueError will be thrown.

### Changelog

### Examples

Example #1 array_chunk() example

```
<?php
$input_array = array('a', 'b', 'c', 'd', 'e');
print_r(array_chunk($input_array, 2));
print_r(array_chunk($input_array, 2, true));
?>
```

The above example will output:

```
Array
(
    [0] => Array
        (
            [0] => a
            [1] => b
        )

    [1] => Array
        (
            [0] => c
            [1] => d
        )

    [2] => Array
        (
            [0] => e
        )

)
Array
(
    [0] => Array
        (
            [0] => a
            [1] => b
        )

    [1] => Array
        (
            [2] => c
            [3] => d
        )

    [2] => Array
        (
            [4] => e
        )

)
```

### See Also

- array_slice() - Extract a slice of the array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-chunk.php
