# fmod

Source: https://devdocs.io/php/function.fmod

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

fmod — Returns the floating point remainder (modulo) of the division of the arguments

### Description

```
fmod(float $num1, float $num2): float
```

Returns the floating point remainder of dividing the dividend (num1) by the divisor (num2). The remainder (r) is defined as: num1 = i * num2 + r, for some integer i. If num2 is non-zero, r has the same sign as num1 and a magnitude less than the magnitude of num2.

### Parameters

The dividend

The divisor

### Return Values

The floating point remainder of num1/num2

### Examples

Example #1 Using fmod()

```
<?php
$x = 5.7;
$y = 1.3;
$r = fmod($x, $y);
// $r equals 0.5, because 4 * 1.3 + 0.5 = 5.7

var_dump($x, $y, $r);
?>
```

### See Also

- / - Floating-point division
- % - Integer modulus
- intdiv() - Integer division - Integer division

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fmod.php
