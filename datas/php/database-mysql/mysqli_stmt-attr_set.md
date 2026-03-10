# mysqli_stmt::attr_set

Source: https://devdocs.io/php/mysqli-stmt.attr-set

# mysqli_stmt_attr_set

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::attr_set -- mysqli_stmt_attr_set — Used to modify the behavior of a prepared statement

### Description

Object-oriented style

```
public mysqli_stmt::attr_set(int $attribute, int $value): bool
```

Procedural style

```
mysqli_stmt_attr_set(mysqli_stmt $statement, int $attribute, int $value): bool
```

Used to modify the behavior of a prepared statement. This function may be called multiple times to set several attributes.

### Parameters

Procedural style only: A mysqli_stmt object returned by mysqli_stmt_init().

The attribute that you want to set. It can have one of the following values:

If you use the MYSQLI_STMT_ATTR_CURSOR_TYPE option with MYSQLI_CURSOR_TYPE_READ_ONLY, a cursor is opened for the statement when you invoke mysqli_stmt_execute(). If there is already an open cursor from a previous mysqli_stmt_execute() call, it closes the cursor before opening a new one. mysqli_stmt_reset() also closes any open cursor before preparing the statement for re-execution. mysqli_stmt_free_result() closes any open cursor.

If you open a cursor for a prepared statement, mysqli_stmt_store_result() is unnecessary.

The value to assign to the attribute.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### See Also

- » Connector/MySQL mysql_stmt_attr_set()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-stmt.attr-set.php
