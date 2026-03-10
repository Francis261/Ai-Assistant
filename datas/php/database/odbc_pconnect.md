# odbc_pconnect

Source: https://devdocs.io/php/function.odbc-pconnect

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_pconnect — Open a persistent database connection

### Description

```
odbc_pconnect(
 string $dsn,
 ?string $user = null,
 ?string $password = null,
 int $cursor_option = SQL_CUR_USE_DRIVER
): Odbc\Connection|false
```

Opens a persistent database connection.

This function is much like odbc_connect(), except that the connection is not really closed when the script has finished. Future requests for a connection with the same dsn, user, password combination (via odbc_connect() and odbc_pconnect()) can reuse the persistent connection.

### Parameters

See odbc_connect() for details.

### Return Values

Returns an ODBC connection, or false on failure.

### Changelog

### Notes

Note: Persistent connections have no effect if PHP is used as a CGI program.

### See Also

- odbc_connect() - Connect to a datasource
- Persistent Database Connections

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-pconnect.php
