# intl_get_error_code

Source: https://devdocs.io/php/function.intl-get-error-code

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

intl_get_error_code — Get the last error code

### Description

```
intl_get_error_code(): int
```

Useful to handle errors occurred in static methods when there's no object to get error code from.

### Parameters

This function has no parameters.

### Return Values

Error code returned by the last API function call.

### Examples

Example #1 intl_get_error_code() example

```
<?php
$coll = collator_create( '<bad_param>' );
if( !$coll ) {
    handle_error( intl_get_error_code() );
}
?>
```

### See Also

- intl_is_failure() - Check whether the given error code indicates failure
- intl_error_name() - Get symbolic name for a given error code
- intl_get_error_message() - Get description of the last error
- collator_get_error_code() - Get collator's last error code
- numfmt_get_error_code() - Get formatter's last error code

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.intl-get-error-code.php
