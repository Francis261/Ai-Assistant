# BcMath\Number::round

Source: https://devdocs.io/php/bcmath-number.round

(PHP 8 >= 8.4.0)

BcMath\Number::round — Rounds an arbitrary precision number

### Description

```
public BcMath\Number::round(int $precision = 0, RoundingMode $mode = RoundingMode::HalfAwayFromZero): BcMath\Number
```

Returns the rounded value of $this to specified precision (number of digits after the decimal point). precision can also be negative or zero (default).

### Parameters

The optional number of decimal digits to round to.

If the precision is positive, num is rounded to precision significant digits after the decimal point.

If the precision is negative, num is rounded to precision significant digits before the decimal point, i.e. to the nearest multiple of pow(10, -$precision), e.g. for a precision of -1 num is rounded to tens, for a precision of -2 to hundreds, etc.

### Return Values

Returns the result as a new BcMath\Number object.

### Errors/Exceptions

This method throws a ValueError if an invalid mode is specified.

### Examples

Example #1 BcMath\Number::round() example

```
<?php
var_dump(
    new BcMath\Number('3.4')->round(),
    new BcMath\Number('3.5')->round(),
    new BcMath\Number('3.6')->round(),
    new BcMath\Number('3.6')->round(0),
    new BcMath\Number('5.045')->round(2),
    new BcMath\Number('5.055')->round(2),
    new BcMath\Number('345')->round(-2),
    new BcMath\Number('345')->round(-3),
    new BcMath\Number('678')->round(-2),
    new BcMath\Number('678')->round(-3),
);
?>
```

The above example will output:

```
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(1) "3"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(1) "4"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(1) "4"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#5 (2) {
  ["value"]=>
  string(1) "4"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#6 (2) {
  ["value"]=>
  string(4) "5.05"
  ["scale"]=>
  int(2)
}
object(BcMath\Number)#7 (2) {
  ["value"]=>
  string(4) "5.06"
  ["scale"]=>
  int(2)
}
object(BcMath\Number)#8 (2) {
  ["value"]=>
  string(3) "300"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#9 (2) {
  ["value"]=>
  string(1) "0"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#10 (2) {
  ["value"]=>
  string(3) "700"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#11 (2) {
  ["value"]=>
  string(4) "1000"
  ["scale"]=>
  int(0)
}
```

Example #2 Example of using BcMath\Number::round() with different precision values

```
<?php
$number = new BcMath\Number('123.45');

var_dump(
    $number->round(3),
    $number->round(2),
    $number->round(1),
    $number->round(0),
    $number->round(-1),
    $number->round(-2),
    $number->round(-3),
);
?>
```

The above example will output:

```
object(BcMath\Number)#2 (2) {
  ["value"]=>
  string(7) "123.450"
  ["scale"]=>
  int(3)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(6) "123.45"
  ["scale"]=>
  int(2)
}
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(5) "123.5"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#5 (2) {
  ["value"]=>
  string(3) "123"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#6 (2) {
  ["value"]=>
  string(3) "120"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#7 (2) {
  ["value"]=>
  string(3) "100"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#8 (2) {
  ["value"]=>
  string(1) "0"
  ["scale"]=>
  int(0)
}
```

Example #3 Example of using BcMath\Number::round() with different mode values

```
<?php
echo 'Rounding modes with 9.5' . PHP_EOL;
$number = new BcMath\Number('9.5');
var_dump(
    $number->round(0, RoundingMode::HalfAwayFromZero),
    $number->round(0, RoundingMode::HalfTowardsZero),
    $number->round(0, RoundingMode::HalfEven),
    $number->round(0, RoundingMode::HalfOdd),
    $number->round(0, RoundingMode::TowardsZero),
    $number->round(0, RoundingMode::AwayFromZero),
    $number->round(0, RoundingMode::NegativeInfinity),
    $number->round(0, RoundingMode::PositiveInfinity),
);

echo PHP_EOL;
echo 'Rounding modes with 8.5' . PHP_EOL;
$number = new BcMath\Number('8.5');
var_dump(
    $number->round(0, RoundingMode::HalfAwayFromZero),
    $number->round(0, RoundingMode::HalfTowardsZero),
    $number->round(0, RoundingMode::HalfEven),
    $number->round(0, RoundingMode::HalfOdd),
    $number->round(0, RoundingMode::TowardsZero),
    $number->round(0, RoundingMode::AwayFromZero),
    $number->round(0, RoundingMode::NegativeInfinity),
    $number->round(0, RoundingMode::PositiveInfinity),
);
?>
```

The above example will output:

