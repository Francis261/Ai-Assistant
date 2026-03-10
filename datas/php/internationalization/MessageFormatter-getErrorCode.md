# MessageFormatter::getErrorCode

Source: https://devdocs.io/php/messageformatter.geterrorcode

# msgfmt_get_error_code

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

MessageFormatter::getErrorCode -- msgfmt_get_error_code — Get the error code from last operation

### Description

Object-oriented style

```
public MessageFormatter::getErrorCode(): int
```

Procedural style

```
msgfmt_get_error_code(MessageFormatter $formatter): int
```

Get the error code from last operation.

### Parameters

The message formatter

### Return Values

The error code, one of UErrorCode values. Initial value is U_ZERO_ERROR.

### See Also

- msgfmt_get_error_message() - Get the error text from the last operation
- intl_get_error_code() - Get the last error code
- intl_is_failure() - Check whether the given error code indicates failure

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/messageformatter.geterrorcode.php
