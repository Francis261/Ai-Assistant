# pg_fetch_object

Source: https://devdocs.io/php/function.pg-fetch-object

(PHP 4, PHP 5, PHP 7, PHP 8)

pg_fetch_object — Fetch a row as an object

### Description

```
pg_fetch_object(
 PgSql\Result $result,
 ?int $row = null,
 string $class = "stdClass",
 array $constructor_args = []
): object|false
```

pg_fetch_object() returns an object with properties that correspond to the fetched row's field names. It can optionally instantiate an object of a specific class, and pass parameters to that class's constructor.

Note: This function sets NULL fields to the PHP null value.

Speed-wise, the function is identical to pg_fetch_array(), and almost as fast as pg_fetch_row() (the difference is insignificant).

### Parameters

An PgSql\Result instance, returned by pg_query(), pg_query_params() or pg_execute()(among others).

Row number in result to fetch. Rows are numbered from 0 upwards. If omitted or null, the next row is fetched.

The name of the class to instantiate, set the properties of and return. If not specified, a stdClass object is returned.

An optional array of parameters to pass to the constructor for class objects.

### Return Values

An object with one attribute for each field name in the result. Database NULL values are returned as null.

false is returned if row exceeds the number of rows in the set, there are no more rows, or on any other error.

### Errors/Exceptions

A ValueError is thrown when the constructor_args is non-empty with the class not having constructor.

### Changelog

### Examples

Example #1 pg_fetch_object() example

```
<?php 

$database = "store";

$db_conn = pg_connect("host=localhost port=5432 dbname=$database");
if (!$db_conn) {
  echo "Failed connecting to postgres database $database\n";
  exit;
}

$qu = pg_query($db_conn, "SELECT * FROM books ORDER BY author");

while ($data = pg_fetch_object($qu)) {
  echo $data->author . " (";
  echo $data->year . "): ";
  echo $data->title . "<br />";
}

pg_free_result($qu);
pg_close($db_conn);

?>
```

### See Also

- pg_query() - Execute a query
- pg_fetch_array() - Fetch a row as an array
- pg_fetch_assoc() - Fetch a row as an associative array
- pg_fetch_row() - Get a row as an enumerated array
- pg_fetch_result() - Returns values from a result instance

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-fetch-object.php
