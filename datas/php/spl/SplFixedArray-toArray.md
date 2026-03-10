# SplFixedArray::toArray

Source: https://devdocs.io/php/splfixedarray.toarray

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SplFixedArray::toArray — Returns a PHP array from the fixed array

### Description

```
public SplFixedArray::toArray(): array
```

Returns a PHP array from the fixed array.

### Parameters

This function has no parameters.

### Return Values

Returns a PHP array, similar to the fixed array.

### Examples

Example #1 SplFixedArray::toArray() example

```
<?php
$fa = new SplFixedArray(3);
$fa[0] = 0;
$fa[2] = 2;
var_dump($fa->toArray());
?>
```

The above example will output:

```
array(3) {
  [0]=>
  int(0)
  [1]=>
  NULL
  [2]=>
  int(2)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfixedarray.toarray.php
