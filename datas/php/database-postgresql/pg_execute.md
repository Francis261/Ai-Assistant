# pg_execute

Source: https://devdocs.io/php/function.pg-execute

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

pg_execute — Sends a request to execute a prepared statement with given parameters, and waits for the result

### Description

```
pg_execute(PgSql\Connection $connection = ?, string $stmtname, array $params): PgSql\Result|false
```

Sends a request to execute a prepared statement with given parameters, and waits for the result.

pg_execute() is like pg_query_params(), but the command to be executed is specified by naming a previously-prepared statement, instead of giving a query string. This feature allows commands that will be used repeatedly to be parsed and planned just once, rather than each time they are executed. The statement must have been prepared previously in the current session. pg_execute() is supported only against PostgreSQL 7.4 or higher connections; it will fail when using earlier versions.

The parameters are identical to pg_query_params(), except that the name of a prepared statement is given instead of a query string.

### Parameters

An PgSql\Connection instance. When connection is unspecified, the default connection is used. The default connection is the last connection made by pg_connect() or pg_pconnect().

As of PHP 8.1.0, using the default connection is deprecated.

The name of the prepared statement to execute. if "" is specified, then the unnamed statement is executed. The name must have been previously prepared using pg_prepare(), pg_send_prepare() or a PREPARE SQL command.

An array of parameter values to substitute for the $1, $2, etc. placeholders in the original prepared query string. The number of elements in the array must match the number of placeholders.

Elements are converted to strings by calling this function.

### Return Values

An PgSql\Result instance on success, or false on failure.

### Changelog

### Examples

Example #1 Using pg_execute()

```
<?php
// Connect to a database named "mary"
$dbconn = pg_connect("dbname=mary");

// Prepare a query for execution
$result = pg_prepare($dbconn, "my_query", 'SELECT * FROM shops WHERE name = $1');

// Execute the prepared query.  Note that it is not necessary to escape
// the string "Joe's Widgets" in any way
$result = pg_execute($dbconn, "my_query", array("Joe's Widgets"));

// Execute the same prepared query, this time with a different parameter
$result = pg_execute($dbconn, "my_query", array("Clothes Clothes Clothes"));

?>
```

### See Also

- pg_prepare() - Submits a request to the server to create a prepared statement with the given parameters, and waits for completion
- pg_send_prepare() - Sends a request to create a prepared statement with the given parameters, without waiting for completion
- pg_query_params() - Submits a command to the server and waits for the result, with the ability to pass parameters separately from the SQL command text

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-execute.php
