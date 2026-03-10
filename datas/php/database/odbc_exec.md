# odbc_exec

Source: https://devdocs.io/php/function.odbc-exec

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_exec — Directly execute an SQL statement

### Description

```
odbc_exec(Odbc\Connection $odbc, string $query): Odbc\Result|false
```

Sends an SQL statement to the database server.

### Parameters

The ODBC connection object, see odbc_connect() for details.

The SQL statement.

### Return Values

Returns an ODBC result object if the SQL command was executed successfully, or false on error.

### Changelog

### See Also

- odbc_prepare() - Prepares a statement for execution
- odbc_execute() - Execute a prepared statement

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-exec.php
