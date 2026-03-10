# BcMath\Number::mul

Source: https://devdocs.io/php/bcmath-number.mul

(PHP 8 >= 8.4.0)

BcMath\Number::mul — Multiplies an arbitrary precision number

### Description

```
public BcMath\Number::mul(BcMath\Number|string|int $num, ?int $scale = null): BcMath\Number
```

Multiplies $this by num.

### Parameters

### Return Values

Returns the result of multiplication as a new BcMath\Number object.

When the BcMath\Number::scale of the result object is automatically set, the sum of the BcMath\Number::scales of the two values used for multiplication is used.

That is, if the BcMath\Number::scales of two values are 2 and 5 respectively, the BcMath\Number::scale of the result will be 7.

### Errors/Exceptions

This method throws a ValueError in the following cases:

- num is string and not a well-formed BCMath numeric string
- scale is outside the valid range
- BcMath\Number::scale of the result object is outside the valid range

### Examples

Example #1 BcMath\Number::mul() example when scale is not specified

```
<?php
$number = new BcMath\Number('1.234');

$ret1 = $number->mul(new BcMath\Number('2.3456'));
$ret2 = $number->mul('-3.4');
$ret3 = $number->mul(7);

var_dump($number, $ret1, $ret2, $ret3);
?>
```

The above example will output:

```
object(BcMath\Number)#1 (2) {
  ["value"]=>
  string(5) "1.234"
  ["scale"]=>
  int(3)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(9) "2.8944704"
  ["scale"]=>
  int(7)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(7) "-4.1956"
  ["scale"]=>
  int(4)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(5) "8.638"
  ["scale"]=>
  int(3)
}
```

Example #2 BcMath\Number::mul() example of explicitly specifying scale

```
<?php
$number = new BcMath\Number('1.234');

$ret1 = $number->mul(new BcMath\Number('2.3456'), 1);
$ret2 = $number->mul('-3.4', 10);
$ret3 = $number->mul(7, 0);

var_dump($number, $ret1, $ret2, $ret3);
?>
```

The above example will output:

```
object(BcMath\Number)#1 (2) {
  ["value"]=>
  string(5) "1.234"
  ["scale"]=>
  int(3)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(3) "2.8"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(13) "-4.1956000000"
  ["scale"]=>
  int(10)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(1) "8"
  ["scale"]=>
  int(0)
}
```

### See Also

- bcmul() - Multiply two arbitrary precision numbers
- BcMath\Number::div() - Divides by an arbitrary precision number
- BcMath\Number::pow() - Raises an arbitrary precision number
- BcMath\Number::powmod() - Raises an arbitrary precision number, reduced by a specified modulus

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/bcmath-number.mul.php
