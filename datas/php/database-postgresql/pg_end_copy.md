# pg_end_copy

Source: https://devdocs.io/php/function.pg-end-copy

(PHP 4 >= 4.0.3, PHP 5, PHP 7, PHP 8)

pg_end_copy — Sync with PostgreSQL backend

### Description

```
pg_end_copy(?PgSql\Connection $connection = null): bool
```

pg_end_copy() syncs the PostgreSQL frontend (usually a web server process) with the PostgreSQL server after doing a copy operation performed by pg_put_line(). pg_end_copy() must be issued, otherwise the PostgreSQL server may get out of sync with the frontend and will report an error.

### Parameters

An PgSql\Connection instance. When connection is null, the default connection is used. The default connection is the last connection made by pg_connect() or pg_pconnect().

As of PHP 8.1.0, using the default connection is deprecated.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 pg_end_copy() example

```
<?php 
  $conn = pg_pconnect("dbname=foo");
  pg_query($conn, "create table bar (a int4, b char(16), d float8)");
  pg_query($conn, "copy bar from stdin");
  pg_put_line($conn, "3\thello world\t4.5\n");
  pg_put_line($conn, "4\tgoodbye world\t7.11\n");
  pg_put_line($conn, "\\.\n");
  pg_end_copy($conn);
?>
```

### See Also

- pg_put_line() - Send a NULL-terminated string to PostgreSQL backend

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-end-copy.php
