# BcMath\Number::mod

Source: https://devdocs.io/php/bcmath-number.mod

(PHP 8 >= 8.4.0)

BcMath\Number::mod — Gets the modulus of an arbitrary precision number

### Description

```
public BcMath\Number::mod(BcMath\Number|string|int $num, ?int $scale = null): BcMath\Number
```

Gets the remainder of dividing $this by num. Unless num is 0, the result has the same sign as $this.

### Parameters

### Return Values

Returns the modulus as a new BcMath\Number object.

When the BcMath\Number::scale of the result object is automatically set, the greater BcMath\Number::scale of the two numbers used for modulus operation is used.

That is, if the BcMath\Number::scales of two values are 2 and 5 respectively, the BcMath\Number::scale of the result will be 5.

### Errors/Exceptions

This method throws a ValueError in the following cases:

- num is string and not a well-formed BCMath numeric string
- scale is outside the valid range

This method throws a DivisionByZeroError exception if num is 0.

### Examples

Example #1 BcMath\Number::mod() example when scale is not specified

```
<?php
$number = new BcMath\Number('8.3');

$ret1 = $number->mod(new BcMath\Number('2.22'));
$ret2 = $number->mod('8.3');
$ret3 = $number->mod(-5);

var_dump($number, $ret1, $ret2, $ret3);
?>
```

The above example will output:

```
object(BcMath\Number)#1 (2) {
  ["value"]=>
  string(3) "8.3"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(4) "1.64"
  ["scale"]=>
  int(2)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(3) "0.0"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(3) "3.3"
  ["scale"]=>
  int(1)
}
```

Example #2 BcMath\Number::mod() example of explicitly specifying scale

```
<?php
$number = new BcMath\Number('8.3');

$ret1 = $number->mod(new BcMath\Number('2.22'), 1);
$ret2 = $number->mod('8.3', 3);
$ret3 = $number->mod(-5, 0);

var_dump($number, $ret1, $ret2, $ret3);
?>
```

The above example will output:

```
object(BcMath\Number)#1 (2) {
  ["value"]=>
  string(3) "8.3"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(3) "1.6"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(5) "0.000"
  ["scale"]=>
  int(3)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(1) "3"
  ["scale"]=>
  int(0)
}
```

### See Also

- bcmod() - Get modulus of an arbitrary precision number
- BcMath\Number::div() - Divides by an arbitrary precision number
- BcMath\Number::divmod() - Gets the quotient and modulus of an arbitrary precision number
- BcMath\Number::powmod() - Raises an arbitrary precision number, reduced by a specified modulus

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/bcmath-number.mod.php
