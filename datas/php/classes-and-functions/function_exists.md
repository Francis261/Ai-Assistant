# function_exists

Source: https://devdocs.io/php/function.function-exists

(PHP 4, PHP 5, PHP 7, PHP 8)

function_exists — Return true if the given function has been defined

### Description

```
function_exists(string $function): bool
```

Checks the list of defined functions, both built-in (internal) and user-defined, for function.

### Parameters

The function name, as a string.

### Return Values

Returns true if function exists and is a function, false otherwise.

Note:

This function will return false for constructs, such as include_once and echo.

### Examples

Example #1 function_exists() example

```
<?php
if (function_exists('imap_open')) {
    echo "IMAP functions are available.<br />\n";
} else {
    echo "IMAP functions are not available.<br />\n";
}
?>
```

### Notes

Note:

A function name may exist even if the function itself is unusable due to configuration or compiling options (with the image functions being an example).

### See Also

- method_exists() - Checks if the class method exists
- is_callable() - Verify that a value can be called as a function from the current scope
- get_defined_functions() - Returns an array of all defined functions
- class_exists() - Checks if the class has been defined
- extension_loaded() - Find out whether an extension is loaded

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.function-exists.php
