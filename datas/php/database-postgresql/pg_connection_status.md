# pg_connection_status

Source: https://devdocs.io/php/function.pg-connection-status

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_connection_status — Get connection status

### Description

```
pg_connection_status(PgSql\Connection $connection): int
```

pg_connection_status() returns the status of the specified connection.

### Parameters

An PgSql\Connection instance.

### Return Values

PGSQL_CONNECTION_OK or PGSQL_CONNECTION_BAD.

### Changelog

### Examples

Example #1 pg_connection_status() example

```
<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");
  $stat = pg_connection_status($dbconn);
  if ($stat === PGSQL_CONNECTION_OK) {
      echo 'Connection status ok';
  } else {
      echo 'Connection status bad';
  }    
?>
```

### See Also

- pg_connection_busy() - Get connection is busy or not

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-connection-status.php
