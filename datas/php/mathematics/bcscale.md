# bcscale

Source: https://devdocs.io/php/function.bcscale

(PHP 4, PHP 5, PHP 7, PHP 8)

bcscale — Set or get default scale parameter for all bc math functions

### Description

```
bcscale(int $scale): int
```

Sets the default scale parameter for all subsequent calls to bc math functions that do not explicitly specify a scale parameter.

```
bcscale(null $scale = null): int
```

Gets the current scale factor.

### Parameters

The scale factor.

### Return Values

Returns the old scale when used as setter. Otherwise the current scale is returned.

### Errors/Exceptions

This function throws a ValueError if scale is outside the valid range.

### Changelog

### Examples

Example #1 bcscale() example

```
<?php

// default scale : 3
bcscale(3);
echo bcdiv('105', '6.55957'); // 16.007

// this is the same without bcscale()
echo bcdiv('105', '6.55957', 3); // 16.007

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bcscale.php
