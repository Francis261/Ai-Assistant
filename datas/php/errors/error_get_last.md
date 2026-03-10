# error_get_last

Source: https://devdocs.io/php/function.error-get-last

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

error_get_last — Get the last occurred error

### Description

```
error_get_last(): ?array
```

Gets information about the last error that occurred.

### Parameters

This function has no parameters.

### Return Values

Returns an associative array describing the last error with keys "type", "message", "file" and "line". If the error has been caused by a PHP internal function then the "message" begins with its name. Returns null if there hasn't been an error yet.

### Examples

Example #1 An error_get_last() example

```
<?php
echo $a;
print_r(error_get_last());
?>
```

The above example will output something similar to:

```
Array
(
    [type] => 8
    [message] => Undefined variable: a
    [file] => C:\WWW\index.php
    [line] => 2
)
```

### See Also

- Error constants
- Variable $php_errormsg
- error_clear_last() - Clear the most recent error
- Directive display_errors
- Directive html_errors
- Directive xmlrpc_errors

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.error-get-last.php