```
Rounding modes with 9.5
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(2) "10"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#5 (2) {
  ["value"]=>
  string(1) "9"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#7 (2) {
  ["value"]=>
  string(2) "10"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#9 (2) {
  ["value"]=>
  string(1) "9"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#11 (2) {
  ["value"]=>
  string(1) "9"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#13 (2) {
  ["value"]=>
  string(2) "10"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#15 (2) {
  ["value"]=>
  string(1) "9"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#17 (2) {
  ["value"]=>
  string(2) "10"
  ["scale"]=>
  int(0)
}

Rounding modes with 8.5
object(BcMath\Number)#1 (2) {
  ["value"]=>
  string(1) "9"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#15 (2) {
  ["value"]=>
  string(1) "8"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#13 (2) {
  ["value"]=>
  string(1) "8"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#11 (2) {
  ["value"]=>
  string(1) "9"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#9 (2) {
  ["value"]=>
  string(1) "8"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#7 (2) {
  ["value"]=>
  string(1) "9"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#5 (2) {
  ["value"]=>
  string(1) "8"
  ["scale"]=>
  int(0)
}
object(BcMath\Number)#3 (2) {
  ["value"]=>
  string(1) "9"
  ["scale"]=>
  int(0)
}
```

Example #4 Example of using BcMath\Number::round() with different mode values when specifying precision

```
<?php
$positive = new BcMath\Number('1.55');
$negative = new BcMath\Number('-1.55');

echo 'Using RoundingMode::HalfAwayFromZero with 1 decimal digit precision' . PHP_EOL;
var_dump(
    $positive->round(1, RoundingMode::HalfAwayFromZero),
    $negative->round(1, RoundingMode::HalfAwayFromZero),
);

echo PHP_EOL;
echo 'Using RoundingMode::HalfTowardsZero with 1 decimal digit precision' . PHP_EOL;
var_dump(
    $positive->round(1, RoundingMode::HalfTowardsZero),
    $negative->round(1, RoundingMode::HalfTowardsZero),
);

echo PHP_EOL;
echo 'Using RoundingMode::HalfEven with 1 decimal digit precision' . PHP_EOL;
var_dump(
    $positive->round(1, RoundingMode::HalfEven),
    $negative->round(1, RoundingMode::HalfEven),
);

echo PHP_EOL;
echo 'Using RoundingMode::HalfOdd with 1 decimal digit precision' . PHP_EOL;
var_dump(
    $positive->round(1, RoundingMode::HalfOdd),
    $negative->round(1, RoundingMode::HalfOdd),
);

echo PHP_EOL;
echo 'Using RoundingMode::TowardsZero with 1 decimal digit precision' . PHP_EOL;
var_dump(
    $positive->round(1, RoundingMode::TowardsZero),
    $negative->round(1, RoundingMode::TowardsZero),
);

echo PHP_EOL;
echo 'Using RoundingMode::AwayFromZero with 1 decimal digit precision' . PHP_EOL;
var_dump(
    $positive->round(1, RoundingMode::AwayFromZero),
    $negative->round(1, RoundingMode::AwayFromZero),
);

echo PHP_EOL;
echo 'Using RoundingMode::NegativeInfinity with 1 decimal digit precision' . PHP_EOL;
var_dump(
    $positive->round(1, RoundingMode::NegativeInfinity),
    $negative->round(1, RoundingMode::NegativeInfinity),
);

echo PHP_EOL;
echo 'Using RoundingMode::PositiveInfinity with 1 decimal digit precision' . PHP_EOL;
var_dump(
    $positive->round(1, RoundingMode::PositiveInfinity),
    $negative->round(1, RoundingMode::PositiveInfinity),
);
?>
```

The above example will output:

```
Using RoundingMode::HalfAwayFromZero with 1 decimal digit precision
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(3) "1.6"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#5 (2) {
  ["value"]=>
  string(4) "-1.6"
  ["scale"]=>
  int(1)
}

Using RoundingMode::HalfTowardsZero with 1 decimal digit precision
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(3) "1.5"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#6 (2) {
  ["value"]=>
  string(4) "-1.5"
  ["scale"]=>
  int(1)
}

Using RoundingMode::HalfEven with 1 decimal digit precision
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(3) "1.6"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#7 (2) {
  ["value"]=>
  string(4) "-1.6"
  ["scale"]=>
  int(1)
}

Using RoundingMode::HalfOdd with 1 decimal digit precision
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(3) "1.5"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#8 (2) {
  ["value"]=>
  string(4) "-1.5"
  ["scale"]=>
  int(1)
}

Using RoundingMode::TowardsZero with 1 decimal digit precision
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(3) "1.5"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#9 (2) {
  ["value"]=>
  string(4) "-1.5"
  ["scale"]=>
  int(1)
}

Using RoundingMode::AwayFromZero with 1 decimal digit precision
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(3) "1.6"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#10 (2) {
  ["value"]=>
  string(4) "-1.6"
  ["scale"]=>
  int(1)
}

Using RoundingMode::NegativeInfinity with 1 decimal digit precision
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(3) "1.5"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#11 (2) {
  ["value"]=>
  string(4) "-1.6"
  ["scale"]=>
  int(1)
}

Using RoundingMode::PositiveInfinity with 1 decimal digit precision
object(BcMath\Number)#4 (2) {
  ["value"]=>
  string(3) "1.6"
  ["scale"]=>
  int(1)
}
object(BcMath\Number)#12 (2) {
  ["value"]=>
  string(4) "-1.5"
  ["scale"]=>
  int(1)
}
```

### See Also

- bcround() - Round arbitrary precision number
- BcMath\Number::ceil() - Rounds up an arbitrary precision number
- BcMath\Number::floor() - Rounds down an arbitrary precision number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/bcmath-number.round.php
