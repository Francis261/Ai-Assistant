# mysqli_stmt::free_result

Source: https://devdocs.io/php/mysqli-stmt.free-result

# mysqli_stmt_free_result

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::free_result -- mysqli_stmt_free_result — Frees stored result memory for the given statement handle

### Description

Object-oriented style

```
public mysqli_stmt::free_result(): void
```

Procedural style

```
mysqli_stmt_free_result(mysqli_stmt $statement): void
```

Frees the result memory associated with the statement, which was allocated by mysqli_stmt_store_result().

### Parameters

Procedural style only: A mysqli_stmt object returned by mysqli_stmt_init().

### Return Values

No value is returned.

### See Also

- mysqli_stmt_store_result() - Stores a result set in an internal buffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-stmt.free-result.php
