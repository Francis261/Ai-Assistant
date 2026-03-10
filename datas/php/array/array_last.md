# array_last

Source: https://devdocs.io/php/function.array-last

(PHP 8 >= 8.5.0)

array_last — Gets the last value of an array

### Description

```
array_last(array $array): mixed
```

Get the last value of the given array.

### Parameters

### Return Values

Returns the last value of array if the array is not empty; null otherwise.

### Examples

Example #1 Basic array_last() Usage

```
<?php
$array = [1 => 'a', 0 => 'b', 3 => 'c', 2 => 'd'];

$lastValue = array_last($array);

var_dump($lastValue);
?>
```

The above example will output:

```
string(1) "d"
```

### See Also

- array_key_last() - Gets the last key of an array
- array_first() - Gets the first value of an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-last.php
