# gmp_div_qr

Source: https://devdocs.io/php/function.gmp-div-qr

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_div_qr — Divide numbers and get quotient and remainder

### Description

```
gmp_div_qr(GMP|int|string $num1, GMP|int|string $num2, int $rounding_mode = GMP_ROUND_ZERO): array
```

The function divides num1 by num2.

### Parameters

The number being divided.

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

The number that num1 is being divided by.

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

See the gmp_div_q() function for description of the rounding_mode argument.

### Return Values

Returns an array, with the first element being [n/d] (the integer result of the division) and the second being (n - [n/d] * d) (the remainder of the division).

### Examples

Example #1 Division of GMP numbers

```
<?php
$a = gmp_init("0x41682179fbf5");
$res = gmp_div_qr($a, "0xDEFE75");
printf("Result is: q - %s, r - %s",
       gmp_strval($res[0]), gmp_strval($res[1]));
?>
```

### See Also

- gmp_div_q() - Divide numbers
- gmp_div_r() - Remainder of the division of numbers

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-div-qr.php
