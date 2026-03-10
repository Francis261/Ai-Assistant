# IntlDateFormatter::getErrorCode

Source: https://devdocs.io/php/intldateformatter.geterrorcode

# datefmt_get_error_code

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

IntlDateFormatter::getErrorCode -- datefmt_get_error_code — Get the error code from last operation

### Description

Object-oriented style

```
public IntlDateFormatter::getErrorCode(): int
```

Procedural style

```
datefmt_get_error_code(IntlDateFormatter $formatter): int
```

Returns the error code from the last formatting operation.

### Parameters

The formatter resource.

### Return Values

The error code, one of UErrorCode values. Initial value is U_ZERO_ERROR.

### Examples

Example #1 datefmt_get_error_code() example

```
<?php

$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
$str = datefmt_format($fmt, 0);

printf(
    "ERROR: %s (%d)\n",
    datefmt_get_error_message($fmt),
    datefmt_get_error_code($fmt)
);
?>
```

Example #2 OO example

```
<?php

$fmt = new IntlDateFormatter(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
$str = $fmt->format(0);

printf(
    "ERROR: %s (%d)\n",
    $fmt->getErrorMessage(),
    $fmt->getErrorCode()
);
?>
```

The above example will output:

```
ERROR: U_ZERO_ERROR (0)
```

### See Also

- datefmt_get_error_message() - Get the error text from the last operation
- intl_get_error_code() - Get the last error code
- intl_is_failure() - Check whether the given error code indicates failure

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intldateformatter.geterrorcode.php
