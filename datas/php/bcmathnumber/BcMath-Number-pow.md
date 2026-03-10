# BcMath\Number::pow

Source: https://devdocs.io/php/bcmath-number.pow

(PHP 8 >= 8.4.0)

BcMath\Number::pow — Raises an arbitrary precision number

### Description

```
public BcMath\Number::pow(BcMath\Number|string|int $exponent, ?int $scale = null): BcMath\Number
```

Raises $this to the exponent power.

### Parameters

### Return Values

Returns the result of power as a new BcMath\Number object.

When the BcMath\Number::scale of the result object is automatically set, depending on the value of exponent, the BcMath\Number::scale of result will be as follows:

If an indivisible division occurs due to a negative exponent, the BcMath\Number::scale of the result is expanded. Expansion is done only as needed, up to a maximum of +10. This behavior is the same as BcMath\Number::div(), so please see that for details.

### Errors/Exceptions

This method throws a ValueError in the following cases:

- exponent is string and not a well-formed BCMath numeric string
- exponent has a fractional part
- exponent or scale is outside the valid range
- BcMath\Number::scale of the result object is outside the valid range

This method throws a DivisionByZeroError exception if $this's value is 0 and exponent is a negative value.

### Examples

Example #1 BcMath\Number::pow() example when scale is not specified

```
<?php
$number = new BcMath\Number('3.0');

$ret1 = $number->pow(new BcMath\Number('5'));
$ret2 = $number->pow('-1');
$ret3 = $number->pow(0);

var_dump($number, $ret1, $ret2, $ret3);
?>
```

The above example will output:

```
object(BcMath\Number)#1 (2) {
  ["value"]=>
  string(3) "3.0"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(9) "243.00000"
  ["scale"]=>
  int(5)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(13) "0.33333333333"
  ["scale"]=>
  int(11)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(1) "1"
  ["scale"]=>
  int(0)
}
```

Example #2 BcMath\Number::pow() example of explicitly specifying scale

```
<?php
$number = new BcMath\Number('3.0');

$ret1 = $number->pow(new BcMath\Number('5'), 0);
$ret2 = $number->pow('-1', 2);
$ret3 = $number->pow(0, 10);

var_dump($number, $ret1, $ret2, $ret3);
?>
```

The above example will output:

```
object(BcMath\Number)#1 (2) {
  ["value"]=>
  string(3) "3.0"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(3) "243"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(4) "0.33"
  ["scale"]=>
  int(2)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(12) "1.0000000000"
  ["scale"]=>
  int(10)
}
```

### See Also

- bcpow() - Raise an arbitrary precision number to another
- BcMath\Number::powmod() - Raises an arbitrary precision number, reduced by a specified modulus
- BcMath\Number::mul() - Multiplies an arbitrary precision number
- BcMath\Number::sqrt() - Gets the square root of an arbitrary precision number
- BcMath\Number::div() - Divides by an arbitrary precision number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/bcmath-number.pow.php
