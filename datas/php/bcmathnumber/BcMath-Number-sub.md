# BcMath\Number::sub

Source: https://devdocs.io/php/bcmath-number.sub

(PHP 8 >= 8.4.0)

BcMath\Number::sub — Subtracts an arbitrary precision number

### Description

```
public BcMath\Number::sub(BcMath\Number|string|int $num, ?int $scale = null): BcMath\Number
```

Subtracts num from $this.

### Parameters

### Return Values

Returns the result of subtraction as a new BcMath\Number object.

When the BcMath\Number::scale of the result object is automatically set, the greater BcMath\Number::scale of the two numbers used for subtraction is used.

That is, if the BcMath\Number::scales of two values are 2 and 5 respectively, the BcMath\Number::scale of the result will be 5.

### Errors/Exceptions

This method throws a ValueError in the following cases:

- num is string and not a well-formed BCMath numeric string
- scale is outside the valid range

### Examples

Example #1 BcMath\Number::sub() example when scale is not specified

```
<?php
$number = new BcMath\Number('1.234');

$ret1 = $number->sub(new BcMath\Number('2.34567'));
$ret2 = $number->sub('-3.456');
$ret3 = $number->sub(7);

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
  string(8) "-1.11167"
  ["scale"]=>
  int(5)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(5) "4.690"
  ["scale"]=>
  int(3)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(6) "-5.766"
  ["scale"]=>
  int(3)
}
```

Example #2 BcMath\Number::sub() example of explicitly specifying scale

```
<?php
$number = new BcMath\Number('1.234');

$ret1 = $number->sub(new BcMath\Number('2.34567'), 1);
$ret2 = $number->sub('-3.456', 10);
$ret3 = $number->sub(7, 0);

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
  string(4) "-1.1"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(12) "4.6900000000"
  ["scale"]=>
  int(10)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(2) "-5"
  ["scale"]=>
  int(0)
}
```

### See Also

- bcsub() - Subtract one arbitrary precision number from another
- BcMath\Number::add() - Adds an arbitrary precision number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/bcmath-number.sub.php
