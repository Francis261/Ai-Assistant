# gmp_gcd

Source: https://devdocs.io/php/function.gmp-gcd

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_gcd — Calculate GCD

### Description

```
gmp_gcd(GMP|int|string $num1, GMP|int|string $num2): GMP
```

Calculate greatest common divisor of num1 and num2. The result is always positive even if either of, or both, input operands are negative.

### Parameters

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

### Return Values

A positive GMP number that divides into both num1 and num2.

### Examples

Example #1 gmp_gcd() example

```
<?php
$gcd = gmp_gcd("12", "21");
echo gmp_strval($gcd) . "\n";
?>
```

The above example will output:

```
3
```

### See Also

- gmp_lcm() - Calculate LCM

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-gcd.php
