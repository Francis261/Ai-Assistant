# pg_fetch_all_columns

Source: https://devdocs.io/php/function.pg-fetch-all-columns

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

pg_fetch_all_columns — Fetches all rows in a particular result column as an array

### Description

```
pg_fetch_all_columns(PgSql\Result $result, int $field = 0): array
```

pg_fetch_all_columns() returns an array that contains all rows (records) in a particular column of the PgSql\Result instance.

Note: This function sets NULL fields to the PHP null value.

### Parameters

An PgSql\Result instance, returned by pg_query(), pg_query_params() or pg_execute()(among others).

Column number. Defaults to the first column if not specified.

### Return Values

An array with all values in the result column.

### Changelog

### Examples

Example #1 pg_fetch_all_columns() example

```
<?php 
$conn = pg_pconnect("dbname=publisher");
if (!$conn) {
  echo "An error occurred.\n";
  exit;
}

$result = pg_query($conn, "SELECT title, name, address FROM authors");
if (!$result) {
  echo "An error occurred.\n";
  exit;
}

// Get an array of all author names
$arr = pg_fetch_all_columns($result, 1);

var_dump($arr);

?>
```

### See Also

- pg_fetch_all() - Fetches all rows from a result as an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-fetch-all-columns.php
