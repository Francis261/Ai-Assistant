# gmp_cmp

Source: https://devdocs.io/php/function.gmp-cmp

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_cmp — Compare numbers

### Description

```
gmp_cmp(GMP|int|string $num1, GMP|int|string $num2): int
```

Compares two numbers.

### Parameters

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

### Return Values

Returns a positive value if a > b, zero if a = b and a negative value if a <
 b.

### Examples

Example #1 gmp_cmp() example

```
<?php
$cmp1 = gmp_cmp("1234", "1000"); // greater than
$cmp2 = gmp_cmp("1000", "1234"); // less than
$cmp3 = gmp_cmp("1234", "1234"); // equal to

echo "$cmp1 $cmp2 $cmp3\n";
?>
```

The above example will output:

```
1 -1 0
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-cmp.php
