# pg_prepare

Source: https://devdocs.io/php/function.pg-prepare

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

pg_prepare — Submits a request to the server to create a prepared statement with the given parameters, and waits for completion

### Description

```
pg_prepare(PgSql\Connection $connection = ?, string $stmtname, string $query): PgSql\Result|false
```

pg_prepare() creates a prepared statement for later execution with pg_execute() or pg_send_execute(). This feature allows commands that will be used repeatedly to be parsed and planned just once, rather than each time they are executed. pg_prepare() is supported only against PostgreSQL 7.4 or higher connections; it will fail when using earlier versions.

The function creates a prepared statement named stmtname from the query string, which must contain a single SQL command. stmtname may be "" to create an unnamed statement, in which case any pre-existing unnamed statement is automatically replaced; otherwise it is an error if the statement name is already defined in the current session. If any parameters are used, they are referred to in the query as $1, $2, etc.

Prepared statements for use with pg_prepare() can also be created by executing SQL PREPARE statements. (But pg_prepare() is more flexible since it does not require parameter types to be pre-specified.) Also, although there is no PHP function for deleting a prepared statement, the SQL DEALLOCATE statement can be used for that purpose.

### Parameters

An PgSql\Connection instance. When connection is unspecified, the default connection is used. The default connection is the last connection made by pg_connect() or pg_pconnect().

As of PHP 8.1.0, using the default connection is deprecated.

The name to give the prepared statement. Must be unique per-connection. If "" is specified, then an unnamed statement is created, overwriting any previously defined unnamed statement.

The parameterized SQL statement. Must contain only a single statement (multiple statements separated by semi-colons are not allowed). If any parameters are used, they are referred to as $1, $2, etc.

### Return Values

An PgSql\Result instance on success, or false on failure.

### Changelog

### Examples

Example #1 Using pg_prepare()

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

- pg_execute() - Sends a request to execute a prepared statement with given parameters, and waits for the result
- pg_send_execute() - Sends a request to execute a prepared statement with given parameters, without waiting for the result(s)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-prepare.php
