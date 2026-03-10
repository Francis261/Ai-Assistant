# gmp_xor

Source: https://devdocs.io/php/function.gmp-xor

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_xor — Bitwise XOR

### Description

```
gmp_xor(GMP|int|string $num1, GMP|int|string $num2): GMP
```

Calculates bitwise exclusive OR (XOR) of two GMP numbers.

### Parameters

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

### Return Values

A GMP object.

### Examples

Example #1 gmp_xor() example

```
<?php
$xor1 = gmp_init("1101101110011101", 2);
$xor2 = gmp_init("0110011001011001", 2);

$xor3 = gmp_xor($xor1, $xor2);

echo gmp_strval($xor3, 2) . "\n";
?>
```

The above example will output:

```
1011110111000100
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-xor.php
