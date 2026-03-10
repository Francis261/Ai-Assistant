# gmp_or

Source: https://devdocs.io/php/function.gmp-or

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_or — Bitwise OR

### Description

```
gmp_or(GMP|int|string $num1, GMP|int|string $num2): GMP
```

Calculates bitwise inclusive OR of two GMP numbers.

### Parameters

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

### Return Values

A GMP object.

### Examples

Example #1 gmp_or() example

```
<?php
$or1 = gmp_or("0xfffffff2", "4");
echo gmp_strval($or1, 16) . "\n";
$or2 = gmp_or("0xfffffff2", "2");
echo gmp_strval($or2, 16) . "\n";
?>
```

The above example will output:

```
fffffff6
fffffff2
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-or.php
