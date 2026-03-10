# pg_consume_input

Source: https://devdocs.io/php/function.pg-consume-input

(PHP 5 >= 5.6.0, PHP 7, PHP 8)

pg_consume_input — Reads input on the connection

### Description

```
pg_consume_input(PgSql\Connection $connection): bool
```

pg_consume_input() consumes any input waiting to be read from the database server.

### Parameters

An PgSql\Connection instance.

### Return Values

true if no error occurred, or false if there was an error. Note that true does not necessarily indicate that input was waiting to be read.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-consume-input.php
