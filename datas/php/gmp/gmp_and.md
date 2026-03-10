# gmp_and

Source: https://devdocs.io/php/function.gmp-and

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_and — Bitwise AND

### Description

```
gmp_and(GMP|int|string $num1, GMP|int|string $num2): GMP
```

Calculates bitwise AND of two GMP numbers.

### Parameters

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

### Return Values

A GMP number representing the bitwise AND comparison.

### Examples

Example #1 gmp_and() example

```
<?php
$and1 = gmp_and("0xfffffffff4", "0x4");
$and2 = gmp_and("0xfffffffff4", "0x8");
echo gmp_strval($and1) . "\n";
echo gmp_strval($and2) . "\n";
?>
```

The above example will output:

```
4
0
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-and.php
