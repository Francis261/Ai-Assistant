# array_sum

Source: https://devdocs.io/php/function.array-sum

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

array_sum — Calculate the sum of values in an array

### Description

```
array_sum(array $array): int|float
```

array_sum() returns the sum of values in an array.

### Parameters

The input array.

### Return Values

Returns the sum of values as an integer or float; 0 if the array is empty.

### Changelog

### Examples

Example #1 array_sum() examples

```
<?php
$a = array(2, 4, 6, 8);
echo "sum(a) = " . array_sum($a) . "\n";

$b = array("a" => 1.2, "b" => 2.3, "c" => 3.4);
echo "sum(b) = " . array_sum($b) . "\n";
?>
```

The above example will output:

```
sum(a) = 20
sum(b) = 6.9
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-sum.php
