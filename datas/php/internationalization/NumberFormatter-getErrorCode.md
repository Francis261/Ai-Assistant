# NumberFormatter::getErrorCode

Source: https://devdocs.io/php/numberformatter.geterrorcode

# numfmt_get_error_code

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

NumberFormatter::getErrorCode -- numfmt_get_error_code — Get formatter's last error code

### Description

Object-oriented style

```
public NumberFormatter::getErrorCode(): int
```

Procedural style

```
numfmt_get_error_code(NumberFormatter $formatter): int
```

Get error code from the last function performed by the formatter.

### Parameters

NumberFormatter object.

### Return Values

Returns error code from last formatter call.

### Examples

Example #1 numfmt_get_error_code() example

```
<?php
$fmt  = numfmt_create( 'de_DE', NumberFormatter::DECIMAL );
$data = numfmt_format($fmt, 1234567.891234567890000);
if (intl_is_failure(numfmt_get_error_code($fmt))) {
    echo 'Formatter error';
}
?>
```

Example #2 OO example

```
<?php
$fmt = new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );
$fmt->format(1234567.891234567890000);
if (intl_is_failure($fmt->getErrorCode())) {
    echo 'Formatter error';
}
?>
```

### See Also

- numfmt_get_error_message() - Get formatter's last error message
- intl_get_error_code() - Get the last error code
- intl_is_failure() - Check whether the given error code indicates failure

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/numberformatter.geterrorcode.php
