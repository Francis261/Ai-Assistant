# pg_parameter_status

Source: https://devdocs.io/php/function.pg-parameter-status

(PHP 5, PHP 7, PHP 8)

pg_parameter_status — Looks up a current parameter setting of the server

### Description

```
pg_parameter_status(PgSql\Connection $connection = ?, string $param_name): string
```

Looks up a current parameter setting of the server.

Certain parameter values are reported by the server automatically at connection startup or whenever their values change. pg_parameter_status() can be used to interrogate these settings. It returns the current value of a parameter if known, or false if the parameter is not known.

Parameters reported as of PostgreSQL 8.0 include server_version, server_encoding, client_encoding, is_superuser, session_authorization, DateStyle, TimeZone, and integer_datetimes. (server_encoding, TimeZone, and integer_datetimes were not reported by releases before 8.0.) Note that server_version, server_encoding and integer_datetimes cannot change after PostgreSQL startup.

PostgreSQL 7.3 or lower servers do not report parameter settings, pg_parameter_status() includes logic to obtain values for server_version and client_encoding anyway. Applications are encouraged to use pg_parameter_status() rather than ad hoc code to determine these values.

On a pre-7.4 PostgreSQL server, changing client_encoding via SET after connection startup will not be reflected by pg_parameter_status().

### Parameters

An PgSql\Connection instance. When connection is unspecified, the default connection is used. The default connection is the last connection made by pg_connect() or pg_pconnect().

As of PHP 8.1.0, using the default connection is deprecated.

Possible param_name values include server_version, server_encoding, client_encoding, is_superuser, session_authorization, DateStyle, TimeZone, and integer_datetimes. Note that this value is case-sensitive.

### Return Values

A string containing the value of the parameter, false on failure or invalid param_name.

### Changelog

### Examples

Example #1 pg_parameter_status() example

```
<?php
  $dbconn = pg_connect("dbname=publisher") or die("Could not connect");

  echo "Server encoding: ", pg_parameter_status($dbconn, "server_encoding");
?>
```

The above example will output:

```
Server encoding: SQL_ASCII
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-parameter-status.php
