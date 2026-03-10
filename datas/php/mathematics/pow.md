# pow

Source: https://devdocs.io/php/function.pow

(PHP 4, PHP 5, PHP 7, PHP 8)

pow — Exponential expression

### Description

```
pow(mixed $num, mixed $exponent): int|float|object
```

Returns num raised to the power of exponent.

Note:

It is possible to use the ** operator instead.

### Parameters

The base to use

The exponent

### Return Values

num raised to the power of exponent. If both arguments are non-negative integers and the result can be represented as an integer, the result will be returned with int type, otherwise it will be returned as a float.

PHP-Extensions may override the behaviour of this operation and make it return an object.

### Changelog

### Examples

Example #1 Some examples of pow()

```
<?php

var_dump(pow(2, 8)); // int(256)
echo pow(-1, 20), PHP_EOL; // 1
echo pow(0, 0), PHP_EOL; // 1
echo pow(10, -1), PHP_EOL; // 0.1

echo pow(-1, 5.5), PHP_EOL; // NAN
?>
```

Example #2 Examples of pow() With GMP Extension Object

```
<?php
var_dump(pow(new GMP("3"), new GMP("2"))); // object(GMP)
?>
```

### Notes

Note:

This function will convert all input to a number, even non-scalar values, which could lead to weird results.

### See Also

- Exponentiation operator **
- fpow() - Raise one number to the power of another, according to IEEE 754
- exp() - Calculates the exponent of e
- sqrt() - Square root
- bcpow() - Raise an arbitrary precision number to another
- gmp_pow() - Raise number into power

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pow.php
