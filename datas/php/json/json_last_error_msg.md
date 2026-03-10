# json_last_error_msg

Source: https://devdocs.io/php/function.json-last-error-msg

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

json_last_error_msg — Returns the error string of the last json_validate(), json_encode() or json_decode() call

### Description

```
json_last_error_msg(): string
```

Returns the error string of the last json_validate(), json_encode() or json_decode() call, which did not specify JSON_THROW_ON_ERROR.

### Parameters

This function has no parameters.

### Return Values

Returns the error message on success, or "No error" if no error has occurred.

### See Also

- json_last_error() - Returns the last error occurred

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.json-last-error-msg.php
