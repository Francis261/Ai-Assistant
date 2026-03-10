# gmp_popcount

Source: https://devdocs.io/php/function.gmp-popcount

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_popcount — Population count

### Description

```
gmp_popcount(GMP|int|string $num): int
```

Get the population count.

### Parameters

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

### Return Values

The population count of num, as an int.

### Examples

Example #1 gmp_popcount() example

```
<?php
$pop1 = gmp_init("10000101", 2); // 3 1's
echo gmp_popcount($pop1) . "\n";
$pop2 = gmp_init("11111110", 2); // 7 1's
echo gmp_popcount($pop2) . "\n";
?>
```

The above example will output:

```
3
7
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-popcount.php
