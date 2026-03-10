# mysqli_stmt::next_result

Source: https://devdocs.io/php/mysqli-stmt.next-result

# mysqli_stmt_next_result

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

mysqli_stmt::next_result -- mysqli_stmt_next_result — Reads the next result from a multiple query

### Description

Object-oriented style

```
public mysqli_stmt::next_result(): bool
```

Procedural style:

```
mysqli_stmt_next_result(mysqli_stmt $statement): bool
```

Reads the next result from a multiple query.

Note:

Prior to PHP 8.1.0, available only with mysqlnd.

### Parameters

Procedural style only: A mysqli_stmt object returned by mysqli_stmt_init().

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Changelog

### See Also

- mysqli_stmt::more_results() - Check if there are more query results from a multiple query
- mysqli::multi_query() - Performs one or more queries on the database

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-stmt.next-result.php
