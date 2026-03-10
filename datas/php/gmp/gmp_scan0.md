# gmp_scan0

Source: https://devdocs.io/php/function.gmp-scan0

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_scan0 — Scan for 0

### Description

```
gmp_scan0(GMP|int|string $num1, int $start): int
```

Scans num1, starting with bit start, towards more significant bits, until the first clear bit is found.

### Parameters

The number to scan.

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

The starting bit.

### Return Values

Returns the index of the found bit, as an int. The index starts from 0.

### Examples

Example #1 gmp_scan0() example

```
<?php
// "0" bit is found at position 3. index starts at 0
$s1 = gmp_init("10111", 2);
echo gmp_scan0($s1, 0) . "\n";

// "0" bit is found at position 7. index starts at 5
$s2 = gmp_init("101110000", 2);
echo gmp_scan0($s2, 5) . "\n";
?>
```

The above example will output:

```
3
7
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-scan0.php
