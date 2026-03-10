# mysqli::store_result

Source: https://devdocs.io/php/mysqli.store-result

# mysqli_store_result

(PHP 5, PHP 7, PHP 8)

mysqli::store_result -- mysqli_store_result — Transfers a result set from the last query

### Description

Object-oriented style

```
public mysqli::store_result(int $mode = 0): mysqli_result|false
```

Procedural style

```
mysqli_store_result(mysqli $mysql, int $mode = 0): mysqli_result|false
```

Transfers the result set from the last query on the database connection represented by the mysql parameter to be used with the mysqli_data_seek() function.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

The option that you want to set. As of PHP 8.1, this parameter has no effect. It can be one of the following values:

### Return Values

Returns a buffered result object or false if an error occurred.

Note:

mysqli_store_result() returns false in case the query didn't return a result set (if the query was, for example an INSERT statement). This function also returns false if the reading of the result set failed. You can check if you have got an error by checking if mysqli_error() doesn't return an empty string, if mysqli_errno() returns a non zero value, or if mysqli_field_count() returns a non zero value. Also possible reason for this function returning false after successful call to mysqli_query() can be too large result set (memory for it cannot be allocated). If mysqli_field_count() returns a non-zero value, the statement should have produced a non-empty result set.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Changelog

### Examples

See mysqli_multi_query().

### Notes

Note:

Although it is always good practice to free the memory used by the result of a query using the mysqli_free_result() function, when transferring large result sets using the mysqli_store_result() this becomes particularly important.

### See Also

- mysqli_real_query() - Execute an SQL query
- mysqli_use_result() - Initiate a result set retrieval

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.store-result.php
