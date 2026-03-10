# fdf_error

Source: https://devdocs.io/php/function.fdf-error

(PHP 4 >= 4.3.0, PHP 5 < 5.3.0, PECL fdf SVN)

fdf_error — Return error description for FDF error code

### Description

```
fdf_error(int $error_code = -1): string
```

Gets a textual description for the FDF error code given in error_code.

### Parameters

An error code obtained with fdf_errno(). If not provided, this function uses the internal error code set by the last operation.

### Return Values

Returns the error message as a string, or the string no error if nothing went wrong.

### See Also

- fdf_errno() - Return error code for last fdf operation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fdf-error.php
