# odbc_rollback

Source: https://devdocs.io/php/function.odbc-rollback

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_rollback — Rollback a transaction

### Description

```
odbc_rollback(Odbc\Connection $odbc): bool
```

Rolls back all pending statements on the connection.

### Parameters

The ODBC connection object, see odbc_connect() for details.

### Return Values

Returns true on success or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-rollback.php
