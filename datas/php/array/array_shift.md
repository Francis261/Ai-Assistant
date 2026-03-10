# array_shift

Source: https://devdocs.io/php/function.array-shift

(PHP 4, PHP 5, PHP 7, PHP 8)

array_shift — Shift an element off the beginning of array

### Description

```
array_shift(array &$array): mixed
```

array_shift() shifts the first value of the array off and returns it, shortening the array by one element and moving everything down. All numerical array keys will be modified to start counting from zero while literal keys won't be affected.

Note: This function will reset() the array pointer of the input array after use.

### Parameters

The input array.

### Return Values

Returns the shifted value, or null if array is empty or is not an array.

### Examples

Example #1 array_shift() example

```
<?php
$stack = array("orange", "banana", "apple", "raspberry");
$fruit = array_shift($stack);
print_r($stack);
?>
```

The above example will output:

```
Array
(
    [0] => banana
    [1] => apple
    [2] => raspberry
)
```

and orange will be assigned to $fruit.

### See Also

- array_unshift() - Prepend one or more elements to the beginning of an array
- array_push() - Push one or more elements onto the end of array
- array_pop() - Pop the element off the end of array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-shift.php
