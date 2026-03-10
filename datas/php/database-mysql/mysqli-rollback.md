# mysqli::rollback

Source: https://devdocs.io/php/mysqli.rollback

# mysqli_rollback

(PHP 5, PHP 7, PHP 8)

mysqli::rollback -- mysqli_rollback — Rolls back current transaction

### Description

Object-oriented style

```
public mysqli::rollback(int $flags = 0, ?string $name = null): bool
```

Procedural style

```
mysqli_rollback(mysqli $mysql, int $flags = 0, ?string $name = null): bool
```

Rollbacks the current transaction for the database.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

A bitmask of MYSQLI_TRANS_COR_* constants.

If provided then ROLLBACK/*name*/ is executed.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Changelog

### Examples

See the mysqli::begin_transaction() example.

### Notes

Note:

This function does not work with non transactional table types (like MyISAM or ISAM).

### See Also

- mysqli_begin_transaction() - Starts a transaction
- mysqli_commit() - Commits the current transaction
- mysqli_autocommit() - Turns on or off auto-committing database modifications
- mysqli_release_savepoint() - Removes the named savepoint from the set of savepoints of the current transaction

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.rollback.php
