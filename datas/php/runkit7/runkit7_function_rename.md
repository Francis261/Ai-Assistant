# runkit7_function_rename

Source: https://devdocs.io/php/function.runkit7-function-rename

(PECL runkit7 >= Unknown)

runkit7_function_rename — Change a function's name

### Description

```
runkit7_function_rename(string $source_name, string $target_name): bool
```

Note: By default, only userspace functions may be removed, renamed, or modified. In order to override internal functions, you must enable the runkit.internal_override setting in php.ini.

### Parameters

Current function name

New function name

### Return Values

Returns true on success or false on failure.

### See Also

- runkit7_function_add() - Add a new function, similar to create_function
- runkit7_function_copy() - Copy a function to a new function name
- runkit7_function_redefine() - Replace a function definition with a new implementation
- runkit7_function_remove() - Remove a function definition

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.runkit7-function-rename.php
