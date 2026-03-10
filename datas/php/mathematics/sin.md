# sin

Source: https://devdocs.io/php/function.sin

(PHP 4, PHP 5, PHP 7, PHP 8)

sin — Sine

### Description

```
sin(float $num): float
```

sin() returns the sine of the num parameter. The num parameter is in radians.

### Parameters

A value in radians

### Return Values

The sine of num

### Examples

Example #1 sin() example

```
<?php
// Precision depends on your precision directive
echo sin(deg2rad(60)), PHP_EOL;  //  0.866025403 ...
echo sin(60), PHP_EOL;           // -0.304810621 ...
?>
```

### See Also

- asin() - Arc sine
- sinh() - Hyperbolic sine
- cos() - Cosine
- tan() - Tangent
- deg2rad() - Converts the number in degrees to the radian equivalent

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sin.php
