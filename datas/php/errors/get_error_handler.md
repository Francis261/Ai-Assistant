# get_error_handler

Source: https://devdocs.io/php/function.get-error-handler

(PHP 8 >= 8.5.0)

get_error_handler — Gets the user-defined error handler function

### Description

```
get_error_handler(): ?callable
```

Returns the current error handler function, if any.

### Parameters

This function has no parameters.

### Return Values

Returns the currently defined error handler (if any). If the built-in error handler is used null is returned.

The returned handler is the exact callable value that was passed to set_error_handler() to define it.

### Examples

Example #1 get_error_handler() example

```
<?php

$handler = function (int $errno, string $errstr, ?string $errfile, ?int $errline) {
     echo "Error: " . $errstr . "\n";
};

var_dump(get_error_handler()); // NULL

set_error_handler($handler);

var_dump(get_error_handler() === $handler); // bool(true)

?>
```

### Notes

Prior to PHP 8.5.0, this functionality can be provided by the following polyfill:

```
<?php
if (!function_exists('get_error_handler')) {
    function noop_error_handler() {
    }
    function get_error_handler(): ?callable {
        $handler = set_error_handler('noop_error_handler');
        restore_error_handler();
        return $handler;
    }
}
?>
```

### See Also

- error_reporting() - Sets which PHP errors are reported
- set_error_handler() - Sets a user-defined error handler function
- restore_error_handler() - Restores the previous error handler function
- trigger_error() - Generates a user-level error/warning/notice message
- error level constants

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.get-error-handler.php
