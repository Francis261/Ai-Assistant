# pg_connection_reset

Source: https://devdocs.io/php/function.pg-connection-reset

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_connection_reset — Reset connection (reconnect)

### Description

```
pg_connection_reset(PgSql\Connection $connection): bool
```

pg_connection_reset() resets the connection. It is useful for error recovery.

### Parameters

An PgSql\Connection instance.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 pg_connection_reset() example

```
<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");
  $dbconn2 = pg_connection_reset($dbconn);
  if ($dbconn2) {
      echo "reset successful\n";
  } else {
      echo "reset failed\n";
  }
?>
```

### See Also

- pg_connect() - Open a PostgreSQL connection
- pg_pconnect() - Open a persistent PostgreSQL connection
- pg_connection_status() - Get connection status

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-connection-reset.php
