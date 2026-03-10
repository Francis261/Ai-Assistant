# pg_get_pid

Source: https://devdocs.io/php/function.pg-get-pid

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

pg_get_pid — Gets the backend's process ID

### Description

```
pg_get_pid(PgSql\Connection $connection): int
```

pg_get_pid() gets the backend's (database server process) PID. The PID is useful to determine whether or not a NOTIFY message received via pg_get_notify() is sent from another process or not.

### Parameters

An PgSql\Connection instance.

### Return Values

The backend database process ID.

### Changelog

### Examples

Example #1 PostgreSQL backend PID

```
<?php 
$conn = pg_pconnect("dbname=publisher");
if (!$conn) {
  echo "An error occurred.\n";
  exit;
}

// Backend process PID. Use PID with pg_get_notify()
$pid = pg_get_pid($conn);
?>
```

### See Also

- pg_get_notify() - Gets SQL NOTIFY message

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-get-pid.php
