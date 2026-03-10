# round

Source: https://devdocs.io/php/function.round

(PHP 4, PHP 5, PHP 7, PHP 8)

round — Rounds a float

### Description

```
round(int|float $num, int $precision = 0, int|RoundingMode $mode = RoundingMode::HalfAwayFromZero): float
```

Returns the rounded value of num to specified precision (number of digits after the decimal point). precision can also be negative or zero (default).

### Parameters

The value to round.

The optional number of decimal digits to round to.

If the precision is positive, num is rounded to precision significant digits after the decimal point.

If the precision is negative, num is rounded to precision significant digits before the decimal point, i.e. to the nearest multiple of pow(10, -$precision), e.g. for a precision of -1 num is rounded to tens, for a precision of -2 to hundreds, etc.

Use RoundingMode or one of the following constants to specify the mode in which rounding occurs.

### Return Values

The value rounded to the given precision as a float.

### Errors/Exceptions

The function throws a ValueError if mode is invalid. Prior to PHP 8.4.0, an invalid mode would silently default to PHP_ROUND_HALF_UP.

### Changelog

### Examples

Example #1 round() examples

```
<?php
var_dump(round(3.4));
var_dump(round(3.5));
var_dump(round(3.6));
var_dump(round(3.6, 0));
var_dump(round(5.045, 2));
var_dump(round(5.055, 2));
var_dump(round(345, -2));
var_dump(round(345, -3));
var_dump(round(678, -2));
var_dump(round(678, -3));
?>
```

The above example will output:

```
float(3)
float(4)
float(4)
float(4)
float(5.05)
float(5.06)
float(300)
float(0)
float(700)
float(1000)
```

Example #2 How precision affects a float

```
<?php
$number = 135.79;

var_dump(round($number, 3));
var_dump(round($number, 2));
var_dump(round($number, 1));
var_dump(round($number, 0));
var_dump(round($number, -1));
var_dump(round($number, -2));
var_dump(round($number, -3));
?>
```

The above example will output:

```
float(135.79)
float(135.79)
float(135.8)
float(136)
float(140)
float(100)
float(0)
```

Example #3 mode examples

```
<?php
echo 'Rounding modes with 9.5' . PHP_EOL;
var_dump(round(9.5, 0, PHP_ROUND_HALF_UP));
var_dump(round(9.5, 0, PHP_ROUND_HALF_DOWN));
var_dump(round(9.5, 0, PHP_ROUND_HALF_EVEN));
var_dump(round(9.5, 0, PHP_ROUND_HALF_ODD));

echo PHP_EOL;
echo 'Rounding modes with 8.5' . PHP_EOL;
var_dump(round(8.5, 0, PHP_ROUND_HALF_UP));
var_dump(round(8.5, 0, PHP_ROUND_HALF_DOWN));
var_dump(round(8.5, 0, PHP_ROUND_HALF_EVEN));
var_dump(round(8.5, 0, PHP_ROUND_HALF_ODD));
?>
```

The above example will output:

```
Rounding modes with 9.5
float(10)
float(9)
float(10)
float(9)

Rounding modes with 8.5
float(9)
float(8)
float(8)
float(9)
```

Example #4 mode with precision examples

```
<?php
echo 'Using PHP_ROUND_HALF_UP with 1 decimal digit precision' . PHP_EOL;
var_dump(round( 1.55, 1, PHP_ROUND_HALF_UP));
var_dump(round(-1.55, 1, PHP_ROUND_HALF_UP));

echo PHP_EOL;
echo 'Using PHP_ROUND_HALF_DOWN with 1 decimal digit precision' . PHP_EOL;
var_dump(round( 1.55, 1, PHP_ROUND_HALF_DOWN));
var_dump(round(-1.55, 1, PHP_ROUND_HALF_DOWN));

echo PHP_EOL;
echo 'Using PHP_ROUND_HALF_EVEN with 1 decimal digit precision' . PHP_EOL;
var_dump(round( 1.55, 1, PHP_ROUND_HALF_EVEN));
var_dump(round(-1.55, 1, PHP_ROUND_HALF_EVEN));

echo PHP_EOL;
echo 'Using PHP_ROUND_HALF_ODD with 1 decimal digit precision' . PHP_EOL;
var_dump(round( 1.55, 1, PHP_ROUND_HALF_ODD));
var_dump(round(-1.55, 1, PHP_ROUND_HALF_ODD));
?>
```

The above example will output:

```
Using PHP_ROUND_HALF_UP with 1 decimal digit precision
float(1.6)
float(-1.6)

Using PHP_ROUND_HALF_DOWN with 1 decimal digit precision
float(1.5)
float(-1.5)

Using PHP_ROUND_HALF_EVEN with 1 decimal digit precision
float(1.6)
float(-1.6)

Using PHP_ROUND_HALF_ODD with 1 decimal digit precision
float(1.5)
float(-1.5)
```

Example #5 Example of using RoundingMode

```
<?php
foreach (RoundingMode::cases() as $mode) {
    foreach ([
        8.5,
        9.5,
        -3.5,
    ] as $number) {
        printf("%-17s: %+.17g -> %+.17g\n", $mode->name, $number, round($number, 0, $mode));
    }
    echo "\n";
}
?>
```

The above example will output:

```
HalfAwayFromZero : +8.5 -> +9
HalfAwayFromZero : +9.5 -> +10
HalfAwayFromZero : -3.5 -> -4

HalfTowardsZero  : +8.5 -> +8
HalfTowardsZero  : +9.5 -> +9
HalfTowardsZero  : -3.5 -> -3

HalfEven         : +8.5 -> +8
HalfEven         : +9.5 -> +10
HalfEven         : -3.5 -> -4

HalfOdd          : +8.5 -> +9
HalfOdd          : +9.5 -> +9
HalfOdd          : -3.5 -> -3

TowardsZero      : +8.5 -> +8
TowardsZero      : +9.5 -> +9
TowardsZero      : -3.5 -> -3

AwayFromZero     : +8.5 -> +9
AwayFromZero     : +9.5 -> +10
AwayFromZero     : -3.5 -> -4

NegativeInfinity : +8.5 -> +8
NegativeInfinity : +9.5 -> +9
NegativeInfinity : -3.5 -> -4

PositiveInfinity : +8.5 -> +9
PositiveInfinity : +9.5 -> +10
PositiveInfinity : -3.5 -> -3
```

### See Also

- ceil() - Round fractions up
- floor() - Round fractions down
- number_format() - Format a number with grouped thousands

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.round.php
