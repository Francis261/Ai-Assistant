# pg_free_result

Source: https://devdocs.io/php/function.pg-free-result

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_free_result — Free result memory

### Description

```
pg_free_result(PgSql\Result $result): bool
```

pg_free_result() frees the memory and data associated with the specified PgSql\Result instance.

This function need only be called if memory consumption during script execution is a problem. Otherwise, all result memory will be automatically freed when the script ends.

Note:

This function used to be called pg_freeresult().

### Parameters

An PgSql\Result instance, returned by pg_query(), pg_query_params() or pg_execute()(among others).

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 pg_free_result() example

```
<?php
$db = pg_connect("dbname=users user=me");

$res = pg_query($db, "SELECT 1 UNION ALL SELECT 2");

$val = pg_fetch_result($res, 1, 0);

echo "First field in the second row is: ", $val, "\n";

pg_free_result($res);
?>
```

The above example will output:

```
First field in the second row is: 2
```

### See Also

- pg_query() - Execute a query
- pg_query_params() - Submits a command to the server and waits for the result, with the ability to pass parameters separately from the SQL command text
- pg_execute() - Sends a request to execute a prepared statement with given parameters, and waits for the result
- pg_result_memory_size() - Returns the amount of memory allocated for a query result

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-free-result.php
