# pg_port

Source: https://devdocs.io/php/function.pg-port

(PHP 4, PHP 5, PHP 7, PHP 8)

pg_port — Return the port number associated with the connection

### Description

```
pg_port(?PgSql\Connection $connection = null): string
```

pg_port() returns the port number that the given PostgreSQL connection instance is connected to.

### Parameters

An PgSql\Connection instance. When connection is null, the default connection is used. The default connection is the last connection made by pg_connect() or pg_pconnect().

As of PHP 8.1.0, using the default connection is deprecated.

### Return Values

A string containing the port number of the database server the connection is to, or empty string on error.

### Changelog

### Examples

Example #1 pg_port() example

```
<?php
$pgsql_conn = pg_connect("dbname=mark host=localhost");

if ($pgsql_conn) {
   print "Successfully connected to port: " . pg_port($pgsql_conn) . "<br/>\n";
} else {
   print pg_last_error($pgsql_conn);
   exit;
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-port.php
