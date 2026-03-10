# intl_is_failure

Source: https://devdocs.io/php/function.intl-is-failure

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

intl_is_failure — Check whether the given error code indicates failure

### Description

```
intl_is_failure(int $errorCode): bool
```

### Parameters

is a value that returned by functions: intl_get_error_code(), collator_get_error_code() .

### Return Values

true if it the code indicates some failure, and false in case of success or a warning.

### Examples

Example #1 intl_is_failure() example

```
<?php
function check( $err_code )
{
    var_export( intl_is_failure( $err_code ) );
    echo "\n";
}

check( U_ZERO_ERROR );
check( U_USING_FALLBACK_WARNING );
check( U_ILLEGAL_ARGUMENT_ERROR );
?>
```

The above example will output something similar to:

```
false
false
true
```

### See Also

- intl_get_error_code() - Get the last error code
- collator_get_error_code() - Get collator's last error code
- Collator-getErrorCode()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.intl-is-failure.php
