# odbc_errormsg

Source: https://devdocs.io/php/function.odbc-errormsg

(PHP 4 >= 4.0.5, PHP 5, PHP 7, PHP 8)

odbc_errormsg — Get the last error message

### Description

```
odbc_errormsg(?Odbc\Connection $odbc = null): string
```

Returns a string containing the last ODBC error message, or an empty string if there has been no errors.

### Parameters

The ODBC connection object, see odbc_connect() for details.

### Return Values

If odbc is specified, the last state of that connection is returned, else the last state of any connection is returned.

This function returns meaningful value only if last odbc query failed (i.e. odbc_exec() returned false).

### Changelog

### See Also

- odbc_error() - Get the last error code
- odbc_exec() - Directly execute an SQL statement

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-errormsg.php
