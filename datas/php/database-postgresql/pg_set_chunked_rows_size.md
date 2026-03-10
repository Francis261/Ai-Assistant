# pg_set_chunked_rows_size

Source: https://devdocs.io/php/function.pg-set-chunked-rows-size

(PHP 8 >= 8.4.0)

pg_set_chunked_rows_size — Set the query results to be retrieved in chunk mode

### Description

```
pg_set_chunked_rows_size(PgSql\Connection $connection, int $size): bool
```

Set the query results to be retrieved in chunk mode. The query results returned afterward will be divided into multiple chunks, each containing up to size rows. This function must be called before retrieving results with pg_get_result(). This function is only available when libpq is version 17 or higher.

### Parameters

An PgSql\Connection instance.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

If size is less than 1, a ValueError will be thrown.

### Examples

Example #1 pg_result_memory_size() example

```
<?php

$conn = pg_connect($conn_str);

for ($i = 0; $i < 10; $i ++) {
  pg_query($conn, "INSERT INTO users DEFAULT VALUES");
}

pg_send_query($conn, "SELECT * FROM users");
pg_set_chunked_rows_size($conn, 1);

$result = pg_get_result($conn);
var_dump(pg_num_rows($result));

// No effect after the result is retrieved
var_dump(pg_set_chunked_rows_size($conn, 10));
```

The above example will output:

```
int(1)
bool(false)
```

### See Also

- pg_get_result() - Get asynchronous query result
- pg_result_status() - Get status of query result

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-set-chunked-rows-size.php
