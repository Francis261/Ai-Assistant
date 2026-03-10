# BcMath\Number::powmod

Source: https://devdocs.io/php/bcmath-number.powmod

(PHP 8 >= 8.4.0)

BcMath\Number::powmod — Raises an arbitrary precision number, reduced by a specified modulus

### Description

```
public BcMath\Number::powmod(BcMath\Number|string|int $exponent, BcMath\Number|string|int $modulus, ?int $scale = null): BcMath\Number
```

Use the fast-exponentiation method to raise $this to the power exponent with respect to the modulus modulus.

### Parameters

### Return Values

Returns the result as a new BcMath\Number object.

When the BcMath\Number::scale of the result object is automatically set, the BcMath\Number::scale of the result object will always be 0.

### Errors/Exceptions

This method throws a ValueError in the following cases:

- exponent or modulus is string and not a well-formed BCMath numeric string
- $this, exponent or modulus has a fractional part
- exponent is a negative value
- scale is outside the valid range

This method throws a DivisionByZeroError exception if modulus is 0.

### Examples

Example #1 BcMath\Number::powmod() example when scale is not specified

```
<?php
var_dump(
    new BcMath\Number('8')->powmod(new BcMath\Number('3'), 5),
    new BcMath\Number('-8')->powmod(new BcMath\Number('3'), 5),
    new BcMath\Number('8')->powmod('2', -3),
    new BcMath\Number('-8')->powmod(5, 7),
);
?>
```

The above example will output:

```
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(1) "2"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(2) "-2"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(1) "1"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#5 (2) {
  ["value"]=>
  string(2) "-1"
  ["scale"]=>
  int(0)
}
```

Example #2 BcMath\Number::powmod() example of explicitly specifying scale

```
<?php
var_dump(
    new BcMath\Number('8')->powmod(new BcMath\Number('3'), 5, 1),
    new BcMath\Number('-8')->powmod(new BcMath\Number('3'), 5, 2),
    new BcMath\Number('8')->powmod('2', -3, 3),
    new BcMath\Number('-8')->powmod(5, 7, 4),
);
?>
```

The above example will output:

```
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(3) "2.0"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(5) "-2.00"
  ["scale"]=>
  int(2)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(5) "1.000"
  ["scale"]=>
  int(3)
}
object(BcMath\Number)#5 (2) {
  ["value"]=>
  string(7) "-1.0000"
  ["scale"]=>
  int(4)
}
```

### See Also

- bcpowmod() - Raise an arbitrary precision number to another, reduced by a specified modulus
- BcMath\Number::pow() - Raises an arbitrary precision number
- BcMath\Number::mod() - Gets the modulus of an arbitrary precision number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/bcmath-number.powmod.php
