# bcpowmod

Source: https://devdocs.io/php/function.bcpowmod

(PHP 5, PHP 7, PHP 8)

bcpowmod — Raise an arbitrary precision number to another, reduced by a specified modulus

### Description

```
bcpowmod(
 string $num,
 string $exponent,
 string $modulus,
 ?int $scale = null
): string
```

Use the fast-exponentiation method to raise num to the power exponent with respect to the modulus modulus.

### Parameters

The base, as an integral string (i.e. the scale has to be zero).

The exponent, as an non-negative, integral string (i.e. the scale has to be zero).

The modulus, as an integral string (i.e. the scale has to be zero).

### Return Values

Returns the result as a string.

### Errors/Exceptions

This function throws a ValueError in the following cases:

- num, exponent or modulus is not a well-formed BCMath numeric string
- num, exponent or modulus has a fractional part
- exponent is a negative value
- scale is outside the valid range

This function throws a DivisionByZeroError exception if modulus is 0.

### Changelog

### Examples

The following two statements are functionally identical. The bcpowmod() version however, executes in less time and can accept larger parameters.

```
<?php
$a = bcpowmod($x, $y, $mod);

$b = bcmod(bcpow($x, $y), $mod);

// $a and $b are equal to each other.

?>
```

### Notes

Note:

Because this method uses the modulus operation, numbers which are not positive integers may give unexpected results.

### See Also

- bcpow() - Raise an arbitrary precision number to another
- bcmod() - Get modulus of an arbitrary precision number
- BcMath\Number::powmod() - Raises an arbitrary precision number, reduced by a specified modulus

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bcpowmod.php
