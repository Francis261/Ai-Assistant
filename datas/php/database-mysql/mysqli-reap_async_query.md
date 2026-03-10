# mysqli::reap_async_query

Source: https://devdocs.io/php/mysqli.reap-async-query

# mysqli_reap_async_query

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

mysqli::reap_async_query -- mysqli_reap_async_query — Get result from async query

### Description

Object-oriented style

```
public mysqli::reap_async_query(): mysqli_result|bool
```

Procedural style

```
mysqli_reap_async_query(mysqli $mysql): mysqli_result|bool
```

Get result from async query.

Note:

Available only with mysqlnd.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

### Return Values

Returns false on failure. For successful queries which produce a result set, such as SELECT, SHOW, DESCRIBE or EXPLAIN, mysqli_reap_async_query() will return a mysqli_result object. For other successful queries, mysqli_reap_async_query() will return true.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### See Also

- mysqli_poll() - Poll connections

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.reap-async-query.php
