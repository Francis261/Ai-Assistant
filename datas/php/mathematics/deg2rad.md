# deg2rad

Source: https://devdocs.io/php/function.deg2rad

(PHP 4, PHP 5, PHP 7, PHP 8)

deg2rad — Converts the number in degrees to the radian equivalent

### Description

```
deg2rad(float $num): float
```

This function converts num from degrees to the radian equivalent.

### Parameters

Angular value in degrees

### Return Values

The radian equivalent of num

### Examples

Example #1 deg2rad() example

```
<?php

echo deg2rad(45), PHP_EOL; // 0.785398163397
var_dump(deg2rad(45) === M_PI_4); // bool(true)

?>
```

### See Also

- rad2deg() - Converts the radian number to the equivalent number in degrees

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.deg2rad.php
