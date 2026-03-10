# abs

Source: https://devdocs.io/php/function.abs

(PHP 4, PHP 5, PHP 7, PHP 8)

abs — Absolute value

### Description

```
abs(int|float $num): int|float
```

Returns the absolute value of num.

### Parameters

The numeric value to process

### Return Values

The absolute value of num. If the argument num is of type float, the return type is also float, otherwise it is int (as float usually has a bigger value range than int).

### Changelog

### Examples

Example #1 abs() example

```
<?php
var_dump(abs(-4.2));
var_dump(abs(5));
var_dump(abs(-5));
?>
```

The above example will output:

```
float(4.2)
int(5)
int(5)
```

### See Also

- gmp_abs() - Absolute value
- gmp_sign() - Sign of number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.abs.php
