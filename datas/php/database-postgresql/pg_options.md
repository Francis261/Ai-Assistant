# pg_options

Source: https://devdocs.io/php/function.pg-options

(PHP 4, PHP 5, PHP 7, PHP 8)

pg_options — Get the options associated with the connection

### Description

```
pg_options(?PgSql\Connection $connection = null): string
```

pg_options() will return a string containing the options specified on the given PostgreSQL connection instance.

### Parameters

An PgSql\Connection instance. When connection is null, the default connection is used. The default connection is the last connection made by pg_connect() or pg_pconnect().

As of PHP 8.1.0, using the default connection is deprecated.

### Return Values

A string containing the connection options.

### Changelog

### Examples

Example #1 pg_options() example

```
<?php
   $pgsql_conn = pg_connect("dbname=mark host=localhost");
   echo pg_options($pgsql_conn);
?>
```

### See Also

- pg_connect() - Open a PostgreSQL connection

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-options.php
