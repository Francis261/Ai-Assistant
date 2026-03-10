# floor

Source: https://devdocs.io/php/function.floor

(PHP 4, PHP 5, PHP 7, PHP 8)

floor — Round fractions down

### Description

```
floor(int|float $num): float
```

Returns the next lowest integer value (as float) by rounding down num if necessary.

### Parameters

The numeric value to round

### Return Values

num rounded to the next lowest integer. The return value of floor() is still of type float.

### Changelog

### Examples

Example #1 floor() example

```
<?php
echo floor(4.3), PHP_EOL;   // 4
echo floor(9.999), PHP_EOL; // 9
echo floor(-3.14), PHP_EOL; // -4
?>
```

### See Also

- ceil() - Round fractions up
- round() - Rounds a float

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.floor.php
