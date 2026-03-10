# pg_socket

Source: https://devdocs.io/php/function.pg-socket

(PHP 5 >= 5.6.0, PHP 7, PHP 8)

pg_socket — Get a read only handle to the socket underlying a PostgreSQL connection

### Description

```
pg_socket(PgSql\Connection $connection): resource|false
```

pg_socket() returns a read only resource corresponding to the socket underlying the given PostgreSQL connection.

This function is currently not documented; only its argument list is available.

### Parameters

An PgSql\Connection instance.

### Return Values

A socket resource on success or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-socket.php
