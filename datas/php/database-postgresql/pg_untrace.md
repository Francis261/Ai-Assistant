# pg_untrace

Source: https://devdocs.io/php/function.pg-untrace

(PHP 4 >= 4.0.1, PHP 5, PHP 7, PHP 8)

pg_untrace — Disable tracing of a PostgreSQL connection

### Description

```
pg_untrace(?PgSql\Connection $connection = null): true
```

Stop tracing started by pg_trace().

### Parameters

An PgSql\Connection instance. When connection is null, the default connection is used. The default connection is the last connection made by pg_connect() or pg_pconnect().

As of PHP 8.1.0, using the default connection is deprecated.

### Return Values

Always returns true.

### Changelog

### Examples

Example #1 pg_untrace() example

```
<?php
$pgsql_conn = pg_connect("dbname=mark host=localhost");

if ($pgsql_conn) {
   pg_trace('/tmp/trace.log', 'w', $pgsql_conn);
   pg_query("SELECT 1");
   pg_untrace($pgsql_conn);
   // Now tracing of backend communication is disabled
} else {
   print pg_last_error($pgsql_conn);
   exit;
}
?>
```

### See Also

- pg_trace() - Enable tracing a PostgreSQL connection

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-untrace.php
