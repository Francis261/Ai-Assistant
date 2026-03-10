# gmp_invert

Source: https://devdocs.io/php/function.gmp-invert

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_invert — Inverse by modulo

### Description

```
gmp_invert(GMP|int|string $num1, GMP|int|string $num2): GMP|false
```

Computes the inverse of num1 modulo num2.

### Parameters

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

### Return Values

A GMP number on success or false if an inverse does not exist.

### Examples

Example #1 gmp_invert() example

```
<?php
echo gmp_invert("5", "10"); // no inverse, outputs nothing, result is FALSE
$invert = gmp_invert("5", "11");
echo gmp_strval($invert) . "\n";
?>
```

The above example will output:

```
9
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-invert.php
