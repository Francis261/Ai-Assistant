# pg_connection_busy

Source: https://devdocs.io/php/function.pg-connection-busy

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_connection_busy — Get connection is busy or not

### Description

```
pg_connection_busy(PgSql\Connection $connection): bool
```

pg_connection_busy() determines whether or not a connection is busy. If it is busy, a previous query is still executing. If pg_get_result() is used on the connection, it will be blocked.

### Parameters

An PgSql\Connection instance.

### Return Values

Returns true if the connection is busy, false otherwise.

### Changelog

### Examples

Example #1 pg_connection_busy() example

```
<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");
  $bs = pg_connection_busy($dbconn);
  if ($bs) {
      echo 'connection is busy';
  } else {
     echo 'connection is not busy';
  }
?>
```

### See Also

- pg_connection_status() - Get connection status
- pg_get_result() - Get asynchronous query result

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-connection-busy.php
