# mysqli::commit

Source: https://devdocs.io/php/mysqli.commit

# mysqli_commit

(PHP 5, PHP 7, PHP 8)

mysqli::commit -- mysqli_commit — Commits the current transaction

### Description

Object-oriented style

```
public mysqli::commit(int $flags = 0, ?string $name = null): bool
```

Procedural style

```
mysqli_commit(mysqli $mysql, int $flags = 0, ?string $name = null): bool
```

Commits the current transaction for the database connection.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

A bitmask of MYSQLI_TRANS_COR_* constants.

If provided then COMMIT/*name*/ is executed.

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

- mysqli_autocommit() - Turns on or off auto-committing database modifications
- mysqli_begin_transaction() - Starts a transaction
- mysqli_rollback() - Rolls back current transaction
- mysqli_savepoint() - Set a named transaction savepoint

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.commit.php
