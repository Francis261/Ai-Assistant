# gmp_abs

Source: https://devdocs.io/php/function.gmp-abs

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_abs — Absolute value

### Description

```
gmp_abs(GMP|int|string $num): GMP
```

Get the absolute value of a number.

### Parameters

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

### Return Values

Returns the absolute value of num, as a GMP number.

### Examples

Example #1 gmp_abs() example

```
<?php
$abs1 = gmp_abs("274982683358");
$abs2 = gmp_abs("-274982683358");

echo gmp_strval($abs1) . "\n";
echo gmp_strval($abs2) . "\n";
?>
```

The above example will output:

```
274982683358
274982683358
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-abs.php
