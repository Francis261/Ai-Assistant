# array_push

Source: https://devdocs.io/php/function.array-push

(PHP 4, PHP 5, PHP 7, PHP 8)

array_push — Push one or more elements onto the end of array

### Description

```
array_push(array &$array, mixed ...$values): int
```

array_push() treats array as a stack, and pushes the passed variables onto the end of array. The length of array increases by the number of variables pushed. Has the same effect as:

```
<?php
$array[] = $var;
?>
```

Note: If you use array_push() to add one element to the array, it's better to use $array[] = because in that way there is no overhead of calling a function.

Note: array_push() will raise a warning if the first argument is not an array. This differed from the $var[] behaviour where a new array was created, prior to PHP 7.1.0.

### Parameters

The input array.

The values to push onto the end of the array.

### Return Values

Returns the new number of elements in the array.

### Changelog

### Examples

Example #1 array_push() example

```
<?php
$stack = array("orange", "banana");
array_push($stack, "apple", "raspberry");
print_r($stack);
?>
```

The above example will output:

```
Array
(
    [0] => orange
    [1] => banana
    [2] => apple
    [3] => raspberry
)
```

### See Also

- array_pop() - Pop the element off the end of array
- array_shift() - Shift an element off the beginning of array
- array_unshift() - Prepend one or more elements to the beginning of an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-push.php
