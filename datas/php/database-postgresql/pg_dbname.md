# pg_dbname

Source: https://devdocs.io/php/function.pg-dbname

(PHP 4, PHP 5, PHP 7, PHP 8)

pg_dbname — Get the database name

### Description

```
pg_dbname(?PgSql\Connection $connection = null): string
```

pg_dbname() returns the name of the database that the given PostgreSQL connection instance.

### Parameters

An PgSql\Connection instance. When connection is null, the default connection is used. The default connection is the last connection made by pg_connect() or pg_pconnect().

As of PHP 8.1.0, using the default connection is deprecated.

### Return Values

A string containing the name of the database the connection is to.

### Changelog

### Examples

Example #1 pg_dbname() example

```
<?php
  error_reporting(E_ALL);

  pg_connect("host=localhost port=5432 dbname=mary");
  echo pg_dbname(); // mary
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-dbname.php
