# ceil

Source: https://devdocs.io/php/function.ceil

(PHP 4, PHP 5, PHP 7, PHP 8)

ceil — Round fractions up

### Description

```
ceil(int|float $num): float
```

Returns the next highest integer value by rounding up num if necessary.

### Parameters

The value to round

### Return Values

num rounded up to the next highest integer. The return value of ceil() is still of type float as the value range of float is usually bigger than that of int.

### Changelog

### Examples

Example #1 ceil() example

```
<?php
echo ceil(4.3), PHP_EOL;    // 5
echo ceil(9.999), PHP_EOL;  // 10
echo ceil(-3.14), PHP_EOL;  // -3
?>
```

### See Also

- floor() - Round fractions down
- round() - Rounds a float

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ceil.php
