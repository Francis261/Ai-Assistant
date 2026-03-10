# NumberFormatter::getErrorMessage

Source: https://devdocs.io/php/numberformatter.geterrormessage

# numfmt_get_error_message

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

NumberFormatter::getErrorMessage -- numfmt_get_error_message — Get formatter's last error message

### Description

Object-oriented style

```
public NumberFormatter::getErrorMessage(): string
```

Procedural style

```
numfmt_get_error_message(NumberFormatter $formatter): string
```

Get error message from the last function performed by the formatter.

### Parameters

NumberFormatter object.

### Return Values

Returns error message from last formatter call.

### Examples

Example #1 numfmt_get_error_message() example

```
<?php
$fmt = numfmt_create( 'de_DE', NumberFormatter::DECIMAL );
$data = numfmt_format($fmt, 1234567.891234567890000);
var_dump(numfmt_get_error_message($fmt));
?>
```

Example #2 OO example

```
<?php
$fmt = new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );
$fmt->format(1234567.891234567890000);
var_dump(numfmt_get_error_message($fmt));
?>
```

### See Also

- numfmt_get_error_code() - Get formatter's last error code
- intl_get_error_code() - Get the last error code
- intl_is_failure() - Check whether the given error code indicates failure

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/numberformatter.geterrormessage.php
