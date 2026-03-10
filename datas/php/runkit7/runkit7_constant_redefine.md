# runkit7_constant_redefine

Source: https://devdocs.io/php/function.runkit7-constant-redefine

(PECL runkit7 >= Unknown)

runkit7_constant_redefine — Redefine an already defined constant

### Description

```
runkit7_constant_redefine(string $constant_name, mixed $value, int $new_visibility = ?): bool
```

### Parameters

Constant to redefine. Either the name of a global constant, or classname::constname indicating class constant.

Value to assign to the constant.

The new visibility of the constant, for class constants. Unchanged by default. One of the RUNKIT7_ACC_* constants.

### Return Values

Returns true on success or false on failure.

### See Also

- runkit7_constant_add() - Similar to define(), but allows defining in class definitions as well
- runkit7_constant_remove() - Remove/Delete an already defined constant

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.runkit7-constant-redefine.php
