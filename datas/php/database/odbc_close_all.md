# odbc_close_all

Source: https://devdocs.io/php/function.odbc-close-all

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_close_all — Close all ODBC connections

### Description

```
odbc_close_all(): void
```

odbc_close_all() will close down all connections to database server(s).

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Notes

Note:

This function will fail if there are open transactions on a connection. This connection will remain open in this case.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-close-all.php
