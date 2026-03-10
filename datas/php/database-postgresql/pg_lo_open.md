# pg_lo_open

Source: https://devdocs.io/php/function.pg-lo-open

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_lo_open — Open a large object

### Description

```
pg_lo_open(PgSql\Connection $connection, int $oid, string $mode): PgSql\Lob|false
```

pg_lo_open() opens a large object in the database and returns an PgSql\Lob instance so that it can be manipulated.

Do not close the database connection before closing the PgSql\Lob instance.

To use the large object interface, it is necessary to enclose it within a transaction block.

Note:

This function used to be called pg_loopen().

### Parameters

An PgSql\Connection instance. When connection is unspecified, the default connection is used. The default connection is the last connection made by pg_connect() or pg_pconnect().

As of PHP 8.1.0, using the default connection is deprecated.

The OID of the large object in the database.

Can be either "r" for read-only, "w" for write only or "rw" for read and write.

### Return Values

An PgSql\Lob instance, or false on failure.

### Changelog

### Examples

Example #1 pg_lo_open() example

```
<?php
   $database = pg_connect("dbname=jacarta");
   pg_query($database, "begin");
   $oid = pg_lo_create($database);
   echo "$oid\n";
   $handle = pg_lo_open($database, $oid, "w");
   echo "$handle\n";
   pg_lo_write($handle, "large object data");
   pg_lo_close($handle);
   pg_query($database, "commit");
?>
```

### See Also

- pg_lo_close() - Close a large object
- pg_lo_create() - Create a large object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-lo-open.php
