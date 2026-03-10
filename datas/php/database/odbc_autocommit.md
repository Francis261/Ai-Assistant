# odbc_autocommit

Source: https://devdocs.io/php/function.odbc-autocommit

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_autocommit — Toggle autocommit behaviour

### Description

```
odbc_autocommit(Odbc\Connection $odbc, ?bool $enable = null): int|bool
```

Toggles autocommit behaviour.

By default, auto-commit is on for a connection. Disabling auto-commit is equivalent with starting a transaction.

### Parameters

The ODBC connection object, see odbc_connect() for details.

If enable is true, auto-commit is enabled, if it is false auto-commit is disabled. If null is passed, this function returns the auto-commit status for odbc.

### Return Values

With a null enable parameter, this function returns auto-commit status for odbc. Non-zero is returned if auto-commit is on, 0 if it is off, or false if an error occurs.

If enable is non-null, this function returns true on success and false on failure.

### Changelog

### See Also

- odbc_commit() - Commit an ODBC transaction
- odbc_rollback() - Rollback a transaction

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-autocommit.php
