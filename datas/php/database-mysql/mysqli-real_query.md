# mysqli::real_query

Source: https://devdocs.io/php/mysqli.real-query

# mysqli_real_query

(PHP 5, PHP 7, PHP 8)

mysqli::real_query -- mysqli_real_query — Execute an SQL query

### Description

Object-oriented style

```
public mysqli::real_query(string $query): bool
```

Procedural style

```
mysqli_real_query(mysqli $mysql, string $query): bool
```

Executes a single query against the database whose result can then be retrieved or stored using the mysqli_store_result() or mysqli_use_result() functions.

# Security warning: SQL injection

If the query contains any variable input then parameterized prepared statements should be used instead. Alternatively, the data must be properly formatted and all strings must be escaped using the mysqli_real_escape_string() function.

In order to determine if a given query should return a result set or not, see mysqli_field_count().

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

The query string.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### See Also

- mysqli_query() - Performs a query on the database
- mysqli_store_result() - Transfers a result set from the last query
- mysqli_use_result() - Initiate a result set retrieval

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.real-query.php
