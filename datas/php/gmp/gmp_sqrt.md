# gmp_sqrt

Source: https://devdocs.io/php/function.gmp-sqrt

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_sqrt — Calculate square root

### Description

```
gmp_sqrt(GMP|int|string $num): GMP
```

Calculates square root of num.

### Parameters

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

### Return Values

The integer portion of the square root, as a GMP number.

### Examples

Example #1 gmp_sqrt() example

```
<?php
$sqrt1 = gmp_sqrt("9");
$sqrt2 = gmp_sqrt("7");
$sqrt3 = gmp_sqrt("1524157875019052100");

echo gmp_strval($sqrt1) . "\n";
echo gmp_strval($sqrt2) . "\n";
echo gmp_strval($sqrt3) . "\n";
?>
```

The above example will output:

```
3
2
1234567890
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-sqrt.php
