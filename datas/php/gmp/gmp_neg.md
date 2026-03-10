# gmp_neg

Source: https://devdocs.io/php/function.gmp-neg

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_neg — Negate number

### Description

```
gmp_neg(GMP|int|string $num): GMP
```

Returns the negative value of a number.

### Parameters

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

### Return Values

Returns -num, as a GMP number.

### Examples

Example #1 gmp_neg() example

```
<?php
$neg1 = gmp_neg("1");
echo gmp_strval($neg1) . "\n";
$neg2 = gmp_neg("-1");
echo gmp_strval($neg2) . "\n";
?>
```

The above example will output:

```
-1
1
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-neg.php
