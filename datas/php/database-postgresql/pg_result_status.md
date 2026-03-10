# pg_result_status

Source: https://devdocs.io/php/function.pg-result-status

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_result_status — Get status of query result

### Description

```
pg_result_status(PgSql\Result $result, int $mode = PGSQL_STATUS_LONG): string|int
```

pg_result_status() returns the status of the PgSql\Result instance, or the PostgreSQL command completion tag associated with the result

### Parameters

An PgSql\Result instance, returned by pg_query(), pg_query_params() or pg_execute()(among others).

Either PGSQL_STATUS_LONG to return the numeric status of the result, or PGSQL_STATUS_STRING to return the command tag of the result. If not specified, PGSQL_STATUS_LONG is the default.

### Return Values

Possible return values are PGSQL_EMPTY_QUERY, PGSQL_COMMAND_OK, PGSQL_TUPLES_OK, PGSQL_TUPLES_CHUNK, PGSQL_COPY_OUT, PGSQL_COPY_IN, PGSQL_BAD_RESPONSE, PGSQL_NONFATAL_ERROR and PGSQL_FATAL_ERROR if PGSQL_STATUS_LONG is specified. Otherwise, a string containing the PostgreSQL command tag is returned.

### Changelog

### Examples

Example #1 pg_result_status() example

```
<?php

// Connect to the database
$conn = pg_pconnect("dbname=publisher");

// Execute a COPY
$result = pg_query($conn, "COPY authors FROM STDIN;");

// Get the result status
$status = pg_result_status($result);

// Determine status
if ($status == PGSQL_COPY_IN)
   echo "Copy began.";
else
   echo "Copy failed.";
 
?>
```

The above example will output:

```
Copy began.
```

### See Also

- pg_connection_status() - Get connection status

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-result-status.php
