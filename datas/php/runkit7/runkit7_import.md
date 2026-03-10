# runkit7_import

Source: https://devdocs.io/php/function.runkit7-import

(PECL runkit7 >= Unknown)

runkit7_import — Process a PHP file importing function and class definitions, overwriting where appropriate

This feature has been removed in PECL runkit7 4.0.0.

### Description

```
runkit7_import(string $filename, int $flags = ?): bool
```

Similar to include. However, any code residing outside of a function or class is simply ignored. Additionally, depending on the value of flags, any functions or classes which already exist in the currently running environment may be automatically overwritten by their new definitions.

### Parameters

Filename to import function and class definitions from

Bitwise OR of the RUNKIT7_IMPORT_* family of constants.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.runkit7-import.php
