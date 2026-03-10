# pg_last_error

Source: https://devdocs.io/php/function.pg-last-error

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_last_error — Get the last error message string of a connection

### Description

```
pg_last_error(?PgSql\Connection $connection = null): string
```

pg_last_error() returns the last error message for a given connection.

Error messages may be overwritten by internal PostgreSQL (libpq) function calls. It may not return an appropriate error message if multiple errors occur inside a PostgreSQL module function.

Use pg_result_error(), pg_result_error_field(), pg_result_status() and pg_connection_status() for better error handling.

Note:

This function used to be called pg_errormessage().

### Parameters

An PgSql\Connection instance. When connection is null, the default connection is used. The default connection is the last connection made by pg_connect() or pg_pconnect().

As of PHP 8.1.0, using the default connection is deprecated.

### Return Values

A string containing the last error message on the given connection.

### Changelog

### Examples

Example #1 pg_last_error() example

```
<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");

  // Query that fails
  $res = pg_query($dbconn, "select * from doesnotexist");
  
  echo pg_last_error($dbconn);
?>
```

### See Also

- pg_result_error() - Get error message associated with result
- pg_result_error_field() - Returns an individual field of an error report

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-last-error.php
