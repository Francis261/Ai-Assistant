# gmp_strval

Source: https://devdocs.io/php/function.gmp-strval

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_strval — Convert GMP number to string

### Description

```
gmp_strval(GMP|int|string $num, int $base = 10): string
```

Convert GMP number to string representation in base base. The default base is 10.

### Parameters

The GMP number that will be converted to a string.

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

The base of the returned number. The default base is 10. Allowed values for the base are from 2 to 62 and -2 to -36.

### Return Values

The number, as a string.

### Examples

Example #1 Converting a GMP number to a string

```
<?php
$a = gmp_init("0x41682179fbf5");
printf("Decimal: %s, 36-based: %s", gmp_strval($a), gmp_strval($a,36));
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-strval.php
