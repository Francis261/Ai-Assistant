# bcsqrt

Source: https://devdocs.io/php/function.bcsqrt

(PHP 4, PHP 5, PHP 7, PHP 8)

bcsqrt — Get the square root of an arbitrary precision number

### Description

```
bcsqrt(string $num, ?int $scale = null): string
```

Return the square root of num.

### Parameters

The operand, as a well-formed BCMath numeric string.

### Return Values

Returns the square root as a well-formed BCMath numeric string.

### Errors/Exceptions

This function throws a ValueError in the following cases:

- num is not a well-formed BCMath numeric string
- num is less than 0
- scale is outside the valid range

### Changelog

### Examples

Example #1 bcsqrt() example

```
<?php

echo bcsqrt('2', 3); // 1.414

?>
```

### See Also

- bcpow() - Raise an arbitrary precision number to another
- BcMath\Number::sqrt() - Gets the square root of an arbitrary precision number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bcsqrt.php
