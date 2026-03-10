# BcMath\Number::add

Source: https://devdocs.io/php/bcmath-number.add

(PHP 8 >= 8.4.0)

BcMath\Number::add — Adds an arbitrary precision number

### Description

```
public BcMath\Number::add(BcMath\Number|string|int $num, ?int $scale = null): BcMath\Number
```

Adds $this and num.

### Parameters

### Return Values

Returns the result of addition as a new BcMath\Number object.

When the BcMath\Number::scale of the result object is automatically set, the greater BcMath\Number::scale of the two numbers used for addition is used.

That is, if the BcMath\Number::scales of two values are 2 and 5 respectively, the BcMath\Number::scale of the result will be 5.

### Errors/Exceptions

This method throws a ValueError in the following cases:

- num is string and not a well-formed BCMath numeric string
- scale is outside the valid range

### Examples

Example #1 BcMath\Number::add() example when scale is not specified

```
<?php
$number = new BcMath\Number('1.234');

$ret1 = $number->add(new BcMath\Number('2.34567'));
$ret2 = $number->add('-3.456');
$ret3 = $number->add(7);

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
  string(7) "3.57967"
  ["scale"]=>
  int(5)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(6) "-2.222"
  ["scale"]=>
  int(3)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(5) "8.234"
  ["scale"]=>
  int(3)
}
```

Example #2 BcMath\Number::add() example of explicitly specifying scale

```
<?php
$number = new BcMath\Number('1.234');

$ret1 = $number->add(new BcMath\Number('2.34567'), 1);
$ret2 = $number->add('-3.456', 10);
$ret3 = $number->add(7, 0);

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
  string(3) "3.5"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(13) "-2.2220000000"
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

- bcadd() - Add two arbitrary precision numbers
- BcMath\Number::sub() - Subtracts an arbitrary precision number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/bcmath-number.add.php
