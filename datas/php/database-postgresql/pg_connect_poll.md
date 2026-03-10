# pg_connect_poll

Source: https://devdocs.io/php/function.pg-connect-poll

(PHP 5 >= 5.6.0, PHP 7, PHP 8)

pg_connect_poll — Poll the status of an in-progress asynchronous PostgreSQL connection attempt

### Description

```
pg_connect_poll(PgSql\Connection $connection): int
```

pg_connect_poll() polls the status of a PostgreSQL connection created by calling pg_connect() with the PGSQL_CONNECT_ASYNC option.

### Parameters

An PgSql\Connection instance.

### Return Values

Returns PGSQL_POLLING_FAILED, PGSQL_POLLING_READING, PGSQL_POLLING_WRITING, PGSQL_POLLING_OK, or PGSQL_POLLING_ACTIVE.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-connect-poll.php
