# pg_result_memory_size

Source: https://devdocs.io/php/function.pg-result-memory-size

(PHP 8 >= 8.4.0)

pg_result_memory_size — Returns the amount of memory allocated for a query result

### Description

```
pg_result_memory_size(PgSql\Result $result): int
```

Returns the amount of memory, in bytes, allocated to the specified query result PgSql\Result instance. This value is the same amount that would be freed by pg_free_result().

### Parameters

An PgSql\Result instance, returned by pg_query(), pg_query_params() or pg_execute()(among others).

### Return Values

Returns the memory amount in bytes.

### Examples

Example #1 pg_result_memory_size() example

```
<?php
$db = pg_connect("dbname=users user=me");

$res = pg_query($db, 'SELECT 1');

$size = pg_result_memory_size($res);

var_dump($size);
?>
```

The above example will output something similar to:

```
int(3288)
```

### See Also

- pg_free_result() - Free result memory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-result-memory-size.php
