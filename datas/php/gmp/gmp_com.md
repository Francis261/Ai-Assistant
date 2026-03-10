# gmp_com

Source: https://devdocs.io/php/function.gmp-com

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_com — Calculates one's complement

### Description

```
gmp_com(GMP|int|string $num): GMP
```

Returns the one's complement of num.

### Parameters

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

### Return Values

Returns the one's complement of num, as a GMP number.

### Examples

Example #1 gmp_com() example

```
<?php
$com = gmp_com("1234");
echo gmp_strval($com) . "\n";
?>
```

The above example will output:

```
-1235
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-com.php
