# mysqli_result::free

Source: https://devdocs.io/php/mysqli-result.free

# mysqli_result::close

# mysqli_result::free_result

# mysqli_free_result

(PHP 5, PHP 7, PHP 8)

mysqli_result::free -- mysqli_result::close -- mysqli_result::free_result -- mysqli_free_result — Frees the memory associated with a result

### Description

Object-oriented style

```
public mysqli_result::free(): void
```

```
public mysqli_result::close(): void
```

```
public mysqli_result::free_result(): void
```

Procedural style

```
mysqli_free_result(mysqli_result $result): void
```

Frees the memory associated with the result.

### Parameters

Procedural style only: A mysqli_result object returned by mysqli_query(), mysqli_store_result(), mysqli_use_result() or mysqli_stmt_get_result().

### Return Values

No value is returned.

### See Also

- mysqli_query() - Performs a query on the database
- mysqli_stmt_get_result() - Gets a result set from a prepared statement as a mysqli_result object
- mysqli_store_result() - Transfers a result set from the last query
- mysqli_use_result() - Initiate a result set retrieval

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-result.free.php
