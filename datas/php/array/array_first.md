# array_first

Source: https://devdocs.io/php/function.array-first

(PHP 8 >= 8.5.0)

array_first — Gets the first value of an array

### Description

```
array_first(array $array): mixed
```

Get the first value of the given array.

### Parameters

### Return Values

Returns the first value of array if the array is not empty; null otherwise.

### Examples

Example #1 Basic array_first() Usage

```
<?php
$array = [1 => 'a', 0 => 'b', 3 => 'c', 2 => 'd'];

$firstValue = array_first($array);

var_dump($firstValue);
?>
```

The above example will output:

```
string(1) "a"
```

### See Also

- array_key_first() - Gets the first key of an array
- array_last() - Gets the last value of an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-first.php
