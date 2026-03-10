# pg_num_fields

Source: https://devdocs.io/php/function.pg-num-fields

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_num_fields — Returns the number of fields in a result

### Description

```
pg_num_fields(PgSql\Result $result): int
```

pg_num_fields() returns the number of fields (columns) in the PgSql\Result instance.

Note:

This function used to be called pg_numfields().

### Parameters

An PgSql\Result instance, returned by pg_query(), pg_query_params() or pg_execute()(among others).

### Return Values

The number of fields (columns) in the result. On error, -1 is returned.

### Changelog

### Examples

Example #1 pg_num_fields() example

```
<?php
$result = pg_query($conn, "SELECT 1, 2");

$num = pg_num_fields($result);

echo $num . " field(s) returned.\n";
?>
```

The above example will output:

```
2 field(s) returned.
```

### See Also

- pg_num_rows() - Returns the number of rows in a result
- pg_affected_rows() - Returns number of affected records (tuples)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-num-fields.php
