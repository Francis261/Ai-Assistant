# pg_result_error_field

Source: https://devdocs.io/php/function.pg-result-error-field

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

pg_result_error_field — Returns an individual field of an error report

### Description

```
pg_result_error_field(PgSql\Result $result, int $field_code): string|false|null
```

pg_result_error_field() returns one of the detailed error message fields associated with result instance. It is only available against a PostgreSQL 7.4 or above server. The error field is specified by the field_code.

Because pg_query() and pg_query_params() return false if the query fails, you must use pg_send_query() and pg_get_result() to get the result handle.

If you need to get additional error information from failed pg_query() queries, use pg_set_error_verbosity() and pg_last_error() and then parse the result.

### Parameters

An PgSql\Result instance, returned by pg_query(), pg_query_params() or pg_execute()(among others).

Possible field_code values are: PGSQL_DIAG_SEVERITY, PGSQL_DIAG_SQLSTATE, PGSQL_DIAG_MESSAGE_PRIMARY, PGSQL_DIAG_MESSAGE_DETAIL, PGSQL_DIAG_MESSAGE_HINT, PGSQL_DIAG_STATEMENT_POSITION, PGSQL_DIAG_INTERNAL_POSITION (PostgreSQL 8.0+ only), PGSQL_DIAG_INTERNAL_QUERY (PostgreSQL 8.0+ only), PGSQL_DIAG_CONTEXT, PGSQL_DIAG_SOURCE_FILE, PGSQL_DIAG_SOURCE_LINE or PGSQL_DIAG_SOURCE_FUNCTION.

### Return Values

A string containing the contents of the error field, null if the field does not exist or false on failure.

### Changelog

### Examples

Example #1 pg_result_error_field() example

```
<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");

  if (!pg_connection_busy($dbconn)) {
      pg_send_query($dbconn, "select * from doesnotexist;");
  }
  
  $res1 = pg_get_result($dbconn);
  echo pg_result_error_field($res1, PGSQL_DIAG_SQLSTATE);
?>
```

### See Also

- pg_result_error() - Get error message associated with result

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-result-error-field.php
