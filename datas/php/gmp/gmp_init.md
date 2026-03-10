# gmp_init

Source: https://devdocs.io/php/function.gmp-init

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gmp_init — Create GMP number

### Description

```
gmp_init(int|string $num, int $base = 0): GMP
```

Creates a GMP number from an integer or string.

### Parameters

### Return Values

A GMP object.

### Changelog

### Examples

Example #1 Creating GMP number

```
<?php
$a = gmp_init(123456);
$b = gmp_init("0xFFFFDEBACDFEDF7200");
?>
```

### Notes

Note:

It is not necessary to call this function in order to use integers or strings in place of GMP numbers in GMP functions (such as with gmp_add()). Function arguments are automatically converted to GMP numbers, if such conversion is possible and needed, using the same rules as gmp_init().

### See Also

- GMP::__construct() - Create GMP number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gmp-init.php
