# mysqli::execute_query

Source: https://devdocs.io/php/mysqli.execute-query

# mysqli_execute_query

(PHP 8 >= 8.2.0)

mysqli::execute_query -- mysqli_execute_query — Prepares, binds parameters, and executes SQL statement

### Description

Object-oriented style

```
public mysqli::execute_query(string $query, ?array $params = null): mysqli_result|bool
```

Procedural style

```
mysqli_execute_query(mysqli $mysql, string $query, ?array $params = null): mysqli_result|bool
```

Prepares the SQL query, binds parameters, and executes it. The mysqli::execute_query() method is a shortcut for mysqli::prepare(), mysqli_stmt::bind_param(), mysqli_stmt::execute(), and mysqli_stmt::get_result().

The statement template can contain zero or more question mark (?) parameter markers⁠—also called placeholders. The parameter values must be provided as an array using params parameter.

A prepared statement is created under the hood but it's never exposed outside of the function. It's impossible to access properties of the statement as one would do with the mysqli_stmt object. Due to this limitation, the status information is copied to the mysqli object and is available using its methods, e.g. mysqli_affected_rows() or mysqli_error().

Note:

In the case where a statement is passed to mysqli_execute_query() that is longer than max_allowed_packet of the server, the returned error codes are different depending on the operating system. The behavior is as follows:

- On Linux returns an error code of 1153. The error message means got a packet bigger than max_allowed_packet bytes.
- On Windows returns an error code 2006. This error message means server has gone away.

On Linux returns an error code of 1153. The error message means got a packet bigger than max_allowed_packet bytes.

On Windows returns an error code 2006. This error message means server has gone away.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

The query, as a string. It must consist of a single SQL statement.

The SQL statement may contain zero or more parameter markers represented by question mark (?) characters at the appropriate positions.

Note:

The markers are legal only in certain places in SQL statements. For example, they are permitted in the VALUES() list of an INSERT statement (to specify column values for a row), or in a comparison with a column in a WHERE clause to specify a comparison value. However, they are not permitted for identifiers (such as table or column names).

An optional list array with as many elements as there are bound parameters in the SQL statement being executed. Each value is treated as a string.

### Return Values

Returns false on failure. For successful queries which produce a result set, such as SELECT, SHOW, DESCRIBE or EXPLAIN, returns a mysqli_result object. For other successful queries, returns true.

### Examples

Example #1 mysqli::execute_query() example

Object-oriented style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli('localhost', 'my_user', 'my_password', 'world');

$query = 'SELECT Name, District FROM City WHERE CountryCode=? ORDER BY Name LIMIT 5';
$result = $mysqli->execute_query($query, ['DEU']);
foreach ($result as $row) {
    printf("%s (%s)\n", $row["Name"], $row["District"]);
}
```

Procedural style

```
<?php

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$link = mysqli_connect("localhost", "my_user", "my_password", "world");

$query = 'SELECT Name, District FROM City WHERE CountryCode=? ORDER BY Name LIMIT 5';
$result = mysqli_execute_query($link, $query, ['DEU']);
foreach ($result as $row) {
    printf("%s (%s)\n", $row["Name"], $row["District"]);
}
```

The above examples will output something similar to:

```
Aachen (Nordrhein-Westfalen)
Augsburg (Baijeri)
Bergisch Gladbach (Nordrhein-Westfalen)
Berlin (Berliini)
Bielefeld (Nordrhein-Westfalen)
```

### See Also

- mysqli_prepare() - Prepares an SQL statement for execution
- mysqli_stmt_execute() - Executes a prepared statement
- mysqli_stmt_bind_param() - Binds variables to a prepared statement as parameters
- mysqli_stmt_get_result() - Gets a result set from a prepared statement as a mysqli_result object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.execute-query.php
