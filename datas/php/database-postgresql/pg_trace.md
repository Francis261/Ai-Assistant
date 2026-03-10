# pg_trace

Source: https://devdocs.io/php/function.pg-trace

(PHP 4 >= 4.0.1, PHP 5, PHP 7, PHP 8)

pg_trace — Enable tracing a PostgreSQL connection

### Description

```
pg_trace(
 string $filename,
 string $mode = "w",
 ?PgSql\Connection $connection = null,
 int $trace_mode = 0
): bool
```

pg_trace() enables tracing of the PostgreSQL frontend/backend communication to a file. To fully understand the results, one needs to be familiar with the internals of PostgreSQL communication protocol.

For those who are not, it can still be useful for tracing errors in queries sent to the server, you could do for example grep '^To backend' trace.log and see what queries actually were sent to the PostgreSQL server. For more information, refer to the » PostgreSQL Documentation.

### Parameters

The full path and file name of the file in which to write the trace log. Same as in fopen().

An optional file access mode, same as for fopen().

An PgSql\Connection instance. When connection is null, the default connection is used. The default connection is the last connection made by pg_connect() or pg_pconnect().

As of PHP 8.1.0, using the default connection is deprecated.

An optional trace mode with the following constants PGSQL_TRACE_SUPPRESS_TIMESTAMPS and PGSQL_TRACE_REGRESS_MODE

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 pg_trace() example

```
<?php
$pgsql_conn = pg_connect("dbname=mark host=localhost");

if ($pgsql_conn) {
   pg_trace('/tmp/trace.log', 'w', $pgsql_conn);
   pg_query("SELECT 1");
   pg_untrace($pgsql_conn);
   // Now /tmp/trace.log will contain backend communication
} else {
   print pg_last_error($pgsql_conn);
   exit;
}
?>
```

### See Also

- fopen() - Opens file or URL
- pg_untrace() - Disable tracing of a PostgreSQL connection

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-trace.php
