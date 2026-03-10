# get_exception_handler

Source: https://devdocs.io/php/function.get-exception-handler

(PHP 8 >= 8.5.0)

get_exception_handler — Gets the user-defined exception handler function

### Description

```
get_exception_handler(): ?callable
```

Returns the current exception handler function, if any.

### Parameters

This function has no parameters.

### Return Values

Returns the currently defined exception handler. If no handler is defined, null is returned.

The returned handler is the exact callable value that was passed to set_exception_handler() to define it.

### Examples

Example #1 get_exception_handler() example

```
<?php

$handler = function (Throwable $ex) {
     echo "Exception: " . $ex::class . ": " . $ex->getMessage() . "\n";
};

var_dump(get_exception_handler()); // NULL

set_exception_handler($handler);

var_dump(get_exception_handler() === $handler); // bool(true)

?>
```

### Notes

Prior to PHP 8.5.0, this functionality can be provided by the following polyfill:

```
<?php
if (!function_exists('get_exception_handler')) {
    function noop_exception_handler() {
    }
    function get_exception_handler(): ?callable {
        $handler = set_exception_handler('noop_exception_handler');
        restore_exception_handler();
        return $handler;
    }
}
?>
```

### See Also

- set_exception_handler() - Sets a user-defined exception handler function
- restore_exception_handler() - Restores the previously defined exception handler function
- restore_error_handler() - Restores the previous error handler function
- error_reporting() - Sets which PHP errors are reported
- Exceptions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.get-exception-handler.php
