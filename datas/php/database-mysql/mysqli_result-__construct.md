# mysqli_result::__construct

Source: https://devdocs.io/php/mysqli-result.construct

(PHP 5, PHP 7, PHP 8)

mysqli_result::__construct — Constructs a mysqli_result object

### Description

This method constructs a new mysqli_result object.

It can be used to create the mysqli_result object after calling the mysqli_real_query() or mysqli_multi_query() function. Constructing the object manually is equivalent to calling the mysqli_store_result() or mysqli_use_result() function.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

The result mode can be one of 2 constants indicating how the result will be returned from the MySQL server.

MYSQLI_STORE_RESULT (default) - creates a mysqli_result object with buffered result set.

MYSQLI_USE_RESULT - creates a mysqli_result object with unbuffered result set. As long as there are pending records waiting to be fetched, the connection line will be busy and all subsequent calls will return error Commands out of sync. To avoid the error all records must be fetched from the server or the result set must be discarded by calling mysqli_free_result(). The connection must remain open for the rows to be fetched.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Examples

Example #1 Creation of a mysqli_result object

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* Select queries return a result set */
$mysqli->real_query("SELECT Name FROM City LIMIT 10");

$result = new mysqli_result($mysqli);
printf("Select returned %d rows.\n", $result->num_rows);
```

The above examples will output something similar to:

```
Select returned 10 rows.
```

### See Also

- mysqli_multi_query() - Performs one or more queries on the database
- mysqli_real_query() - Execute an SQL query
- mysqli_store_result() - Transfers a result set from the last query
- mysqli_use_result() - Initiate a result set retrieval

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-result.construct.php
