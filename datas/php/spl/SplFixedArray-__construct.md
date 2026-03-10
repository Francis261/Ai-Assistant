# SplFixedArray::__construct

Source: https://devdocs.io/php/splfixedarray.construct

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SplFixedArray::__construct — Constructs a new fixed array

### Description

Initializes a fixed array with a number of null values equal to size.

### Parameters

The size of the fixed array. This expects a number between 0 and PHP_INT_MAX.

### Errors/Exceptions

Throws a ValueError when size is a negative integer.

### Changelog

### Examples

Example #1 SplFixedArray::__construct() example

```
<?php
$array = new SplFixedArray(5);

$array[1] = 2;
$array[4] = "foo";

foreach($array as $v) {
  var_dump($v);
}
?>
```

The above example will output:

```
NULL
int(2)
NULL
NULL
string(3) "foo"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfixedarray.construct.php
