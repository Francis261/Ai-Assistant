# pg_fetch_result

Source: https://devdocs.io/php/function.pg-fetch-result

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_fetch_result — Returns values from a result instance

### Description

```
pg_fetch_result(PgSql\Result $result, string|false|null $row, mixed $field): string|false|null
```

```
pg_fetch_result(PgSql\Result $result, mixed $field): string|false|null
```

pg_fetch_result() returns the value of a particular row and field (column) in an PgSql\Result instance.

Note:

This function used to be called pg_result().

### Parameters

An PgSql\Result instance, returned by pg_query(), pg_query_params() or pg_execute()(among others).

Row number in result to fetch. Rows are numbered from 0 upwards. If omitted, next row is fetched.

A string representing the name of the field (column) to fetch, otherwise an int representing the field number to fetch. Fields are numbered from 0 upwards.

### Return Values

Boolean is returned as "t" or "f". All other types, including arrays are returned as strings formatted in the same default PostgreSQL manner that you would see in the psql program. Database NULL values are returned as null.

false is returned if row exceeds the number of rows in the set, or on any other error.

### Changelog

### Examples

Example #1 pg_fetch_result() example

```
<?php
$db = pg_connect("dbname=users user=me");

$res = pg_query($db, "SELECT 1 UNION ALL SELECT 2");

$val = pg_fetch_result($res, 1, 0);

echo "First field in the second row is: ", $val, "\n";
?>
```

The above example will output:

```
First field in the second row is: 2
```

### See Also

- pg_query() - Execute a query
- pg_fetch_array() - Fetch a row as an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-fetch-result.php
