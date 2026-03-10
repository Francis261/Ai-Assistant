# odbc_result_all

Source: https://devdocs.io/php/function.odbc-result-all

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_result_all — Print result as HTML table

This function has been DEPRECATED as of PHP 8.1.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 odbc_result_all(Odbc\Result $statement, string $format = ""): int|false
```

Prints all rows from a result object produced by odbc_exec(). The result is printed in HTML table format. The data is not escaped.

This function is not supposed to be used in production environments; it is merely meant for development purposes, to get a result set quickly rendered.

### Parameters

The ODBC result object.

Additional overall table formatting.

### Return Values

Returns the number of rows in the result or false on error.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-result-all.php
