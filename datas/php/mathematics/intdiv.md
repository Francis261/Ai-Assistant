# intdiv

Source: https://devdocs.io/php/function.intdiv

(PHP 7, PHP 8)

intdiv — Integer division

### Description

```
intdiv(int $num1, int $num2): int
```

Returns the integer quotient of the division of num1 by num2.

### Parameters

Number to be divided.

Number which divides the num1.

### Return Values

The integer quotient of the division of num1 by num2.

### Errors/Exceptions

If num2 is 0, a DivisionByZeroError exception is thrown. If the num1 is PHP_INT_MIN and the num2 is -1, then an ArithmeticError exception is thrown.

### Examples

Example #1 intdiv() example

```
<?php
var_dump(intdiv(3, 2));
var_dump(intdiv(-3, 2));
var_dump(intdiv(3, -2));
var_dump(intdiv(-3, -2));
var_dump(intdiv(PHP_INT_MAX, PHP_INT_MAX));
var_dump(intdiv(PHP_INT_MIN, PHP_INT_MIN));
?>
```

The above example will output:

```
int(1)
int(-1)
int(-1)
int(1)
int(1)
int(1)
```

Example #2 intdiv() Example With Invalid Divisor

```
<?php
try {
    intdiv(PHP_INT_MIN, -1);
} catch (Error $e) {
    echo get_class($e), ': ', $e->getMessage(), PHP_EOL;
}

try {
    intdiv(1, 0);
} catch (Error $e) {
    echo get_class($e), ': ', $e->getMessage(), PHP_EOL;
}
?>
```

The above example will output:

```
ArithmeticError: Division of PHP_INT_MIN by -1 is not an integer
DivisionByZeroError: Division by zero
```

### See Also

- / - Floating-point division
- % - Integer modulus
- fmod() - Returns the floating point remainder (modulo) of the division of the arguments - Floating-point modulo

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.intdiv.php
