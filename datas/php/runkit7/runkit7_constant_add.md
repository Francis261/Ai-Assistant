# runkit7_constant_add

Source: https://devdocs.io/php/function.runkit7-constant-add

(PECL runkit7 >= Unknown)

runkit7_constant_add — Similar to define(), but allows defining in class definitions as well

### Description

```
runkit7_constant_add(string $constant_name, mixed $value, int $newVisibility = ?): bool
```

### Parameters

Name of constant to declare. Either a string to indicate a global constant, or classname::constname to indicate a class constant.

NULL, Bool, Long, Double, String, Array, or Resource value to store in the new constant.

Visibility of the constant, for class constants. Public by default. One of the RUNKIT7_ACC_* constants.

### Return Values

Returns true on success or false on failure.

### See Also

- define() - Defines a named constant
- runkit7_constant_redefine() - Redefine an already defined constant
- runkit7_constant_remove() - Remove/Delete an already defined constant

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.runkit7-constant-add.php
