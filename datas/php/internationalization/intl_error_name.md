# intl_error_name

Source: https://devdocs.io/php/function.intl-error-name

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

intl_error_name — Get symbolic name for a given error code

### Description

```
intl_error_name(int $errorCode): string
```

Return ICU error code name.

### Parameters

ICU error code.

### Return Values

The returned string will be the same as the name of the error code constant.

### Examples

Example #1 intl_error_name() example

```
<?php
$coll     = collator_create( 'en_RU' );
$err_code = collator_get_error_code( $coll );

printf( "Symbolic name for %d is %s\n.", $err_code, intl_error_name( $err_code ) );
?>
```

The above example will output something similar to:

```
Symbolic name for -128 is U_USING_FALLBACK_WARNING.
```

### See Also

- intl_is_failure() - Check whether the given error code indicates failure
- intl_get_error_code() - Get the last error code
- intl_get_error_message() - Get description of the last error

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.intl-error-name.php
