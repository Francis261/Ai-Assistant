# set_exception_handler

Source: https://devdocs.io/php/function.set-exception-handler

(PHP 5, PHP 7, PHP 8)

set_exception_handler — Sets a user-defined exception handler function

### Description

```
set_exception_handler(?callable $callback): ?callable
```

Sets the default exception handler if an exception is not caught within a try/catch block. Execution will stop after the callback is called.

### Parameters

The function to be called when an uncaught exception occurs. This handler function needs to accept one parameter, which will be the Throwable object that was thrown. Both Error and Exception implement the Throwable interface. This is the handler signature:

```
handler(Throwable $ex): void
```

null may be passed instead, to reset this handler to its default state.

### Return Values

Returns the previously defined exception handler, or null on error. If no previous handler was defined, null is also returned.

### Examples

Example #1 set_exception_handler() example

```
<?php
function exception_handler(Throwable $exception) {
  echo "Uncaught exception: " , $exception->getMessage(), "\n";
}

set_exception_handler('exception_handler');

throw new Exception('Uncaught Exception');
echo "Not Executed\n";
?>
```

### See Also

- get_exception_handler() - Gets the user-defined exception handler function
- restore_exception_handler() - Restores the previously defined exception handler function
- restore_error_handler() - Restores the previous error handler function
- error_reporting() - Sets which PHP errors are reported
- Exceptions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.set-exception-handler.php
