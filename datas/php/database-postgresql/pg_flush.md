# pg_flush

Source: https://devdocs.io/php/function.pg-flush

(PHP 5 >= 5.6.0, PHP 7, PHP 8)

pg_flush — Flush outbound query data on the connection

### Description

```
pg_flush(PgSql\Connection $connection): int|bool
```

pg_flush() flushes any outbound query data waiting to be sent on the connection.

### Parameters

An PgSql\Connection instance.

### Return Values

Returns true if the flush was successful or no data was waiting to be flushed, 0 if part of the pending data was flushed but more remains or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-flush.php
