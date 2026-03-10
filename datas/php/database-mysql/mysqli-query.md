# mysqli::query

Source: https://devdocs.io/php/mysqli.query

# mysqli_query

(PHP 5, PHP 7, PHP 8)

mysqli::query -- mysqli_query — Performs a query on the database

### Description

Object-oriented style

```
public mysqli::query(string $query, int $result_mode = MYSQLI_STORE_RESULT): mysqli_result|bool
```

Procedural style

```
mysqli_query(mysqli $mysql, string $query, int $result_mode = MYSQLI_STORE_RESULT): mysqli_result|bool
```

Performs a query against the database.

# Security warning: SQL injection

If the query contains any variable input then parameterized prepared statements should be used instead. Alternatively, the data must be properly formatted and all strings must be escaped using the mysqli_real_escape_string() function.

For non-DML queries (not INSERT, UPDATE or DELETE), this function is similar to calling mysqli_real_query() followed by either mysqli_use_result() or mysqli_store_result().

Note:

In the case where a statement is passed to mysqli_query() that is longer than max_allowed_packet of the server, the returned error codes are different depending on whether you are using MySQL Native Driver (mysqlnd) or MySQL Client Library (libmysqlclient). The behavior is as follows:

- mysqlnd on Linux returns an error code of 1153. The error message means got a packet bigger than max_allowed_packet bytes.
- mysqlnd on Windows returns an error code 2006. This error message means server has gone away.
- libmysqlclient on all platforms returns an error code 2006. This error message means server has gone away.

mysqlnd on Linux returns an error code of 1153. The error message means got a packet bigger than max_allowed_packet bytes.

mysqlnd on Windows returns an error code 2006. This error message means server has gone away.

libmysqlclient on all platforms returns an error code 2006. This error message means server has gone away.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

The query string.

The result mode can be one of 3 constants indicating how the result will be returned from the MySQL server.

MYSQLI_STORE_RESULT (default) - returns a mysqli_result object with buffered result set.

MYSQLI_USE_RESULT - returns a mysqli_result object with unbuffered result set. As long as there are pending records waiting to be fetched, the connection line will be busy and all subsequent calls will return error Commands out of sync. To avoid the error all records must be fetched from the server or the result set must be discarded by calling mysqli_free_result().

MYSQLI_ASYNC (available with mysqlnd) - the query is performed asynchronously and no result set is immediately returned. mysqli_poll() is then used to get results from such queries. Used in combination with either MYSQLI_STORE_RESULT or MYSQLI_USE_RESULT constant.

### Return Values

Returns false on failure. For successful queries which produce a result set, such as SELECT, SHOW, DESCRIBE or EXPLAIN, mysqli_query() will return a mysqli_result object. For other successful queries, mysqli_query() will return true.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Examples

Example #1 mysqli::query() example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* Create table doesn't return a resultset */
$mysqli->query("CREATE TEMPORARY TABLE myCity LIKE City");
printf("Table myCity successfully created.\n");

/* Select queries return a resultset */
$result = $mysqli->query("SELECT Name FROM City LIMIT 10");
printf("Select returned %d rows.\n", $result->num_rows);

/* If we have to retrieve large amount of data we use MYSQLI_USE_RESULT */
$result = $mysqli->query("SELECT * FROM City", MYSQLI_USE_RESULT);

/* Note, that we can't execute any functions which interact with the
    server until all records have been fully retrieved or the result
    set was closed. All calls will return an 'out of sync' error */
$mysqli->query("SET @a:='this will not work'");
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

/* Create table doesn't return a resultset */
mysqli_query($link, "CREATE TEMPORARY TABLE myCity LIKE City");
printf("Table myCity successfully created.\n");

/* Select queries return a resultset */
$result = mysqli_query($link, "SELECT Name FROM City LIMIT 10");
printf("Select returned %d rows.\n", mysqli_num_rows($result));

/* If we have to retrieve large amount of data we use MYSQLI_USE_RESULT */
$result = mysqli_query($link, "SELECT * FROM City", MYSQLI_USE_RESULT);

/* Note, that we can't execute any functions which interact with the
    server until all records have been fully retrieved or the result
    set was closed. All calls will return an 'out of sync' error */
mysqli_query($link, "SET @a:='this will not work'");
```

The above examples will output something similar to:

```
Table myCity successfully created.
Select returned 10 rows.

Fatal error: Uncaught mysqli_sql_exception: Commands out of sync; you can't run this command now in...
```

### See Also

- mysqli_execute_query() - Prepares, binds parameters, and executes SQL statement
- mysqli_real_query() - Execute an SQL query
- mysqli_multi_query() - Performs one or more queries on the database
- mysqli_prepare() - Prepares an SQL statement for execution
- mysqli_free_result() - Frees the memory associated with a result

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.query.php
