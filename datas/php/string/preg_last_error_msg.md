# preg_last_error_msg

Source: https://devdocs.io/php/function.preg-last-error-msg

(PHP 8)

preg_last_error_msg — Returns the error message of the last PCRE regex execution

### Description

```
preg_last_error_msg(): string
```

Returns the error message of the last PCRE regex execution.

### Parameters

This function has no parameters.

### Return Values

Returns the error message on success, or "No error" if no error has occurred.

### Examples

Example #1 preg_last_error_msg() example

```
<?php

preg_match('/(?:\D+|<\d+>)*[!?]/', 'foobar foobar foobar');

if (preg_last_error() !== PREG_NO_ERROR) {
    echo preg_last_error_msg();
}

?>
```

The above example will output:

```
Backtrack limit exhausted
```

### See Also

- preg_last_error() - Returns the error code of the last PCRE regex execution

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.preg-last-error-msg.php
