# pg_set_error_context_visibility

Source: https://devdocs.io/php/function.pg-set-error-context-visibility

(PHP 8 >= 8.3.0)

pg_set_error_context_visibility — Determines the visibility of the context's error messages returned by pg_last_error() and pg_result_error()

### Description

```
pg_set_error_context_visibility(PgSql\Connection $connection, int $visibility): int
```

Determines the visibility of the context's error messages returned by pg_last_error() and pg_result_error()

### Parameters

An PgSql\Connection instance.

The required visibility: PGSQL_SHOW_CONTEXT_NEVER, PGSQL_SHOW_CONTEXT_ERRORS or PGSQL_SHOW_CONTEXT_ALWAYS.

### Return Values

The previous visibility level: PGSQL_SHOW_CONTEXT_NEVER, PGSQL_SHOW_CONTEXT_ERRORS or PGSQL_SHOW_CONTEXT_ALWAYS.

### Examples

Example #1 pg_set_error_context_visibility() example

```
<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");

  if (!pg_connection_busy($dbconn)) {
      pg_send_query($dbconn, "select * from doesnotexist;");
  }

  pg_set_error_context_visibility($dbconn, PGSQL_SHOW_CONTEXT_ALWAYS);
  $res1 = pg_get_result($dbconn);
  echo pg_result_error($res1);
?>
```

### See Also

- pg_last_error() - Get the last error message string of a connection
- pg_result_error() - Get error message associated with result

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-set-error-context-visibility.php
