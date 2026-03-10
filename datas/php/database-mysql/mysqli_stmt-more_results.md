# mysqli_stmt::more_results

Source: https://devdocs.io/php/mysqli-stmt.more-results

# mysqli_stmt_more_results

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

mysqli_stmt::more_results -- mysqli_stmt_more_results — Check if there are more query results from a multiple query

### Description

Object-oriented style

```
public mysqli_stmt::more_results(): bool
```

Procedural style:

```
mysqli_stmt_more_results(mysqli_stmt $statement): bool
```

Checks if there are more query results from a multiple query.

Note:

Available only with mysqlnd.

### Parameters

Procedural style only: A mysqli_stmt object returned by mysqli_stmt_init().

### Return Values

Returns true if more results exist, otherwise false.

### See Also

- mysqli_stmt::next_result() - Reads the next result from a multiple query
- mysqli::multi_query() - Performs one or more queries on the database

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-stmt.more-results.php
