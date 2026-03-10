# ob_get_level

Source: https://devdocs.io/php/function.ob-get-level

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

ob_get_level — Return the nesting level of the output buffering mechanism

### Description

```
ob_get_level(): int
```

Returns the nesting level of the output buffering mechanism.

### Parameters

This function has no parameters.

### Return Values

Returns the level of nested output buffering handlers or zero if output buffering is not active.

The value for identical levels between ob_get_level() and ob_get_status() is off by one. For ob_get_level() the first level is 1. Whereas for ob_get_status() the first level is 0.

### See Also

- ob_start() - Turn on output buffering
- ob_get_status() - Get status of output buffers
- ob_get_contents() - Return the contents of the output buffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ob-get-level.php
