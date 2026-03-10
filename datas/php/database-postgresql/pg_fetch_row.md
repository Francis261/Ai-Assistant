# pg_fetch_row

Source: https://devdocs.io/php/function.pg-fetch-row

(PHP 4, PHP 5, PHP 7, PHP 8)

pg_fetch_row — Get a row as an enumerated array

### Description

```
pg_fetch_row(PgSql\Result $result, ?int $row = null, int $mode = PGSQL_NUM): array|false
```

pg_fetch_row() fetches one row of data from the result associated with the specified result instance.

Note: This function sets NULL fields to the PHP null value.

### Parameters

An PgSql\Result instance, returned by pg_query(), pg_query_params() or pg_execute()(among others).

Row number in result to fetch. Rows are numbered from 0 upwards. If omitted or null, the next row is fetched.

An optional parameter that controls how the returned array is indexed. mode is a constant and can take the following values: PGSQL_ASSOC, PGSQL_NUM and PGSQL_BOTH. Using PGSQL_NUM, the function will return an array with numerical indices, using PGSQL_ASSOC it will return only associative indices while PGSQL_BOTH will return both numerical and associative indices.

### Return Values

An array, indexed from 0 upwards, with each value represented as a string. Database NULL values are returned as null.

false is returned if row exceeds the number of rows in the set, there are no more rows, or on any other error.

### Changelog

### Examples

Example #1 pg_fetch_row() example

```
<?php

$conn = pg_pconnect("dbname=publisher");
if (!$conn) {
  echo "An error occurred.\n";
  exit;
}

$result = pg_query($conn, "SELECT author, email FROM authors");
if (!$result) {
  echo "An error occurred.\n";
  exit;
}

while ($row = pg_fetch_row($result)) {
  echo "Author: $row[0]  E-mail: $row[1]";
  echo "<br />\n";
}
 
?>
```

### See Also

- pg_query() - Execute a query
- pg_fetch_array() - Fetch a row as an array
- pg_fetch_object() - Fetch a row as an object
- pg_fetch_result() - Returns values from a result instance

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-fetch-row.php
