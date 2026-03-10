# odbc_close

Source: https://devdocs.io/php/function.odbc-close

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_close — Close an ODBC connection

### Description

```
odbc_close(Odbc\Connection $odbc): void
```

Closes down the connection to the database server.

### Parameters

The ODBC connection object, see odbc_connect() for details.

### Return Values

No value is returned.

### Changelog

### Notes

Note:

This function will fail if there are open transactions on this connection. The connection will remain open in this case.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-close.php
