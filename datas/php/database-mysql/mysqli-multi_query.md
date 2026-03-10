# mysqli::multi_query

Source: https://devdocs.io/php/mysqli.multi-query

# mysqli_multi_query

(PHP 5, PHP 7, PHP 8)

mysqli::multi_query -- mysqli_multi_query — Performs one or more queries on the database

### Description

Object-oriented style

```
public mysqli::multi_query(string $query): bool
```

Procedural style

```
mysqli_multi_query(mysqli $mysql, string $query): bool
```

Executes one or multiple queries which are concatenated by a semicolon.

# Security warning: SQL injection

If the query contains any variable input then parameterized prepared statements should be used instead. Alternatively, the data must be properly formatted and all strings must be escaped using the mysqli_real_escape_string() function.

Queries are sent asynchronously in a single call to the database, but the database processes them sequentially. mysqli_multi_query() waits for the first query to complete before returning control to PHP. The MySQL server will then process the next query in the sequence. Once the next result is ready, MySQL will wait for the next execution of mysqli_next_result() from PHP.

It is recommended to use do-while to process multiple queries. The connection will be busy until all queries have completed and their results are fetched to PHP. No other statement can be issued on the same connection until all queries are processed. To proceed to the next query in the sequence, use mysqli_next_result(). If the next result is not ready yet, mysqli will wait for the response from the MySQL server. To check if there are more results, use mysqli_more_results().

For queries which produce a result set, such as SELECT, SHOW, DESCRIBE or EXPLAIN, mysqli_use_result() or mysqli_store_result() can be used to retrieve the result set. For queries which do not produce a result set, the same functions can be used to retrieve information such as the number of affected rows.

Executing CALL statements for stored procedures can produce multiple result sets. If the stored procedure contains SELECT statements, the result sets are returned in the order that they are produced as the procedure executes. In general, the caller cannot know how many result sets a procedure will return and must be prepared to retrieve multiple results. The final result from the procedure is a status result that includes no result set. The status indicates whether the procedure succeeded or an error occurred.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

A string containing the queries to be executed. Multiple queries must be separated by a semicolon.

### Return Values

Returns false if the first statement failed. To retrieve subsequent errors from other statements you have to call mysqli_next_result() first.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Examples

Example #1 mysqli::multi_query() example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

$query = "SELECT CURRENT_USER();";
$query .= "SELECT Name FROM City ORDER BY ID LIMIT 20, 5";

/* execute multi query */
$mysqli->multi_query($query);
do {
    /* store the result set in PHP */
    if ($result = $mysqli->store_result()) {
        while ($row = $result->fetch_row()) {
            printf("%s\n", $row[0]);
        }
    }
    /* print divider */
    if ($mysqli->more_results()) {
        printf("-----------------\n");
    }
} while ($mysqli->next_result());
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

$query = "SELECT CURRENT_USER();";
$query .= "SELECT Name FROM City ORDER BY ID LIMIT 20, 5";

/* execute multi query */
mysqli_multi_query($link, $query);
do {
    /* store the result set in PHP */
    if ($result = mysqli_store_result($link)) {
        while ($row = mysqli_fetch_row($result)) {
            printf("%s\n", $row[0]);
        }
    }
    /* print divider */
    if (mysqli_more_results($link)) {
        printf("-----------------\n");
    }
} while (mysqli_next_result($link));
```

The above examples will output something similar to:

```
my_user@localhost
-----------------
Amersfoort
Maastricht
Dordrecht
Leiden
Haarlemmermeer
```

### See Also

- mysqli_query() - Performs a query on the database
- mysqli_use_result() - Initiate a result set retrieval
- mysqli_store_result() - Transfers a result set from the last query
- mysqli_next_result() - Prepare next result from multi_query
- mysqli_more_results() - Check if there are any more query results from a multi query

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.multi-query.php
