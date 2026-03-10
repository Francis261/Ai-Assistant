# pg_version

Source: https://devdocs.io/php/function.pg-version

(PHP 5, PHP 7, PHP 8)

pg_version — Returns an array with client, protocol and server version (when available)

### Description

```
pg_version(?PgSql\Connection $connection = null): array
```

pg_version() returns an array with the client, protocol and server version. Protocol and server versions are only available if PHP was compiled with PostgreSQL 7.4 or later.

For more detailed server information, use pg_parameter_status().

### Parameters

An PgSql\Connection instance. When connection is null, the default connection is used. The default connection is the last connection made by pg_connect() or pg_pconnect().

As of PHP 8.1.0, using the default connection is deprecated.

### Return Values

Returns an array with client, protocol and server keys and values (if available).

### Changelog

### Examples

Example #1 pg_version() example

```
<?php
  $dbconn = pg_connect("host=localhost port=5432 dbname=mary")
     or die("Could not connect");
     
  $v = pg_version($dbconn);
  
  echo $v['client'];
?>
```

The above example will output:

```
7.4
```

### See Also

- pg_parameter_status() - Looks up a current parameter setting of the server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-version.php
