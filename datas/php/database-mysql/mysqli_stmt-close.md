# mysqli_stmt::close

Source: https://devdocs.io/php/mysqli-stmt.close

# mysqli_stmt_close

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::close -- mysqli_stmt_close — Closes a prepared statement

### Description

Object-oriented style

```
public mysqli_stmt::close(): true
```

Procedural style

```
mysqli_stmt_close(mysqli_stmt $statement): true
```

Closes a prepared statement. mysqli_stmt_close() also deallocates the statement handle. If the current statement has pending or unread results, this function cancels them so that the next query can be executed.

### Parameters

Procedural style only: A mysqli_stmt object returned by mysqli_stmt_init().

### Return Values

Always returns true.

### Changelog

### See Also

- mysqli_prepare() - Prepares an SQL statement for execution

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-stmt.close.php
