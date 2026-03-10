# SplFixedArray::fromArray

Source: https://devdocs.io/php/splfixedarray.fromarray

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SplFixedArray::fromArray — Import a PHP array in a SplFixedArray instance

### Description

```
public static SplFixedArray::fromArray(array $array, bool $preserveKeys = true): SplFixedArray
```

Import the PHP array array in a new SplFixedArray instance

### Parameters

The array to import.

Try to save the numeric indexes used in the original array.

### Return Values

Returns an instance of SplFixedArray containing the array content.

### Examples

Example #1 SplFixedArray::fromArray() example

```
<?php
$fa = SplFixedArray::fromArray(array(1 => 1, 0 => 2, 3 => 3));

var_dump($fa);

$fa = SplFixedArray::fromArray(array(1 => 1, 0 => 2, 3 => 3), false);

var_dump($fa);
?>
```

The above example will output:

```
object(SplFixedArray)#1 (4) {
  [0]=>
  int(2)
  [1]=>
  int(1)
  [2]=>
  NULL
  [3]=>
  int(3)
}
object(SplFixedArray)#2 (3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfixedarray.fromarray.php
