# gmp_add

Source: https://devdocs.io/php/function.gmp-add

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_add — Add numbers

### Description

```
gmp_add(GMP|int|string $num1, GMP|int|string $num2): GMP
```

Add two numbers.

### Parameters

The first summand (augent).

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

The second summand (addend).

A GMP object, an int, or a string that can be interpreted as a number following the same logic as if the string was used in gmp_init() with automatic base detection (i.e. when base is equal to 0).

### Return Values

A GMP number representing the sum of the arguments.

### Examples

Example #1 gmp_add() example

```
<?php
$sum = gmp_add("123456789012345", "76543210987655");
echo gmp_strval($sum) . "\n";
?>
```

The above example will output:

```
200000000000000
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-add.php
