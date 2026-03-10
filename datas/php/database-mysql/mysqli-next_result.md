# mysqli::next_result

Source: https://devdocs.io/php/mysqli.next-result

# mysqli_next_result

(PHP 5, PHP 7, PHP 8)

mysqli::next_result -- mysqli_next_result — Prepare next result from multi_query

### Description

Object-oriented style

```
public mysqli::next_result(): bool
```

Procedural style

```
mysqli_next_result(mysqli $mysql): bool
```

Prepares next result set from a previous call to mysqli_multi_query() which can be retrieved by mysqli_store_result() or mysqli_use_result().

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

### Return Values

Returns true on success or false on failure. Also returns false if the next statement resulted in an error, unlike mysqli_more_results().

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Examples

See mysqli_multi_query().

### See Also

- mysqli_multi_query() - Performs one or more queries on the database
- mysqli_more_results() - Check if there are any more query results from a multi query
- mysqli_store_result() - Transfers a result set from the last query
- mysqli_use_result() - Initiate a result set retrieval

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.next-result.php
