# pg_close

Source: https://devdocs.io/php/function.pg-close

(PHP 4, PHP 5, PHP 7, PHP 8)

pg_close — Closes a PostgreSQL connection

### Description

```
pg_close(?PgSql\Connection $connection = null): true
```

pg_close() closes the non-persistent connection to a PostgreSQL database associated with the given connection instance.

Note:

Using pg_close() is not usually necessary, as non-persistent open connections are automatically closed at the end of the script.

If there is open PgSql\Lob instance on the connection, do not close the connection before closing all PgSql\Lob instances.

### Parameters

An PgSql\Connection instance. When connection is null, the default connection is used. The default connection is the last connection made by pg_connect() or pg_pconnect().

As of PHP 8.1.0, using the default connection is deprecated.

### Return Values

Always returns true.

### Changelog

### Examples

Example #1 pg_close() example

```
<?php
$dbconn = pg_connect("host=localhost port=5432 dbname=mary")
   or die("Could not connect");
echo "Connected successfully";
pg_close($dbconn);
?>
```

The above example will output:

```
Connected successfully
```

### See Also

- pg_connect() - Open a PostgreSQL connection

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-close.php
