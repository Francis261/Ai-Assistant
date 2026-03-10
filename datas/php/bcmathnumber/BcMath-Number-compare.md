# BcMath\Number::compare

Source: https://devdocs.io/php/bcmath-number.compare

(PHP 8 >= 8.4.0)

BcMath\Number::compare — Compares two arbitrary precision numbers

### Description

```
public BcMath\Number::compare(BcMath\Number|string|int $num, ?int $scale = null): int
```

Compare two arbitrary precision numbers. This method behaves similar to the spaceship operator.

### Parameters

### Return Values

Returns 0 if the two numbers are equal, 1 if $this is greater than num, -1 otherwise.

### Errors/Exceptions

This method throws a ValueError in the following cases:

- num is string and not a well-formed BCMath numeric string
- scale is outside the valid range

### Examples

Example #1 BcMath\Number::compare() example when scale is not specified

```
<?php
$number = new BcMath\Number('1.234');

var_dump(
    $number->compare(new BcMath\Number('1.234')),
    $number->compare('1.23400'),
    $number->compare('1.23401'),
    $number->compare(1),
);
?>
```

The above example will output:

```
int(0)
int(0)
int(-1)
int(1)
```

Example #2 BcMath\Number::compare() example of explicitly specifying scale

```
<?php
$number = new BcMath\Number('1.234');

var_dump(
    $number->compare(new BcMath\Number('1.299'), 1),
    $number->compare('1.24', 2),
    $number->compare('1.22', 2),
    $number->compare(1, 0),
);
?>
```

The above example will output:

```
int(0)
int(-1)
int(1)
int(0)
```

### See Also

- bccomp() - Compare two arbitrary precision numbers

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/bcmath-number.compare.php
