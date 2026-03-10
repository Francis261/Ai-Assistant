# pg_fetch_all

Source: https://devdocs.io/php/function.pg-fetch-all

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

pg_fetch_all — Fetches all rows from a result as an array

### Description

```
pg_fetch_all(PgSql\Result $result, int $mode = PGSQL_ASSOC): array
```

pg_fetch_all() returns an array that contains all rows (records) in the PgSql\Result instance.

Note: This function sets NULL fields to the PHP null value.

### Parameters

An PgSql\Result instance, returned by pg_query(), pg_query_params() or pg_execute()(among others).

An optional parameter that controls how the returned array is indexed. mode is a constant and can take the following values: PGSQL_ASSOC, PGSQL_NUM and PGSQL_BOTH. Using PGSQL_NUM, the function will return an array with numerical indices, using PGSQL_ASSOC it will return only associative indices while PGSQL_BOTH will return both numerical and associative indices.

### Return Values

An array with all rows in the result. Each row is an array of field values indexed by field name.

### Changelog

### Examples

Example #1 PostgreSQL fetch all

```
<?php 
$conn = pg_pconnect("dbname=publisher");
if (!$conn) {
    echo "An error occurred.\n";
    exit;
}

$result = pg_query($conn, "SELECT * FROM authors");
if (!$result) {
    echo "An error occurred.\n";
    exit;
}

$arr = pg_fetch_all($result);

print_r($arr);

?>
```

The above example will output something similar to:

```
Array
(
    [0] => Array
        (
            [id] => 1
            [name] => Fred
        )

    [1] => Array
        (
            [id] => 2
            [name] => Bob
        )

)
```

### See Also

- pg_fetch_row() - Get a row as an enumerated array
- pg_fetch_array() - Fetch a row as an array
- pg_fetch_object() - Fetch a row as an object
- pg_fetch_result() - Returns values from a result instance

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-fetch-all.php
