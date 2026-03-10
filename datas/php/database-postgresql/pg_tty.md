# pg_tty

Source: https://devdocs.io/php/function.pg-tty

(PHP 4, PHP 5, PHP 7, PHP 8)

pg_tty — Return the TTY name associated with the connection

### Description

```
pg_tty(?PgSql\Connection $connection = null): string
```

pg_tty() returns the TTY name that server side debugging output is sent to on the given PostgreSQL connection instance.

Note:

pg_tty() is obsolete, since the server no longer pays attention to the TTY setting, but the function remains for backwards compatibility.

### Parameters

An PgSql\Connection instance. When connection is null, the default connection is used. The default connection is the last connection made by pg_connect() or pg_pconnect().

As of PHP 8.1.0, using the default connection is deprecated.

### Return Values

A string containing the debug TTY of the connection.

### Changelog

### Examples

Example #1 pg_tty() example

```
<?php
$pgsql_conn = pg_connect("dbname=mark host=localhost");

if ($pgsql_conn) {
   print "Server debug TTY is: " . pg_tty($pgsql_conn) . "<br/>\n";
} else {
   print pg_last_error($pgsql_conn);
   exit;
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-tty.php
