# pg_fetch_assoc

Source: https://devdocs.io/php/function.pg-fetch-assoc

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

pg_fetch_assoc — Fetch a row as an associative array

### Description

```
pg_fetch_assoc(PgSql\Result $result, ?int $row = null): array|false
```

pg_fetch_assoc() returns an associative array that corresponds to the fetched row (records).

pg_fetch_assoc() is equivalent to calling pg_fetch_array() with PGSQL_ASSOC as the optional third parameter. It only returns an associative array. If you need the numeric indices, use pg_fetch_row().

Note: This function sets NULL fields to the PHP null value.

pg_fetch_assoc() is NOT significantly slower than using pg_fetch_row(), and is significantly easier to use.

### Parameters

An PgSql\Result instance, returned by pg_query(), pg_query_params() or pg_execute()(among others).

Row number in result to fetch. Rows are numbered from 0 upwards. If omitted or null, the next row is fetched.

### Return Values

An array indexed associatively (by field name). Each value in the array is represented as a string. Database NULL values are returned as null.

false is returned if row exceeds the number of rows in the set, there are no more rows, or on any other error.

### Changelog

### Examples

Example #1 pg_fetch_assoc() example

```
<?php 
$conn = pg_connect("dbname=publisher");
if (!$conn) {
  echo "An error occurred.\n";
  exit;
}

$result = pg_query($conn, "SELECT id, author, email FROM authors");
if (!$result) {
  echo "An error occurred.\n";
  exit;
}

while ($row = pg_fetch_assoc($result)) {
  echo $row['id'];
  echo $row['author'];
  echo $row['email'];
}
?>
```

### See Also

- pg_fetch_row() - Get a row as an enumerated array
- pg_fetch_array() - Fetch a row as an array
- pg_fetch_object() - Fetch a row as an object
- pg_fetch_result() - Returns values from a result instance

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-fetch-assoc.php
