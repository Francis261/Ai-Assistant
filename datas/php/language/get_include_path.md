# get_include_path

Source: https://devdocs.io/php/function.get-include-path

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

get_include_path — Gets the current include_path configuration option

### Description

```
get_include_path(): string|false
```

Gets the current include_path configuration option value.

### Parameters

This function has no parameters.

### Return Values

Returns the path, as a string, or false on failure.

### Examples

Example #1 get_include_path() example

```
<?php
echo get_include_path();

// Or using ini_get()
echo ini_get('include_path');
?>
```

### See Also

- ini_get() - Gets the value of a configuration option
- restore_include_path() - Restores the value of the include_path configuration option
- set_include_path() - Sets the include_path configuration option
- include - include

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.get-include-path.php
