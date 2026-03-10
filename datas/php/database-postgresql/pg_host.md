# pg_host

Source: https://devdocs.io/php/function.pg-host

(PHP 4, PHP 5, PHP 7, PHP 8)

pg_host — Returns the host name associated with the connection

### Description

```
pg_host(?PgSql\Connection $connection = null): string
```

pg_host() returns the host name of the given PostgreSQL connection instance is connected to.

### Parameters

An PgSql\Connection instance. When connection is null, the default connection is used. The default connection is the last connection made by pg_connect() or pg_pconnect().

As of PHP 8.1.0, using the default connection is deprecated.

### Return Values

A string containing the name of the host the connection is to, or an empty string on error.

### Changelog

### Examples

Example #1 pg_host() example

```
<?php
$pgsql_conn = pg_connect("dbname=mark host=localhost");

if ($pgsql_conn) {
   print "Successfully connected to: " . pg_host($pgsql_conn) . "<br/>\n";
} else {
   print pg_last_error($pgsql_conn);
   exit;
}
?>
```

### See Also

- pg_connect() - Open a PostgreSQL connection
- pg_pconnect() - Open a persistent PostgreSQL connection

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-host.php
