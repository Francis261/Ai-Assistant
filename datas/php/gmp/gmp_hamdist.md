# gmp_hamdist

Source: https://devdocs.io/php/function.gmp-hamdist

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_hamdist — Hamming distance

### Description

```
gmp_hamdist(GMP|int|string $num1, GMP|int|string $num2): int
```

Returns the hamming distance between num1 and num2. Both operands should be non-negative.

### Parameters

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

It should be positive.

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

It should be positive.

### Return Values

The hamming distance between num1 and num2, as an int.

### Examples

Example #1 gmp_hamdist() example

```
<?php
$ham1 = gmp_init("1001010011", 2);
$ham2 = gmp_init("1011111100", 2);
echo gmp_hamdist($ham1, $ham2) . "\n";

/* hamdist is equivalent to: */
echo gmp_popcount(gmp_xor($ham1, $ham2)) . "\n";
?>
```

The above example will output:

```
6
6
```

### See Also

- gmp_popcount() - Population count
- gmp_xor() - Bitwise XOR

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-hamdist.php
