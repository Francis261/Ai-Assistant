# pg_send_query_params

Source: https://devdocs.io/php/function.pg-send-query-params

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

pg_send_query_params — Submits a command and separate parameters to the server without waiting for the result(s)

### Description

```
pg_send_query_params(PgSql\Connection $connection, string $query, array $params): int|bool
```

Submits a command and separate parameters to the server without waiting for the result(s).

This is equivalent to pg_send_query() except that query parameters can be specified separately from the query string. The function's parameters are handled identically to pg_query_params(). Like pg_query_params(), it will not work on pre-7.4 PostgreSQL connections, and it allows only one command in the query string.

### Parameters

An PgSql\Connection instance.

The parameterized SQL statement. Must contain only a single statement. (multiple statements separated by semi-colons are not allowed.) If any parameters are used, they are referred to as $1, $2, etc.

An array of parameter values to substitute for the $1, $2, etc. placeholders in the original prepared query string. The number of elements in the array must match the number of placeholders.

### Return Values

Returns true on success, false or 0 on failure. Use pg_get_result() to determine the query result.

### Changelog

### Examples

Example #1 Using pg_send_query_params()

```
<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");

  // Using parameters.  Note that it is not necessary to quote or escape
  // the parameter.
  pg_send_query_params($dbconn, 'select count(*) from authors where city = $1', array('Perth'));

  // Compare against basic pg_send_query usage
  $str = pg_escape_string('Perth');
  pg_send_query($dbconn, "select count(*) from authors where city = '{$str}'");
?>
```

### See Also

- pg_send_query() - Sends asynchronous query

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-send-query-params.php
